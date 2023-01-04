const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
const bodyRef = document.querySelector("body")
let timerId = null;


startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    const getRandomColor = getRandomHexColor();
    bodyRef.style.backgroundColor = `${getRandomColor}`;
  }, 1000);
  
});


stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
