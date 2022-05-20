const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// 1 uzduotis
const h2DOM = document.querySelectorAll('h2');

for (i = 0; i < h2DOM.length; i++){
    $randNum = rand(1, 6);
    h2DOM[i].innerHTML += `${$randNum}`;
}

const buttonDOM = document.querySelector('button');

function changeRand(){
    for (i = 0; i < h2DOM.length; i++){
        $randNum = rand(1, 6);
        h2DOM[i].innerHTML = `${$randNum}`;
    }
    if(h2DOM[0].innerHTML == h2DOM[1].innerHTML){
        for (i = 0; i < h2DOM.length; i++){
            h2DOM[i].style.color = 'red';
        }
    }
}

buttonDOM.addEventListener('click', changeRand);

// 2 uzduotis

const numbArray = [];

const button2DOM = document.querySelector('.button2');

function pushNumb (){
    let randNum = rand(1, 10);
    numbArray.push(randNum);
    console.log(numbArray);
}
button2DOM.addEventListener('click', pushNumb);

const h3DOM = document.querySelector('h3');

let sum = 0;

function sumH3(){
    for(let i = 0; i < numbArray.length; i++){
        sum += numbArray[i];
    }
    h3DOM.innerHTML = `${sum}`;
}

button2DOM.addEventListener('click', sumH3);

// 3 uzduotis
ulDOM = document.querySelector('ul');

for(let i = 0; i < africa.length; i++){
    console.log(africa[i]);
    let africaList = document.createElement('li');
    if(africa[i] !== '') {
        africaList.innerHTML = `${africa[i]}`;
        console.log(africaList);
        ulDOM.appendChild(africaList);
    }
}

// 4 uzduotis

// 5 uzduotis

ul2DOM = document.querySelector('.ul2');
for(let i = 0; i < australia.length; i++){
    console.log(australia[i]);
    let australiaElement = document.createElement('li');
        let australiaList = ``;
        australiaElement.innerHTML = `${australia[i]}`;
        console.log(australiaElement);
        australiaList += `${australiaElement}`;
        ul2DOM.innerHTML += `${australia[i]} `;
}










