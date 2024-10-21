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
        let randomPlace = Math.floor(Math.random() * cards.length);
        let tempCard = cards[i];
        cards[i] = cards[randomPlace];
        cards[randomPlace] = tempCard;
    }
    showCards(cards);

})

let selectedCards = [];
let foundCards = 0;
let twoOpened = false;

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

    for (let card of cardElements) {
        card.addEventListener("click", function () {
            clickedCards(card);
        });
    };
}

function clickedCards(card) {
    if (twoOpened) return;

    // Show card's face
    let cardFace = card.querySelector(".card-face");
    let coverCard = card.querySelector(".card-cover");

    cardFace.style.display = "block"; // Show card's face
    coverCard.style.display = "none"; // Hide card's back

    selectedCards.push(card);

    if (selectedCards.length === 2) {
        twoOpened = true;

       setTimeout(checkForMatch, 1000);
    }
}

function checkForMatch() {

    let firstSource = selectedCards[0].querySelector(".card-face img").src;
    let secondSource = selectedCards[1].querySelector(".card-face img").src;

    if (firstSource === secondSource) {
        twoOpened = false;
        foundCards++;
        selectedCards = [];
        console.log(foundCards);
    } else {
        twoOpened = false;
        let firstFace = selectedCards[0].querySelector(".card-face");
        let firstCover = selectedCards[0].querySelector(".card-cover");
        let secondFace = selectedCards[1].querySelector(".card-face");
        let secondCover = selectedCards[1].querySelector(".card-cover");
        
            firstFace.style.display = "none";
            firstCover.style.display = "block";

            secondFace.style.display = "none";
            secondCover.style.display = "block";

        selectedCards = [];
    }
}