Jayadharun Porfolio
Inspired and desinged From youtube 
email js has to be added for the email responses


JS for Email js 

// Initialize EmailJS
(function(){
    emailjs.init("YOUR_USER_ID"); // Replace "YOUR_USER_ID" with your EmailJS user ID
})();

document.getElementById('send-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate the form fields
    if (name && email && message) {
        // Send the email via EmailJS
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: name,
            from_email: email,
            message: message
        }).then(function(response) {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
    } else {
        alert("Please fill out all fields.");
    }
});


to automate the email when the form is filled will reach u out
