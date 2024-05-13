const textfield = document.getElementById('textfield'); 
 
textfield.onchange = function() { 
    textfield.style.border = '2px solid blue'; 
}; 
 
textfield.onfocus = function() {     
    textfield.style.backgroundColor = '#f0f0f0'; 
}; 
 
textfield.onblur = function() { 
    textfield.style.backgroundColor = 'white'; 
}; 
