const range = document.querySelector('#font-size-control');

const sizeControl = (event) => {
    const text = document.querySelector('#text');
    text.style.fontSize = `${event.target.value}px`;
}

range.addEventListener('input', sizeControl);