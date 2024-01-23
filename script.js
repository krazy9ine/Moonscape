document.addEventListener('click', function () {
    var audio = document.getElementById('backgroundAudio');
    if (audio.paused) {
        audio.play();
    }
});

// You can use the ended event to restart the audio when it finishes
document.getElementById('backgroundAudio').addEventListener('ended', function () {
    this.play();
});