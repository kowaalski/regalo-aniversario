# Siete años, Carmen

Un regalo privado de aniversario. Next.js, sin base de datos, sin servicios
externos ni cuentas: se instala y arranca en local con dos comandos.

## Arrancarlo

```bash
npm install
npm run dev    # http://localhost:3000
```

Usuario: `carmen` · Contraseña: `ziskitos` (están fijas en
[src/lib/auth.ts](src/lib/auth.ts)).

## Qué editar para personalizarlo

Todo el contenido vive directamente en el código, no en una base de datos:
así no depende de ningún fichero que se pueda perder o quedarse sin subir.

| Quiero cambiar... | Fichero |
| --- | --- |
| La fecha de inicio del contador | [config.ts](config.ts) → `START_DATE` |
| El nombre que aparece en la portada | [config.ts](config.ts) → `HER_NAME` |
| La fecha en que se abre la carta sellada | [config.ts](config.ts) → `LETTER_UNLOCK_DATE` |
| El texto de bienvenida de la portada | [src/app/(site)/page.tsx](<src/app/(site)/page.tsx>) (busca los `TODO`) |
| La frase destacada de la portada (`{{FRASE_ELEGIDA}}`) | mismo fichero |
| Los 7 hitos de la línea del tiempo | [src/lib/data.ts](src/lib/data.ts) → `MILESTONES` |
| Las fotos de la línea del tiempo | sustituye los ficheros en [public/timeline/](public/timeline/) (mismo nombre, o cambia la ruta `photo` en `MILESTONES`) |
| Las 7 razones | [src/lib/data.ts](src/lib/data.ts) → `REASONS` |
| Los cupones canjeables | [src/lib/data.ts](src/lib/data.ts) → `COUPONS_SEED` |
| Las canciones de Dellafuente y sus notas | [src/lib/data.ts](src/lib/data.ts) → `SONGS` |
| Las preguntas del quiz | [src/lib/data.ts](src/lib/data.ts) → `QUIZ_QUESTIONS` |
| La carta larga del sobre sellado | [src/content/letter.ts](src/content/letter.ts) |

Después de tocar `src/lib/data.ts`, basta con guardar: en desarrollo
(`npm run dev`) se recarga solo.

### Fotos de la línea del tiempo

Ahora mismo hay 7 imágenes de ejemplo (SVG) en `public/timeline/`, una por
año. Para poner las tuyas, sustituye cada fichero por una foto real (jpg o
png) y actualiza la ruta correspondiente en `MILESTONES` en
`src/lib/data.ts` (por ejemplo `"/timeline/2019.jpg"`).

### Canciones de Dellafuente

En `src/lib/data.ts`, cada canción tiene un `spotify_track_id` a `null` con
un comentario `TODO`. Para activarla:

1. Abre la canción en Spotify y pulsa "Compartir" → "Copiar enlace a la
   canción".
2. El enlace tiene la forma `https://open.spotify.com/track/XXXXXXXXXXXX`.
   Copia solo el código `XXXXXXXXXXXX`.
3. Pégalo como `spotify_track_id` en `SONGS`.

El reproductor nunca se pone en marcha solo: solo suena si ella pulsa play.

## Cómo se guardan los cupones canjeados

No hay base de datos ni fichero en disco: el contenido fijo (hitos,
razones, cupones de partida, canciones, quiz) está hardcodeado en
`src/lib/data.ts`, y lo único que cambia mientras usas la web —qué cupones
están canjeados— se guarda en memoria del servidor, en `src/lib/queries.ts`.

Esto significa que **si reinicias el servidor** (`npm run dev` o
`npm start`), los cupones vuelven a estar sin canjear. Es la contrapartida
de no depender de ningún fichero: mientras el proceso de Next.js siga
corriendo, todo se mantiene con normalidad.

## Qué incluye

- **Portada**: contador en vivo (días, horas, minutos, segundos) desde
  `START_DATE`, con aviso del próximo número de días redondo (múltiplos de
  100).
- **Nuestra historia**: línea del tiempo con un hito por año y animación al
  hacer scroll.
- **7 razones**: tarjetas que se voltean en 3D al pulsarlas.
- **Cupones**: canjeables con un botón, quedan marcados como canjeados
  mientras el servidor siga corriendo.
- **Banda sonora (Dellafuente)**: embeds oficiales de Spotify, sin
  autoplay, con un texto explicando qué significa cada canción.
- **¿Cuánto nos conocemos?**: quiz de 7 preguntas con mensaje final siempre
  cariñoso.
- **El sobre**: una carta larga que se queda "lacrada" con cuenta atrás
  hasta la fecha que configures.

## Stack

Next.js (App Router) + React + TypeScript, Tailwind CSS v4. Sin base de
datos: todo el contenido fijo está en `src/lib/data.ts`. La sesión de login
usa una cookie httpOnly firmada con HMAC, sin JWT ni librerías externas de
auth. Todo el contenido protegido pasa por `src/proxy.ts` (el antiguo
`middleware.ts`, renombrado en Next.js 16).

## No incluido (a propósito)

Por mantener el alcance del regalo controlado no se han implementado la
sección de Lima ni la de recetas que aparecían como opcionales. Si quieres
añadirlas más adelante, siguen el mismo patrón que el resto: un array en
`src/lib/data.ts`, sus helpers en `src/lib/queries.ts` y una página nueva
en `src/app/(site)/`.
