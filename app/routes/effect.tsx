import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'my-custom';
    script.src = '/script.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => document.getElementById('my-custom')?.remove();
  }, []);

  return (
    <>
      <h1>Page with a script</h1>

      <p>
        The script is loaded and executed when coming from the home page or
        reloading this page.
      </p>
    </>
  );
}
