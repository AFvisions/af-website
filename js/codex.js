/*
  Codex filter chips.

  Each chip has data-filter set to "all" or to a category name. Each tile's <li>
  has a matching data-category. Clicking a chip selects it (one at a time) and
  hides the tiles in other categories. The lightbox reads which tiles are visible,
  so Previous and Next stay inside the active filter.
*/
(function () {
  const chips = document.querySelectorAll('.chip[data-filter]');
  const tiles = document.querySelectorAll('[data-codex-grid] > li');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      const filter = chip.getAttribute('data-filter');

      chips.forEach(function (other) {
        other.setAttribute('aria-pressed', other === chip ? 'true' : 'false');
      });

      tiles.forEach(function (tile) {
        const show = filter === 'all' || tile.getAttribute('data-category') === filter;
        tile.hidden = !show;
      });
    });
  });
})();
