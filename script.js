let accountNumber = 0;
let balance = 0;

class CustomerAccount {
    constructor(number, name, balance){
        this.number = number;
        this.name = name;
        this.balance = balance;
    }
}

let openAccount = new CustomerAccount;
let otherAccount = new CustomerAccount;

var accountOne = new CustomerAccount(201, "Katie Jones", 400);
var accountTwo = new CustomerAccount(501, "Yolo Baggins", 2);
var accountThree = new CustomerAccount(301, "Pappy O'Mamas", 15000);

var accounts = [accountOne, accountTwo, accountThree];

function saveAccountState(CustomerAccount){
    myJSON = JSON.stringify(CustomerAccount);
    localStorage.setItem("savedAccount", myJSON);
}

function retrieveAccountState(){
    var currentState = localStorage.getItem("savedAccount");
    CustomerAccount = JSON.parse(currentState);
    return CustomerAccount;
}

function verifyAccount(num){
    for(var x = 0; x < accounts.length; x++){
        if(num == accounts[x].number){
           if(openAccount == undefined){
            openAccount = accounts[x]
            return openAccount;
           }
            else{
                otherOpenAccount = accounts[x];
                return otherOpenAccount;
            }
        } 
        else {
            continue;
        }
    }
    return false;
}

function deposit(){
    if(accountNumber == 0){
        var num = getAccountNumber();
        verifyAccount(num);
       
        openAccount.number = verifyAccount(num).number
        openAccount.name = verifyAccount(num).name
        openAccount.balance= verifyAccount(num).balance;
       
        if(openAccount){
            display.innerHTML = "Account verified. Welcome, " + openAccount.name + ".";
        }
        else {
            alert("Account not found. Please try again");
        }
    }
   
    display.innerHTML = "Account number: " + openAccount.number + "<br> Name: " + openAccount.name + "<br> Balance: $" + openAccount.balance;
   
    let depositAmount = prompt("How much would you like to deposit?: ");
    
    depositAmount =  parseInt(depositAmount, 10);
    openAccount.balance += depositAmount;
   
    display.innerHTML = "Account Number: " + openAccount.number + "<br> Name: " + openAccount.name + "<br> Balance: $" + openAccount.balance;
}

function withdraw(){
    if(accountNumber == 0){
        var num = getAccountNumber();
        verifyAccount(num);
       
        openAccount.number = verifyAccount(num).number
        openAccount.name = verifyAccount(num).name
        openAccount.balance= verifyAccount(num).balance;         
       
        if(openAccount){
            display.innerHTML = "Account verified. Welcome, " + openAccount.name + ".";
        }

        else {
            alert("Account not found. Please try again");
        }
    }
   
    display.innerHTML = "Account number: " + openAccount.number + "<br> Name: " + openAccount.name + "<br> Balance: $" + openAccount.balance;
    
    let withdrawAmount = prompt("How much would you like to withdraw?: ");
   
    withdrawAmount =  parseInt(withdrawAmount, 10);
    openAccount.balance -= withdrawAmount;
    
    display.innerHTML = "Account number: " + openAccount.number + "<br> Name: " + openAccount.name + "<br> Balance: $" + openAccount.balance;
}

function summary(){
    if(accountNumber == 0){
        var num = getAccountNumber();
        verifyAccount(num);
       
        openAccount.number = verifyAccount(num).number
        openAccount.name = verifyAccount(num).name
        openAccount.balance= verifyAccount(num).balance;     
    }
    
    if(openAccount == undefined){
        alert("Account not found. Try again.");
        accountNumber = 0;
        summary();
    }
    
    display.innerHTML = "Account number: " + openAccount.number + "<br> Name: " + openAccount.name + "<br> Balance: $" + openAccount.balance;
}

function getAccountNumber(){
    accountNumber = prompt("What is your account number?");
    return accountNumber;
}

function createNewAccount(){
    var newName;
    var newNumber;
    var newBalance;
    
    alert("Thank you for wishing to open an account with WestBank.");
    alert("Seeing as we're not a real bank, we do things kinda willy-nilly.");
   
    newName = prompt("What's your name?")
    newNumber = prompt("What would you like your account number to be?");
    newBalance = prompt("How much money do you have in the bank? Wanna be rich? It's easy! Just say the word.");

    var newAccount = new CustomerAccount(parseInt(newNumber, 10), newName, parseInt(newBalance, 10));
    accounts.push(newAccount);
}

function transfer(){
    if(accountNumber == 0){
        var num = getAccountNumber();
        verifyAccount(num);
        openAccount.number = verifyAccount(num).number
        openAccount.name = verifyAccount(num).name
        openAccount.balance= verifyAccount(num).balance;       
        if(openAccount){
            display.innerHTML = "Account verified. Welcome, " + openAccount.name + ".";
        }
        else {
            alert("Account not found. Please try again");
        }
    }
   
    display.innerHTML = "Account number: " + openAccount.number + "<br> Name: " + openAccount.name + "<br> Balance: $" + openAccount.balance;
   
    let transferAmount = prompt("How much would you like to transfer?: ");
    transferAmount =  parseInt(transferAmount, 10);
    
    let otherAccountNumber = prompt("To what other account?");
    var otherAccountInfo = verifyAccount(parseInt(otherAccountNumber, 10));
   
    otherAccount.number = otherAccountInfo.number
    otherAccount.name = otherAccountInfo.name
    otherAccount.balance = otherAccountInfo.balance;
   
    openAccount.balance -= transferAmount;
    otherAccount.balance += transferAmount;
   
    display.innerHTML = "Amount of $" + transferAmount + " transferred from Account #" + openAccount.number + " to Account #" + otherAccount.number + ".";
}

function logOut(){
    accountNumber = 0;
    balance = 0;
    display.innerHTML = "Thank you for banking with WestBank.";
}

function logOutDialog(){
    let answer = prompt("Log out? Y/N");
    if(answer == "y" || answer == "Y"){
        logOut();
    }
    else{
        return;
    }
}