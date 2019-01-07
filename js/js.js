var images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

var element = document.querySelector('.container');

// выводит базовые картинки
for (let i = 0; i < 10; i++) {
    var mainImage = document.createElement('div');
    mainImage.className = 'main-image';
    // mainImage.innerHTML = 'Hi';
    element.appendChild(mainImage);
}

var selectedDiv;

element.onclick = function (event) {
    var target = event.target;

    if (target.className != 'main-image') return;

    turnOverPicture(target);
} 
function turnOverPicture(node) {
    if (selectedDiv) {
        selectedDiv.classList.remove('new-color');
    }

    selectedDiv = node;
    var newInage = document.createElement('img');
    newInage.src = images[0];
    newInage.classList.add('image-game');
    selectedDiv.appendChild(newInage);
    let pathImage = element.children[0].firstChild.src;

    console.log(pathImage.substring(pathImage.length - 6));
}


