function showInfo() {
    alert("Some info");    
}

function plusBet() {
    changeBet(decrease);
}

function changeBet(status) {
    var messageArea = document.getElementById('totalbet');
    var textBet =  messageArea.innerHTML;
    var totalBet = parseFloat(textBet.substring(28));
    
    if (status=="1") {
        if (totalBet>0) totalBet-=0.15;
        } else {
            totalBet+=0.15;
        }

    messageArea.innerHTML = '<span>TOTAL BET</span> <br>$'+totalBet.toFixed(2);
    var coin = totalBet/15;
    document.getElementById('coin').innerHTML = '<span>COIN</span> <br>$'+totalBet.toFixed(2);  
}

function changeTurbo() {
    if (document.getElementById('turbo-off')) {
        document.getElementById('turbo-off').id = 'turbo-on';
        } else {
            document.getElementById('turbo-on').id = 'turbo-off';
        }

}  

//var Play = document.getElementById('play');
//Play.addEventListener('click', rotate);


function  rotateImg()  { 
    var start = Date.now(); 
    var timer = setInterval(function() {
        var timePassed = Date.now() - start;
        play.style.transform = 'rotate(-' + timePassed / 5 + 'deg)';

        if (timePassed > 900)  {
            clearInterval(timer); 
            play.style.transform = 'rotate(0deg)';
            } }, 20);
    
}

function  push()  { 
    var sound = document.getElementById('sound');
    sound.play();
    document.getElementById('button').id = 'button-not-active';
    document.getElementById('play').id = 'stop';    
    setTimeout(function() {
        document.getElementById('button-not-active').id = 'button';
        document.getElementById('stop').id = 'play';
        document.getElementById('play').style.transform = 'rotate(0deg)';
    }, 2000);
    
}

function showSpin() {
    var element = document.getElementById("spin");
    var start = Date.now();
    
    function animate(el, to, time) {
        var top = el.offsetTop;
        var t;
        
        tick = function() {
            var timePassed = Date.now() - start;
            t = timePassed * to / time ;
            top= top -t;
            
                if (top > 0) {
                    (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
                }
                else {top = 0};
            el.style.top = top + "px" ;
            };
        tick(); }
    
    animate(element, 140, 3000);
}

function hideSpin() {
    var element = document.getElementById("spin");
    var start = Date.now();
    
    function animate(el, to, time) {
        var top = el.offsetTop;
        var t;
        
        tick = function() {
            var timePassed = Date.now() - start;
            t = timePassed * to / time ;
            top= top +t;
            
                if (top <140) {
                    (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
                }
                else {top = 140};
            el.style.top = top + "px" ;
            };
        tick(); }
    
    animate(element, 140, 3000);
}