import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

document.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem('current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});

player.on(
  'timeupdate',
  throttle(event => {
    const currentTime = event.seconds;
    localStorage.setItem('current-time', currentTime);
  }, 1000)
);
