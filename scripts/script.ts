const songs = [
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

for (const song of songs) {
  const audioElement = document.createElement("audio");
  audioElement.className = "audio-player";
  audioElement.src = song.url;
  audioElement.controls = true;
  document.querySelector("#audio-container")?.appendChild(audioElement);
}

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
