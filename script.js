let count = 0;
const display = document.querySelector('.counter');

function increment() {
    count++;
    display.textContent = count;
}

function decrement() {
    count--;
    display.textContent = count;
}

function reset() {
    count = 0;
    display.textContent = count;
}