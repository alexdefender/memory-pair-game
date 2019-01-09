const IMAGES = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
];

var element = document.querySelector('.game-container');

// выводит базовые картинки
function showCards() {
    var imagesForPlay = IMAGES.concat(IMAGES);
    for (let i = 0; i < imagesForPlay.length; i++) {
        var blockImage = document.createElement('div');

        blockImage.innerHTML = '<div class="front-image"></div><div><img class="back-image" src="' 
                            + imagesForPlay[i] + '"></div>';
        blockImage.className = 'block-image';
        element.appendChild(blockImage);
    }
}


var selectedDiv;

element.onclick = function (event) {
    var target = event.target;

    if (target.className != 'front-image') return;

    turnOverPicture(target);
}

function turnOverPicture(node) {
    // if (selectedDiv) {
    //     selectedDiv.classList.remove('new-color');
    // }

    selectedDiv = node;
    console.log(element.children);
    node.className = 'front-image hide-image';
    console.log(node);

    //console.log(pathImage.substring(pathImage.length - 6));
}


showCards();