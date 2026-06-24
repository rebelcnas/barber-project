const btn = document.getElementById('hamburger');
const menu = document.getElementById('nav-menu');

btn.addEventListener('click', function () {
  const isOpen = menu.classList.toggle('open');
  btn.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
});

menu.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    menu.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
});
