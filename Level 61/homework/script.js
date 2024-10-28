document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Example of form submission logic
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Reset form
    this.reset();
});