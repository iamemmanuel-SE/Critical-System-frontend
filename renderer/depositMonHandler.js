
export function depositHandler({ onLoadingChange, onErrorChange, onSuccess }) {
    let isLoading = false;
    let error = null;
    
  
    async function deposit(accountName, accountNumber, depositAmount) {
      // Set loading true and clear errors
      isLoading = true;
      error = null;
      onLoadingChange(isLoading);
      onErrorChange(null);
      //get token from localhost 
      const {token} = JSON.parse(localStorage.getItem('user'));
  
      
      
           
        
            fetch('http://localhost:4000/api/transactions/deposit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({ accountName, accountNumber, depositAmount })
            })
            .then(response => {
              return response.json().then(json => {
                if (!response.ok) {
                  isLoading = false;
                  error = json.error || 'Failed to deposit amount';
                  onLoadingChange(isLoading);
                  onErrorChange(error);
                  return;
                }
          
                // Success
                isLoading = false;
                onLoadingChange(isLoading);
                onSuccess(json);
              });
            })
            .catch(err => {
                console.log(err)
              isLoading = false;
              error = 'Network error';
              onLoadingChange(isLoading);
              onErrorChange(error);
            });
          
         
        
        }
   
    return { deposit };
  }