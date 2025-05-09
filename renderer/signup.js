export function signupHandler({ onLoadingChange, onErrorChange, onSuccess }) {
  let isLoading = false;
  let error = null;

  async function signup(username, email, password, role) {
    // Set loading true and clear errors
    isLoading = true;
    error = null;
    onLoadingChange(isLoading);
    onErrorChange(null);

    try {
      const response = await fetch('http://localhost:4000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, role })
      });

      const json = await response.json();

      if (!response.ok) {
        isLoading = false;
        error = json.error || 'Signup failed';
        onLoadingChange(isLoading);
        onErrorChange(error);
        return;
      }

      // Success
      isLoading = false;
      onLoadingChange(isLoading);
      onSuccess(json);

      // Notify user to verify email
      alert("Signup successful! Please check your email to verify your account. Once verified, return to the login page to access your account.");

    } catch (err) {
      console.error("Fetch error:", err);
      isLoading = false;
      error = 'Network error';
      onLoadingChange(isLoading);
      onErrorChange(error);
    }
  }

  return { signup };
}
