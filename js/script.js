
// get needed elements
const button = document.querySelector("#button-joke");
const buttonImg = document.querySelector("#button-img-joke");
const showJoke = document.querySelector("#joke");
const showJokeImg = document.querySelector("#joke-img");

// use data from api
// use the right key-value and show within the html element
const showDadJoke = async () => {
  const data = await getData();
  const dadJoke = data.joke;
  showJoke.innerHTML = dadJoke;
};

button.addEventListener("click", showDadJoke);


// use data from api to show joke as image
// get joke id to construct img url
// create img element and add src URL
// show within html element
const showDadJokeAsImage = async () => {
  const data = await getData();
  const dadJokeID = data.id;
  const dadJokeImgUrl = `https://icanhazdadjoke.com/j/${dadJokeID}.png`;
  const dadJokeImg = document.createElement("img");
  dadJokeImg.src = dadJokeImgUrl;
  console.log(dadJokeImg);
  console.log(dadJokeImgUrl);
  showJokeImg.appendChild(dadJokeImg);
};

buttonImg.addEventListener("click", showDadJokeAsImage);
