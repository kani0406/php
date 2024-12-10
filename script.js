function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let errorMessage = '';

    if (name === '') {
        errorMessage += 'Name is required.<br>';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        errorMessage += 'Invalid email format.<br>';
    }
    if (message === '') {
        errorMessage += 'Message is required.<br>';
    }

    if (errorMessage) {
        document.getElementById('error-message').innerHTML = errorMessage;
        return false;  
    }

    return true; 
}
