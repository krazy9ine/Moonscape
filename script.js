document.addEventListener('click', function () {
    var audio = document.getElementById('backgroundAudio');
    if (audio.paused) {
        audio.play();
    }
});

document.getElementById('backgroundAudio').addEventListener('ended', function () {
    this.play();
});