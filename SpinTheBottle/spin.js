var current_rotation = 0;
function rotate(){
    var bottle_audio = new Audio("https://darpan-exe.github.io/GameTools/res/GlassBottleSpin_S08FO.1157-C.mp3");
    bottle_audio.play();
    let el = document.querySelector('#bottle');
    var angle= 1080+Math.floor(Math.random()*360)+1;
    current_rotation+=angle;
            document.getElementById("bottle").style.WebkitTransitionDuration="5s";
            document.getElementById("bottle").style.WebkitTransform = 'rotate('+current_rotation+'deg)';
}