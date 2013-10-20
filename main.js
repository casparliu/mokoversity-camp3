var gameModule = (function() {


        var timeoutVar,
                counter = 0,
                ballX,
                ballY,
                ballR,
                scores;


        var colors = ['#ff0000', '#0000ff', 'yellow'];
        var length = colors.length;

        

        function tochEvent(evt){
            var x = evt.clientX,
                y = evt.clientY;

            var tmp = (ballX-x)*(ballX-x) + (ballY-y)*(ballY-y);

            if(tmp < ballR * ballR){
                scores += 100 - ballR;
            }
            console.log("your scores:" + scores);
        }

        function start(){
            scores = 0;

            document.getElementById("main").addEventListener("click", tochEvent, false);
            startGame();
        }

        function startGame() {
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext('2d');
            ballX = Math.floor(Math.random() * 600); // 0..300
            ballY = Math.floor(Math.random() * 450);
            ballR = Math.floor(Math.random() * 80);


        canvas.width = 640;
        canvas.height = 480;


        ctx.fillStyle = colors[counter % length];
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2 , true);
        ctx.fill();


        if (counter >= 10) {


        } else {
                timeoutVar = setTimeout(startGame, 1000);
                counter = counter + 1;
            } 
        }


        function gameOver() {
            console.log("Counter: " + counter);
        }


        return {
                start: start
        }
}) ();


gameModule.start();