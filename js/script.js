/************************ Hamburger Menu ********************************/
var hamburgerMenu = document.querySelector('#hamburger-menu ul li #hamburger-icon');
var links = document.querySelector('#hamburger-menu ul li #links');
var hamburgerMenuIcon = document.querySelectorAll('#hamburger-icon div');

hamburgerMenu.addEventListener('click', (event) => {
       event.preventDefault();
      if(links.className === 'hideMenu'){
        links.className = 'showMenu';
        changeIconColor(hamburgerMenuIcon);
      } else{
        links.className = 'hideMenu';
        resetIconColor(hamburgerMenuIcon);
      }

});

hamburgerMenu.addEventListener('blur', () => {
  if(links.className === 'showMenu'){
       links.className = 'hideMenu';
       resetIconColor(hamburgerMenuIcon);
     }
});

function changeIconColor(nodeList){
  for(var i =0; i < nodeList.length; i++){
    nodeList[i].className = 'changeIconColor';
  }
}

function resetIconColor(nodeList){
  for(var i =0; i < nodeList.length; i++){
    nodeList[i].className= 'resetIconColor';
  }
}


/************************ Slide Show ********************************/
var imgNodeList = document.querySelectorAll('#slider img');
var incrementer = 0;


//Starts the slide show  TODO: transition doesn't work on display, so use a combination of display and opacity for slideshow
function slideShow(nodeList){
 if(incrementer < nodeList.length){
     if(incrementer > 0){
     nodeList[incrementer-1].className = 'notActive'
     nodeList[incrementer].className = 'active';
     }
 } else{
    nodeList[incrementer-1].className = 'notActive';
    incrementer = 0;
    nodeList[incrementer].className='active';
 }
incrementer++;
setTimeout(() => {slideShow(nodeList)}, 2000);
}

slideShow(imgNodeList);
