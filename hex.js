const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNum()];
    }
    document.getElementById('random-bg').style.background = hexColor;
    color.textContent = hexColor;
    color.style.color = hexColor;
})

function getRandomNum() {
    return Math.floor(Math.random() * hex.length);
}
