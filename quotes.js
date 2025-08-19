//Array of quotes//
const quotes = [
    "Success doesn't come to those who wait for an opportunity, but those to create an opportunity to reach their dreams.",
    "All you have to do is try",
    "Keep going. No matter the distance, you'll get there, eventually.",
    "Every misstep, is a step in the right direction.",
    "If you give up now, then all is lost. But if you stay, you're one step closer to your dream",
    "Dwell not on your failures, rather rejoice in the gained experience.",
    "The stage is yours, own it.",
    "Your future is bright, keep going.",
    "Regardless of what happens, you've tried, and that's enough.",
    "Get up and try again.",
];

//Quote box and New Quote Button//
const quoteBox = document.getElementById("quote-box");
const newQuoteButton = document.getElementById("new-quote-bttn");
const downloadButton = document.getElementById("download-html");

//Random Quote Function//
function showRandomQuote(){
    const randomIndex = Math.floor(Math.random()*quotes.length);
    const randomQuote = quotes[randomIndex];
    currentQuote = randomQuote;
    quoteBox.textContent = randomQuote;
}

// Random quote when page loads//
window.addEventListener('DOMContentLoaded', showRandomQuote);

//Event Listener for Random Quote When Clicked //
newQuoteButton.addEventListener('click', showRandomQuote);

// Fetching CSS and inserting in HTML under header section to carry over styles when downloading //

downloadButton.addEventListener("click", function () {
    fetch("studyschedule.css")
        .then(function(res) {
            return res.text();
        })
        .then(function(css) {
            // Get the full HTML of the page
            let html = document.documentElement.outerHTML;

            // Insert fetched CSS into <head>
            html = html.replace(/<\/head>/i, "<style>" + css + "</style></head>");

            // Create a Blob from the HTML string
            const blob = new Blob([html], { type: "text/html" });

            // Create temporary download link
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "index.html";

            // Trigger the download
            a.click();

            // Clean up URL object
            URL.revokeObjectURL(a.href);
        })
        .catch(function() {
            alert("Couldn't load the required CSS file. Is the file name correct?");
        });
});

// Make all editable cells contenteditable so users can edit them
    document.querySelectorAll('.editable').forEach(el => {
        el.setAttribute('contenteditable', 'true');
        el.addEventListener('focus', () => {
            el.style.outline = "2px solid #3A6EA5";
            el.style.backgroundColor = "#f0f8ff";
        });
        el.addEventListener('blur', () => {
            el.style.outline = "";
            el.style.backgroundColor = "";
        });
    });
