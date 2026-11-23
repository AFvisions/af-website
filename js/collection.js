/*
  Collection pop-up (Halloween Cards and every other collection page).

  The flip on hover or keyboard focus is CSS only (css/site.css, "Collection page").
  Clicking a card opens the <dialog data-postcard-view> with the card's front and
  back side by side. It reads everything from the card that was clicked:
    .postcard__front  img or placeholder text  (always there)
    .postcard__back   img or placeholder text  (optional; without it only the front shows)
    the <figcaption>  under the card           (used as the one-line caption)

  Escape or the X closes it, as does clicking the dark area around the images.
  Focus stays inside while it is open and returns to the card afterward.
*/
(function () {
  const dialog = document.querySelector('[data-postcard-view]');
  if (!dialog) return;

  const caption = dialog.querySelector('.lightbox__caption');
  let current = null;

  // Copy one face of the card (image or placeholder) into one side of the pop-up.
  function fill(side, face) {
    const img = side.querySelector('.lightbox__img');
    const placeholder = side.querySelector('.lightbox__placeholder');

    side.hidden = !face;
    if (!face) return;

    const source = face.querySelector('img');
    if (source) {
      img.src = source.currentSrc || source.src;
      img.alt = source.alt;
      img.hidden = false;
      placeholder.hidden = true;
    } else {
      img.removeAttribute('src');
      img.hidden = true;
      placeholder.textContent = face.textContent.trim();
      placeholder.hidden = false;
    }
  }

  function open(card) {
    current = card;
    const figcaption = card.closest('figure').querySelector('figcaption');

    fill(dialog.querySelector('[data-side="front"]'), card.querySelector('.postcard__front'));
    fill(dialog.querySelector('[data-side="back"]'), card.querySelector('.postcard__back'));
    caption.textContent = figcaption ? figcaption.textContent.trim() : '';

    dialog.showModal();
  }

  function close() {
    dialog.close();
  }

  document.querySelectorAll('[data-collection] .postcard').forEach(function (card) {
    card.addEventListener('click', function () { open(card); });
  });

  dialog.querySelector('[data-postcard-close]').addEventListener('click', close);

  // Clicking the dark area around the images closes it.
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) close();
  });

  // Return focus to the card that was opened.
  dialog.addEventListener('close', function () {
    if (current) current.focus();
  });
})();
