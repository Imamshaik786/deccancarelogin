// Get form elements
var loginForm = document.getElementById('loginForm');
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  var username = usernameInput.value;
  var password = passwordInput.value;
  
  // Perform login validation
  if (username === 'shaik' && password === '786') {
    // Successful login
    alert('Login successful!');
    // Add your admin page logic here or redirect to the admin page
     window.location.href ='https://imamshaik786.github.io/deccancareadmin/'
  } else {
    // Failed login
    alert('Invalid username or password.');
  }
  
  // Clear the form inputs
  usernameInput.value = '';
  passwordInput.value = '';
});
