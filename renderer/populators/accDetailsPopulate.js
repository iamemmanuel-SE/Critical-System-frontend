// accDetailsPopulate.js

/**
 * Populates form fields with account data and makes them read-only.
 */

/** Disable the Create Account button */
// Disable or enable the Create Account button



export function populateAccountForm(account) {
  const fields = {
    accountName:   account.accountName,
    accIdNumber:      account.idNumber,
    accountNumber: account.accountNumber,
    accEmail:         account.email,
    userName:      account.username
  };

  Object.entries(fields).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.value    = value;
    el.readOnly = true;
  });

  // Make sure the form is visible
  const form = document.getElementById('AccountForm');
  if (form) form.style.display = 'block';

  
}

/**
 * Attempts to fetch the logged‑in user’s bank account.
 * If one exists, populates the form; if none, logs a hint.
 * @param {{ token: string }} user
 */
// Disable or enable the Create Account button
export function setCreateBtnActive(isActive) {
  const btn = document.getElementById('createAccBut');
  if (!btn) return;
  btn.disabled = !isActive;
  btn.style.backgroundColor = isActive ? '' : 'gray';
}

/**
 * Attempts to fetch the logged‑in user’s bank account.
 * If one exists, populates the form and disables the button.
 * If none, leaves the button enabled.
 */
export async function fetchMyAccount(user) {
  try {
    const response = await fetch('http://localhost:4000/api/accounts/user', {
      headers: { 'Authorization': `Bearer ${user.token}` }
    });

    if (response.status === 404) {
      console.log('No bank account found. You can create one.');
      
      // Enable the Create button for first‑time users
      setCreateBtnActive(true);
      return null;
    }

    if (!response.ok) {
      console.error(`Unexpected status ${response.status}`);
      setCreateBtnActive(true);
      return null;
    }

    const account = await response.json();
    if (!account) {
      setCreateBtnActive(true);
      return null;
    }

    populateAccountForm(account);
    
    // Disable the button since they already have an account
    setCreateBtnActive(false);
    return account;

  } catch (err) {
    console.error('Failed to fetch account:', err.message);
    // In case of network error, let them create
    setCreateBtnActive(true);
    return null;
  }
}

