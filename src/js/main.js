const cards = document.getElementById("card");

cards.addEventListener("click", () => {
  console.log("oi");
  updateDisplay();
});


function updateDisplay() {
  const urlNasa = "https://api.nasa.gov/planetary/apod";

  fetch(urlNasa)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Http error:${response.status}`);
      }

      return response.json();
    })
    .catch(error => {
      console.log("error");
    });
}
