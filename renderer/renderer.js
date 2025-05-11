// Get form elements
import { signupHandler } from "./signup.js";
import { loginHandler } from "../login.js";
import { sendRecoveryEmailHandler } from "./forgotPassHandler.js";
import { resetPasswordHandler } from "./resetPass.js";

const signupForm = document.getElementById("signupForm");
const signinForm = document.getElementById("signinForm")
const spinnerOverlay = document.getElementById("spinnerOverlay"); // Optional loading spinner
const dashboard = document.getElementById("dashboard");
const recoveForm = document.getElementById("RecoveForm");


// PAGE SECTION CALLS============================================================
const signupSection = document.getElementById("signup-section");
const loginSection = document.getElementById("login-section");
const heroSection = document.getElementById("hero-section");
const userDashBoard = document.getElementById("dashboard-wrapperUser");
const otpPage = document.getElementById("OtpPage");
const VerifyEmailrecovPage = document.getElementById('VerifyEmailrecovPage');
// PAGE SECTION CALLS============================================================

// SHOW DASHBOARD function (this func displays dashboard)===================================
function showUserDashBoard() {
  if (loginSection) loginSection.style.display = "none";
  if (heroSection) heroSection.style.display = "none";
  if (userDashBoard) userDashBoard.style.display = "flex";
  if (signupSection) signupSection.style.display = "none";
  if (otpPage) otpPage.style.display = "none";
  if (VerifyEmailrecovPage) VerifyEmailrecovPage.style.display = "none";
  
  // if (resetPasswordPage) resetPasswordPage.style.display = "none";
 
}

// Show login Section====================================================================================
function showLoginSection() {
  if (loginSection) loginSection.style.display = "flex";
  if (heroSection) heroSection.style.display = "none";
  if (userDashBoard) userDashBoard.style.display = "none";
  if (signupSection) signupSection.style.display = "none";
  if (otpPage) otpPage.style.display = "none";
  if (VerifyEmailrecovPage) VerifyEmailrecovPage.style.display = "none";
  
 
}

// SHOW OTP PAGE function (this func displays OTP page)========================================================
function showOtpPage() {
  if (loginSection) loginSection.style.display = "none";
  if (heroSection) heroSection.style.display = "none";
  if (userDashBoard) userDashBoard.style.display = "none";
  if (signupSection) signupSection.style.display = "none";
  if (otpPage) otpPage.style.display = "flex";
  if (VerifyEmailrecovPage) VerifyEmailrecovPage.style.display = "none";
  console.log('I AM OTP AND I AM HEER')

  // if (resetPasswordPage) resetPasswordPage.style.display = "none";
 
}

//Reset Password Handler with OTP ===============================================================
// Reset Password Handler  WITH OTP==================================================================================
const { resetPassword } = resetPasswordHandler({
  onLoadingChange: (isLoading) => {
    if (spinnerOverlay) spinnerOverlay.style.display = isLoading ? "flex" : "none";
  },
  onErrorChange: (err) => {
    if (err) alert(`Reset Password Error: ${err}`);
  },
  onSuccess: (response) => {
    console.log("Password successfully reset:", response);
    // Optionally redirect to login page
    // alert("Password reset complete! Please log in with your new password.");
    // If you have a login section to show:
    showLoginSection();
    // if (loginSection) loginSection.style.display = "flex";
    // if (otpPage) otpPage.style.display = "none";
  }
});

// Get Unlocked=====================================================================


//
// Get Reset details to Handler
const resetPasswordForm = document.getElementById("OtpVerifyForm");

if (resetPasswordForm) {
  resetPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("OtpEmailInput").value.trim();
    const otp = document.getElementById("otpValue").value.trim();
    const newPassword = document.getElementById("reset-new-password").value.trim(); // or however you're managing otp

    if (!email || !newPassword || !otp) {
      alert("Please fill in all fields");
      return;
    }

    resetPassword(email, otp, newPassword);
  });
}


// SHOW DASHBOARD function (this func displays dasboard)====================================


// SHOW DASHBOARD function (this func displays dasboard)====================================

// const allPageDisplay = Array.from(document.getElementsByClassName("allPages"));
// allPageDisplay.forEach(page => {
//   if (page && ) {
//     trigger.addEventListener("click", (e) => {
//       e.preventDefault();
//       showSignup();
//     });
//   }
// });
// SHOW DASHBOARD function (this func displays dasboard)====================================


// Initialize signup handler
const { signup } = signupHandler({
  onLoadingChange: (isLoading) => {
    if (spinnerOverlay) spinnerOverlay.style.display = isLoading ? "flex" : "none";
  },
  onErrorChange: (err) => {
    if (err) alert(`Signup Error: ${err}`);
  },
  onSuccess: (user) => {
    console.log("Signup success:", user);
    if(user.role === "user"){
      //turn off all pages leaving the user dashboard
    }
    // Optionally transition to dashboard
    // dashboard.style.display = "flex";
    // document.querySelector(".form_container").style.display = "none";
    // document.querySelector(".home").classList.remove("show");
  }
});




// Recovery Password HAndler===================================================================
const { sendRecoveryEmail } = sendRecoveryEmailHandler({
  onLoadingChange: (isLoading) => {
    if (spinnerOverlay) spinnerOverlay.style.display = isLoading ? "flex" : "none";
  },
  onErrorChange: (err) => {
    if (err) alert(`Recovery Error: ${err}`);
  },
  onSuccess: (response) => {
    console.log(response);
    showOtpPage();
    const otpEmailInput = document.getElementById("OtpEmailInput");// get the gmail input field on otp page
    otpEmailInput.value = response.email;
    otpEmailInput.readOnly = true;

    console.log("Recovery email sent:", response);
    alert("Recovery email sent successfully! Please check your inbox.");

    // the the display page function

    // Optional: redirect to verification page or login
    // if (resetPasswordPage) {
    //   resetPasswordPage.style.display = "flex";
    //   loginSection.style.display = "none";
    //   heroSection.style.display = "none";
    // }
  }
});


recoveForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("RecoveInput").value.trim();

  if (!email) {
    alert("Please enter your email");
    return;
  }

  sendRecoveryEmail(email);
  recoveForm.reset();
});
// Recovery Password HAndler===================================================================


// Handle  Signup form submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log('Signup Button Pressed')
  
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  if (!firstName || !lastName || !email || !password || !role) {
    alert("Please fill in all fields");
    return;
  }

  const username = `${firstName} ${lastName}`;

  // Call signup
  signup(username, email, password, role);

  // Clear form inputs
  signupForm.reset();
});


// Handle  SignIn form submission=========================================================================================

// Initialze SIGNIN handler=======================================================================
const { login } = loginHandler({
  onLoadingChange: (isLoading) => {
    if (spinnerOverlay) spinnerOverlay.style.display = isLoading ? "flex" : "none";
  },
  onErrorChange: (err) => {
    if (err) alert(`Signin Error: ${err}`);
  },
  onSuccess: (user) => {
    console.log(user);
    if(user.role === 'user'){
      showUserDashBoard();
    }
   
    
    // Optionally transition to dashboard
    // dashboard.style.display = "flex";
    // document.querySelector(".form_container").style.display = "none";
    // document.querySelector(".home").classList.remove("show");
  },
  locked: (lockLoginTimer => {
    console.log(lockLoginTimer)
    const lockTimer = new Date(lockLoginTimer).getTime();
            const now = new Date().getTime();
            console.log(lockLoginTimer);
            console.log(now);
          
             if (lockTimer > now) {
              const signupScreenLockID = document.getElementById("signup-Screen-LockID");
              const countdownText = document.getElementById("signupTimer");
                   signupScreenLockID.style.display = "flex";

          
              const countdownInterval = setInterval(() => {
                const timeLeft = lockTimer - new Date().getTime();
                console.log(timeLeft);
                
          
                 if (timeLeft <= 0) {
                  clearInterval(countdownInterval);
                  overlay.style.display = "none";
                  // loginForm.querySelector('button[type="submit"]').disabled = false;
                } else {
                  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
                  const seconds = Math.floor((timeLeft / 1000) % 60);
                  countdownText.innerText = `Login temporqarily locked. Please wait ${minutes}m ${seconds}s.`;
                } 
              }, 1000);
            }
  })
});

signinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log('Sign In Button Pressed, heooo use in')
 
  
  // const firstName = document.getElementById("firstName").value.trim();
  // const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("signin-email").value.trim();
  const password = document.getElementById("signin-password").value.trim();
  // const role = document.getElementById("role").value;

  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }

  // const username = `${firstName} ${lastName}`;

  // Call signup
  login(email, password);

  // Clear form inputs
  signupForm.reset();
});