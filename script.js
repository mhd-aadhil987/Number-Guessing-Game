const minNo = 1;
const maxNo = 100;

// Generate a random number as the answer
const answer = Math.floor(Math.random() * (maxNo - minNo + 1)) + minNo;

let attempts = 0;
let running = true;

const button = document.getElementById("btn");
const inputField = document.getElementById("input");
const winMessage = document.getElementById("win-message");

// Hide the winning message initially
winMessage.style.display = 'none';

button.onclick = function () {
    let guess = Number(inputField.value);  // Get input value

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if (guess < minNo || guess > maxNo) {
        window.alert(`Enter a number between ${minNo} - ${maxNo}`);
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("Too Low! Try Again");
        } else if (guess > answer) {
            window.alert("Too High! Try Again");
        } else {
            // Correct guess
            winMessage.style.display = 'block';  // Show the winning message

            // Function to start confetti animation
            function startConfetti() {
                const duration = 3 * 1000; // 3 seconds
                const end = Date.now() + duration;

                // confetti animation
                const confettiInterval = setInterval(function () {
                    if (Date.now() > end) {
                        return clearInterval(confettiInterval);
                    }
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 }
                    });
                }, 250);
            }

            // Start the confetti animation when the user wins
            startConfetti();

            // Notify the user of their success
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`);
        }
    }
}
