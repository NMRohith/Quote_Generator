const quotes = [
  { text: "Get ready to be inspired…", author: "Motivation Bot" },
  { text: "See rejection as redirection.", author: "Anonymous" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Impossible is just an opinion.", author: "Paulo Coelho" },
  { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "You were born an original, don’t die a copy.", author: "John Mason" },
  { text: "Try to be a rainbow in someone’s cloud.", author: "Maya Angelou" },
  { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { text: "Be happy with what you have, while working for what you want.", author: "Helen Keller" }
];

function generate() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteBox = document.querySelector(".div1");
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");

  // Fade out
  quoteBox.style.opacity = 0;

  setTimeout(() => {
    quoteText.innerText = `"${quotes[randomIndex].text}"`;
    quoteAuthor.innerText = `– ${quotes[randomIndex].author}`;
    // Fade in
    quoteBox.style.opacity = 1;
  }, 300);
}

function tweetQuote() {
  const text = document.getElementById("quoteText").innerText;
  const author = document.getElementById("quoteAuthor").innerText;
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${text} ${author}`)}`;
  window.open(tweetURL, "_blank");
}
