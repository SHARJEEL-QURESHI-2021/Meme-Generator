let titles = document.getElementById('title');
let btn = document.getElementById('btn');
let img = document.getElementById('img');
let authors = document.getElementById('author');

const updateDetails = (url, title, author) => {
    img.setAttribute("src", url);
        titles.innerHTML = title;
        authors.innerHTML = `Meme by: ${author}`;
}

btn.addEventListener('click', () => {
    fetch("https://meme-api.com/gimme")
    .then((res) => res.json())
    .then((data) => {
        updateDetails(data.url, data.title , data.author);
    })
})