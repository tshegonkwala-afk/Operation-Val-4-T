const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const buttonArea = document.getElementById("buttonArea");
const minionGif = document.getElementById("minionGif");

const messageText = "Here's to a wonderful afternoon clay painting.";

const moveNoButton = () => {
  const areaRect = buttonArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  const maxX = areaRect.width - btnRect.width;
  const maxY = areaRect.height - btnRect.height;
  const randomX = Math.max(0, Math.random() * maxX);
  const randomY = Math.max(0, Math.random() * maxY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
};

const launchConfetti = () => {
  const colors = ["#ff4d88", "#ffd1e8", "#ffb3c7", "#b30059", "#ffe6ee"];
  const pieces = 80;

  for (let i = 0; i < pieces; i += 1) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.setProperty("--x", `${(Math.random() - 0.5) * 200}px`);
    confetti.style.animationDelay = `${Math.random() * 0.3}s`;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(confetti);

    confetti.addEventListener("animationend", () => {
      confetti.remove();
    });
  }
};

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  message.innerText = messageText;
  minionGif.hidden = false;
  launchConfetti();
});
