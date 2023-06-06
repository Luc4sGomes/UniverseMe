const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=NsILUexllW1GPxsdbcaA2cGvRkPGE3aqKhZizmbl";

// Função para renderizar os dados no HTML
function renderData(data) {
  const gallery = document.getElementById("gallery");

  data.photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.img_src;
    img.alt = photo.id;
    img.style.width = "190px";
    img.style.height = "190px";
    gallery.appendChild(img);
  });
}

// Chamada da API e renderização dos dados
fetch(url)
  .then(response => response.json())
  .then(data => renderData(data))
  .catch(error => console.log(error));