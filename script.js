document.querySelector('form').addEventListener('submit', function(e) {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    if (!username || !password) {
        alert('Please fill in all fields.');
        e.preventDefault();
    } else {
        // Placeholder for login logic
        // In a real app, send a request to your backend to verify credentials
        // For example, fetch data from Google Sheets or a database
        alert('Login successful!'); // Replace with actual logic
        // Optionally redirect: window.location.href = 'dashboard.html';
    }
});