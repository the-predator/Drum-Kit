document.getElementsByClassName('drum')[0].style.backgroundImage = "url('images/tom1.png')";
document.getElementsByClassName('drum')[1].style.backgroundImage = "url('images/tom2.png')";
document.getElementsByClassName('drum')[2].style.backgroundImage = "url('images/tom3.png')";
document.getElementsByClassName('drum')[3].style.backgroundImage = "url('images/tom4.png')";
document.getElementsByClassName('drum')[4].style.backgroundImage = "url('images/snare.png')";
document.getElementsByClassName('drum')[5].style.backgroundImage = "url('images/kick.png')";
document.getElementsByClassName('drum')[6].style.backgroundImage = "url('images/crash.png')";

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",
        function () {
            addSound(this.innerHTML);
            addAnimation(this.innerHTML);
        });
}

document.addEventListener("keypress",
    function(event) {
      addSound(event.key);
      addAnimation(event.key);
    });
function addSound(x) {
    switch (x) {
        case 'w': {
            let audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        }
        case 'a': {
            let audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        }
        case 's': {
            let audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        }
        case 'd': {
            let audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        }
        case 'j': {
            let audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        }
        case 'k': {
            let audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        }
        case 'l': {
            let audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        }
    }
}
function addAnimation(currentKey){
   var activeKey = document.getElementsByClassName(currentKey.toString())[0];
   activeKey.classList.add("pressed");
   setTimeout(function(){
   activeKey.classList.remove("pressed");
   }, 100);
}