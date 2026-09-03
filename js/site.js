(() => {
  'use strict';

  document.documentElement.classList.add('js');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Dubai clock ---------- */

  const dubaiTime = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Asia/Dubai',
  });

  const startClock = () => {
    const nodes = document.querySelectorAll('[data-clock]');
    if (!nodes.length) return;
    const tick = () => nodes.forEach((node) => { node.textContent = dubaiTime.format(new Date()); });
    tick();
    window.setInterval(tick, 15000);
  };

  /* ---------- counters (run when their block is revealed) ---------- */

  const easeOut = (t) => 1 - (1 - t) ** 3;

  const animateCounters = (root) => {
    root.querySelectorAll('[data-count]').forEach((node) => {
      if (node.dataset.done) return;
      node.dataset.done = '1';
      const target = Number(node.dataset.count);
      if (reduceMotion || !Number.isFinite(target)) return;
      const prefix = node.dataset.prefix || '';
      const suffix = node.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();
      const frame = (now) => {
        const t = Math.min(1, (now - start) / duration);
        node.textContent = prefix + Math.round(target * easeOut(t)) + suffix;
        if (t < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    });
  };

  /* ---------- scroll reveal ---------- */

  const reveal = (target) => {
    target.classList.add('in');
    animateCounters(target);
  };

  const observeReveals = () => {
    const targets = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) return targets.forEach(reveal);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    targets.forEach((target) => observer.observe(target));
  };

  /* ---------- scroll progress line ---------- */

  const startProgress = () => {
    const bar = document.querySelector('[data-progress]');
    if (!bar) return;
    let queued = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const fraction = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, fraction))})`;
      queued = false;
    };
    window.addEventListener('scroll', () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    }, { passive: true });
    update();
  };

  /* ---------- request-trace demo ---------- */

  const nextTuesday = () => {
    const date = new Date();
    const ahead = ((2 - date.getDay()) + 7) % 7 || 7;
    date.setDate(date.getDate() + ahead);
    return new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }).format(date);
  };

  const startTraceDemo = () => {
    const root = document.querySelector('.td');
    if (!root) return;
    const due = root.querySelector('[data-td-due]');
    if (due) due.textContent = nextTuesday();
    if (reduceMotion || !('IntersectionObserver' in window)) return; // the markup already shows the finished run

    const utter = root.querySelector('[data-td-utter]');
    const crm = root.querySelector('[data-td-crm]');
    const crms = ['Salesforce', 'HubSpot', 'Zoho'];
    const steps = Array.from(root.querySelectorAll('[data-td-step]'), (item) => {
      const value = item.querySelector('[data-td-val]');
      return { item, value, text: value.textContent };
    });
    const script = utter.textContent;

    let generation = 0;
    let timer = 0;
    let runs = 0;

    const wait = (ms) => new Promise((resolve) => { timer = window.setTimeout(resolve, ms); });

    const type = async (node, text, speed, alive) => {
      node.textContent = '';
      for (let i = 1; i <= text.length; i += 1) {
        if (!alive()) return;
        node.textContent = text.slice(0, i);
        await wait(speed);
      }
    };

    const reset = () => {
      root.classList.remove('is-listening', 'is-typing');
      utter.textContent = '';
      steps.forEach((step) => {
        step.item.classList.remove('is-on');
        step.value.textContent = '—';
      });
    };

    const play = async () => {
      generation += 1;
      const mine = generation;
      const alive = () => mine === generation;
      while (alive()) {
        reset();
        crm.textContent = crms[runs % crms.length];
        runs += 1;
        await wait(700);
        if (!alive()) return;
        root.classList.add('is-listening', 'is-typing');
        await type(utter, script, 32, alive);
        root.classList.remove('is-listening', 'is-typing');
        await wait(500);
        for (const step of steps) {
          if (!alive()) return;
          step.item.classList.add('is-on');
          await type(step.value, step.text, 14, alive);
          await wait(380);
        }
        await wait(4200);
      }
    };

    const stop = () => {
      generation += 1;
      window.clearTimeout(timer);
    };

    let playing = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !playing) { playing = true; play(); }
        if (!entry.isIntersecting && playing) { playing = false; stop(); }
      });
    }, { threshold: 0.35 });
    observer.observe(root);
  };

  startClock();
  observeReveals();
  startProgress();
  startTraceDemo();
})();
