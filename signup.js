document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    const email = document.querySelector('input[type="email"]').value;
    const fullName = document.querySelector('input[placeholder="Full Name"]').value;
    const username = document.querySelector('input[placeholder="Username"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    // Basic validation
    if (!email || !fullName || !username || !password) {
        alert('Please fill in all fields.');
        return;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }
    
    // Prepare data to send
    const data = {
        email: email,
        fullName: fullName,
        username: username,
        password: password // WARNING: Hash this in production!
    };
    
    // Send to Google Apps Script
    fetch('https://docs.google.com/spreadsheets/d/1d-xdwn9MnWpWvxaZVi2911fg5kBN8oq7ApGuf-bWQQc/edit?usp=sharing', { // Replace with your deployed URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert('Sign up successful! Data stored.');
            // Optionally redirect to login page
            // window.location.href = 'login.html';
        } else {
            alert('Error: ' + result.message);
        }
    })
    .catch(error => {
        alert('Network error: ' + error.message);
    });

});

