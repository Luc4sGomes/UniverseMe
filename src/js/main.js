const apiKey = "NsILUexllW1GPxsdbcaA2cGvRkPGE3aqKhZizmbl";
/*const url =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=NsILUexllW1GPxsdbcaA2cGvRkPGE3aqKhZizmbl";
const url2 = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";*/

const url = "https://api.nasa.gov/planetary/apod?api_key=NsILUexllW1GPxsdbcaA2cGvRkPGE3aqKhZizmbl";

// Função para renderizar os dados no HTML
function renderData(data) {
  const container = document.getElementById("apod-container");

  const title = document.createElement("h2");
  title.textContent = data.title;
  container.appendChild(title);

  if (data.media_type === "image") {
    const image = document.createElement("img");
    image.src = data.url;
    image.alt = data.title;
    container.appendChild(image);
  } else if (data.media_type === "video") {
    const video = document.createElement("iframe");
    video.src = data.url;
    video.width = "560";
    video.height = "315";
    video.allowFullscreen = true;
    container.appendChild(video);
  }

  const explanation = document.createElement("p");
  explanation.textContent = data.explanation;
  container.appendChild(explanation);
}

// Chamada da API e renderização dos dados
fetch(url)
  .then(response => response.json())
  .then(data => renderData(data))
  .catch(error => console.log(error));