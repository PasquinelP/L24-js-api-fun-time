
// get needed elements
const button = document.querySelector("#button-joke");
const showJoke = document.querySelector("#joke");

// use data from api
// use the right key-value and show within the html element
const showDadJoke = async () => {
  const data = await getData();
  const dadJoke = data.joke;
  showJoke.innerHTML = dadJoke;
};

button.addEventListener("click", showDadJoke);
