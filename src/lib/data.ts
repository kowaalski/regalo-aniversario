/**
 * Todo el contenido del regalo vive aquí, en código, para que nada dependa
 * de un fichero de base de datos que se pueda perder o quedar sin subir.
 *
 * Todo lo marcado con TODO es texto de ejemplo: cámbialo por el vuestro.
 */

export type Milestone = {
  id: number;
  year: number;
  title: string;
  description: string;
  photo: string;
  photoPosition?: string;
};

export type Reason = {
  id: number;
  number: number;
  icon: string;
  reason: string;
};

export type CouponSeed = {
  id: number;
  title: string;
  description: string;
};

export type Song = {
  id: number;
  title: string;
  spotify_track_id: string | null;
  note: string;
};

// ---------------------------------------------------------------------------
// Línea del tiempo — un hito por año. TODO: cambia título, texto y foto real.
// Las fotos de ejemplo están en /public/timeline (placeholders SVG).
// ---------------------------------------------------------------------------
export const MILESTONES: Milestone[] = [
  {
    id: 1,
    year: 2019,
    title: "El primer 'hola'",
    description:
      "No me acuerdo ni porque ni como, me saliste en instagram y no dude en tirarme a darte me gustas, de los cuales me devolvistes todos :D, lo demás ya lo sabes...",
    photo: "/timeline/2019.png",
  },
  {
    id: 2,
    year: 2020,
    title: "Un año raro, pero juntos",
    description:
      "El fucking covid nos mantuvo encerrados y separados cuando más tiempo nos hacia falta juntos... Pero seguíamos al pie del cañon, cada uno eramos la motivación del otro para seguir aguantando encerrados.",
    photo: "/timeline/2020.png",
  },
  {
    id: 3,
    year: 2021,
    title: "El primer viaje",
    description:
      "Nos fuimos a granada, fue la primera vez que viajamos solos, y nos recogio de granada tu Pa.",
    photo: "/timeline/2021.png",
    photoPosition: "center 30%",
  },
  {
    id: 4,
    year: 2022,
    title: "Viajes potente de verdad",
    description:
      "Nuestro primer viajecito. A Roma. La primera vez que salimos de la penisula. Y vimos que haciamos buen equipo y eramos capaces de sobrevivir solos.",
    photo: "/timeline/2022.png",
    photoPosition: "25% 75%",
  },
  {
    id: 5,
    year: 2023,
    title: "Dellafuentes en Madrid",
    description:
      "Fuimos exclusivamente a ver al delaffuente con ceggarro amigo a madrid.",
    photo: "/timeline/2023.png",
    photoPosition: "center 30%",
  },
  {
    id: 6,
    year: 2024,
    title: "Sorpresa con amor ❤️",
    description:
      "Por tu cumple te regale un viaje sorpresa a Venecia... Me hizo muchísima ilusión hacerlo",
    photo: "/timeline/2024.png",
  },
  {
    id: 7,
    year: 2025,
    title: "Aquí otro viajecito más a Budapest",
    description:
      "Budapest, la ciudad de los contrastes. Una escapada que nos sirvió para reforzar nuestro vínculo. Y hacer cosillas de malillos...",
    photo: "/timeline/2025.png",
    photoPosition: "center 65%",
  },
  {
    id: 8,
    year: 2026,
    title: "Vampirikikis a Rumanía",
    description:
      "Nos fuimos de viaje a Rumanía para ver los castillos de Drácula. La experiencia estuvo bien chingona y fría, aunque hubo algún problemilla...",
    photo: "/timeline/2026.jpeg",
    photoPosition: "center 65%",
  },
];

// ---------------------------------------------------------------------------
// 7 razones — TODO: sustituye por tus propias razones reales.
// ---------------------------------------------------------------------------
export const REASONS: Reason[] = [
  { id: 1, number: 1, icon: "sonrisa", reason: "Por cómo te ríes de tus propias historias subrealistas que te pasan, mientras me las intentas contar." },
  { id: 2, number: 2, icon: "cafe", reason: "Por hacerme el café todos los findes sin tener que decirte absolutamente nada" },
  { id: 3, number: 3, icon: "mapa", reason: "Por atreverte a viajar fuera sin importarte a ir conmigo que estoy bien loco. Gracias por salvarme del atropello en Granada" },
  { id: 4, number: 4, icon: "libro", reason: "Por escuchar mis rollos aunque lleve media hora hablando del mismo tema, y aunque sea complejo te interesas." },
  { id: 5, number: 5, icon: "mano", reason: "Por cómo cuidas y eres consciente de la sociedad, lo que a mi me falta lo tienes tú." },
  { id: 6, number: 6, icon: "mano", reason: "Por ser una persona super empática y siempre dispuesta a arreglar las cosas y hablarlas." },
  { id: 7, number: 7, icon: "corazon", reason: "Porque hoy 16/07/2026 estamos cumpliendo 7 años de muchisimas cosas." },
];

// ---------------------------------------------------------------------------
// Cupones canjeables — TODO: añade, quita o cambia los que quieras.
// El estado de "canjeado" vive en memoria (ver lib/queries.ts): se reinicia
// si reinicias el servidor, a cambio de no depender de ningún fichero.
// ---------------------------------------------------------------------------
export const COUPONS_SEED: CouponSeed[] = [
  {
    id: 1,
    title: "Una cena donde tú elijas",
    description: "Sin vetos ni excusas por mi parte, el restaurante lo decides tú.",
  },
  {
    id: 2,
    title: "Peli tuya sin que me queje",
    description: "Incluso si es una comedia romántica que ya has visto tres veces.",
  },
  {
    id: 3,
    title: "Masaje de 20 minutos",
    description: "Cupón canjeable cuando quieras, sin previo aviso.",
  },
  {
    id: 4,
    title: "Un día entero sin planes",
    description: "Nos quedamos en casa, sin agenda, sin prisa, solo nosotros.",
  },
  {
    id: 5,
    title: "Un concierto a tu elección",
    description: "El que tú elijas, el día que tú digas.",
  }
];

// ---------------------------------------------------------------------------
// Dellafuente — TODO: rellena los spotify_track_id reales (los del embed).
// Para conseguir el ID: en Spotify, "Compartir" > "Copiar enlace a la
// canción" y coge el código que aparece tras /track/ en la URL.
// ---------------------------------------------------------------------------
export const SONGS: Song[] = [
  {
    id: 1,
    title: "Otra noche en Granada",
    spotify_track_id: "28tmfFp5IPzmNFslOBqSfc",
    note: "TODO: qué significa esta canción para vosotros.",
  },
  {
    id: 2,
    title: "Enamorao",
    spotify_track_id: "01pCF0R0XmZUDDsEVB6ROW",
    note: "TODO: qué significa esta canción para vosotros.",
  },
  {
    id: 3,
    title: "Te Como la Cara",
    spotify_track_id: "1a19HeCrAgB1xS5r0VkLIP",
    note: "TODO: qué significa esta canción para vosotros.",
  },
  {
    id: 4,
    title: "Corazón Mío",
    spotify_track_id: "0y7jUC6wgVW2NlvZa67cWN",
    note: "TODO: qué significa esta canción para vosotros.",
  },
  {
    id: 5,
    title: "El camino",
    spotify_track_id: "6x5gl9msgjsqub1hy7Iq3k",
    note: "TODO: qué significa esta canción para vosotros.",
  },
  {
    id: 6,
    title: "Agradecío",
    spotify_track_id: "6sx7Glmf0es3vkqD3annAW",
    note: "TODO: qué significa esta canción para vosotros.",
  },
  {
    id: 7,
    title: "蓝",
    spotify_track_id: "5ku3lEb3OW2dpPapxTNyKL",
    note: "TODO: qué significa esta canción para vosotros.",
  },
  {
    id: 8,
    title: "13/18",
    spotify_track_id: "0rO36aEzoamawMEAo8ivCL",
    note: "TODO: qué significa esta canción para vosotros.",
  },
];
