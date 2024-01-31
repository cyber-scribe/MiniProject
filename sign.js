function validateForm() {
    
    var emailInput = document.getElementById('Email').value;
    var phoneInput = document.getElementById('Phone Number').value;

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
    var phoneRegex = /^\d{10}$/;    

    if (!emailRegex.test(emailInput)) {
        alert('Invalid email format. Please enter a valid email address.');
        return false;
    }

    if (!phoneRegex.test(phoneInput)) {
        alert('Invalid phone number. Please enter a 10-digit number.');
        return false;
    }

    return true;
}