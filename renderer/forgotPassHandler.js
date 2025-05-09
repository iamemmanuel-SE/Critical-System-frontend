export function sendRecoveryEmailHandler({ onLoadingChange, onErrorChange, onSuccess}) {
    let isLoading = false;
    let error = null;
  
    async function sendRecoveryEmail(email) {
      // Set loading true and clear errors
      isLoading = true;
      error = null;
      onLoadingChange(isLoading);
      onErrorChange(null);
  
      
      try {
        const response = await fetch('http://localhost:4000/api/users/forgotPassword', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({email})
        });
  
        const json = await response.json();
        
       
         if (!response.ok) {
          isLoading = false;
          error = json.error || 'Failed to send the recovery email';
          onLoadingChange(isLoading);
          onErrorChange(error);
          return;
        }
      
       
       
        // Successs
        isLoading = false;
        localStorage.setItem('user', JSON.stringify(json));
        onLoadingChange(isLoading);
        onSuccess(json); 
      } catch (err) {
        console.log(err);
        isLoading = false;
        error = 'Network error';
        onLoadingChange(isLoading);
        onErrorChange(error);
      }
    }
  
    return { sendRecoveryEmail };
  }