alert('Palindrome check')
/* for(;;){
    var num = +prompt('Enter num to check weather it is palindrome or not')
    var rem,sum=0;
    var temp = num;
    while (num>0) {
        rem = num%10;
        sum = sum*10 + rem;
        num = parseInt(num/10)
    }
    if(sum === temp){
        alert(`${temp} is palindrome`);
    }
        else {
    alert(`${temp} is not palindrome`);
    }
    var con = confirm('Do u wana check another')
    if(!con) break;
}
 */

for(;;){
    let name = prompt('Enter name to check weather it is palindrome or not')
    let temp = name;
    var count =0;
    for(var i=0;i<name.length;i++){
        if(temp[i] != name[name.length-i-1]){count++; break}
    }
    if(count == 0){alert(`${name} is palindrome`)}
    else {alert(`${name} is not palindrome`)}

    var con = confirm('Do u wana check another')
    if(!con) break;
}