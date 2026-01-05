const Scrollbar = window.Scrollbar;

if (!Scrollbar) {
  console.warn('Smooth Scrollbar não carregado');
} else {
  Scrollbar.use(window.OverscrollPlugin);

  const scrollContainer = document.querySelector('.js-scroll-list');
  const items = document.querySelectorAll('.scroll-list__item');

  const scrollbar = Scrollbar.init(scrollContainer, {
    damping: 0.08,
    plugins: {
      overscroll: true
    }
  });

  function updateItems() {
    const scrollTop = scrollbar.offset.y;
    const containerHeight = scrollContainer.clientHeight;
    const centerLine = scrollTop + containerHeight / 2;

    items.forEach(item => {
      const itemTop = item.offsetTop;
      const itemHeight = item.offsetHeight;
      const itemCenter = itemTop + itemHeight / 2;

      const distance = Math.abs(centerLine - itemCenter);
      const visibilityRange = itemHeight * 1.5;

      item.classList.remove('is-visible', 'is-active');

      if (distance < visibilityRange) {
        item.classList.add('is-visible');
      }

      if (distance < itemHeight / 2) {
        item.classList.add('is-active');
      }
    });
  }

  scrollbar.addListener(updateItems);

  // estado inicial
  updateItems();
}
