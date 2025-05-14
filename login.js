export function loginHandler({ onLoadingChange, onErrorChange, onSuccess, locked }) {
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
        headers: { 'Content-Type': 'application/json',
          'x-forwarded-for': '194.66.175.89'
         },
        body: JSON.stringify({ email, password })
      });

      const json = await response.json();

      //Check=========================
      // ==================================================
      if(json.lockLoginTimer)
        {
            try{
            locked(json.lockLoginTimer);
            }
            catch(error)
            {
              console.error("Error in onLock:", error);

            }
            isLoading = false;
            error = json.error || 'System is locked. Too many failed login attempts, try again after'+json.loginLockUntil;

            onLoadingChange(isLoading);
            onErrorChange(error);
            return;
        }
      // ==================================================
      

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
