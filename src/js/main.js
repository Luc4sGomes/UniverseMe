const apiKey = "NsILUexllW1GPxsdbcaA2cGvRkPGE3aqKhZizmbl";
const url =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY";
const url2 = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

function callUrl(url) {
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));
}

callUrl(url);
