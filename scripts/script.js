var audioPlayers = document.querySelectorAll(".audio-player");
var currPlayer = null;
var prevPlayer = null;
audioPlayers.forEach(function (audioPlayer) {
    audioPlayer.addEventListener("play", function (e) {
        console.log("current player when play is clicked");
        console.log(currPlayer);
        prevPlayer = currPlayer;
        currPlayer = audioPlayer;
        console.log("current player after play is clicked");
        console.log(currPlayer);
        console.log("previous player after play is clicked");
        console.log(prevPlayer);
        prevPlayer === null || prevPlayer === void 0 ? void 0 : prevPlayer.pause();
    });
});
