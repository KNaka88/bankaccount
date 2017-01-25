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
  var debugAccount = new BankAccount("David Quiz", "dave@dave.com", "dave");
  var tempAccount;
  var loginTry = 0;
  var accounts = [];

  $("form#signup-form").submit(function(event){
    var fullName = $("#full-name").val();
    var email = $("#signup-email").val();
    var password = $("#signup-password").val();

    newBankAccount = new BankAccount(fullName, email, password);
    accounts.push(newBankAccount);

    bankAccount1 = new BankAccount("David Quiz", "dave@dave.com", "dave");
    accounts.push(bankAccount1);

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
    }else if(signinEmail === debugAccount.email && signinPassword === debugAccount.password){
      tempAccount = debugAccount;
      $(".show-balance").text("$" + tempAccount.balance.toFixed(2));
      $(".person-name").text(tempAccount.fullName);

      setTimeout(function(){
        $("#sign-in").hide();
        $("#account").show();
      }, 1000);
    } else if(signinEmail === newBankAccount.email && signinPassword === newBankAccount.password){
      tempAccount = newBankAccount;
      $(".show-balance").text("$" + tempAccount.balance.toFixed(2));
      $(".person-name").text(tempAccount.fullName);
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
    var amount = parseFloat($("#amount").val());
    if (choice === "Deposit"){
      tempAccount.deposit(amount);
      $("#transactions").append("<li>Deposited: $" + amount.toFixed(2) + "</li>");
    } else if (choice === "Withdrawal" && tempAccount.balance >= amount) {
      tempAccount.withdrawal(amount);
      $("#transactions").append("<li>Withdrew: $" + amount.toFixed(2) + "</li>");
    } else {
      alert("You cannot withdraw more money than you have!!!!");
      $("#transactions").append("<li>Penalty: -$5.00 for wasting our time.</li>");
      tempAccount.withdrawal(5);
    }
    $(".show-balance").text("$" + tempAccount.balance.toLocaleString(undefined, {minimumFractionDigits: 2}));
    event.preventDefault();

  });

  $("#activity-button").click(function(){
    $("#activity").toggle();
  });


});
