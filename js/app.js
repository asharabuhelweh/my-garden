'use strict';
////////////////////
///// global///////
///////////////////
let form = document.getElementById('formF');
let container = document.getElementById('div container');
let table = document.createElement('table');
container.appendChild(table);
let everyThing = [];
let flowerArray = ['#image', 'name', 'season'];



////////////////////
///// constrctor///////
///////////////////
function Flower(name, category, season) {
  this.name = name;
  this.category = `./img/${category}.jpeg`;
  this.season = season;
  everyThing.push(this);
}



////////////////////
///// prototype///////
///////////////////


////////////////////
///// render functions///////
///////////////////
function header() {
  let tr = document.createElement('tr');
  table.appendChild(tr);
  for (let i = 0; i < flowerArray.length; i++) {
    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = flowerArray[i];
  }
}

// header();
//////////////////
/////body////////
function body() {
  for (let i = 0; i < everyThing.length; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let td = document.createElement('td');
    tr.appendChild(td);
    let img = document.createElement('img');
    img.setAttribute('src', everyThing[i].category);
    td.appendChild(img);

    let td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent = everyThing[i].name;

    let td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.textContent = everyThing[i].season;
    console.log(everyThing[i]);
  }
}

// body();


////////////////////
///// event listner///////
///////////////////
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let FlowerName = event.target.name.value;
  let flowerCategory = event.target.flowers.value;
  let flowerSeason = event.target.season.value;
  let flowerObj = new Flower(FlowerName, flowerCategory, flowerSeason);
  console.log(flowerName);
  header();
  body();
  localStorage.setItem('flowerList', JSON.stringify(everyThing));
  getData();
}


////////////////////
/////  get local fun ///////
///////////////////
function getData() {
  let getLocal = localStorage.getItem('flowerList');
  if (getLocal) {
    everyThing = JSON.parse(getLocal);
    table.textContent = '';
    header();
    body();
  }
}

getData();

////////////////////
///// help///////
///////////////////