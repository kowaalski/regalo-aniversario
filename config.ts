/**
 * Configuración editable del regalo.
 * Cambia aquí las fechas clave sin tocar el resto del código.
 */

// Fecha y hora en la que empezó todo, en horario de Madrid (Europe/Madrid).
// El 16 de julio de 2019 fue horario de verano en España (CEST, UTC+2),
// por eso el offset "+02:00" va fijo en la fecha en lugar de depender del
// reloj de quien la vea.
export const START_DATE = "2019-07-16T00:00:00+02:00";

export const ZONE = "Europe/Madrid";

// Nombre de la persona a la que va dirigido el regalo.
export const HER_NAME = "Ziskitos";

// Fecha a partir de la cual se desbloquea la carta del "sobre sellado".
// Mientras no llegue, se muestra el sobre lacrado con cuenta atrás.
// Por defecto apunta al 1 de enero como fecha de ejemplo.
// TODO: pon aquí la fecha real en la que quieres que se abra la carta
// (vuestro próximo aniversario, su cumpleaños, la Navidad...).
export const LETTER_UNLOCK_DATE = "2027-01-01T00:00:00+01:00";
