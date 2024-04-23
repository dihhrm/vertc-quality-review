import { createCookieSessionStorage } from "@remix-run/node";

type SessionData = {
  token: string;
  refresh_token: string;
};

type SessionFlashData = {
  error: string;
};

const sessionStorage = createCookieSessionStorage<
  SessionData,
  SessionFlashData
>({
  cookie: {
    name: "_session",
    sameSite: "lax",
    maxAge: 60 * 60,
    path: "/",
    httpOnly: true,
    secrets: ["s3cr3t"],
    secure: true,
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage;
