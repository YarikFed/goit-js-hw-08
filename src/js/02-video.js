import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const player = new Vimeo(document.getElementById('vimeo-player'));

  const storedTime = localStorage.getItem('videoplayer-current-time');
  const initialTime = storedTime ? parseFloat(storedTime) : 0;

  player.setCurrentTime(initialTime);

  player.on('timeupdate', throttle(function (data) {
    const currentTime = data.seconds;
    
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000));
});
