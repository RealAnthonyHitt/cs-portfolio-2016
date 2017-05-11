var c2 = canvas.getContext('2d');
c2.fillStyle = '#f00';
c2.beginPath();
c2.moveTo(0, 0);
c2.lineTo(100,50);
c2.lineTo(50, 100);
c2.lineTo(0, 90);
c2.closePath();
c2.fill();