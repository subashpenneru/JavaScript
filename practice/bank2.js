var data = new Array()
data[0] = {
    accNum: '12345',
    balance: 2000
}
for(index=0;index<3;index++){
    alert('Welcome to bank')
    let accNum = prompt('enter account number');
    let balance = 2000;
    var count =0;
    for(da in data){
        if(data[da].accNum === accNum){
            count++;
        }
    }
    if(count == 0){
        var user = new Object()
        user.accNum = accNum;
        user.balance = balance;
        data.push(user)
    }

    var option = prompt(`choose one option: 
                1.withdraw
                2.deposit
                3.balance`);
    let withDrawAmount;
    let depositAmount;

    switch (option) {
        case '1': case 'withdraw':
            for(i in data){
                if(data[i].accNum === accNum){
                    withDrawAmount = +prompt('enter amount:')
                    data[i].balance -= withDrawAmount;
                    alert(`your current balance: ${data[i].balance}`)
                    break;
                }
            }    

            break;
        case '2': case 'deposit':
            for(j in data){
                if(data[j].accNum === accNum){
                    depositAmount = +prompt('enter amount:')
                    data[j].balance += depositAmount;
                    alert(`your current balance: ${data[j].balance}`)
                    break;
                }
            }

            break;
        case '3': case 'balance':
            for(k in data){
                if(data[k].accNum === accNum){
                    alert(`current balance: ${data[k].balance}`)
                    break;
                }
            }
            break;
        default:
            console.log('choose correct option');

            break;
    }
    alert('Thank u');

}
console.log(data);

for(d in data){
    console.log(`account number: ${data[d].accNum}
    balance:  ${data[d].balance}`);
    
}