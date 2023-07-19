// Initialize EmailJS with your user ID and the service ID
emailjs.init('8YNFAWF06QCZv2HrvdSVx');

// Add event listener to the form submit event
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form data
  var formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };

  // Send the email
  emailjs.send('service_vmqs3re', 'template_r18m69h', formData)
    .then(function(response) {
      console.log('Email sent successfully:', response.status, response.text);
      // Add your success message or redirect the user to a thank-you page
       // Show alert message
       alert('Email sent successfully!');

       // Reset the form
       document.getElementById('myForm').reset();
    }, function(error) {
      console.error('Email sending failed:', error);
      // Add your error handling code
    });
});
