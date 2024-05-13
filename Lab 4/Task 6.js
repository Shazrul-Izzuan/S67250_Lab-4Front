let intervalId; 

function moveSquares() { 
    clearInterval(intervalId); // Clear interval before starting a new animation
    const container = document.getElementById('container');     
    const square1 = document.getElementById('square1');     
    const square2 = document.getElementById('square2'); 
    const containerWidth = container.clientWidth;     
    const containerHeight = container.clientHeight;     
    const squareWidth = square1.clientWidth; 
    const squareHeight = square1.clientHeight; 

    intervalId = setInterval(() => { 
        const randomX1 = Math.floor(Math.random() * (containerWidth - squareWidth));         
        const randomY1 = Math.floor(Math.random() * (containerHeight - squareHeight));         
        const randomX2 = Math.floor(Math.random() * (containerWidth - squareWidth));         
        const randomY2 = Math.floor(Math.random() * (containerHeight - squareHeight)); 

        square1.style.left = randomX1 + 'px';         
        square1.style.top = randomY1 + 'px';         
        square2.style.left = randomX2 + 'px';         
        square2.style.top = randomY2 + 'px'; 
    }, 1000); 
} 

function stopAnimation() { 
    clearInterval(intervalId); 
} 

document.getElementById('startBtn').addEventListener('click', moveSquares); 
document.getElementById('stopBtn').addEventListener('click', stopAnimation); 
