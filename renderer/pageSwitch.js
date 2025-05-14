document.addEventListener("DOMContentLoaded", () => {
  const signupSection = document.getElementById("signup-section");
  const loginSection = document.getElementById("login-section");
  const heroSection = document.getElementById("hero-section");
  const resetPass = document.getElementById('resetPass');
  const userDashBoard = document.getElementById("dashboard-wrapperUser");
  const dashboardWrapperStaff = document.getElementById("dashboard-wrapperStaff");
  const otpPage = document.getElementById("OtpPage");

  //Staff DashBoard Toggles
  const creditAccountButton = document.getElementById("creditAccountButton");
  const viewAccountButton= document.getElementById("viewAccountButton");
  const myWithdrawButton = document.getElementById("myWithdrawButton");




 


  const toSignupTriggers = Array.from(document.getElementsByClassName("to-signup"));
  const toLoginTriggers = Array.from(document.getElementsByClassName("to-login"));

  toSignupTriggers.forEach(trigger => {
    if (trigger) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        showSignup();
      });
    }
  });

  toLoginTriggers.forEach(trigger => {
    if (trigger) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        showLogin();
      });
    }
  });

  if (resetPass) {
    resetPass.addEventListener("click", (e) => {
      e.preventDefault();
      showRecoverPage();
    });
  }

  // function showRecoverPage() {
  //   if (loginSection) loginSection.style.display = "none";
  //   if (heroSection) heroSection.style.display = "none";
  //   if (userDashBoard) userDashBoard.style.display = "none";
  //   if (signupSection) signupSection.style.display = "none";
  //   if (resetPasswordPage) resetPasswordPage.style.display = "flex";
    
  // }

  const VerifyEmailrecovPage = document.getElementById('VerifyEmailrecovPage');

function showRecoverPage() {
  if (loginSection) loginSection.style.display = "none";
  if (heroSection) heroSection.style.display = "none";
  if (userDashBoard) userDashBoard.style.display = "none";
  if (signupSection) signupSection.style.display = "none";
  if (VerifyEmailrecovPage) VerifyEmailrecovPage.style.display = "flex";
  if (otpPage) otpPage.style.display = "none";

}


  function showLogin() {
    if (signupSection) signupSection.style.display = "none";
    if (heroSection) heroSection.style.display = "none";
    if (userDashBoard) userDashBoard.style.display = "none";
    if (loginSection) loginSection.style.display = "flex";
    if (VerifyEmailrecovPage) VerifyEmailrecovPage.style.display = "none";
    if (otpPage) otpPage.style.display = "none";



  }

  function showSignup() {
    if (loginSection) loginSection.style.display = "none";
    if (heroSection) heroSection.style.display = "none";
    if (userDashBoard) userDashBoard.style.display = "none";
    if (signupSection) signupSection.style.display = "flex";
    if (VerifyEmailrecovPage) VerifyEmailrecovPage.style.display = "none";
    if (otpPage) otpPage.style.display = "none";



  }

  // Set initial visibility
  if (signupSection) signupSection.style.display = "none";
  if (loginSection) loginSection.style.display = "none";
  if (userDashBoard) userDashBoard.style.display = "none";
  if (dashboardWrapperStaff) dashboardWrapperStaff.style.display = "none";
  if (VerifyEmailrecovPage) VerifyEmailrecovPage.style.display = "none";
  if (otpPage) otpPage.style.display = "none";
  

});


  