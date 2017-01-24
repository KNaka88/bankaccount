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
  $("form#signup-form").submit(function(event){
    var fullName = $("#full-name").val();
    var email = $("#signup-email").val();
    var password = $("#signup-password").val();

    var newBankAccount = new BankAccount(fullName, email, password);
    console.log(newBankAccount);


    event.preventDefault();
  });
});


$(function(){
  $("form#signin-form").submit(function(event){


    event.preventDefault();
  });
});


$(function(){
  $("form#action-form").submit(function(event){


    event.preventDefault();
  });
});
