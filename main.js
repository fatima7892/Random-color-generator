

var container = document.querySelector('.container');
var colorCode = document.querySelector('#color-code');
var button = document.querySelector('.btn');

function getColor() {
    var symbols = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    container.style.backgroundColor = color; // Set the background color
   colorCode.textContent = color; // Update the color code displayed
}

button.addEventListener("click", getColor);

