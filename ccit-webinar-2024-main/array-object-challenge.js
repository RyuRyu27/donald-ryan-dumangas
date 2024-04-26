const quiz = [
    {
        "subject": "Sport",
        "quiz": [
            {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriors",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        ]
    },
    {
        "subject": "Math",
        "quiz": [
            {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        ]
    }
];

// Function to display quiz details
function displayQuizDetails() {
    quiz.forEach(subject => {
        console.log(`Subject: ${subject.subject}`);
        subject.quiz.forEach((question, index) => {
            console.log(`Question ${index + 1}: ${question.question}`);
            console.log(`Answer: ${question.answer}`);
            console.log("-----------------------");
        });
    });
}

// Call the function to display quiz details
displayQuizDetails();
