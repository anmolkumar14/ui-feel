const socket = io();

function updateVisual(state) {
  ['hot', 'cool', 'archive'].forEach(layer => {
    const el = document.getElementById(layer);
    if(state[layer]) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

socket.on('storageUpdate', (storageState) => {
  updateVisual(storageState);
});
