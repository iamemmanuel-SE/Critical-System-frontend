import { signupHandler } from './signup.js'; // Adjust the path if needed

// Select the form element
const form = document.querySelector('.signup-right form');

const { signup } = signupHandler({
  onLoadingChange: (isLoading) => {
    if (isLoading) {
      console.log("Submitting...");
    }
  },
  onErrorChange: (error) => {
    if (error) {
      alert("Signup error: " + error);
    }
  },
  onSuccess: (data) => {
    alert("Signup successful!");
    console.log("Success response:", data);
    // Optionally redirect or reset form here
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Collect input values
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  // Basic validation
  if (!firstName || !lastName || !email || !password || !role) {
    alert("Please fill in all fields.");
    return;
  }

  // Create full username
  const username = `${firstName} ${lastName}`;

  // Call the signup function
  signup(username, email, password, role);
});
