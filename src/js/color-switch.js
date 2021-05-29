import colors from './colors';

const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    body: document.querySelector('body'),
};

// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

let start = null;

refs.startBtn.disabled = false;
refs.body.style.backgroundColor = null;


refs.startBtn.addEventListener('click', turnColors);
refs.stopBtn.addEventListener('click', finishTurnColors);

function turnColors() {
  start = steInterval(() => {
    console.log('меняет цвет');
    const pickedColors = randomIntegerFromInterval(0, colors.length);
    refs.body.style.backgroundColor = colors[pickedColors];
  }, 500);

  if (start) {
    refs.startBtn.disabled = true;
  }
}

function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function finishTurnColors() {
  clearInterval(start);
  refs.startBtn.disabled = false;
}

// refs.startBtn.addEventListener('click', () => {
//     randomIntegerFromInterval.start();
// });

// refs.stopBtn.addEventListener('click', () => {
//     randomIntegerFromInterval.stop();
// });