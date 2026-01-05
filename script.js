* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background: #0f0f0f;
  color: #ffffff;
  min-height: 100vh;
}

/* Centralização */
.wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Container do scroll */
.scroll-list {
  width: 400px;
  height: 80vh;
  background: #151515;
  overflow: hidden;
  border-radius: 12px;
}

/* Conteúdo */
.scroll-list__wrp {
  padding: 40px 20px;
}

/* Item */
.scroll-list__item {
  height: 120px;
  margin-bottom: 30px;
  background: #222;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;

  opacity: 0;
  transform: translateY(40px) scale(0.95);

  transition:
    opacity 0.4s ease,
    transform 0.4s ease,
    background 0.3s ease,
    color 0.3s ease;
}

/* Espaço final */
.scroll-list__item:last-child {
  margin-bottom: 160px;
}

/* Visível */
.scroll-list__item.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Item central */
.scroll-list__item.is-active {
  background: #ffffff;
  color: #000000;
  transform: translateY(0) scale(1.08);
}

/* Responsivo */
@media (max-width: 768px) {
  .scroll-list {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }

  .scroll-list__wrp {
    padding: 20px 15px;
  }

  .scroll-list__item {
    height: 90px;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .scroll-list__item:last-child {
    margin-bottom: 60px;
  }
}
