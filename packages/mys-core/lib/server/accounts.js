Accounts.config({
  // New users with an email address won't receive an verification email
  sendVerificationEmail: true,
  // Calls to createUser from the client will be rejected
  forbidClientAccountCreation: false
});
