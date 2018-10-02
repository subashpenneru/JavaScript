alert('Even or Odd check')

for(;;){
    var num = +prompt('Enter number to check')
    if(num%2 == 0){
        alert(`${num} is Even`)
    }
    else {
        alert(`${num} is Odd`)    
    }
    var check = confirm('Do u wana check another')
    if(!check) break;
}
