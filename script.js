const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.onclick = () => {
    

    navLinks.classList.toggle('active');
}

// Include the EmailJS library in your HTML <head> or before your script
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

function sendEmail() {
    const userEmail = document.getElementById('userEmail').value;

    if (!userEmail) {
        alert('Please enter your email address.');
        return;
    }

    // Initialize EmailJS with your Public Key
    emailjs.init("nKB2nsparQLfFI9g5"); // Replace with your actual Public Key from EmailJS

    // Define your email parameters
    const templateParams = {
        to_email: userEmail,
        from_name: "Jeremiah Kennedy", // Optional: sender's name
        message: "Hello, Thanks for reaching out! Id love to work with you", // Your email content
        // Add more parameters as defined in your EmailJS template
    };

    // Send the email using your service ID and template ID
    emailjs.send("service_5mrx8mq", "template_5s1ufsc", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send email. Please try again later.');
        });
}