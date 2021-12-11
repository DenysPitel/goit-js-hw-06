const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

const onButtonClick = (step) => {
    counterValue += step;
    value.textContent = counterValue;

    console.log(counterValue);
};

btnDecrement.addEventListener("click", () => onButtonClick(-1));
btnIncrement.addEventListener("click", () => onButtonClick(+1));