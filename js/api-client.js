/*
API
icanhazdadjoke.com can be used as an API for fetching a random joke, a specific joke, or searching for jokes in a variety of formats.

Calling the API
Authentication
No authentication is required to use the icanhazdadjoke.com API. 
*/

const apiUrl = "https://icanhazdadjoke.com/";

// use async/await to fetch data from api
// use according to api documentation
const getData = async () => {
  const apiEndpoint = apiUrl;
  try {
    const res = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("The following went wrong: ", error);
  }
};
