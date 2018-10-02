let option = prompt('Enter ', "withdraw")
let balance = 2000;
let withdrawAmount;
let depositAmount;
if (option == 'balance') {
    console.log('current Balance: ', balance);
    option = prompt('Enter ', "exit")
    if (option == 'withdraw') {
        withdrawAmount = Number(prompt('enter amount to withdraw'));
        if (withdrawAmount > balance) {
            console.log('withdrawn is not posiible');
            withdrawAmount = Number(prompt('enter amount to withdraw'));
            if ((balance - withdrawAmount) < 1000) {
                console.log('not posiible, Minimum balance should be maintained');
                withdrawAmount = Number(prompt('enter amount to withdraw'));
                balance -= withdrawAmount;
                console.log('After Withdraw, Balance: ', balance);
                option = prompt('Enter ', "exit")
            } else {
                balance -= withdrawAmount;
                console.log('After Withdraw, Balance: ', balance);
                option = prompt('Enter ', "exit")
            }
        } else if ((balance - withdrawAmount) < 1000) {
            console.log('not posiible, Minimum balance should be maintained');
            withdrawAmount = Number(prompt('enter amount to withdraw'));
            balance -= withdrawAmount;
            console.log('After Withdraw, Balance: ', balance);
            option = prompt('Enter ', "exit")
        } else {
            balance -= withdrawAmount;
            console.log('After Withdraw, Balance: ', balance);
            option = prompt('Enter ', "exit")
        }
    }
    if (option == 'deposit') {
        depositAmount = Number(prompt('enter amount to deposit'));
        if (depositAmount > 40000) {
            console.log('money deposit is not posiible, Max amount is 40,000/-');
        } else {
            balance += depositAmount;
            console.log('After Deposit, Balance: ', balance);
            option = prompt('Enter ', "exit")
        }
    }
} else if (option == 'withdraw') {
    withdrawAmount = Number(prompt('enter amount to withdraw'));
    if (withdrawAmount > balance) {
        console.log('withdrawn is not posiible');
        withdrawAmount = Number(prompt('enter amount to withdraw'));
        if ((balance - withdrawAmount) < 1000) {
            console.log('not posiible, Minimum balance should be maintained');
            withdrawAmount = Number(prompt('enter amount to withdraw'));
            balance -= withdrawAmount;
            console.log('After Withdraw, Balance: ', balance);
            option = prompt('Enter ', "exit")
        } else {
            balance -= withdrawAmount;
            console.log('After Withdraw, Balance: ', balance);
            option = prompt('Enter ', "exit")
        }
    } else if ((balance - withdrawAmount) < 1000) {
        console.log('not posiible, Minimum balance should be maintained');
        withdrawAmount = Number(prompt('enter amount to withdraw'));
        balance -= withdrawAmount;
        console.log('After Withdraw, Balance: ', balance);
        option = prompt('Enter ', "exit")
    } else {
        balance -= withdrawAmount;
        console.log('After Withdraw, Balance: ', balance);
        option = prompt('Enter ', "exit")
    }
    if (option == 'balance') {
        console.log('current Balance: ', balance);
        option = prompt('Enter ', "exit")
    }
    if (option == 'deposit') {
        depositAmount = Number(prompt('enter amount to deposit'));
        if (depositAmount > 40000) {
            console.log('money deposit is not posiible, Max amount is 40,000/-');
        } else {
            balance += depositAmount;
            console.log('After Deposit, Balance: ', balance);
            option = prompt('Enter ', "exit")
        }
        console.log('current Balance: ', balance);
        option = 'exit'
    }
} else if (option == 'deposit') {
    depositAmount = Number(prompt('enter amount to deposit'));
    if (depositAmount > 40000) {
        console.log('money deposit is not posiible, Max amount is 40,000/-');
    } else {
        balance += depositAmount;
        console.log('After Deposit, Balance: ', balance);
        option = prompt('Enter ', "exit")
    }
    if (option == 'balance') {
        console.log('current Balance: ', balance);
        option = prompt('Enter ', "exit")
    }
    if (option == 'withdraw') {
        withdrawAmount = Number(prompt('enter amount to withdraw'));
        if (withdrawAmount > balance) {
            console.log('withdrawn is not posiible');
            if (withdrawAmount > balance) {
                console.log('withdrawn is not posiible');
                withdrawAmount = Number(prompt('enter amount to withdraw'));
                if ((balance - withdrawAmount) < 1000) {
                    console.log('not posiible, Minimum balance should be maintained');
                    withdrawAmount = Number(prompt('enter amount to withdraw'));
                    balance -= withdrawAmount;
                    console.log('After Withdraw, Balance: ', balance);
                    option = prompt('Enter ', "exit")
                } else {
                    balance -= withdrawAmount;
                    console.log('After Withdraw, Balance: ', balance);
                    option = prompt('Enter ', "exit")
                }
            }
        } else if ((balance - withdrawAmount) < 1000) {
            console.log('not posiible, Minimum balance should be maintained');
            withdrawAmount = Number(prompt('enter amount to withdraw'));
            balance -= withdrawAmount;
            console.log('After Withdraw, Balance: ', balance);
            option = prompt('Enter ', "exit")
        } else {
            balance -= withdrawAmount;
            console.log('After Withdraw, Balance: ', balance);
            option = 'exit';
        }
    }
} else {
    alert('please enter valid option')
    option = prompt('Enter ', 'withdraw')

}
if (option == 'exit') {
    console.log("Thank you!");
}