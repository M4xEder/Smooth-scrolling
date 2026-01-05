const Scrollbar = window.Scrollbar;
Scrollbar.use(window.OverscrollPlugin);

const scrollContainer = document.querySelector('.js-scroll-list');
const content = document.querySelector('.js-scroll-content');
const items = document.querySelectorAll('.scroll-list__item');

const scrollbar = Scrollbar.init(scrollContainer, {
  damping: 0.08,
  plugins: {
    overscroll: true
  }
});

// estado inicial
items[0].classList.add('item-focus');
if (items[1]) items[1].classList.add('item-next');

scrollbar.addListener(({ offset }) => {
  const scrollTop = offset.y;
  const containerHeight = scrollContainer.clientHeight;

  items.forEach((item, index) => {
    const itemTop = item.offsetTop;
    const itemHeight = item.offsetHeight;

    item.classList.remove('item-focus', 'item-next');

    // Item em foco
    if (
      itemTop < scrollTop + containerHeight / 2 &&
      itemTop + itemHeight > scrollTop + containerHeight / 2
    ) {
      item.classList.add('item-focus');

      if (items[index + 1]) {
        items[index + 1].classList.add('item-next');
      }
    }
  });
});
