const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const song = document.getElementById("loveSong");

yesBtn.addEventListener("click", () => {
  // reset in case it was played before or paused
  song.currentTime = 0;
  
  // attempt play
  song.play().catch((error) => {
    console.log("Playback blocked", error);
  });

  message.innerText =
    "Here’s to a wonderful afternoon in Hyde Park, clay painting and making memories together 🥰🎨";
});

noBtn.addEventListener("click", () => {
  message.innerText = "Nice try 😌";
});
