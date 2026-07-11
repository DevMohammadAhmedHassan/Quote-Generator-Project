// Variables
let quoteText = document.querySelector(".quote h1");
let quoteBtn = document.querySelector(".quote button");
let lastIndex = -1;

// Logic

let quotes = [
    "Practice makes a man perfect!",
    "The best way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "The future depends on what you do today.",
    "Stay positive, work hard, and make it happen.",
    "Your only limit is your mind.",
    "Do something today that your future self will thank you for.",
    "Difficult roads often lead to beautiful destinations.",
    "Great things never come from comfort zones.",
    "Don't watch the clock; do what it does. Keep going.",
];

const generateQuote = () => {

    let randomIndex;

    // Generate a random index that is not the same as the last index
    do {

        randomIndex = Math.floor(Math.random() * quotes.length);

    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    quoteText.innerHTML = quotes[randomIndex];
    console.log(`Quote generated: ${quoteText.innerHTML}`);

};

// Event Listeners
quoteBtn.addEventListener("click", generateQuote);