let main = document.getElementById("main")
let quoteText = document.getElementById("quoteHead")
let author = document.getElementById("author")
async function fetchText() {
    let response = await fetch('https://programming-quotes-api.herokuapp.com/quotes/random');
    let data = await response.json();
    console.log(data);
    quoteText.innerHTML = '"' + data.en + '"'
    author.textContent = data.author
}
fetchText();

//{id: '5a9b0b752bad9600044b6fcb', author: 'Danny Hillis', en: 'Computers are the most complex objects we human be…n a fundamental sense they are remarkably simple.'}

