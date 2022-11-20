//dom elements
const deckBtn = document.querySelector('.get-deck');
const cardBtn = document.querySelector('.get-cards');


let deckId;

//event listeners
deckBtn.addEventListener('click', handleClick)
cardBtn.addEventListener('click', drawCards)





//functions
function handleClick() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(data => data.json())
        .then(res => {
            deckId = res.deck_id;
            cardBtn.disabled = false;
        }
        )
}

function drawCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {

            document.getElementById("cards").innerHTML = `
                <img src=${data.cards[0].image} />
                <img src=${data.cards[1].image} />
            `
        })
}

