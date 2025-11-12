
let audio;

document.addEventListener('DOMContentLoaded', () => {
  audio = document.getElementById('player');

  document.body.addEventListener('click', (event) => {
    if (event.target.className === 'activate') {
      const elementName = event.target.parentElement.children[3].children[2].children[1].innerHTML;
      const filePath = 'tablesounds/' + elementName + '.ogg';
      const fallbackPath = 'tablesounds/404.ogg';

      fetch(filePath, { method: 'HEAD' })
        .then(response => {
          const validPath = response.ok ? filePath : fallbackPath;
          audio.src = validPath;
          audio.play();
        })
        .catch(() => {
          audio.src = fallbackPath;
          audio.play();
        });

    } else if (event.target.className === 'deactivate') {
      audio.pause();
      audio.currentTime = 0;
    }
  });
});
