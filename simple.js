const colors = ["rgb(100, 100, 255)", "rgb(200, 200, 50)", "rgb(180, 130, 160)", "rgb(80, 200, 30)", "rgb(200, 150, 50)", "rgb(200, 200, 200)", "rgb(0, 160, 0)", "rgb(0, 80, 200)", "rgb(200, 0, 40)", "rgb(170, 180, 120)"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNum = getRandomNum();
    document.getElementById('random-bg').style.background = colors[randomNum];
    color.textContent = colors[randomNum];
    color.style.color = colors[randomNum];
});

function getRandomNum() {
        return Math.floor(Math.random() * colors.length);
}