function rollDice(){
    var duration= 2600;
    var interval=20;
    var count=0;
    var dice_audio = new Audio("/DiceRoll/resources/diceaudio.wav");
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
        var dice_num1= Math.floor(Math.random()*6)+1;
        var dice_num2= Math.floor(Math.random()*6)+1;
        document.getElementById("output-textbox1").innerHTML= dice_num1;
        document.getElementById("output-textbox2").innerHTML= dice_num2;
        document.getElementById("output-textbox3").innerHTML= dice_num1+dice_num2;
        var x,y, i;
        x = document.querySelectorAll('.dice-circles1');
        for (i = 0; i < x.length; i++) {
            x[i].style.visibility="hidden";
        }
        if(dice_num1==1){
            y=document.querySelectorAll('.dice-circle15');
        }
        else if(dice_num1==2){
            y=document.querySelectorAll('.dice-circle14,.dice-circle16');
        }
        else if(dice_num1==3){
            y=document.querySelectorAll('.dice-circle11,.dice-circle15,.dice-circle19');
        }
        else if(dice_num1==4){
            y=document.querySelectorAll('.dice-circle11,.dice-circle13,.dice-circle17,.dice-circle19');
        }
        else if(dice_num1==5){
            y=document.querySelectorAll('.dice-circle11,.dice-circle13,.dice-circle17,.dice-circle19,.dice-circle15');
        }
        else if(dice_num1==6){
            y=document.querySelectorAll('.dice-circle11,.dice-circle14,.dice-circle17,.dice-circle13,.dice-circle16,.dice-circle19');
        }
        for (i = 0; i < y.length; i++) {
            y[i].style.visibility="visible";
        }
        var p,q;
        p = document.querySelectorAll('.dice-circles2');
        for (i = 0; i < p.length; i++) {
            p[i].style.visibility="hidden";
        }
        if(dice_num2==1){
            q=document.querySelectorAll('.dice-circle25');
        }
        else if(dice_num2==2){
            q=document.querySelectorAll('.dice-circle24,.dice-circle26');
        }
        else if(dice_num2==3){
            q=document.querySelectorAll('.dice-circle21,.dice-circle25,.dice-circle29');
        }
        else if(dice_num2==4){
            q=document.querySelectorAll('.dice-circle21,.dice-circle23,.dice-circle27,.dice-circle29');
        }
        else if(dice_num2==5){
            q=document.querySelectorAll('.dice-circle21,.dice-circle23,.dice-circle27,.dice-circle29,.dice-circle25');
        }
        else if(dice_num2==6){
            q=document.querySelectorAll('.dice-circle21,.dice-circle24,.dice-circle27,.dice-circle23,.dice-circle26,.dice-circle29');
        }
        for (i = 0; i < q.length; i++) {
            q[i].style.visibility="visible";
        }
    }