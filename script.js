// ============================================================
//  LIQUID BIOPSY RESEARCH - JavaScript
//  Scroll animations | Counter | Particles | Navbar | Charts
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initDropdowns();
  initScrollReveal();
  initCounters();
  initParticles();
  initBarCharts();
  initNavActiveState();
  initAdvancedAnimations();
});
// ── ADVANCED ANIMATIONS ─────────────────────────────────────
function initAdvancedAnimations() {
  // (Removed broken staggered text logic)
  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal-fade, .reveal-stagger');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // Parallax effect for hero visuals
  const parallaxEls = document.querySelectorAll('.parallax');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    parallaxEls.forEach(el => {
      el.style.transform = `translateY(${y * 0.18}px)`;
    });
  });

  // Button hover effect (keep animation, remove cursor logic)
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.classList.add('btn-animated');
  });

  // FAQ Overlay logic
  const faqTrigger = document.getElementById('faqTrigger');
  const faqOverlay = document.getElementById('faqOverlay');
  const faqClose = document.getElementById('faqClose');
  if (faqTrigger && faqOverlay && faqClose) {
    faqTrigger.addEventListener('click', () => {
      faqOverlay.style.display = 'flex';
      setTimeout(() => faqOverlay.classList.add('open'), 10);
    });
    faqClose.addEventListener('click', () => {
      faqOverlay.classList.remove('open');
      setTimeout(() => faqOverlay.style.display = 'none', 350);
    });
    faqOverlay.addEventListener('click', e => {
      if (e.target === faqOverlay) {
        faqOverlay.classList.remove('open');
        setTimeout(() => faqOverlay.style.display = 'none', 350);
      }
    });
    // FAQ Q&A toggle
    faqOverlay.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        if (item.classList.contains('open')) {
          item.classList.remove('open');
        } else {
          faqOverlay.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
          item.classList.add('open');
        }
      });
    });
  }
}

// ── NAVBAR SCROLL EFFECT ─────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── HAMBURGER MENU ───────────────────────────────────────────
function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('navMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    // animate spans
    const spans = btn.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });
  // close on nav link click
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      const spans = btn.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    });
  });
}

// ── NAV DROPDOWN ─────────────────────────────────────────────
function initDropdowns() {
  const isMobile = () => window.matchMedia('(max-width: 640px)').matches;
  document.querySelectorAll('.nav-dropdown').forEach(drop => {
    const toggle = drop.querySelector('.nav-dropdown-toggle');
    const menu = drop.querySelector('.nav-dropdown-menu');
    if (!toggle || !menu) return;
    let open = false;
    const openDropdown = () => {
      drop.classList.add('open');
      open = true;
      menu.style.pointerEvents = 'auto';
    };
    const closeDropdown = () => {
      drop.classList.remove('open');
      open = false;
      menu.style.pointerEvents = 'none';
    };
    // Desktop: hover/click
    toggle.addEventListener('click', e => {
      if (isMobile()) {
        e.preventDefault();
        open ? closeDropdown() : openDropdown();
      }
    });
    drop.addEventListener('mouseenter', () => {
      if (!isMobile()) openDropdown();
    });
    drop.addEventListener('mouseleave', () => {
      if (!isMobile()) closeDropdown();
    });
    // Keyboard accessibility
    toggle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open ? closeDropdown() : openDropdown();
      }
      if (e.key === 'Escape') closeDropdown();
    });
    menu.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeDropdown();
    });
    // Close dropdown when clicking outside
    document.addEventListener('click', e => {
      if (!drop.contains(e.target)) closeDropdown();
    });
  });
  // Close all dropdowns on resize (to reset state)
  window.addEventListener('resize', () => {
    document.querySelectorAll('.nav-dropdown').forEach(drop => drop.classList.remove('open'));
  });
}

// ── SCROLL REVEAL ────────────────────────────────────────────
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    // fallback: show everything immediately
    document.querySelectorAll('.reveal, .stagger').forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .stagger').forEach(el => observer.observe(el));
}

// ── COUNTER ANIMATION ────────────────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const animateCounter = (el) => {
    const target   = parseFloat(el.dataset.target);
    const duration = 1800;
    const start    = performance.now();

    const tick = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value    = Math.floor(easeOut(progress) * target);
      el.textContent = value;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => obs.observe(el));
}

// ── HERO PARTICLES ───────────────────────────────────────────
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const count = window.matchMedia('(max-width: 640px)').matches ? 12 : 24;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size     = Math.random() * 3 + 2; // 2–5px
    const left     = Math.random() * 100;
    const delay    = Math.random() * 12;
    const duration = Math.random() * 10 + 10; // 10–20s
    const opacity  = Math.random() * 0.5 + 0.2;

    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%;
      bottom:-${size}px;
      animation-delay:${delay}s;
      animation-duration:${duration}s;
      opacity:${opacity};
    `;
    container.appendChild(p);
  }
}

// ── BAR CHART ANIMATION ──────────────────────────────────────
function initBarCharts() {
  const fills = document.querySelectorAll('.bar-fill[data-width]');
  if (!fills.length) return;

  if (!('IntersectionObserver' in window)) {
    fills.forEach(el => { el.style.width = el.dataset.width + '%'; });
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // small delay to ensure transition fires
        setTimeout(() => {
          entry.target.style.width = entry.target.dataset.width + '%';
        }, 120);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(el => obs.observe(el));
}

// ── ACTIVE NAV STATE ─────────────────────────────────────────
function initNavActiveState() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
    else link.classList.remove('active');
  });
}

// ── SMOOTH ANCHOR SCROLL ─────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
