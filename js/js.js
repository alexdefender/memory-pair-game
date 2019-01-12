const IMAGES = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
];

var gameContainer = document.getElementById('game-container');

showCards();

function showCards() {
    let doubleImages = IMAGES.concat(IMAGES);
    shuffle(doubleImages);

    doubleImages.forEach(element => {
        // console.log(element);
        let card = document.createElement('div');
        card.classList.add('flip-card');
        let item = element.split('/')[1];
        card.dataset.item = item;
        card.innerHTML = `<div class="flip-card-front"></div>
                                <div class="flip-card-back">
                                <img class="image" src="${element}">
                            </div>`;
        gameContainer.appendChild(card);
    });
}

gameContainer.addEventListener('click', flipCard);

function flipCard(event) {

    console.log(event.target);

    event.target.classList.add('flip');
}


function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
