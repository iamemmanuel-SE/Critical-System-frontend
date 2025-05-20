export function withdrawHandler({ onLoadingChange, onLock, onErrorChange, onSuccess }) {
    let isLoading = false;
    let error = null;
    
  
    async function withdrawFunction(withdrawalAmount,pin) {
      // Set loading true and clear errors
      isLoading = true;
      error = null;
      onLoadingChange(isLoading);
      onErrorChange(null);
      //get token from localhost 
      const {token,userId} = JSON.parse(localStorage.getItem('user'));
      console.log(token);
        let accountNumber = "";
        let accountName = "";

      //get the account name and number
      try{
        const accountsResponse = await fetch('http://localhost:4000/api/accounts/allAccounts', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}`},
      
    });
    const accountsJson = await accountsResponse.json();
    if(!accountsResponse.ok)
    {
      isLoading = false;
      onLoadingChange(isLoading);
      error = "Couldn't get response";

      onErrorChange(error);
      return;
      
    }
  
    //success
   const userAccount = accountsJson.find((account)=>account.user === userId)
   if(!userAccount)
   {
      isLoading = false;
      onLoadingChange(isLoading);
      error = "Create a Bank account you do not have one";
      onErrorChange(error);
      return;
   }
       accountNumber = userAccount.accountNumber;
       accountName = userAccount.accountName;
       
       
  }
  catch(error)
  {
    isLoading = false;
    console.log(error)
      onLoadingChange(isLoading);
      error = "Network error";
      onErrorChange(error);
      return;
  }
    
  
      
           
        
            fetch('http://localhost:4000/api/transactions/withdrawal', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({ accountName, accountNumber, withdrawalAmount,pin })
            })
            .then(response => {
              return response.json().then(json => {
                if(json.withdrawalLockUntil && new Date(json.withdrawalLockUntil) > new Date())
                  {
                      try{
                      
                      onLock(json.withdrawalLockUntil);
                      }
                      catch(error)
                      {
                        console.error("Error in onLock:", error);
          
                      }
                      localStorage.setItem("withdrawalLockUntil", json.withdrawalLockUntil);

                      isLoading = false;
                      error = 'Too many failed withdrawal attempts. Try again after'+json.withdrawalLockUntil;
          
                      onLoadingChange(isLoading);
                      onErrorChange(error);
          
                      return;
                  } 
                if (!response.ok) {
                  isLoading = false;
                  error = json.error || 'Failed to withdraw amount';
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

    
      
      
      
    
   
    return { withdrawFunction };
  }