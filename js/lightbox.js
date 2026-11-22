/*
  Codex lightbox.

  Clicking a Codex tile opens the <dialog data-lightbox> with that piece:
  the image at its native size (up to 440px high), the title, and the caption
  "Category · Medium, Year". It reads everything from the tile:
    data-category  on the <li>         (also used by the filter chips)
    data-title     on the button
    data-full      on the button       (the larger image; leave off for placeholders)
    data-medium    on the button       ("Medium, year")
    the tile <img> alt                 (reused as the large image's alt text)

  Previous and Next wrap around within the tiles the active filter shows.
  Keyboard: Escape closes, Left and Right arrows move, and focus stays inside
  the dialog while it is open. Closing returns focus to the tile.
*/
(function () {
  const dialog = document.querySelector('[data-lightbox]');
  if (!dialog) return;

  const img = dialog.querySelector('.lightbox__img');
  const placeholder = dialog.querySelector('.lightbox__placeholder');
  const title = dialog.querySelector('.lightbox__title');
  const caption = dialog.querySelector('.lightbox__caption');
  let current = null;

  function visibleTiles() {
    return Array.from(document.querySelectorAll('[data-codex-grid] > li'))
      .filter(function (li) { return !li.hidden; })
      .map(function (li) { return li.querySelector('.codex-tile'); });
  }

  function show(tile) {
    current = tile;
    const li = tile.closest('li');
    const full = tile.getAttribute('data-full');
    const thumb = tile.querySelector('img');

    title.textContent = tile.getAttribute('data-title') || '';
    caption.textContent = [li.getAttribute('data-category'), tile.getAttribute('data-medium')]
      .filter(Boolean)
      .join(' · ');

    if (full) {
      img.src = full;
      img.alt = thumb ? thumb.alt : '';
      img.hidden = false;
      placeholder.hidden = true;
    } else {
      img.removeAttribute('src');
      img.hidden = true;
      placeholder.textContent = '[Image to come]';
      placeholder.hidden = false;
    }
  }

  function step(direction) {
    const tiles = visibleTiles();
    if (!tiles.length) return;
    const index = tiles.indexOf(current);
    const next = (index + direction + tiles.length) % tiles.length;
    show(tiles[next]);
  }

  function open(tile) {
    show(tile);
    dialog.showModal();
  }

  function close() {
    dialog.close();
  }

  document.querySelectorAll('[data-codex-grid] .codex-tile').forEach(function (tile) {
    tile.addEventListener('click', function () { open(tile); });
  });

  dialog.querySelector('[data-lightbox-prev]').addEventListener('click', function () { step(-1); });
  dialog.querySelector('[data-lightbox-next]').addEventListener('click', function () { step(1); });
  dialog.querySelector('[data-lightbox-close]').addEventListener('click', close);

  dialog.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
  });

  // Clicking the dark backdrop (outside the panel) closes it.
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) close();
  });

  // Return focus to the tile that was showing when the lightbox closes.
  dialog.addEventListener('close', function () {
    if (current) current.focus();
  });
})();
