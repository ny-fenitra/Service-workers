// const anime = require('./anime-master/lib/anime.js')

const moonPath = 'M33 50C33 77.6142 50 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 33 22.3858 33 50Z';
const sunPath = 'M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z';
const path = document.querySelector('#darkMode path');

let isDark = false;

if (path.getAttribute('d') === sunPath) isDark = true;
else isDark = false;

const tl = anime.timeline({
  autoplay: false,
});

if (isDark) {
  tl.add({
    targets: '#darkMode path',
    duration: 2000,
    d: [{ value: moonPath }],
    easing: 'linear',
  })
    .add(
      {
        targets: '#darkMode',
        rotate: {
          duration: 500,
          value: '180',
        },
        easing: 'linear',
      },
      1000
    )
    .add(
      {
        targets: '#section',
        duration: 1000,
        backgroundColor: '#151515',
        easing: 'linear',
      },
      0
    );
} else {
  tl.add({
    targets: '#darkMode path',
    duration: 2000,
    d: [{ value: sunPath }],
    easing: 'linear',
  })
    .add(
      {
        targets: '#darkMode',
        rotate: {
          duration: 500,
          value: ['180', '0'],
        },
        easing: 'linear',
      },
      1000
    )
    .add(
      {
        targets: '#section',
        duration: 1000,
        backgroundColor: ['#151515', '#ffffff'],
        easing: 'linear',
      },
      0
    );
}

tl.play();
