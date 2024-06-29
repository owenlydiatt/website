document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const feedback = document.createElement("div");
    form.appendChild(feedback);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        feedback.innerHTML = '';

        if (!name || !email || !message) {
            feedback.innerHTML = '<p class="error">All fields are required!</p>';
            return;
        }

        if (!validateEmail(email)) {
            feedback.innerHTML = '<p class="error">Please enter a valid email address!</p>';
            return;
        }

        feedback.innerHTML = '<p class="success">Thank you for your message!</p>';
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

