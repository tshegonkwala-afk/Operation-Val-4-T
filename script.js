const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const song = document.getElementById("loveSong");

yesBtn.onclick = () => {
  song.play();
  message.innerText =
    "Here’s to a wonderful afternoon in Hyde Park, clay painting together and making something beautiful 🥰🎨";
};

noBtn.onclick = () => {
  message.innerText = "Nice try 😌";
};
