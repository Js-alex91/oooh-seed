
//output
let output = 8;
alert(output);
let btnToB = document.getElementById('btnToB')

document.body.innerHTML += `<a class="btn-custom" id="linkToB" href="view-B.html?output=${output}">
ButtonB
</a>`
let linktoB = document.getElementById('linktoB')


/*  working whith promises   ---------------------*/

const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');


const getPromise = (mensaje) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mensaje);
        }, 1000);
    });
}

//first
btn1.addEventListener('click', () => {
    getPromise('Hello, this is the resolved promise').then(data => {
        document.body.innerHTML += `<h1>${data}</h1>`;
    });
});

//set time out for second process
setTimeout(() => {
    getPromise('Click 5').then(data => {
        alert(data);
    });
}, 5000);

//second
btn2.addEventListener('click', () => {
    getPromise('Click 5').then(data => {
        alert(data);
    });
})

//third
btn3.addEventListener('click', () => {
    //set time out for third process
    setTimeout(() => {
        alert('Click 7')
    }, 7000);
})

/*
const sound = document.querySelector('.sound');
sound.addEventListener('onmousedown', () => {
    sonido.play()
  })
  document.getElementById('sound').addEventListener('mousedown', sonido.play)
  */

let sound = new Audio();
sound.src = "sonido.mp3";


const original = document.getElementById('mod-one');
const orange = document.getElementById('mod-two');

original.addEventListener('click', () => {
    document.getElementById("box-1").classList.remove('bg-3');
    document.getElementById("box-2").classList.remove('bg-4');
    document.getElementById("box-3").classList.remove('bg-3');
    document.getElementById("box-4").classList.remove('bg-4');
    document.getElementById("box-5").classList.remove('bg-3');
    document.getElementById("box-6").classList.remove('bg-4');
    document.getElementById("box-1").classList.add('bg-1');
    document.getElementById("box-2").classList.add('bg-2');
    document.getElementById("box-3").classList.add('bg-1');
    document.getElementById("box-4").classList.add('bg-2');
    document.getElementById("box-5").classList.add('bg-1');
    document.getElementById("box-6").classList.add('bg-2');
})

orange.addEventListener('click', () => {
    document.getElementById("box-1").classList.remove('bg-1');
    document.getElementById("box-2").classList.remove('bg-2');
    document.getElementById("box-3").classList.remove('bg-1');
    document.getElementById("box-4").classList.remove('bg-2');
    document.getElementById("box-5").classList.remove('bg-1');
    document.getElementById("box-6").classList.remove('bg-2');
    document.getElementById("box-1").classList.add('bg-3');
    document.getElementById("box-2").classList.add('bg-4');
    document.getElementById("box-3").classList.add('bg-3');
    document.getElementById("box-4").classList.add('bg-4');
    document.getElementById("box-5").classList.add('bg-3');
    document.getElementById("box-6").classList.add('bg-4');
})

/*
const url = '#'
fetch(url)
.then(res => res.json())
.then(data =>{
    let element = document.getElementById('element')
    element.innerHTML = '<p>${data.Author}<p>'
})
.catch(err=>console.log(err))
*/
