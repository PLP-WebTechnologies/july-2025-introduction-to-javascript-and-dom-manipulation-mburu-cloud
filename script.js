//  Variables & Conditionals
let age = 18;
if (age >= 18) console.log("Adult");
else console.log("Minor");

//  Functions
function greet(name) {
  return `Hi, ${name}!`;
}
function add(a, b) {
  return a + b;
}

//  Loops
let nums = [1, 2, 3];
nums.forEach(n => console.log(n));

for (let i = 3; i > 0; i--) console.log(`Countdown: ${i}`);

// DOM Interactions
document.getElementById("btn").onclick = () => alert("Clicked!");

document.getElementById("title").textContent = "Welcome!";

document.body.style.backgroundColor = "#f0f0f0";