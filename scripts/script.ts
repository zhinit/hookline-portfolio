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

const audioContext = new AudioContext();
let prevAudio: HTMLAudioElement | null = null;
let prevAudioButton: HTMLButtonElement | null = null;

for (const song of songs) {
  const audioPlayer = document.createElement("div");
  audioPlayer.className = "audio-player";

  const audioElement = document.createElement("audio");
  audioElement.src = song.url;
  const track = audioContext.createMediaElementSource(audioElement);
  track.connect(audioContext.destination);

  const playButton = document.createElement("button");
  playButton.textContent = "Play/Pause";
  playButton.dataset.playing = "false";
  audioPlayer.appendChild(playButton);

  const audioText = document.createElement("span");
  audioText.textContent = `Hookline - ${song.trackTitle}`;
  audioPlayer.appendChild(audioText);

  playButton.addEventListener("click", () => {
    audioContext.resume();
    if (playButton.dataset.playing === "false") {
      prevAudio?.pause();
      if (prevAudioButton !== null) prevAudioButton.dataset.playing = "false";

      audioElement.play();
      playButton.dataset.playing = "true";

      prevAudio = audioElement;
      prevAudioButton = playButton;
    } else {
      audioElement.pause();
      playButton.dataset.playing = "false";
      prevAudio = null;
    }
  });

  document.querySelector("#audio-container")?.appendChild(audioPlayer);
}
