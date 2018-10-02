var accounts = [];
var user = new Object();
while(true){
  
    var option = prompt(`welcome to money bank,
    1.open account,
    2.show balance
    3.withdraw,
    4.deposit,
    5.fixed deposit
    6.exit`)
    if(option == '1' || option == '2' || option == '3' || option == '4' || option == '5'){
        switch(option){
            case '1':
                openAccount();
                break;
            case '2':
                showBalance();
                break;
            case '3':
                withdrawAmount();
                break;
            case '4':
                depositAmount();
                break;
            case '5':
                fixedDeposit();
                break;
            default:
                break;
        }  
    }
    else {
        break;
    }
}
function openAccount(){
    const accountNum = prompt('enter account number: ')
    const accountBalance = +prompt('enter opening balance');
    var accountName = prompt('enter account name: ')
    var accountEmail = prompt('enter email-id: ')
    var accountPhone = prompt('enter phone no: ');
    user = {};
    user.name = accountName;
    user.balance = accountBalance;
    user.accNum = accountNum;
    user.email = accountEmail;
    user.phone = accountPhone;
    accounts.push(user);

    alert('account opened succesfully')
    console.log(accounts);
    
}

function showBalance() {
    var accountNo = prompt('enter account no')
    var bal = findAccount(accountNo);
        console.log('account no: '+bal.accNum+' balance:', bal.balance)
}

function withdrawAmount() {
    var accountNo = prompt('enter account no')
    var bal = findAccount(accountNo);
        var amount = +prompt('enter amount');
        if(amount>bal.balance){
            alert('Insufficient Balance');
        }
        else if((bal.balance-amount)<1000){
            alert('minimum balance should be maintained')
        }
        else {
            bal.balance -= amount;
            console.log(`account no: ${bal.accNum}  balance after withdraw: ${bal.balance}`)
        }
}

function depositAmount(){
    var accountNo = prompt('enter account no')
    var bal = findAccount(accountNo);
        var amount = +prompt('enter amount');
        bal.balance += amount;
        console.log(`account no: ${bal.accNum} balance after deposit: ${bal.balance}`)
}

function fixedDeposit() {
    var interest = 7
    var accountNo = prompt('enter account no')
    var bal = findAccount(accountNo);
        var tenure = +prompt('enter tenure period')
        for(tenPeriod=0;tenPeriod<tenure;tenPeriod++){
            bal.balance += (bal.balance*interest)/100;
        }
        console.log(`account no: ${bal.accNum} balance:-- ${bal.balance}`);
}

function findAccount(accountNumber) {
    var count =0;
    for(key in accounts){
        if(accounts[key].accNum === accountNumber){
            return accounts[count];
        }
        count++;
    }
    //return 'Invalid account number'
}