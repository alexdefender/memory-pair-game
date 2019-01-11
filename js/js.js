const IMAGES = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
];

var gameContainer = document.getElementById('game-container');

function showCards() {
    let doubleImages = IMAGES.concat(IMAGES);
    shuffle(doubleImages);
    console.log(gameContainer);
    
    doubleImages.forEach(element => {
        console.log(element);
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `<div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front"></div>
                                        <div class="flip-card-back">
                                        <img class="image" src="${element}">
                                        </div>
                                    </div>
                                </div>`;
        gameContainer.appendChild(newDiv);
    });
}

showCards();

function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};