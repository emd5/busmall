'use strict';

// Global variables
var allImages = [];
var previousImage = [];
var voteCounter = 0;
var resultList = document.getElementById('resultlist');
var productPic = document.getElementById('productpic');
var productPic2 = document.getElementById('productpic2');
var productPic3 = document.getElementById('productpic3');

// Constructor that creates a new Product Pic object
function ProductPic(filepath, name){
  this.filepath = `../assets/${filepath}`;
  this.name = name;
  this.views = 0;
  this.votes = 0;
  allImages.push(this);
}

//Instantiate each object
new ProductPic('bag.jpg', 'bag');
new ProductPic('banana.jpg', 'banana');
new ProductPic('bathroom.jpg', 'bathroom');
new ProductPic('boots.jpg', 'boots');
new ProductPic('breakfast.jpg', 'breakfast');
new ProductPic('bubblegum.jpg', 'bubblegum');
new ProductPic('chair.jpg', 'chair');
new ProductPic('cthulhu.jpg', 'cthulhu');
new ProductPic('dog-duck.jpg', 'dog-duck');
new ProductPic('dragon.jpg', 'dragon');
new ProductPic('pen.jpg', 'pen');
new ProductPic('pet-sweep.jpg', 'pet-sweep');
new ProductPic('scissors.jpg', 'scissors');
new ProductPic('shark.jpg', 'shark');
new ProductPic('sweep.jpg', 'sweep');
new ProductPic('tauntaun.jpg', 'tauntaun');
new ProductPic('unicorn.jpg', 'unicorn');
new ProductPic('usb.jpg', 'usb');
new ProductPic('water-can.jpg', 'water-can');
new ProductPic('wine-glass.jpg', 'wine-glass');

// A function to randomly display images no immediate duplicates
function showRandomPictures(){

  //Generate 3 random numbers
  var random = Math.floor(Math.random() * allImages.length);
  var random2 = Math.floor(Math.random() * allImages.length);
  var random3 = Math.floor(Math.random() * allImages.length);
  
  //change to ensure no duplicates occur
  while (previousImage.includes(random) || previousImage.includes(random2) || previousImage.includes(random3) || random === random2 || random2 === random3 || random === random3){

    //regenerate random numbers
    random = Math.floor(Math.random() * allImages.length);
    random2 = Math.floor(Math.random() * allImages.length);
    random3 = Math.floor(Math.random() * allImages.length);
  }
  productPic.src = allImages[random].filepath;
  productPic.alt = allImages[random].name;
  productPic.title = allImages[random].name;

  productPic2.src = allImages[random2].filepath;
  productPic2.alt = allImages[random2].name;
  productPic2.title = allImages[random2].name;

  productPic3.src = allImages[random3].filepath;
  productPic3.alt = allImages[random3].name;
  productPic3.title = allImages[random3].name;

  allImages[random].views += 1;
  allImages[random2].views += 1;
  allImages[random3].views += 1;

  previousImage[0] = random;
  previousImage[1] = random2;
  previousImage[2] = random3;
}

// A function to handle the number of clicks the user selects each image
function handleImageClick(event){
  console.log('Click: ' + event.target.alt);

  voteCounter++;
  if (voteCounter < 26){
    for(let i = 0; i <allImages.length; i++){
      if(event.target.alt === allImages[i].name){
        allImages[i].votes++;
        // console.log('Counter: ' + allImages[i].votes);
      }
    }
  } else if (voteCounter === 26){

    //TO DO: create function?
    for (let i= 0; i< allImages.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${allImages[i].votes} votes for ${allImages[i].name} out of ${allImages[i].views} views.`;
      resultList.appendChild(liEl);
    }

    // console.log('voteCounter: ' + voteCounter);
    productPic.removeEventListener('click', handleImageClick);
    productPic2.removeEventListener('click', handleImageClick);
    productPic3.removeEventListener('click', handleImageClick);

  }
  showRandomPictures();
}

// Eventlistener to handle user clicks
productPic.addEventListener('click', handleImageClick);
productPic2.addEventListener('click', handleImageClick);
productPic3.addEventListener('click', handleImageClick);

// Driver to invoke functions
showRandomPictures();
