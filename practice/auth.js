var records = [];
alert('Welcome to my app')

for(;;){
    var option = prompt(`select one option:
1.Registration
2.Login
3.exit`)
if(option == '3') break;
switch (option) {
    case '1':
        userRegistration();
        break;
    case '2':
        userLogin();
        break;
    default:
        break;
}
function userRegistration(){
    var name = prompt('Enter your Name')
    var email = prompt('Enter your email')
    var phone = prompt('Enter your phone')
    var password = prompt('Enter your password')

    var user = new Object();
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.password = password;
    records.push(user)
    console.log(records);
    
    alert('Registration is done..')
}

function userLogin(){
    var email = prompt('Enter your email')
    var password = prompt('Enter your password')
    var access = findAccount(email,password)
    if(access){
        alert('login successfull')
    }
    else {
        alert('login failed')
    }
}

function findAccount(email,password){
    var count=0;
    for(userData in records){
        if(records[userData].email === email && records[userData].password === password){
            count++;
        }
    }
    if(count == 1){
        return true;
    }
    else return false;
}
}
