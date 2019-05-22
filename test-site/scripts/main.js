var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/mrt.jpeg') {
    myImage.setAttribute ('src','images/mina.jpg');
  }else{
    myImage.setAttribute ('src','images/mrt.jpeg');
  }
}

var mybutton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
  var myName = prompt('Please enter your name');
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Mozilal is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
}else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
mybutton.onclick = function() {
  setUserName();
}
