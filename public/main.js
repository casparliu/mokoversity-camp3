/*jslint browser: true, devel: true, closure: true */

var gameModule = (function (document) {

    "use strict";

    var counter = 0,
        canvas,
        ctx,
        ballX,
        ballY,
        ballR,
        scores,
        colors = ['#ff0000', '#0000ff', 'yellow'],
        length = colors.length;

    function tochEvent(evt) {
        var x = evt.clientX,
            y = evt.clientY,
            tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);
        console.log(tmp + ":" + ballR * ballR);
        if (tmp < ballR * ballR) {
            scores += 100 - ballR;
            console.log("your scores:" + scores);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    function startGame() {
        canvas = document.getElementById('game');
        ctx = canvas.getContext('2d');
        ballX = Math.floor(Math.random() * 600); // 0..300
        ballY = Math.floor(Math.random() * 450);
        ballR = Math.floor(Math.random() * 80);


        canvas.width = 640;
        canvas.height = 480;


        ctx.fillStyle = colors[counter % length];
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
        ctx.fill();


        if (counter <= 10) {
            setTimeout(startGame, 2000);
            counter = counter + 1;
        }
    }

    function start() {
        scores = 0;

        document.getElementById("main").addEventListener("click", tochEvent, false);
        startGame();
    }

    return {
        start: start
    };
}(document));


gameModule.start();