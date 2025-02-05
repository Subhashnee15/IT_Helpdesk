// Dummy user (in a real-world app, you would usebackend)
const users = [
    {username: 'admin', password:'admin123'},
    {username:'user', password:'user123'}
];
// Handle login form submission
document.getElementById('loginForm').addEventListener('submit',function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // check if user exists and password matches
    const user = users.find(u => u.username === username && u.password=== password);
if(user) {
    // store login status in localStorage
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('username', username);
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
} else {
    // Display error message 
    document.getElementById('login-error').textContent = 'Invalid username or password.';
}


});