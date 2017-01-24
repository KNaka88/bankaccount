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
  var loginTry = 0;

  $("form#signup-form").submit(function(event){
    var fullName = $("#full-name").val();
    var email = $("#signup-email").val();
    var password = $("#signup-password").val();

    newBankAccount = new BankAccount(fullName, email, password);

    $(".show-balance").text("$" + newBankAccount.balance.toFixed(2));
    $(".person-name").text(newBankAccount.fullName);

    setTimeout(function(){
      $("#signup-form").hide();
      $("#signup-complete").show();
    }, 1000);


    event.preventDefault();

  });
  $("form#signin-form").submit(function(event){
    $("#signin-form h4").remove();
    var signinEmail = $("#signin-email").val();
    var signinPassword = $("#signin-password").val();

    if(loginTry >= 3){
      alert("You entered wrong password too many times!")
      $("#sign-in").hide();
    }else if(signinEmail === newBankAccount.email && signinPassword === newBankAccount.password){
      setTimeout(function(){
        $("#sign-in").hide();
        $("#account").show();
      }, 1000);

    } else {
      $("#signin-form").append("<h4>Your username and password do not match</h4>");
      loginTry++;
    }
    event.preventDefault();
  });



  $("form#action-form").submit(function(event){
    var choice = $("#action-type").val();
    var amount = parseInt($("#amount").val());
    if (choice === "Deposit"){
      newBankAccount.deposit(amount);
      $("#transactions").append("<li>Deposited: $" + amount.toFixed(2) + "</li>");
    } else if (choice === "Withdrawal" && newBankAccount.balance >= amount) {
      newBankAccount.withdrawal(amount);
      $("#transactions").append("<li>Withdrew: $" + amount.toFixed(2) + "</li>");
    } else {
      alert("You cannot withdraw more money than you have!!!!");
      $("#transactions").append("<li>Penalty: -$5.00 for wasting our time.</li>");
      newBankAccount.withdrawal(5);
    }
    $(".show-balance").text("$" + newBankAccount.balance.toFixed(2));
    event.preventDefault();

  });

  $("#activity-button").click(function(){
    $("#activity").toggle();
  });


});
