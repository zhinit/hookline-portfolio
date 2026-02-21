const audioPlayers: NodeListOf<HTMLAudioElement> =
  document.querySelectorAll(".audio-player");
let currPlayer: HTMLAudioElement | null = null;
let prevPlayer: HTMLAudioElement | null = null;

audioPlayers.forEach((audioPlayer) => {
  audioPlayer.addEventListener("play", (e) => {
    prevPlayer = currPlayer;
    currPlayer = audioPlayer;
    prevPlayer?.pause();
  });
});
