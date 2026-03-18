'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');

  if (e.target === wall) {
    const spider = document.querySelector('.spider');
    const startWidth =
      (window.innerWidth - wall.clientWidth + spider.clientWidth) / 2;
    const startHeight =
      (window.innerHeight - wall.clientHeight + spider.clientHeight) / 2;

    spider.style.left = e.x - startWidth + 'px';
    spider.style.top = e.y - startHeight + 'px';
  }
});
