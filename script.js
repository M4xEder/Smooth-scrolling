document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.scroll-list__item');

  // Função que ativa visibilidade usando scroll nativo
  function nativeScrollReveal() {
    const viewportCenter = window.innerHeight / 2;

    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const distance = Math.abs(viewportCenter - itemCenter);

      item.classList.remove('is-visible', 'is-active');

      if (distance < rect.height * 1.5) {
        item.classList.add('is-visible');
      }

      if (distance < rect.height / 2) {
        item.classList.add('is-active');
      }
    });
  }

  // Tenta usar Smooth Scrollbar
  if (window.Scrollbar) {
    try {
      Scrollbar.use(window.OverscrollPlugin);

      const scrollContainer = document.querySelector('.js-scroll-list');

      const scrollbar = Scrollbar.init(scrollContainer, {
        damping: 0.08,
        plugins: { overscroll: true }
      });

      scrollbar.addListener(nativeScrollReveal);
      nativeScrollReveal();
      return;
    } catch (e) {
      console.warn('Fallback para scroll nativo');
    }
  }

  // Fallback total (GARANTIDO)
  items.forEach(item => item.classList.add('is-visible'));
  window.addEventListener('scroll', nativeScrollReveal);
  nativeScrollReveal();
});
