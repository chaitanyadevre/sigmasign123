document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    const email = document.querySelector('input[type="email"]').value;
    
    // Basic validation
    if (!email) {
        alert('Please enter your email.');
        return;
    }
    // Simple email format check (optional, but good practice)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Placeholder for sending reset link
    // In a real app, send a POST request to your backend/email service
    // For example, fetch to Google Apps Script or an API to trigger email
    alert('A reset link has been sent to your email!'); // Replace with actual logic
    
    // Optionally redirect back to login after success
    // window.location.href = './index.html';
});