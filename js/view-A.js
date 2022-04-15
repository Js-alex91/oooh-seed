
var boton = document.getElementById("btn");
let numberBContainer = document.getElementById('showNumberFromA')

function takeNumber(e) {
  e.preventDefault();
  let number = parseInt(document.getElementById("num").value);
  document.body.innerHTML += `<h1>Outout: ${number}</h1>`;

  document.body.innerHTML += `<a href="view-B.html?number=${number}" id="goToB">Go B</a>`;
  let linkToB = document.getElementById("goToB");
  linkToB.style.opacity = 0;

  setTimeout(() => {
    linkToB.click();
  }, 1000);
}

boton.addEventListener("click", takeNumber);






