const jokeForm = document.getElementById("JokeForm");
const keywordInput = document.getElementById("keyword");
const jokeContainer = document.getElementById("JokeContainer");

jokeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const keyword = keywordInput.value;
  if (keyword == "") {
    loadRandomDadJoke();
  } else {
    loadDadJokeByKeyword(keyword);
  }
});

function loadRandomDadJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayRandomJoke(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function loadDadJokeByKeyword(keyword) {
  fetch(`https://icanhazdadjoke.com/search?term=${keyword}`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayFilteredJoke(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function displayFilteredJoke(data) {
  jokeContainer.innerHTML = "";
  if (data.results && data.results.length > 0) {
    data.results.forEach((joke) => {
      const jokeElement = document.createElement("p");
      jokeElement.textContent = joke.joke;
      jokeContainer.appendChild(jokeElement);
    });
  } else {
    jokeContainer.textContent = "No jokes found for this keyword.";
  }
}

function displayRandomJoke(data) {
  jokeContainer.textContent = `${data.joke}`;
}
