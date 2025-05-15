document.addEventListener("DOMContentLoaded", () => {
  const signupSection = document.getElementById("signup-section");
  const loginSection = document.getElementById("login-section");
  const heroSection = document.getElementById("hero-section");
  const resetPass = document.getElementById('resetPass');
  const userDashBoard = document.getElementById("dashboard-wrapperUser");
  const dashboardWrapperStaff = document.getElementById("dashboard-wrapperStaff");
  const otpPage = document.getElementById("OtpPage");

   
  //User DashBoard tabs================================================
  const userCreatAccTab = document.getElementById("userCreatAccTab");
  const transactionHisTab = document.getElementsById("transactionHisTab");
  const withdrawTab = document.getElementById("withdrawTab");
  const AcountDetails = document.getElementById("AcountDetails");

  //User DashBoard Toggle Buttons=============================================
  const createAccountButton = document.getElementById("createAccountButton")
  const transactionButton = document.getElementById("transactionButton ")
  const widthdrawButton = document.getElementById ("transactionButton ")
  const  accountDetailsButtons = document.getElementById ("transactionButton ")

  //Add toggle State function for User Accounts
  function creditUserAccounts(){
    if (userCreatAccTab) userCreatAccTab.style.display = "flex";
    if (transactionHisTab) transactionHisTab.style.display = "none";
    if (withdrawTab ) withdrawTab.style.display = "none";
    if (AcountDetails ) AcountDetails .style.display = "none";
    }



  // Role Divider===========================================================================================================
  // Role Divider===========================================================================================================
  // Role Divider===========================================================================================================


  // Staff DashBoard Tabs
  const creditAccTab = document.getElementById("creditAccTab");
  const viewAccountsTab = document.getElementById("viewAccountsTab");
  const withdrawForUserTab = document.getElementById("withdrawForUserTab")




  //Add toggle State function for staff Accounts
  function creditUserAccounts(){
  if (creditAccTab) creditAccTab.style.display = "flex";
  if (viewAccountsTab) viewAccountsTab.style.display = "none";
  if (withdrawForUserTab ) withdrawForUserTab .style.display = "none";
  }

  //Add toggle State function for staff Accounts
  function showUserAccounts(){
    if (creditAccTab) creditAccTab.style.display = "none";
    if (viewAccountsTab) viewAccountsTab.style.display = "flex";
    if (withdrawForUserTab ) withdrawForUserTab .style.display = "none";
    }

     //Add toggle State funtions for staff Accounts
    function withdrawForUserTabFun(){
      if (creditAccTab) creditAccTab.style.display = "none";
      if (viewAccountsTab) viewAccountsTab.style.display = "none";
      if (withdrawForUserTab ) withdrawForUserTab .style.display = "flex";
      }
    
    

  //Add toggle events=====
  creditAccountButton.addEventListener('click', (e)=>{
    e.preventDefault();
    creditUserAccounts();

  })
  
  viewAccountButton .addEventListener('click', (e)=>{
    e.preventDefault();
    showUserAccounts();

  })
  withdrawButton.addEventListener('click', (e)=>{
    e.preventDefault();
    withdrawForUserTabFun();

  })
  




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
  if (viewAccountsTab) viewAccountsTab.style.display = "none";
  if (withdrawForUserTab ) withdrawForUserTab .style.display = "none";
  

});


  