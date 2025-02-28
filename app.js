console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchBtn = document.querySelector("#submitSearch");
const searchInput = document.querySelector("#searchWord");
const imageElement = document.querySelector("#imageContainer img");
const feedback = document.querySelector("p");
console.log(document.querySelector("p").innerText)

searchBtn.addEventListener("click", (e) => {

    let searchString = searchInput.value;
    let translateURL = "https://api.giphy.com/v1/gifs/translate?api_key=U7oFIyV4PoXhPZowdA9GMh3CSOXAGggd&s="

    if (!searchString) {
        feedback.innerText = "Result cannot be empty";
        return;
    }

    fetch(translateURL+searchString)
        .then((data)=> data.json())
        .then((response) => {
            imageElement.src = response.data.images.original.url;
            searchInput.value = "";
            feedback.innerText = "";
        })
        .catch((e) => {
            feedback.innerText = e.message;
        });
});