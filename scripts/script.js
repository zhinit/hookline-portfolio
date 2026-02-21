var _a;
var songs = [
    {
        url: "assets/area codes.mp3",
        trackTitle: "Area Codes",
    },
    {
        url: "assets/bright lights.mp3",
        trackTitle: "Bright Lights",
    },
    {
        url: "assets/Cinderella new mix.mp3",
        trackTitle: "Cinderella",
    },
    {
        url: "assets/grillz.mp3",
        trackTitle: "Grillz",
    },
    {
        url: "assets/helicopta.mp3",
        trackTitle: "Helicopta",
    },
    {
        url: "assets/i do too.mp3",
        trackTitle: "I Do Too",
    },
    {
        url: "assets/jjc2.mp3",
        trackTitle: "Juicy Jay Can't",
    },
    {
        url: "assets/orinocco flow.mp3",
        trackTitle: "Orinocco Flow",
    },
    {
        url: "assets/praise da lawd.mp3",
        trackTitle: "Praise The Lawd",
    },
];
var audioContext = new AudioContext();
var prevAudio = null;
var prevAudioButton = null;
var _loop_1 = function (song) {
    var audioPlayer = document.createElement("div");
    audioPlayer.className = "audio-player";
    var audioElement = document.createElement("audio");
    audioElement.src = song.url;
    var track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);
    var playButton = document.createElement("button");
    playButton.textContent = "Play/Pause";
    playButton.dataset.playing = "false";
    audioPlayer.appendChild(playButton);
    var audioText = document.createElement("span");
    audioText.textContent = "Hookline - ".concat(song.trackTitle);
    audioPlayer.appendChild(audioText);
    playButton.addEventListener("click", function () {
        audioContext.resume();
        if (playButton.dataset.playing === "false") {
            prevAudio === null || prevAudio === void 0 ? void 0 : prevAudio.pause();
            if (prevAudioButton !== null)
                prevAudioButton.dataset.playing = "false";
            audioElement.play();
            playButton.dataset.playing = "true";
            prevAudio = audioElement;
            prevAudioButton = playButton;
        }
        else {
            audioElement.pause();
            playButton.dataset.playing = "false";
            prevAudio = null;
        }
    });
    (_a = document.querySelector("#audio-container")) === null || _a === void 0 ? void 0 : _a.appendChild(audioPlayer);
};
for (var _i = 0, songs_1 = songs; _i < songs_1.length; _i++) {
    var song = songs_1[_i];
    _loop_1(song);
}
