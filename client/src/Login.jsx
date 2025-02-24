/**<script>
    document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
    alert('Please enter both a username and password!');
    return;
}
    try {
    const response = await fetch('/login', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
},
    body: JSON.stringify({ username, password })
});

    if (response.ok) {
    localStorage.setItem('username', username);
    window.location.href = '/';
} else {
    alert('Login failed. Please try again.');
}
} catch (error) {
    console.error('Login error:', error);
    alert('Login failed. Please try again.');
}
});
</script> **/
