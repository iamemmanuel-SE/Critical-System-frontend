export function checkAndPopulateUserAccount(user) {
    fetch('http://localhost:4000/api/accounts/', {
      headers: { 'Authorization': `Bearer ${user.token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error("No account found");
        return res.json();
      })
      .then(account => {
        // Render form in read-only mode
        populateAccountForm(account);
      })
      .catch(err => {
        console.log("No account or error:", err.message);
        // Show account creation form if none exists
        // const form = document.getElementById("AccountForm");
        // if (form) form.style.display = "block";
      });
  }
  
  /**
   * Populates form fields with account data and makes them read-only.
   * @param {Object} account - The account data from the server.
   */
  export function populateAccountForm(account) {
    const fields = {
      accountName: account.accountName,
      idNumber: account.idNumber,
      accountNumber: account.accountNumber,
      email: account.email,
      userName: account.username
      
    };
  
    // accountName,
    // idNumber,
    // balance,
    // user: userId,
    // accountNumber,
    // email: userEmail,
    // username: userName
    Object.entries(fields).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.value = value;
      el.readOnly = true;
    });
  
    // Ensure the form is visible
    const form = document.getElementById("AccountForm");
    if (form) form.style.display = "block";
  }