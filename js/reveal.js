/*
  Scroll fade-in for case-study pages.

  Anything with class="reveal" fades in and rises 16px the first time it
  scrolls into view. Add reveal--delay-1 or reveal--delay-2 to stagger
  neighbors. The styles live in css/site.css ("Scroll fade-in").

  This file loads in the <head> without defer, so it can mark the page
  before anything is drawn. It does nothing (and everything stays visible)
  when the browser can't run it or the visitor prefers reduced motion.
*/
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.documentElement.classList.add('js-reveal');

  document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  });
})();
