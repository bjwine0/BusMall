'use strict';


var allProducts = [];
var sectionTag = document.getElementById('images');
var viewedImage = [];
var imgElement = [document.getElementById('one'), document.getElementById('two'), document.getElementById('three')];
var numberOfClicks = document.getElementById('number-of-clicks');
var totalClicks = 0;

function BusMall(name, ext) {
  this.name = name;
  this.path = `img/${name}.${ext}`;
  this.ext = ext;
  this.click = 0;
  this.views = 0;
  allProducts.push(this);
  console.log(allProducts);
}

new BusMall('bag', 'jpg');
new BusMall('banana', 'jpg');
new BusMall('bathroom', 'jpg');
new BusMall('boots', 'jpg');
new BusMall('breakfast', 'jpg');
new BusMall('bubblegum', 'jpg');
new BusMall('chair', 'jpg');
new BusMall('cthulhu', 'jpg');
new BusMall('dog-duck', 'jpg');
new BusMall('dragon', 'jpg');
new BusMall('pen', 'jpg');
new BusMall('pet-sweep', 'jpg');
new BusMall('scissors', 'jpg');
new BusMall('shark', 'jpg');
new BusMall('sweep', 'png');
new BusMall('tauntaun', 'jpg');
new BusMall('unicorn', 'jpg');
new BusMall('water-can', 'jpg');
new BusMall('wine-glass', 'jpg');
new BusMall('usb', 'gif');

function showRandomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}

function displayProduct() {
  var currentImage = [];
  currentImage[0] = showRandomProduct();
  while (viewedImage.indexOf(currentImage[0]) !== -1) {
    currentImage[0] = showRandomProduct();
  }
  console.log(viewedImage.indexOf(currentImage[0]));
  console.log(currentImage);
  console.log(viewedImage);
  currentImage[1] = showRandomProduct();
  while(currentImage[0] === currentImage[1] || viewedImage.indexOf(currentImage[1]) !== -1) {
    currentImage[1] = showRandomProduct();
  }
  console.log(viewedImage.indexOf(currentImage[1]));
  console.log(currentImage);
  console.log(viewedImage);
  currentImage[2] = showRandomProduct();
  while(currentImage[0] === currentImage[2] || currentImage[1] === currentImage[2] || viewedImage.indexOf(currentImage[2]) !== -1) {
    currentImage[2] = showRandomProduct();
  }
  console.log(viewedImage.indexOf(currentImage[2]));
  console.log(currentImage);
  console.log(viewedImage);
  for(var i = 0; i < 3; i++) {
    imgElement[i].src = allProducts[currentImage[i]].path;
    imgElement[i].id = allProducts[currentImage[i]].name;
    allProducts[currentImage[i]].views += 1;
    viewedImage[i] = currentImage[i];
  }
  console.log(viewedImage);
}

function handleClick(event) {
  console.log(totalClicks, 'total clicks');
  if(totalClicks >= 24) {
    sectionTag.removeEventListener('click', handleClick);
    clicks();
  }
  totalClicks += 1;
  
  for(var i = 0; i < allProducts.length; i++) {
    if(event.target.id === allProducts[i].name) {
      allProducts[i].click += 1;
      console.log(`${event.target.id} has ${allProducts[i].click} clicks and ${allProducts[i].views} views`);
      console.log(allProducts);
    }
  }
  displayProduct();
}

function clicks() {
  for(var i = 0; i < allProducts.length; i++) {
    var liElem = document.createElement('li');
    liElem.textContent = `${allProducts[i].name}: ${allProducts[i].click} clicks, ${allProducts[i].views} views.`;
    numberOfClicks.appendChild(liElem);
  }
}

sectionTag.addEventListener('click', handleClick);
displayProduct();




// var a = [];
// var b;
// var c = false;

// function Number(title, identifier) {
//   this.title = title;
//   this.identifier = identifier;
//   this.votes = 0;

//   a.push(this);
// }
// new Number ('fake', 'goo');
// new Number ('trio', 'pizza');


// function showSong () {
//   var songlist = document.getElementById('list');

//   songlist.innerHTML = '';

//   for (var i = 0; i < a.length; i++) {
//     var listElem = document.createElement('li');
//     listElem.textContent = a[i].title + ', ' + a[i].votes + ' votes';
//     songlist.appendChild(listElem);
//   }

// }
// function tally(thisNumber) {
//   for ( var i = 0; i < a.length; i++) {
//     if (thisNumber === a[i].identifier) {
//       a[i].votes++;
//     }
//   }
// }

// document.getElementById('voting').addEventListener('click', function(event) {
//   tally(event.target.id);
// });

// document.getElementById('but-list').addEventListener('click', function() {
//   showSong(event.target.id);
// });



