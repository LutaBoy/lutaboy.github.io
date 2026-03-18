document.addEventListener('DOMContentLoaded', () => {

  /* === Mobile nav toggle === */
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.nav__mobile');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* === Scroll fade-in === */
  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeEls.forEach(el => observer.observe(el));
  }

  /* === Active nav link === */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a:not(.nav__cta), .nav__mobile a:not(.nav__cta)').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') || (page === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

});
