import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Helper: safe fromTo that won't leave elements invisible if trigger never fires
function revealFrom(
  targets: gsap.TweenTarget,
  fromVars: gsap.TweenVars,
  triggerEl: string | Element,
  extra: gsap.TweenVars = {}
) {
  const toVars: gsap.TweenVars = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    duration: 0.85,
    ease: 'power3.out',
    immediateRender: false,
    scrollTrigger: {
      trigger: triggerEl,
      start: 'top 88%',
      toggleActions: 'play none none none',
    },
    ...extra,
  };

  return gsap.fromTo(
    targets,
    { opacity: 0, y: 0, x: 0, scale: 1, immediateRender: true, ...fromVars },
    toVars
  );
}

export function initScrollAnimations() {
  ScrollTrigger.refresh();

  // ─── ALL SECTION HEADINGS: slide up + fade ──────────────────────────────────
  gsap.utils.toArray<HTMLElement>('section h2').forEach((el) => {
    revealFrom(el, { y: 50, opacity: 0 }, el, {
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
    });
  });

  // ─── ABOUT: image parallax (scrub) ──────────────────────────────────────────
  gsap.utils.toArray<HTMLElement>('#about img').forEach((img, i) => {
    gsap.to(img, {
      yPercent: i === 0 ? -10 : -6,
      ease: 'none',
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.4,
      },
    });
  });

  // ─── ABOUT: highlight cards stagger ─────────────────────────────────────────
  const aboutCards = gsap.utils.toArray<HTMLElement>('#about [class*="rounded"]');
  if (aboutCards.length) {
    revealFrom(aboutCards, { y: 40, opacity: 0 }, aboutCards[0], {
      stagger: 0.15,
      scrollTrigger: { trigger: aboutCards[0], start: 'top 86%', toggleActions: 'play none none none' },
    });
  }

  // ─── SERVICES: animations handled by framer-motion in ServicesSection.tsx ───

  const banner = document.querySelector('#services + *') as HTMLElement | null;
  if (banner) {
    revealFrom(banner, { x: -60, opacity: 0 }, banner, {
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: { trigger: banner, start: 'top 85%', toggleActions: 'play none none none' },
    });
  }

  // ─── GUARANTEE: children stagger ────────────────────────────────────────────
  const guarantee = document.querySelector('#guarantee');
  if (guarantee) {
    const kids = Array.from(guarantee.children) as HTMLElement[];
    if (kids.length) {
      gsap.fromTo(
        kids,
        { opacity: 0, y: 45, immediateRender: true },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.14,
          immediateRender: false,
          scrollTrigger: { trigger: '#guarantee', start: 'top 84%', toggleActions: 'play none none none' },
        }
      );
    }
  }

  // ─── SUPPORT / CREDITORS: clip-path cinematic wipe ───────────────────────────
  const support = document.querySelector('#support') as HTMLElement | null;
  if (support) {
    gsap.fromTo(
      support,
      { clipPath: 'inset(8% 5% 8% 5% round 3rem)', opacity: 0, immediateRender: true },
      {
        clipPath: 'inset(0% 0% 0% 0% round 0rem)',
        opacity: 1,
        duration: 1.2,
        ease: 'expo.out',
        immediateRender: false,
        scrollTrigger: { trigger: '#support', start: 'top 82%', toggleActions: 'play none none none' },
      }
    );

    const inner = Array.from(support.querySelectorAll('h2, p, a')) as HTMLElement[];
    if (inner.length) {
      gsap.fromTo(
        inner,
        { opacity: 0, y: 30, immediateRender: true },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.1,
          immediateRender: false,
          scrollTrigger: { trigger: '#support', start: 'top 76%', toggleActions: 'play none none none' },
        }
      );
    }
  }

  // ─── FOOTER: line-by-line reveal ─────────────────────────────────────────────
  const footerKids = gsap.utils.toArray<HTMLElement>('footer > *');
  if (footerKids.length) {
    gsap.fromTo(
      footerKids,
      { opacity: 0, y: 25, immediateRender: true },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.1,
        immediateRender: false,
        scrollTrigger: { trigger: 'footer', start: 'top 90%', toggleActions: 'play none none none' },
      }
    );
  }

  // ─── STATS ROW: stagger slide up ─────────────────────────────────────────────
  const statsRow = document.querySelector('#home + *');
  if (statsRow) {
    const statsKids = Array.from(statsRow.children) as HTMLElement[];
    gsap.fromTo(
      statsKids,
      { opacity: 0, y: 28, immediateRender: true },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        immediateRender: false,
        scrollTrigger: { trigger: statsRow, start: 'top 88%', toggleActions: 'play none none none' },
      }
    );
  }
}

export function cleanupScrollAnimations() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  gsap.globalTimeline.clear();
}
