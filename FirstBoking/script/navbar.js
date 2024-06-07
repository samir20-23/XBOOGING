

let navbar = document.getElementById("navbar");


let barss = document.getElementById("bars");
let navnumber = 0 ;
navbar.style.display = "none";
barss.addEventListener("click", function() {

let bars = document.getElementById("bars");
let textnavbar = document.getElementById("textnavbar");
let leftsection = document.getElementById("leftsection");
let addnav = document.getElementById("addnav");




    navnumber++;
    navbar.style.display = "flex";
    navbar.style.position = "fixed";
    navbar.style.animation = " movenavright 0.3s linear alternate";
    bars.style.transform="rotate(90deg)";
    textnavbar.style.display = "flex";
    leftsection.style.zIndex="6";
    leftsection.style.textShadow="0 0 6px #ffffff";
    leftsection.style.position="fixed";
    leftsection.style.left="21.9px";
    addnav.style.justifyContent="right";
  if (navnumber >= 2) {
   navbar.style.animation = " movenavleft 0.3s linear alternate";
      navnumber = 0;
      setTimeout(() => {navbar.style.display = "none";}, 300);
      textnavbar.style.display = "none";
      bars.style.transform="rotate(0deg)";
      leftsection.style.position="relative";
      leftsection.style.left="-1px";
    leftsection.style.textShadow="none";
    addnav.style.justifyContent="space-between";
    
  }
});
window.addEventListener('resize', function() {

    if (window.innerWidth >= 980) {
    
// click number
navnumber = 0;
// ELEMENTS
let bars = document.getElementById("bars");
let textnavbar = document.getElementById("textnavbar");
let leftsection = document.getElementById("leftsection");
let addnav = document.getElementById("addnav");
// navbar
 navbar.style.animation = " movenavleft 0.7s linear alternate";
 setTimeout(() => {navbar.style.display = "none";}, 1000);
 //  rotate
bars.style.transform="rotate(0deg)";
//  leftsection
 leftsection.style.left="-1px";
 leftsection.style.textShadow="none";
 leftsection.style.position="relative";
//  textnavbar
 textnavbar.style.display = "none";
// addnav
addnav.style.justifyContent="space-between";
    } 
  });




  // click scroll
  // contact

  let contact = document.querySelectorAll("#navContact");

    for (x=0 ; x <contact.length;x++){
      contact[0].addEventListener("click",function(){
        window.scrollTo(0,3000);
    });
    contact[1].addEventListener("click",function(){
      window.scrollTo(0,5000);
  });
  }
  // home
  let navHome = document.querySelectorAll("#home");

    for (x=0 ; x <navHome.length;x++){
      navHome[0].addEventListener("click",function(){
        window.scrollTo(0,0);
    });
    navHome[1].addEventListener("click",function(){
      window.scrollTo(0,0);
  });
  }
  

 
// location sing up 

let signUp = document.getElementById("signUp");
signUp.addEventListener("click", function() {
  window.location.href = "sign.html";
}); 
