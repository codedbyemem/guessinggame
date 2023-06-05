let maximum = parseInt(prompt("Enter a maximum number for your game 😎"));
while (!maximum){
    maximum = parseInt(prompt("Please enter a valid number 😱"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = (prompt("Enter your first guess 🤔 or type 'q' to quit the game"));
let attempts = 1;

while (parseInt(guess) !== targetNum){
    if (guess === 'q') break;
    guess = parseInt(guess);
    attempts++;
    if(guess > targetNum) {
        guess = prompt("Your guess is too high! ⬇️ Enter a new guess")
    }
    else if (guess < targetNum){
        guess = prompt("Your number is too low! ⬆️ Enter a new guess")
    }
    else {
        guess = prompt("Invalid guess 😱 Please enter a valid number")
    }


}

if(guess === 'q'){
    console.log ("You have quit the game. Thank you for playing!😁")
}
else{
console.log (`Well done! ⭐️ You guessed the mystery number ${targetNum} in ${attempts} tries 🎉` )
}