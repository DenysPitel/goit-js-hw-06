const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const change = (event) => {
    if(event.currentTarget.value) {
        output.textContent = event.currentTarget.value;
    }else{
        output.textContent = 'Anonymous';
    }
}

textInput.addEventListener("input", change);