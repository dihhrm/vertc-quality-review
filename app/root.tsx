import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  redirect,
  useLoaderData,
} from "@remix-run/react";

import styles from "./tailwind.css";
import Header from "./components/Header";
import designSystem from "@vert-capital/design-system-ui/dist/style.css";
import { Footer } from "@vert-capital/design-system-ui";
import { getSession } from "./services/session.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: designSystem },
  { rel: "stylesheet", href: styles },
];

export let loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  // const token = await authenticate(request, session);
  // const userId = await getUserId(request);
  if (!token)
    // return redirect(String(process.env.PUBLIC_API_URL + "/accounts/login"));
    // return redirect("auth/12412412/412412");
  return json({ token });
};

export default function App() {
  const data = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <Meta />
        <Links />
      </head>
      <body className="bg-extraLight">
        <div className="w-full sticky top-0 z-50">
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
        <div className="w-full fixed bottom-0">
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
