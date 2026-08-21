(() => {
  'use strict';

  document.documentElement.classList.add('js');

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

  const revealAll = (targets) => targets.forEach((target) => target.classList.add('in'));

  const observeReveals = () => {
    const targets = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) return revealAll(targets);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    targets.forEach((target) => observer.observe(target));
  };

  startClock();
  observeReveals();
})();
