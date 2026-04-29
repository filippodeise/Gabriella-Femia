/* Shared site JS — header, cookie banner, fade-in, mobile nav */

(function () {
  // mark active nav link
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === path) a.classList.add('is-active');
  });

  // mobile burger
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-open');
      nav.classList.toggle('is-open');
    });
  }

  // fade-in observer
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(function (el) { io.observe(el); });

  // cookie banner
  var KEY = 'lfc_cookies_v1';
  var banner = document.getElementById('cookie-banner');
  if (banner) {
    if (!localStorage.getItem(KEY)) {
      setTimeout(function () { banner.classList.add('is-open'); }, 600);
    }
    banner.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-cookie]');
      if (!btn) return;
      var v = btn.getAttribute('data-cookie');
      localStorage.setItem(KEY, JSON.stringify({ choice: v, ts: Date.now() }));
      banner.classList.remove('is-open');
    });
  }
})();
