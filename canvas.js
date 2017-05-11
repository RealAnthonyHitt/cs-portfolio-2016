var mousePos = [];
// Creeating the canvas//
var canvas = document.createElement("canvas");
canvas.className = "noselect";
canvas.style.border = "2px solid black";
var ctx = canvas.getContext("2d");
ctx.canvas.width = 3200;
ctx.canvas.height = 3200;
canvas.style.position = "absolute";
canvas.style.top = "50px";
canvas.style.left = "50px";

document.body.appendChild(canvas);


function Hexagon(x, y) {
    this.x = x;
    this.y = y;
    this.fColor = "blue";
    this.draw = function() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + 20, this.y);
        ctx.lineTo(this.x + 30, this.y + 20);
        ctx.lineTo(this.x + 20, this.y + 40);
        ctx.lineTo(this.x, this.y + 40);
        ctx.lineTo(this.x - 10, this.y + 20);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        
       // ctx.beginPath()
         //        ctx.arc(this.x + 10, this.y + 20, 18, 0,2*Math.PI, false)
           //      ctx.stroke(); -->
    }
    this.fillColor = function(){
        ctx.fillStyle = this.fColor;
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    this.changeColor = function(clickX, clickY) {
        var d = Math.sqrt((clickX - (this.x + 10))*(clickX - (this.x + 10)) + (clickY - (this.y + 20))*(clickY - (this.y + 20)));
    
        if(d <= 18) {
            var colorChanger = ["green","brown","gray","red","yellow","black", "orange", "blue" ];
            this.fColor = colorChanger[colorChanger.indexOf(this.fColor)+1];
        }
        
    }
}

var hexagons = [];
for (var i = 80; i <= 1700; i += 60) {
    for (var j = 80; j <= 1500; j += 40) {
        hexagons.push(new Hexagon(i, j));
    }
}

for (var i = 110; i <= 1700; i += 60) {
    for (var j = 100; j <= 1400; j += 40) {
        hexagons.push(new Hexagon(i, j));
    }
}

// hexagons[4].fColor = "white";


//key track of mouse//
window.addEventListener("mousemove", function(evt) {
    mousePos[0] = evt.pageX - parseInt(canvas.style.left);
    mousePos[1] = evt.pageY - parseInt(canvas.style.top);
})

canvas.addEventListener("click", function() {
    for (var i = 0; i < hexagons.length; i++) {
        hexagons[i].changeColor(mousePos[0], mousePos[1]);
    }
});

//Running the game//    
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillText("Pos:" + mousePos[0] + ", " + mousePos[1], 10, 50);
     ctx.fillStyle = "#8ED6FF";
    ctx.fill;
    ctx.stroke();

    //   ctx.fillRect(10, 10, canvas.height, canvas.width);
    //     ctx.fillText("Pos:" + mousePos[0] + ", " + mousePos[1], 10, 25);
    //      ctx.fillStyle = '#f00';
    //    ctx.beginPath();
    //  ctx.moveTo(50, 50);
    // ctx.moveTo(75, 75);


    for (var i = 0; i < hexagons.length; i++) {
        hexagons[i].draw();
        hexagons[i].fillColor();
    }



    window.requestAnimationFrame(gameLoop);
}

gameLoop();
// window.setInterval(gameLoop, 30)
