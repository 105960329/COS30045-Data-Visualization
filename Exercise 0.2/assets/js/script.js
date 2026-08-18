// Select all FAQ questions
const faqQuestions = document.querySelectorAll(".faq-question");

// Add a click event to each question
faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        // Find the answer belonging to this question
        const answer = question.nextElementSibling;

        // Show or hide the answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});
