document.getElementById('player').addEventListener('loadedmetadata', function() {
  this.currentTime = 60;
  this.play();
}, false);
