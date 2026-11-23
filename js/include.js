/*
  Shared header and footer.

  The header and footer each live in one file in /partials/. To use them, a page adds:

      <div data-include="header"></div>
      ...page content...
      <div data-include="footer"></div>
      <script src="/js/include.js" defer></script>

  This script swaps each placeholder for its partial. Edit the partial once and
  every page picks up the change. Partials load only through a server (Live Server
  locally, Namecheap live), not from a file opened directly.
*/
(function () {
  const placeholders = document.querySelectorAll('[data-include]');

  placeholders.forEach(function (placeholder) {
    const name = placeholder.getAttribute('data-include');

    fetch('/partials/' + name + '.html')
      .then(function (response) {
        if (!response.ok) {
          throw new Error(response.status + ' ' + response.statusText);
        }
        return response.text();
      })
      .then(function (html) {
        placeholder.outerHTML = html;
        document.querySelectorAll('[data-current-year]').forEach(function (el) {
          el.textContent = new Date().getFullYear();
        });
      })
      .catch(function (error) {
        console.error('Could not load partial "' + name + '":', error);
      });
  });
})();
