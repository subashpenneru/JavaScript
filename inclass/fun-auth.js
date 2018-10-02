var email = prompt('enter your email')
var password = prompt('enter password')
const emailid = 'subash'
const pass = '12345';
login();
var login = function(){
    if(email === emailid && password === pass){
        alert('login successful');
    }
    else {
        alert('invalid user')
    }
}
