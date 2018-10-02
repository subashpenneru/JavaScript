alert('Fibonacci Series')
var fib = +prompt('Enter num')

var a = 0;
var b = 1;
var c;
while (fib>0) {
    console.log(a);
    
    c = a+b;
    a = b;  
    b = c; 
    fib--;
}

/* 
while (a<fib) {
    console.log(a);
    
    c = a+b;
    a = b;  
    b = c; 
}
*/