'use strict';


var allProducts = [];
var sectionTag = document.getElementById('images');
var viewedImage = [];
var imgElement = [document.getElementById('one'), document.getElementById('two'), document.getElementById('three')];
var numberOfClicks = document.getElementById('number-of-clicks');
var totalClicks = 0;
var titles = [];
var counter = document.getElementById('counter');
var bye = document.getElementById('bye');

// debugger;
function BusMall(name, ext) {
  this.name = name;
  this.path = `img/${name}.${ext}`;
  this.ext = ext;
  this.click = 0;
  this.views = 0;
  allProducts.push(this);
  titles.push(this.name);

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
  // console.log(viewedImage.indexOf(currentImage[0]));
  // console.log(currentImage);
  // console.log(viewedImage);
  currentImage[1] = showRandomProduct();
  while(currentImage[0] === currentImage[1] || viewedImage.indexOf(currentImage[1]) !== -1) {
    currentImage[1] = showRandomProduct();
  }
  // console.log(viewedImage.indexOf(currentImage[1]));
  // console.log(currentImage);
  // console.log(viewedImage);
  currentImage[2] = showRandomProduct();
  while(currentImage[0] === currentImage[2] || currentImage[1] === currentImage[2] || viewedImage.indexOf(currentImage[2]) !== -1) {
    currentImage[2] = showRandomProduct();
  }
  // console.log(viewedImage.indexOf(currentImage[2]));
  // console.log(currentImage);
  // console.log(viewedImage);
  for(var i = 0; i < 3; i++) {
    imgElement[i].src = allProducts[currentImage[i]].path;
    imgElement[i].id = allProducts[currentImage[i]].name;
    allProducts[currentImage[i]].views += 1;
    viewedImage[i] = currentImage[i];

  }
  
  console.log('currentimage', currentImage);
  console.log('viewedimage', viewedImage);
}
// displayProduct();


sectionTag.addEventListener('click', handleClick);

function handleClick(event) {
  // debugger;
  // console.log(totalClicks, 'total clicks');
  if(totalClicks >= 24) {
    sectionTag.removeEventListener('click', handleClick);
    bye.remove();
    showClicks();
    showChart();
    // checkLocalStorage();
  }
  totalClicks ++;
  console.log('totalclicks', totalClicks);
  counter.textContent = `You have voted ${totalClicks} times.`;
  for(var i = 0; i < allProducts.length; i++) {
    if(event.target.id === allProducts[i].name) {
      allProducts[i].click += 1;
      console.log(`${event.target.id} has ${allProducts[i].click} clicks and ${allProducts[i].views} views`);
    }
  }
  // console.log('allproducts', allProducts);
  displayProduct();
}

function showClicks() {
  for(var i = 0; i < allProducts.length; i++) {
    if(event.target.id === allProducts[i].name) {
      allProducts[i].click += 1;
    }

    var liElem = document.createElement('li');
    liElem.textContent = `${allProducts[i].name}: ${allProducts[i].click} clicks, ${allProducts[i].views} views, ${((allProducts[i].click / allProducts[i].views) * 100).toFixed(1)}%`;
    numberOfClicks.appendChild(liElem);
    gotClicks[i] = allProducts[i].click;
    gotViews[i] = allProducts[i].views;
    percentage[i]= ((allProducts[i].click / allProducts[i].views)* 100).toFixed(1);

    // localStorage.setItem('gotClicks', JSON.stringify(gotClicks));
  }
  console.log('gotclicks', gotClicks);
  localStorage.setItem('gotClicks', JSON.stringify(gotClicks));
  localStorage.setItem('gotViews', JSON.stringify(gotViews));
  localStorage.setItem('percentage', JSON.stringify(percentage));

  // checkLocalStorage();
}


var percentage = [];
var gotViews = [];
var gotClicks = [];

// console.log('gotclicks', gotClicks);
// console.log('allproducts', allProducts);

var ctx = document.getElementById('myChart').getContext('2d');

function showChart () {

  var data = {
    labels: titles,
    datasets: [{
      label: 'Votes',
      backgroundColor: '#070D59',
      borderWidth: 1,
      data: gotClicks,
    }]
  };
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      legend: {
        labels: {
          fontColor: 'white'
        }
      },
      title: {
        display: true,
        fontColor: 'white',
        text: 'Your Vote Results',
        fontSize: 60
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            fontSize: 20,
            fontColor: 'Black'
          }
        }],
        xAxes: [{
          ticks: {
            fontSize: 20,
            fontColor: 'Black'
          }
        }]
      }
    }
  });

  var viewsData = {
    label: 'Views',
    data: gotViews,
    backgroundColor: '#FF5D9E',
    borderWidth: 1,
  };
  data.datasets.push(viewsData);
  myChart.update();

  var percentageData = {
    label: 'Percentage',
    data: percentage,
    backgroundColor: '#F7B633',
    borderWidth: 1,

  };
  data.datasets.push(percentageData);
  myChart.update();

}

function checkLocalStorage () {
  // debugger;
  var retrieveClick = localStorage.getItem('gotClicks');
  var clickParse = JSON.parse(retrieveClick);

  var retrieveViews = localStorage.getItem('gotViews');
  var viewsParse = JSON.parse(retrieveViews);

  var retrievePercent = localStorage.getItem('percentage');
  var percentParse = JSON.parse(retrievePercent);

  if (clickParse === null) {
    console.log('retrieveParse', clickParse);
    displayProduct();
  }else {
    bye.remove();
    gotClicks = clickParse;
    gotViews = viewsParse;
    percentage = percentParse;
    console.log(percentParse);
    showChart();
  }
}

//  displayProduct();
checkLocalStorage();

function bigImg(x) {
  x.style.height = '500px';
  x.style.width = '500px';
}

function normalImg(x) {
  x.style.height = '400px';
  x.style.width = '400px';
}

// function blur() {
//   if (imgElement[0])
// }
