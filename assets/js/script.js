document.addEventListener("DOMContentLoaded", function () {
    let cards = [`<img src="assets/images/1.png">`,
        `<img src="assets/images/1.png">`,
        `<img src="assets/images/2.png">`,
        `<img src="assets/images/2.png">`,
        `<img src="assets/images/3.png">`,
        `<img src="assets/images/3.png">`,
        `<img src="assets/images/4.png">`,
        `<img src="assets/images/4.png">`
    ];

    //Shuffle the cards
    for (let i = 0; i < cards.length; i++) {
        let randomPlace = Math.floor(Math.random() * 8);
        let tempCard = cards[i];
        cards[i] = cards[randomPlace];
        cards[randomPlace] = tempCard;
    }
    showCards(cards);
})

/**
 * Showing the cards 
 */
function showCards(cards) {
    let cardsContainer = document.getElementById("cards-container");
    let cardsHtml = '';

    //Back of the cards
    let coverCard = `<img class="card-cover" src="assets/images/cover.png">`;

    for (let card of cards) {
        //showing back of the card
        cardsHtml += `<div class="card">
        ${coverCard}
        <div class="card-face">${card}</div>
        </div>`;
    }
    cardsContainer.innerHTML = cardsHtml;

    addCardEventListeners();
}

function addCardEventListeners() {
    let cardElements = document.querySelectorAll(".card");
    console.log(cardElements);

    for (let card of cardElements) {
        card.addEventListener("click", function () {
            clickedCards(card);
        });
    };
}

function clickedCards(card) {
    // Show card's face
    let cardFace = card.querySelector(".card-face");
    let coverCard = card.querySelector(".card-cover");

    cardFace.style.display = "block"; // Show card's face
    coverCard.style.display = "none"; // Hide card's back
}