export function resetPasswordHandler({ onLoadingChange, onErrorChange, onSuccess }) {
    let isLoading = false;
    let error = null;

    async function resetPassword(email, otp, newPassword) {
      // Set loading true and clear errors
      isLoading = true;
      error = null;
      onLoadingChange(isLoading);
      onErrorChange(null);

      try {
        const response = await fetch('http://localhost:4000/api/users/resetPassword', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, otp, newPassword })
        });

        const json = await response.json();

        if (!response.ok) {
          isLoading = false;
          error = json.error || 'Password reset failed';
          onLoadingChange(isLoading);
          onErrorChange(error);
          return;
        }

        // Success
        isLoading = false;
        onLoadingChange(isLoading);
        onSuccess(json);
        console.log('password ResetSuceesfully')
        // Notify user about the successful password reset
        alert("Password reset successful! You can now log in with your new password.");

      } catch (err) {
        console.error("Fetch error:", err);
        isLoading = false;
        error = 'Network error';
        onLoadingChange(isLoading);
        onErrorChange(error);
      }
    }

    return { resetPassword };
}
