document.addEventListener('DOMContentLoaded', () => {
  const isHomepage = location.pathname === '/' || location.pathname === '/index.html';
  document.body.classList.toggle('homepage', isHomepage);
  if (isHomepage) {
    const updateScrollState = () => document.body.classList.toggle('scrolled', window.scrollY > 40);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    const animatedSections = document.querySelectorAll('.story > section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.2 });
    animatedSections.forEach((section) => observer.observe(section));
    const slides = [document.querySelector('.opening'), ...animatedSections].filter(Boolean);
    let paging = false;
    let pagingTimer;
    const pageTo = (index) => {
      const target = Math.max(0, Math.min(index, slides.length - 1));
      paging = true;
      window.scrollTo({ top: slides[target].offsetTop, behavior: 'smooth' });
      clearTimeout(pagingTimer);
      pagingTimer = setTimeout(() => { paging = false; }, 900);
    };
    window.addEventListener('wheel', (event) => {
      if (window.innerWidth <= 700 || paging || Math.abs(event.deltaY) < 2) return;
      const current = slides.reduce((closest, slide, index) => {
        return Math.abs(slide.offsetTop - window.scrollY) < Math.abs(slides[closest].offsetTop - window.scrollY) ? index : closest;
      }, 0);
      event.preventDefault();
      pageTo(current + (event.deltaY > 0 ? 1 : -1));
    }, { passive: false });
  }
  const oldHeader = document.querySelector('body > header');
  const header = document.createElement('header');
  header.className = 'universal-header';
  header.innerHTML = '<a class="universal-brand" href="/">TszPi<span>.</span></a><nav aria-label="Main navigation"><span title="Coming soon">Vision</span><span title="Coming soon">Work</span></nav>';
  if (oldHeader) oldHeader.replaceWith(header); else document.body.prepend(header);
  document.querySelectorAll('body > footer').forEach(footer => footer.remove());
  const footer = document.createElement('footer');
  footer.className = 'universal-footer';
  footer.innerHTML = '<div><a class="universal-brand" href="/">TszPi<span>.</span></a><p>Engineering ideas with people in mind.</p></div><div class="universal-footer-links"><a href="mailto:u3659013@connect.hku.hk">Email ↗</a><a href="https://github.com/tszpi-liu">GitHub ↗</a><a href="https://www.linkedin.com/in/tsz-pi-liu-0488653a3">LinkedIn ↗</a></div><small>© '+new Date().getFullYear()+' Liu Tsz Pi</small>';
  document.body.append(footer);
});
