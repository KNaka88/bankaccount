//Business Logic

function BankAccount (fullName, email, password){
  this.fullName = fullName;
  this.email = email;
  this.password = password;
  this.balance = 0;
}

BankAccount.prototype.deposit = function(amount){
    balance += amount;
};

BankAccount.prototype.withdrawal = function(amount){
    balance -= amount;
};



$(function(){
  var newBankAccount;

  $("form#signup-form").submit(function(event){
    var fullName = $("#full-name").val();
    var email = $("#signup-email").val();
    var password = $("#signup-password").val();

    newBankAccount = new BankAccount(fullName, email, password);

    setTimeout(function(){
      $("#signup-form").hide();
      $("#signup-complete").show();
    }, 1000);


    event.preventDefault();

  });
  $("form#signin-form").submit(function(event){
    var signinEmail = $("#signin-email").val();
    var signinPassword = $("#signin-password").val();
    if(signinEmail === newBankAccount.email && signinPassword === newBankAccount.password){
      setTimeout(function(){
        $("#sign-in").hide();
        $("#account").show();
      }, 1000);

    }
    event.preventDefault();
  });



  $("form#action-form").submit(function(event){

    event.preventDefault();
  });


});
