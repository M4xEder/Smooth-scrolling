const Scrollbar = window.Scrollbar;
Scrollbar.use(window.OverscrollPlugin);

const scrollContainer = document.querySelector('.js-scroll-list');
const items = document.querySelectorAll('.scroll-list__item');

const scrollbar = Scrollbar.init(scrollContainer, {
  damping: 0.08,
  plugins: {
    overscroll: true
  }
});

// Atualiza estados de visibilidade
function updateItems() {
  const scrollTop = scrollbar.offset.y;
  const containerHeight = scrollContainer.clientHeight;
  const centerLine = scrollTop + containerHeight / 2;

  items.forEach((item) => {
    const itemTop = item.offsetTop;
    const itemHeight = item.offsetHeight;
    const itemCenter = itemTop + itemHeight / 2;

    const distance = Math.abs(centerLine - itemCenter);

    // controla quantos itens aparecem (≈ 3 visíveis)
    const visibilityRange = itemHeight * 1.5;

    item.classList.remove('is-visible', 'is-active');

    // item aparece
    if (distance < visibilityRange) {
      item.classList.add('is-visible');
    }

    // item em foco (centro)
    if (distance < itemHeight / 2) {
      item.classList.add('is-active');
    }
  });
}

// Listener de scroll
scrollbar.addListener(updateItems);

// Estado inicial
updateItems();
