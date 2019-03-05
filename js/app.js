// 'use strict';

// var nameArray = [];
// var allProducts = [];
// var viewedImage =[];
// var clickCount = 0;
// var picsArray = [document.getElementById('random1'), document.getElementById('random2'), document.getElementById('random3')];
// var section = document.getElementById('sec');

// function ProductPics(name, ext ) {

//   this.filepath = `img/${name}.${ext}`;
//   this.name = name;
//   this.ext = ext;
//   this.views = 0;
//   this.clicks = 0;
  
//   nameArray.push(this.name);
//   allProducts.push(this);
// }

// new ProductPics('bag', 'jpg');
// new ProductPics('banana', 'jpg');
// new ProductPics('bathroom', 'jpg');
// new ProductPics('boots', 'jpg');
// new ProductPics('breakfast', 'jpg');
// new ProductPics('bubblegum', 'jpg');
// new ProductPics('chair', 'jpg');
// new ProductPics('cthulhu', 'jpg');
// new ProductPics('dog-duck', 'jpg');
// new ProductPics('dragon', 'jpg');
// new ProductPics('pet-sweep', 'jpg');
// new ProductPics('pen', 'jpg');
// new ProductPics('scissors', 'jpg');
// new ProductPics('shark', 'jpg');
// new ProductPics('sweep', 'png');
// new ProductPics('tauntaun', 'jpg');
// new ProductPics('unicorn', 'jpg');
// new ProductPics('usb', 'gif');
// new ProductPics('water-can', 'jpg');
// new ProductPics('wine-glass', 'jpg');



// function showRandomProduct() { 
//   return Math.floor(Math.random() * allProducts.length);
// }


// function displayProduct() {
//   var currentImage = [];
//   currentImage[0] = showRandomProduct();
//   while (viewedImage.indexOf(currentImage[0]) !== -1) {
//     currentImage[0] = showRandomProduct();
//   }
//   currentImage[1] = showRandomProduct();
//   while(currentImage[0] === currentImage[1] || viewedImage.indexOf(currentImage[1]) !== -1) {
//     currentImage[1] = showRandomProduct();
//   }
//   currentImage[2] = showRandomProduct();
//   while(currentImage[0] === currentImage[2] || currentImage[1] === currentImage[2] || viewedImage.indexOf(currentImage[2]) !== -1) {
//     currentImage[2] = showRandomProduct();
//   }
//   for(var i = 0; i < 3; i++) {
//     picsArray[i].src = allProducts[currentImage[i]].path;
//     picsArray[i].id = allProducts[currentImage[i]].name;
//     allProducts[currentImage[i]].views += 1;
//     viewedImage[i] = currentImage[i];
//   }
// }


// function handleClick(event) {
//   console.log(clickCount, 'total clicks');
//   if(clickCount >= 24) {
//     section.removeEventListener('click', handleClick);
//     clicks();
//   }
//   if (event.target.id === 'images') {
//     return alert('Please click on a image!');
//   }
//   clickCount += 1;
//   for(var i = 0; i < allProducts.length; i++) {
//     if(event.target.id === allProducts[i].name) {
//       allProducts[i].clicks += 1;
//       console.log(`${event.target.id} has ${allProducts[i].clicks} votes and ${allProducts[i].views} views`);
//     }
//   }
//   displayProduct();
// }

// function clicks() {
//   for(var i = 0; i < allProducts.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = `${allProducts[i].name}: ${allProducts[i].clicks} votes, ${allProducts[i].views} views.`;
//     // numberOfClicks.appendChild(liEl);
//   }
// }

// section.addEventListener('click', handleClick);
// displayProduct();

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
  currentImage[1] = showRandomProduct();
  while(currentImage[0] === currentImage[1] || viewedImage.indexOf(currentImage[1]) !== -1) {
    currentImage[1] = showRandomProduct();
  }
  currentImage[2] = showRandomProduct();
  while(currentImage[0] === currentImage[2] || currentImage[1] === currentImage[2] || viewedImage.indexOf(currentImage[2]) !== -1) {
    currentImage[2] = showRandomProduct();
  }
  for(var i = 0; i < 3; i++) {
    imgElement[i].src = allProducts[currentImage[i]].path;
    imgElement[i].id = allProducts[currentImage[i]].name;
    allProducts[currentImage[i]].views += 1;
    viewedImage[i] = currentImage[i];
  }
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
    }
  }
  displayProduct();
}

sectionTag.addEventListener('click', handleClick);
displayProduct();







