function checkAnswer(qId, correctOption) {
    const selected = document.querySelector(`input[name="q${qId}"]:checked`);
    const feedback = document.getElementById(`feedback${qId}`);
    
    if (!selected) {
        feedback.textContent = "Please select an answer.";
        feedback.className = "feedback no-selection";
        return;
    }

    if (selected.value === correctOption) {
        feedback.textContent = "✔ Correct!";
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "✘ Incorrect.";
        feedback.className = "feedback incorrect";
    }
}

function clearAnswer(qId) {
    const selected = document.querySelector(`input[name="q${qId}"]:checked`);
    const feedback = document.getElementById(`feedback${qId}`);
    
    if (selected) {
        selected.checked = false;
    }
    
    feedback.textContent = "";
    feedback.className = "feedback";
}

// Check all answers
function checkAllAnswers() {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
        const qId = index + 1;
        checkAnswer(qId, getCorrectOption(qId));
    });
}

// Clear all answers
function clearAllAnswers() {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
        const qId = index + 1;
        clearAnswer(qId);
    });
}

// Mark all correct options
function markCorrectOptions() {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
        const qId = index + 1;
        const correctOption = getCorrectOption(qId);
        const correctRadio = document.querySelector(`input[name="q${qId}"][value="${correctOption}"]`);
        if (correctRadio) {
            correctRadio.checked = true;
        }
    });
}

// Example correct options, update as per your questions
function getCorrectOption(qId) {
    const correctOptions = {
        1: 'b',  // Question 1 correct answer
        2: 'b',  // Question 1 correct answer
        3: 'b',  // Question 1 correct answer
        4: 'b',  // Question 1 correct answer
        5: 'b',  // Question 1 correct answer
        6: 'b',  // Question 1 correct answer
        7: 'b',  // Question 1 correct answer
        8: 'b',  // Question 1 correct answer
        9: 'b',  // Question 1 correct answer
        10: 'b',  // Question 1 correct answer
        11: 'b',  // Question 1 correct answer
        12: 'b',  // Question 1 correct answer
        13: 'b',  // Question 1 correct answer
        14: 'b',  // Question 1 correct answer
        15: 'b',  // Question 1 correct answer
        16: 'a',  // Question 1 correct answer
        17: 'a',  // Question 1 correct answer
        18: 'a',  // Question 1 correct answer
        19: 'b',  // Question 1 correct answer
        20: 'b',  // Question 1 correct answer    
    };
    return correctOptions[qId];
}

