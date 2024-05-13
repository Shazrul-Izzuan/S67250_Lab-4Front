const paragraph = document.getElementById('paragraph'); 
 
paragraph.onclick = function() { 
    paragraph.style.backgroundColor = 'yellow'; 
}; 
 
paragraph.ondblclick = function() { 
    paragraph.style.backgroundColor = 'blue'; 
}; 
paragraph.onmouseover = function() { 
    paragraph.style.backgroundColor = 'red'; 
}; 
 
paragraph.onmouseout = function() {     
    paragraph.style.backgroundColor = 'green'; 
}; 
