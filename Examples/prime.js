alert('Prime Numbers')
var num = +prompt('Enter num to print prime numbers')

for(var i=2;i<=num;i++){
    var count = 0;
    for(j=2;j<=i/2;j++){
        if(i%j == 0){
            count++; break;
        }
    }
    if(count == 0){console.log(i);
    }
}