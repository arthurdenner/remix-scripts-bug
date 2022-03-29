export default function Page() {
  return (
    <>
      <h1>Page with a script</h1>

      <p>
        When coming from the home page, the script is added to the page but not
        loaded and executed.
      </p>

      <p>When reloading this page, the script is loaded and executed.</p>

      <script src="/script.js" />
    </>
  );
}
