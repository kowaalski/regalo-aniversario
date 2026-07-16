import crypto from "node:crypto";

// Regalo privado sin backend externo: basta con un secreto fijo en el
// código para firmar la cookie de sesión. No es información sensible de
// verdad, así que no hace falta gestionarlo por variables de entorno.
const SESSION_SECRET = "regalo-carmen-siete-anos-secreto-de-firma";
const COOKIE_NAME = "regalo_session";
const SESSION_DAYS = 90;

function sign(value: string): string {
  return crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(value)
    .digest("base64url");
}

export function createSessionToken(username: string): string {
  const payload = Buffer.from(
    JSON.stringify({ u: username, iat: Date.now() })
  ).toString("base64url");
  const signature = sign(payload);
  return `${payload}.${signature}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;

  return crypto.timingSafeEqual(a, b);
}

export const SESSION_COOKIE = {
  name: COOKIE_NAME,
  maxAge: SESSION_DAYS * 24 * 60 * 60,
};
