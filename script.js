const number = document.getElementById('number');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
const resetBtn = document.getElementById('reset-btn');
const darkModeBtn = document.getElementById('dark-mode');
const container = document.getElementsByClassName('container')[0];


let darkModeIsActive = false;
let counter = 0;

plusBtn.addEventListener('click', function() {
    counter += 1;
    number.innerHTML = counter;
})

minusBtn.addEventListener('click', function() {
    counter -= 1;
    number.innerHTML = counter;
})

resetBtn.addEventListener('click', function() {
    counter = 0;
    number.innerHTML = counter;
})

darkModeBtn.addEventListener('click', function() {
    if (darkModeIsActive) {
        darkModeIsActive = false;
        darkModeBtn.innerHTML = 'LightMode';
        document.body.style.backgroundColor = 'black';
        container.style.cssText = 'background-color: black; border: 1px solid white; box-shadow: none;';
        plusBtn.classList.add('btn-style-dark');
        minusBtn.classList.add('btn-style-dark');
        resetBtn.classList.add('btn-style-dark');
        darkModeBtn.addEventListener('mouseenter', () => darkModeBtn.style.cssText = 'color: white; background-color: black; border: 1px solid white;');
        darkModeBtn.addEventListener('mouseleave', () => darkModeBtn.style.cssText = 'color: black; background-color: white;');
    } else {
        darkModeIsActive = true;
        darkModeBtn.innerHTML = 'DarkMode';
        plusBtn.classList.remove('btn-style-dark');
        minusBtn.classList.remove('btn-style-dark');
        resetBtn.classList.remove('btn-style-dark');
        document.body.style.backgroundColor = 'lightgray';
        container.style.cssText = 'background-color: #343434;';
        darkModeBtn.style.cssText = 'color: white; background-color: #343434;';
        darkModeBtn.addEventListener('mouseenter', () => darkModeBtn.style.cssText = 'color: black; background-color: lightgrey;');
        darkModeBtn.addEventListener('mouseleave', () => darkModeBtn.style.cssText = 'color: white; background-color: #343434;');
    }
})

