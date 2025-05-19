export function createAccountHandler({ onLoadingChange, onErrorChange, onSuccess }) {
    let isLoading = false;
    let error = null;
    
  
    async function createAccount(accountName, idNumber, address, pin) {
      // Set loading true and clear errors
      isLoading = true;
      error = null;
      onLoadingChange(isLoading);
      onErrorChange(null);
      //get token from localStorage
      const {token} = JSON.parse(localStorage.getItem('user'));
      
  
      
      try {
        const response = await fetch('http://localhost:4000/api/accounts', {
          method: 'POST',
          headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        },
          body: JSON.stringify({ accountName, idNumber, address, pin })
        });
  
        const json = await response.json();
  
        if (!response.ok) {
          isLoading = false;
          error = json.error || 'Create account failed';
          onLoadingChange(isLoading);
          onErrorChange(error);
          return;
        }
  
        // Success
        isLoading = false;
        onLoadingChange(isLoading);
        onSuccess(json);
      } catch (err) {
        console.log(err)
        isLoading = false;
        error = 'Network error';
        onLoadingChange(isLoading);
        onErrorChange(error);
      }
    } 
   
    return { createAccount };
  }