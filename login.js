export function loginHandler({ onLoadingChange, onErrorChange, onSuccess }) {
  let isLoading = false;
  let error = null;

  async function login(email, password) {
    // Set loading to true and clear previous errors
    isLoading = true;
    error = null;
    onLoadingChange(isLoading);
    onErrorChange(null);

    try {
      const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const json = await response.json();

      if (!response.ok) {
        isLoading = false;
        error = json.error || 'Login failed';
        onLoadingChange(isLoading);
        onErrorChange(error);
        return;
      }

      // Check if email is verified
      if (!json.emailVerified) {
        isLoading = false;
        onLoadingChange(isLoading);

        // Show message to user - simple browser alert for now
        alert("Your email is not verified. Please check your inbox and verify your email before logging in.");
        return;
      }

      // Success
      isLoading = false;
      onLoadingChange(isLoading);
      onSuccess(json);

    } catch (err) {
      isLoading = false;
      error = 'Network error';
      onLoadingChange(isLoading);
      onErrorChange(error);
    }
  }

  return { login };
}
