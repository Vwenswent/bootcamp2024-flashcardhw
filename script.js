const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    document.getElementById('card-content').innerHTML = flashcards[currentIndex].term;
}

function displayDefinition() {
    document.getElementById('card-content').innerHTML = flashcards[currentIndex].definition;
}

function next() {
    if(currentIndex == flashcards.length-1){
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    displayCard();
    showingTerm = true;
}

function prev () {
    if(currentIndex == 0){
        currentIndex = flashcards.length-1;
    } else {
        currentIndex--;
    }
    displayCard();
    showingTerm = true;
}

function addCard() {
    let theTerm = document.getElementById('new-term').value;
    let theDefinition = document.getElementById('new-definition').value;
    document.getElementById('new-term').value = '';
    document.getElementById('new-definition').value = '';
    flashcards.push( {term: theTerm, definition: theDefinition});
}

function flipCard() {
    if(showingTerm){
        displayDefinition();
        showingTerm = false;
    } else {
        displayCard();
        showingTerm = true;
    }
}


// The rest of the code you will write is apart of event listeners
document.getElementById('next-btn').addEventListener('click', ()=>(next()));
document.getElementById('prev-btn').addEventListener('click', ()=>(prev()));
document.getElementById('add-card-btn').addEventListener('click', ()=>(addCard()));
document.getElementById('flashcard').addEventListener('click', ()=>(flipCard()));

// This line will display the card when the page is refreshed
window.onload = displayCard;
