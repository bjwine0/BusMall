'use strict';


// var clickLimit = 0; //limit of 25
// var
var allProducts = [];


var productpics = document.getElementById('productpics');


function ProductPics(name, ext ) {

  this.filepath = `img/${name}.${ext}`;
  this.name = name;
  this.ext = ext;
  this.views = 0;

  allProducts.push(this);

}

new ProductPics('bag', 'jpg');
new ProductPics('banana', 'jpg');
new ProductPics('bathroom', 'jpg');
new ProductPics('boots', 'jpg');
new ProductPics('breakfast', 'jpg');
new ProductPics('bubblegum', 'jpg');
new ProductPics('chair', 'jpg');
new ProductPics('cthulhu', 'jpg');
new ProductPics('dog-duck', 'jpg');
new ProductPics('dragon', 'jpg');
new ProductPics('pet-sweep', 'jpg');
new ProductPics('pen', 'jpg');
new ProductPics('scissors', 'jpg');
new ProductPics('shark', 'jpg');
new ProductPics('sweep', 'png');
new ProductPics('tauntaun', 'jpg');
new ProductPics('unicorn', 'jpg');
new ProductPics('usb', 'gif');
new ProductPics('water-can', 'jpg');
new ProductPics('wine-glass', 'jpg');



function showRandomProduct() {
  var random = Math.floor(Math.random() * allProducts.length);
  productpics.src = allProducts[random].filepath;
  productpics.alt = allProducts[random].name;
  productpics.title = allProducts[random].name;
  allProducts[random].views++;

  console.log('current goat', allProducts[random]);



}

showRandomProduct();

console.log(allProducts, this.views);








