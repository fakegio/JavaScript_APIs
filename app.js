
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchBtn = document.querySelector("#submitSearch");
const searchInput = document.querySelector("#searchWord");
const imageElement = document.querySelector("#imageContainer img");
const feedback = document.querySelector("p");
const api_key = config.GIPHY_API_KEY;

searchBtn.addEventListener("click", (e) => {

    let searchString = searchInput.value;
    let translateURL = "https://api.giphy.com/v1/gifs/translate?api_key=" + api_key + "&s="

    if (!searchString) {
        feedback.innerText = "Result cannot be empty";
        return;
    }

    fetch(translateURL+searchString)
        .then((data)=> data.json())
        .then((response) => {
            imageElement.src = response.data.images.original.url;
            searchInput.value = "";
            feedback.innerText = searchString;
        })
        .catch((e) => {
            feedback.innerText = e.message;
        });
});