const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Define variables for even and odd numbers
var evenNumbers = [];
var oddNumbers = [];

// Populate even and odd numbers arrays
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    } else {
        oddNumbers.push(i);
    }
}

// Display even numbers
console.log("EVEN NUMBERS:");
for (var j = 0; j < evenNumbers.length; j++) {
    console.log(evenNumbers[j]);
}

// Display odd numbers
console.log("ODD NUMBERS:");
for (var k = 0; k < oddNumbers.length; k++) {
    console.log(oddNumbers[k]);
}
