function rollDice(){
var duration= 2600;
var interval=20;
var count=0;
var dice_audio = new Audio("https://darpan-exe.github.io/GameTools/DiceRoll/resources/diceaudio.wav");
dice_audio.play();
var inter= setInterval(exec,interval);
    function exec(){
        if(count==(duration/interval)){
            clearInterval(inter);
        }
        else{
            count++;
            diceOut();
        }
    }
}
function diceOut(){
    var dice_num= Math.floor(Math.random()*6)+1;
    document.getElementById("output-textbox1").innerHTML= dice_num;
    var x,y, i;
    x = document.querySelectorAll('.dice-circles');
    for (i = 0; i < x.length; i++) {
        x[i].style.visibility="hidden";
    }
    if(dice_num==1){
        y=document.querySelectorAll('.dice-circle5');
    }
    else if(dice_num==2){
        y=document.querySelectorAll('.dice-circle4,.dice-circle6');
    }
    else if(dice_num==3){
        y=document.querySelectorAll('.dice-circle1,.dice-circle5,.dice-circle9');
    }
    else if(dice_num==4){
        y=document.querySelectorAll('.dice-circle1,.dice-circle3,.dice-circle7,.dice-circle9');
    }
    else if(dice_num==5){
        y=document.querySelectorAll('.dice-circle1,.dice-circle3,.dice-circle7,.dice-circle9,.dice-circle5');
    }
    else if(dice_num==6){
        y=document.querySelectorAll('.dice-circle1,.dice-circle4,.dice-circle7,.dice-circle3,.dice-circle6,.dice-circle9');
    }
    for (i = 0; i < y.length; i++) {
        y[i].style.visibility="visible";
    }
}