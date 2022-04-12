var n = document.querySelectorAll(".drum").length;

var audio1 = new Audio("crash.mp3");
var audio2 = new Audio("kick-bass.mp3");
var audio3 = new Audio("snare.mp3");
var audio4 = new Audio("tom-1.mp3");
var audio5 = new Audio("tom-2.mp3");
var audio6 = new Audio("tom-3.mp3");
var audio7 = new Audio("tom-4.mp3");



for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var pressclick = this.innerHTML;
    makesound(pressclick);
    animation(pressclick);
  });
}


document.addEventListener("keydown", function(event) {
  var pressbutton = event.key;
  makesound(pressbutton);
  animation(pressbutton);
});



function makesound(key) {
  switch (key) {
    case "w":
      audio1.play();
      console.log(key)
      break;
    case "a":
      audio2.play();
      console.log(key)
      break;

    case "s":
      audio3.play();
      console.log(key)
      break;

    case "d":
      audio4.play();
      console.log(key)
      break;

    case "j":
      audio5.play();
      console.log(key)
      break;

    case "k":
      audio6.play();
      console.log(key)
      break;

    case "l":
      audio7.play();
      console.log(key)
      break;


    default:
      console.log(key);
  }
}


function animation(currentkey){
  var anime = document.querySelector("."+currentkey);
  anime.classList.add("pressed");
  setTimeout(function(){
    anime.classList.remove("pressed");
  }, 100);
}
