/************************ Hamburger Menu ********************************/
var hamburgerMenu = document.querySelector('#hamburger-menu ul li #hamburger-icon');
var links = document.querySelector('#hamburger-menu ul li #links');
var hamburgerMenuIcon = document.querySelectorAll('#hamburger-icon div');

hamburgerMenu.addEventListener('click', (event) => {
       event.preventDefault();
      if(links.style.left==="" || links.style.left==="-900px"){
        showMenu(links);
        changeIconColor(hamburgerMenuIcon);
      } else{
        hideMenu(links);
        resetIconColor(hamburgerMenuIcon);
      }

});

hamburgerMenu.addEventListener('blur', () => {
  if(links.style.left === '0px'){
       hideMenu(links);
       resetIconColor(hamburgerMenuIcon);
     }
});

function showMenu(node) {
  node.style.left = 0;
  node.style.transition = '.5s ease';
}

function hideMenu(node) {
  node.style.left='-900px';
  node.style.transition='.5s ease';
}

function changeIconColor(nodeList){
  for(var i =0; i < nodeList.length; i++){
    nodeList[i].style.border= '1px solid #E682FB';
  }
}

function resetIconColor(nodeList){
  for(var i =0; i < nodeList.length; i++){
    nodeList[i].style.border= '1px solid #fff';
  }
}


/************************ Slide Show ********************************/
var imageArray = [];
var imgNodeList = document.querySelectorAll('#slider .slider-img');
var incrementer = 0;
//Hides the current images
function hideImages(imgArray){
  imgArray.forEach(img => {
     img.style.display = 'none';
  });
}

//converts nodeList into an array
function createArray(nodeList){
  var tempArray = [];
  for(var i= 0; i < nodeList.length; i++){
    tempArray[i] = nodeList[i];
  }

  return tempArray;
}

//remove previous image from slideShow
function hidePreviousImage(img){
  img.style.display= 'none';
}

//Starts the slide show  TODO: transition doesn't work on display, so use a combination of display and opacity for slideshow
function slideShow(imgArray){
 if(incrementer < imgArray.length){
   if(incrementer === 0){
     imgArray[incrementer].style.display='block';
     imgArray[incrementer].style.transition='display 2s';
   } else{
     hidePreviousImage(imgArray[incrementer-1]);
     imgArray[incrementer].style.display='block';
     imgArray[incrementer].style.transition='display 2s';
   }
 } else{
    hidePreviousImage(imgArray[incrementer-1]);
    incrementer = 0;
    imgArray[incrementer].style.display='block';
 }
incrementer++;
setTimeout(() => {slideShow(imageArray)}, 2000);
}



imageArray = createArray(imgNodeList);
hideImages(imageArray);
slideShow(imageArray);
