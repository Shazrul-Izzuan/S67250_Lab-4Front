function sumOfDigits() { 
    let number = parseInt(prompt("Enter a number to find sum of its digits:")); 
    if (!isNaN(number)) { 
        let sum = calculateSumOfDigits(number); 
        document.getElementById("output").innerText = `Sum of digits of ${number} is: ${sum}`; 
    } else {
        document.getElementById("output").innerText = "Invalid input. Please enter a valid number.";
    }
}

function getPower() { 
    let base = parseInt(prompt("Enter base:"));
    let exponent = parseInt(prompt("Enter exponent:"));
    if (!isNaN(base) && !isNaN(exponent)) { 
        power(base, exponent);
    } else {
        document.getElementById("output").innerText = "Invalid input. Please enter valid numbers for base and exponent.";
    }
}

function power(x, y) { 
    let result = calculatePower(x, y); 
    document.getElementById("output").innerText = `${x} raised to the power ${y} is: ${result}`; 
} 

function calculatePower(x, y) { 
    if (y === 0) {         
        return 1;
    } else if (y > 0) { 
        return x * calculatePower(x, y - 1); 
    } else { 
        return 1 / calculatePower(x, -y); 
    } 
}
