/*
  Pinned story on case-study pages.

  The stage stays in view while the steps scroll past. The step in the
  middle of the window becomes active, and the stage shows its slide:
    data-story-slide="N"  on a slide    (N is the step's position, starting at 0)
    data-variant          on a slide    (only for steps with toggle chips)
    data-variant          on a chip     (picks which of that step's slides to show)
    data-label            on a step     (shown under the stage)
  One .story__bar per step; bars up to the active step turn Pink.
*/
(function () {
  const story = document.querySelector('[data-story]');
  if (!story) return;

  const steps = Array.from(story.querySelectorAll('.story__step'));
  const slides = story.querySelectorAll('[data-story-slide]');
  const bars = story.querySelectorAll('.story__bar');
  const label = story.querySelector('[data-story-label]');
  const chosen = {}; // step number -> selected variant
  let current = 0;

  // Start each step's toggle on its pressed chip.
  steps.forEach(function (step, index) {
    const pressed = step.querySelector('.chip[aria-pressed="true"]');
    if (pressed) chosen[index] = pressed.getAttribute('data-variant');
  });

  function render() {
    steps.forEach(function (step, index) {
      step.classList.toggle('is-active', index === current);
    });

    slides.forEach(function (slide) {
      const variant = slide.getAttribute('data-variant');
      const show = Number(slide.getAttribute('data-story-slide')) === current &&
        (!variant || variant === chosen[current]);
      slide.classList.toggle('is-active', show);
      slide.setAttribute('aria-hidden', show ? 'false' : 'true');
    });

    bars.forEach(function (bar, index) {
      bar.classList.toggle('is-reached', index <= current);
    });

    if (label) label.textContent = steps[current].getAttribute('data-label');
  }

  // Toggle chips: one pressed per group; switches the slide for that step.
  steps.forEach(function (step, index) {
    const chips = step.querySelectorAll('.chip[data-variant]');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (other) {
          other.setAttribute('aria-pressed', other === chip ? 'true' : 'false');
        });
        chosen[index] = chip.getAttribute('data-variant');
        current = index;
        render();
      });
    });
  });

  // The step crossing the middle of the window becomes active.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        current = steps.indexOf(entry.target);
        render();
      });
    }, { rootMargin: '-45% 0px -45% 0px' });

    steps.forEach(function (step) { observer.observe(step); });
  }

  render();
})();
