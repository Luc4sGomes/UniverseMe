const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=NsILUexllW1GPxsdbcaA2cGvRkPGE3aqKhZizmbl";

const gallery = document.getElementById("gallery");
const keepDate = document.getElementById("keep-date");

// Função para renderizar os dados no HTML
function renderData(data) {
  data.photos.forEach(photo => {
    const img = document.createElement("img");
    const p = document.createElement("p");
    p.textContent = photo.earth_date;
    p.style.color = "black";
    p.style.fontWeight = "bold";
    img.src = photo.img_src;
    img.alt = photo.id;
    img.style.width = "280px";
    img.style.height = "280px";
    p.style.zIndex = "1";
    gallery.appendChild(img);
    keepDate.appendChild(p);
  });
}


// Chamada da API e renderização dos dados
fetch(url)
  .then(response => response.json())
  .then(data => renderData(data))
  .catch(error => console.log(error));