/* =========================================================
   인터랙션 로직
   ========================================================= */

// ---------------------------------------------------------
// 1. 다크모드 (기본값: dark)
// ---------------------------------------------------------
function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ---------------------------------------------------------
// 2. 모바일 메뉴
// ---------------------------------------------------------
function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('hidden');
    toggleBtn.setAttribute('aria-expanded', String(!isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
  });
}

// ---------------------------------------------------------
// 3. 스크롤 페이드인
// ---------------------------------------------------------
function initScrollReveal() {
  const targets = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
}

// ---------------------------------------------------------
// 4. 숫자 카운터 애니메이션
// ---------------------------------------------------------
function animateCounter(el, target, duration) {
  let start = 0;
  const step = target / (duration / 16);

  function tick() {
    start += step;
    if (start >= target) {
      el.textContent = target;
      return;
    }
    el.textContent = Math.floor(start);
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          animateCounter(el, target, 1400);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((el) => observer.observe(el));
}

// ---------------------------------------------------------
// 5. 액티브 네비 링크 하이라이트
// ---------------------------------------------------------
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link[href^="#"]');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => {
            l.style.color = '';
            if (l.getAttribute('href') === '#' + entry.target.id) {
              l.style.color = 'var(--accent)';
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((s) => observer.observe(s));
}

// ---------------------------------------------------------
// 초기화
// ---------------------------------------------------------
initTheme();

document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  initMobileMenu();
  initScrollReveal();
  initCounters();
  initActiveNav();
});
