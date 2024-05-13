function findSquare() {     
    let number = parseInt(prompt("Enter a number to find its square:"));     
    let square = number * number; 
    document.getElementById("output").innerText = `Square of ${number} is: ${square}`; 
} 
 
function sumOfCubes() { 
    let num1 = parseInt(prompt("Enter the first number:"));     
    let num2 = parseInt(prompt("Enter the second number:"));     
    let sum = Math.pow(num1, 3) + Math.pow(num2, 3);     document.getElementById("output").innerText = `Sum of cubes of ${num1} and ${num2} is: ${sum}`; 
} 
 
function reverseNumber() { 
    let number = parseInt(prompt("Enter a number to reverse:"));     
    let reversed = 0;     while (number > 0) { 
        reversed = (reversed * 10) + (number % 10);         number = Math.floor(number / 10); 
    } 
    document.getElementById("output").innerText = `Reversed number is: ${reversed}`; 
} 
 
function findDivisibleNumbers() { 
    let z = parseInt(prompt('Enter a number to find divisible numbers between 1 and 100:'));
    let output = "";
    for (let i = 1; i <= 100; i++) {         
        if (i % z === 0) { 
            output += i + ", ";         
        } 
    }
    document.getElementById("output").innerText = `Numbers between 1 and 100 divisible by ${z} are: ${output}`;
}
