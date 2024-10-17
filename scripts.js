
    function validateEmail() {
        const emailInput = document.getElementById('emailInput').value;
        const message = document.getElementById('message');
         const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        message.innerHTML = '';

        if (emailPattern.test(emailInput)) {
            message.innerHTML = '<p class="success-message">Valid Email Address!</p>';
          
        } else {
            message.innerHTML = '<p class="error-message">Invalid Email Address. Please try again.</p>';
        }
    }
 