function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', onBtnClick)

function onBtnClick () {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = `${document.body.style.backgroundColor}`;
}
