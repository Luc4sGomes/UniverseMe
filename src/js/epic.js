const url = "https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY";
const apiKey = "NsILUexllW1GPxsdbcaA2cGvRkPGE3aqKhZizmbl";

function renderData(data) {
  const container = document.getElementById("container");

  for (let i = 0; i < 2; i++) {
    const item = data[i];

    const div = document.createElement("div");

    const imageElement = document.createElement("img");
    imageElement.src = `https://api.nasa.gov/EPIC/archive/natural/${item.date.split(" ")[0].replace(/-/g, "/")}/png/${item.image}.png?api_key=NsILUexllW1GPxsdbcaA2cGvRkPGE3aqKhZizmbl`;
    imageElement.alt = item.caption;
    container.appendChild(imageElement);
  }
}

fetch(url)
  .then(response => response.json())
  .then(data => renderData(data))
  .catch(error => console.log(error));
