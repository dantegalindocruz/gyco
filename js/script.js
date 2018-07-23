var imageArray = [];
var imgNodeList = document.querySelectorAll('#slider .slider-img');
var incrementer = 0;

//Hides the current images 
function hideImages(imgArray){
  /*imgArray.forEach(img => {
     img.style.display = 'none';
  });*/
 for(var i=1; i< imgArray.length; i++){
  imgArray[i].style.display='none';
 }
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

//Starts the slide show
function slideShow(imgArray){
console.log('just entered the function');

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
}



imageArray = createArray(imgNodeList);
hideImages(imageArray);
setInterval(() => {slideShow(imageArray)}, 5000);


