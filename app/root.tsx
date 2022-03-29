import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from 'remix';
import type { MetaFunction } from 'remix';
import { ExternalScripts } from 'remix-utils';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  const matches = useMatches();
  const isIndex = matches.some((m) => m.id === 'routes/added');

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <ExternalScripts />
        <LiveReload />
        {isIndex ? <script src="/script.js" /> : null}
      </body>
    </html>
  );
}
