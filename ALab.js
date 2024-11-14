// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
console.log("ALab Part 1:");
for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("Fizz Buzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
console.log("\nALab Part 2:");
// Function to get a random number
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// Get a random number
let n = getRandomInt(1,100);
let input = n; // Copy of the starting number

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Numbers Less than or Equal to 1 are not Prime
    if (num <= 3) return true; // Check if number is 2 or 3 bc they are Prime
    if (num % 2 === 0 || num % 3 === 0) return false; // Check if number is divisible by 2 or 3 then they are composite
    
    for (let i = 5; i * i <= num; i += 6) {
        // 5 is the next prime number and loop will run if the number is Composite and greater than or Equal to 25 based on previous conditions
        // There does not exist a composite number less than 25 that is not divisible by 2 or 3.
        // Increment by 6 bc any prime number > 3 can be shown as 6n+-1. n = integer. 
        if (num % i === 0 || num % (i + 2) === 0) return false; // Check if divisible by i or i+2 for next prime number
    }
    return true;
}

n++ //Find the next prime number

// Loop to find the next prime number starting from n
while (true) {
    if (isPrime(n)) {
        console.log("Starting Number: " ,input ,"\nNext prime number:", n);
        break;
    }
    n++;
}

console.log("\nAlab Part 3:");
let csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Split by newlines to get each row, then split each row by commas
let rows = csvString.split('\n');
let data = [];

// Loop through each row
for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].split(','); // Split each row by commas
    data.push(cells);               // Store each row as an array of words (cells)
}

console.log(data);