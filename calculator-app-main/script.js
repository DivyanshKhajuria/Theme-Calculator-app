const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const circle = document.querySelector('#circle');
one.addEventListener('click', () => {
    var body = document.querySelector('body');
    var toggle = document.getElementById('circle');
    body.classList.remove('active1');
    body.classList.remove('active2');
    toggle.style.left = '0';
})

two.addEventListener('click', function() {
    var body = document.querySelector('body');
    body.classList.add('active1');
    body.classList.remove('active2');
    circle.style.left = '36%';
})

three.addEventListener('click', function() {
    var body = document.querySelector('body');
    body.classList.add('active2');
    body.classList.remove('active1');
    circle.style.left = '80%';
})

function del() {
    var value = document.getElementById('input').value;
    document.getElementById('input').value = value.substr(0, value.length - 1);
}

function appendValue(value) {
    document.calc.text.value += value;
}

function clearScreen() {
    document.calc.text.value = '';
}

function calculateResult() {
    document.calc.text.value = eval(document.calc.text.value);
}