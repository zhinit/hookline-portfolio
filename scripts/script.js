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
for (var _i = 0, songs_1 = songs; _i < songs_1.length; _i++) {
    var song = songs_1[_i];
    var audioElement = document.createElement("audio");
    audioElement.className = "audio-player";
    audioElement.src = song.url;
    audioElement.controls = true;
    (_a = document.querySelector("#audio-container")) === null || _a === void 0 ? void 0 : _a.appendChild(audioElement);
}
var audioPlayers = document.querySelectorAll(".audio-player");
var currPlayer = null;
var prevPlayer = null;
audioPlayers.forEach(function (audioPlayer) {
    audioPlayer.addEventListener("play", function (e) {
        prevPlayer = currPlayer;
        currPlayer = audioPlayer;
        prevPlayer === null || prevPlayer === void 0 ? void 0 : prevPlayer.pause();
    });
});
