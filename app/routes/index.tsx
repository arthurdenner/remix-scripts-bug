import { Link } from 'remix';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <p>
        This project contains a reproducible bug with script loading on page
        transitions
      </p>

      <ul>
        <li>
          <Link to="inline">Load page with inline script tag</Link>
        </li>
        <li>
          <Link to="effect">Load page with script tag in effect</Link>
        </li>
        <li>
          <Link to="utils">Load page with script tag with remix-utils</Link>
        </li>
        <li>
          <Link to="added">
            Load page with script tag added by the root route
          </Link>
        </li>
      </ul>
    </div>
  );
}
