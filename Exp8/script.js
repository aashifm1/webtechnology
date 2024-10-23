let timeLeft = 60; // Time in seconds
let timerId;

function startTimer() {
    timerId = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timerId);
            document.getElementById('quiz-form').dispatchEvent(new Event('submit'));
        } else {
            document.getElementById('timer').textContent = `Time Left: ${timeLeft--} seconds`;
        }
    }, 1000);
}

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    clearInterval(timerId); // Stop timer on form submit
    event.preventDefault();
    
    const answers = {
        ques1: 'a',
        ques2: 'a',
        ques3: 'b',
        ques4: 'a'
    };
    
    let score = 0;
    for (let question in answers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    }
    
    document.getElementById('result').textContent = `You scored ${score} out of ${Object.keys(answers).length}`;
});

document.getElementById('clear-btn').addEventListener('click', function() {
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => input.checked = false);
    document.getElementById('result').textContent = '';
    document.getElementById('timer').textContent = ''; // Clear timer display
    clearInterval(timerId); // Stop timer
    timeLeft = 60; // Reset timer
});

// Start the timer when the page loads
window.onload = function() {
    startTimer();
};
