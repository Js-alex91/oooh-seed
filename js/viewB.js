
//------------------ principal process
let BContainer = document.getElementById('BContainer')
//entry 
let result = parseInt(prompt('Give me a number'));

//display view
let bContainer = document.getElementById('BContainer')
bContainer.innerHTML+=`<h2>B Your number: ${result}</h2>`

//calculation
let calculation = result + 5;
//output
alert(calculation);


BContainer.innerHTML += `<a id="linkToC" href="view-C.html?calculation=${calculation}">Go to C</a>`




//----------------------- second process
let numberContainer = document.getElementById('showNumberFromA')
let showOutputFromD = document.getElementById('showOutputFromD')

const urlParams = new URLSearchParams(window.location.search);
const number = urlParams.get('number');
const output = urlParams.get('output');


number ? numberContainer.innerHTML+= `<h2>${number}</h2>`: numberContainer.innerHTML+= `<h2>There is not a number from A yet</h2>`
output ? showOutputFromD.innerHTML+= `<h2>${output}</h2>`: showOutputFromD.innerHTML+= `<h2>There is not an output from D yet</h2>`

   

