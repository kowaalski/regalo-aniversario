"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSessionToken, SESSION_COOKIE } from "@/lib/session";

// Credenciales fijas: es un regalo para una sola persona, no una app
// multiusuario, así que no hace falta ni base de datos de usuarios ni
// variables de entorno para esto.
const VALID_USERNAME = "carmen";
const VALID_PASSWORD = "ziskitos";

export type LoginState = {
  error?: string;
};

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const username = String(formData.get("username") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
    return {
      error: "Casi… piensa en cómo te llamo yo.",
    };
  }

  const token = createSessionToken(VALID_USERNAME);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE.name, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_COOKIE.maxAge,
  });

  redirect("/");
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE.name);
  redirect("/login");
}
