const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const progressBar = document.querySelector(".player-container");

  //Get the length of the outline
  const outlineLength = outline.getTotalLength();

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //Play sound
  play.addEventListener("click", () => {
    checkPlaying(song);
  });

  //Create a function specific to stop and play the sounds
  const checkPlaying = (song) => {
    if (song.paused) {
      song.play();
      play.src = "./svg/pause.svg";
    } else {
      song.pause();
      play.src = "./svg/play.svg";
    }
  };

  //We can animate the circle
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let duration = song.duration;

    //Animate the circle
    let progress = outlineLength - (currentTime / duration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    if (duration == 0) {
      play.src = "./svg/pause.svg";
    }
  };
};

app();
