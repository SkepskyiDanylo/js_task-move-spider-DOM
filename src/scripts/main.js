'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');

  if (e.target === wall) {
    const spider = document.querySelector('.spider');

    const wallSize = wall.getBoundingClientRect();

    spider.style.left = e.clientX - wallSize.x + 'px';
    spider.style.top = e.clientY - wallSize.y + 'px';
  }
});
