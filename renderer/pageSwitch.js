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
  const userTransactionHisTab = document.getElementById("transactionHisTab");
  const userWithdrawTab = document.getElementById("withdrawTab");
  const userAcountDetailsTab = document.getElementById("AcountDetails");

  //User DashBoard Toggle Buttons=============================================
  const userCreateAccountButton = document.getElementById("createAccountButton");
  const userTransactionButton = document.getElementById("transactionButton");
  const userWithdrawButton = document.getElementById ("widthdrawButton");
  const userAccountDetailsButtons = document.getElementById ("accountDetailsButtons");

  //Add the toggle fuctions for USER===============================================
  //User create Account Func
  function userCreatAccTabFunc(){
    if(userCreatAccTab) userCreatAccTab.style.display = "flex";
    if(userTransactionHisTab) userTransactionHisTab.style.display = "none"
    if(userWithdrawTab) userWithdrawTab.style.display = "none"
    if(userAcountDetailsTab) userAcountDetailsTab.style.display = "none"
  }

  //User Trasaction history Func
  function userTransactionHisTabFunc(){
    if(userCreatAccTab) userCreatAccTab.style.display = "none";
    if(userTransactionHisTab) userTransactionHisTab.style.display = "flex"
    if(userWithdrawTab) userWithdrawTab.style.display = "none"
    if(userAcountDetailsTab) userAcountDetailsTab.style.display = "none"
  }
 
  //User Withdrawal Func
  function userWithdrawTabFunc(){
    if(userCreatAccTab) userCreatAccTab.style.display = "none";
    if(userTransactionHisTab) userTransactionHisTab.style.display = "none"
    if(userWithdrawTab) userWithdrawTab.style.display = "flex"
    if(userAcountDetailsTab) userAcountDetailsTab.style.display = "none";
  }

  function userAcountDetailsTabFun(){
    if(userCreatAccTab) userCreatAccTab.style.display = "none";
    if(userTransactionHisTab) userTransactionHisTab.style.display = "none";
    if(userWithdrawTab) userWithdrawTab.style.display = "none";
    if(userAcountDetailsTab) userAcountDetailsTab.style.display = "flex";
  }

  //Add events to User Buttons=================================================
  userCreateAccountButton.addEventListener('click', (e)=>{
    e.preventDefault();
      userCreatAccTabFunc();
  })

  userTransactionButton.addEventListener('click', (e)=>{
  e.preventDefault();
    userTransactionHisTabFunc();
  })

  userWithdrawButton.addEventListener('click', (e)=>{
  e.preventDefault();
  userWithdrawTabFunc();
  })

  userAccountDetailsButtons.addEventListener('click', (e)=>{
  e.preventDefault();
  userAcountDetailsTabFun();
  })
  // Role Divider===========================================================================================================
  // Role Divider===========================================================================================================
  // Role Divider===========================================================================================================


  // Staff DashBoard Tabs
  const creditAccTab = document.getElementById("creditAccTab");
  const viewAccountsTab = document.getElementById("viewAccountsTab");
  const withdrawForUserTab = document.getElementById("withdrawForUserTab")


  //Staff DashBoard Toggle Buttons
  const creditAccountButton = document.getElementById("creditAccountButton");
  const viewAccountButton = document.getElementById("viewAccountButton");
  const withdrawButton = document.getElementById("withdrawButton");



  //Add toggle State function for User Accounts
  function creditUserAccounts(){
  if (creditAccTab) creditAccTab.style.display = "flex";
  if (viewAccountsTab) viewAccountsTab.style.display = "none";
  if (withdrawForUserTab) withdrawForUserTab .style.display = "none";
  }

  //Add toggle State function for User Accounts
  function showUserAccounts(){
    if (creditAccTab) creditAccTab.style.display = "none";
    if (viewAccountsTab) viewAccountsTab.style.display = "flex";
    if (withdrawForUserTab) withdrawForUserTab.style.display = "none";
    }

     //Add toggle State funtions for User Accounts
    function withdrawForUserTabFun(){
      if (creditAccTab) creditAccTab.style.display = "none";
      if (viewAccountsTab) viewAccountsTab.style.display = "none";
      if (withdrawForUserTab) withdrawForUserTab.style.display = "flex";
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


  