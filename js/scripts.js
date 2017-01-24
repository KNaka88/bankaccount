//Business Logic

function BankAccount (fullName, email, password){
  this.fullName = fullName;
  this.email = email;
  this.password = password;
  this.balance = 0;
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
};

BankAccount.prototype.withdrawal = function(amount){
    this.balance -= amount;
};



$(function(){
  var newBankAccount;

  $("form#signup-form").submit(function(event){
    var fullName = $("#full-name").val();
    var email = $("#signup-email").val();
    var password = $("#signup-password").val();

    newBankAccount = new BankAccount(fullName, email, password);

    $(".show-balance").text("$" + newBankAccount.balance.toFixed(2));

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

    } else {
      $("#signin-form").append("<h4>Your username and password do not match</h4>");
    }
    event.preventDefault();
  });



  $("form#action-form").submit(function(event){
    var choice = $("#action-type").val();
    var amount = parseInt($("#amount").val());
    if (choice === "Deposit"){
      newBankAccount.deposit(amount);
    } else if (choice === "Withdrawal") {
      newBankAccount.withdrawal(amount);
    } else {
      alert("error!");
    }
    $(".show-balance").text("$" + newBankAccount.balance.toFixed(2));
    event.preventDefault();

  });


});
