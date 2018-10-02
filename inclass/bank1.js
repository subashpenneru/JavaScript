let amount = +prompt('Enter the amount');
/* if(amount<1000){
    console.log('Minium amount should be 1000');
}
else if(amount>=1000 && amount<2000) {
    amount = amount*2;
    console.log('Total amount: ', amount);
}
else if(amount>=2000 && amount<5000) {
    amount = amount * 10;
    console.log('Total amount: ', amount);
}
else if(amount>=5000 && amount<10000){
    amount = amount * 20;
    console.log('Total amount: ', amount);
    
}
else if(amount>=10000){
    amount = amount * 30;
    console.log('Total amount: ', amount);
    
}
else {
    console.log('Total amount: ', amount);
    
} */

var a = (amount<1000)?'Minium amount should be 1000':
        (amount>=1000 && amount<2000)?`Total amount: ${amount*2}`:
        (amount>=2000 && amount<5000)?`Total amount: ${amount*10})`:
        (amount>=5000 && amount<10000)?`Total amount: ${amount*20})`:
        (amount>=10000)?`Total amount: ${amount*30})`:`Total amount: ${amount}`

console.log(a);
        