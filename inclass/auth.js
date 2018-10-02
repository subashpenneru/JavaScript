var records = new Array();
alert('Welcome to MyApp');
var option = prompt(`select one option:
    1.registration
    2.login`,"login");
for(;;){
    
    switch (option) {
        case '1' :  case 'registration' : option
        console.log('registration is selected');
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

        break;
        case '2' : case 'login' : option
        console.log("login selected");
        var email = prompt('Enter your email')
        var password = prompt('Enter your password')
        for(userData in records){
            if(records[userData].email === email && records[userData].password === password){
                alert('login successful')
            }
            else {
                alert('login failed')
            }
        }
        
        break;
        default:
        console.log("select correct option");
    
        break;
    }
    option = prompt(`select one option:
    1.registration
    2.login
    3.exit`);

    if(option == '3' || option == 'exit'){
        break;
    }
}
// delet records[0].password