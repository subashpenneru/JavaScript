var records = [];
var user = {};
var error = {};

alert('Welcome to MyApp');
var option = prompt(`select one option:
    1.registration
    2.login`,"login");
for(;;){
    switch (option) {
        case '1': case 'registration':
            register();
            break;
        case '2': case 'login':
            login();
        default:
            break;
    }
    option = prompt(`select one option:
    1.registration
    2.login
    3.exit`);
    if(option == '3' || option == 'exit'){break;}

}


function isEmpty(name){

    return (name === '')?true:false;
}
function isNull(name){
    return (name === null)?true:false;
}
function isUndefined(name){
    return (name === undefined)?true:false;
}

function register(){
    name = prompt('enter your name');
    email = prompt('enter your email');
    phone = prompt('enter phone no:');
    password = prompt('enter password');
    
    let nameValidation = function(name){
        return new Promise(function(resolve,reject){
            if(isEmpty(name) || isNull(name) || isUndefined(name)){
                error.namemessage = 'Error in name feild';
                reject(error);
            }
            else {
                user.name = name;
                resolve(user);
            }
        });
    }
    
    let emailValidation = function(email){
        return new Promise(function(resolve,reject){
            if(isEmpty(email) || isNull(email) || isUndefined(email)){
                error.emailmessage = 'Error in email feild';
                reject(error);
            }
            else {
                user.email = email;
                resolve(user);
            }
        });
    }
    
    let phoneValidation = function(phone){
        return new Promise(function(resolve,reject){
            if(isEmpty(phone) || isNull(phone) || isUndefined(phone)){
                error.phonemessage = 'Error in phone feild';
                reject(error);
            }
            else {
                user.phone = phone;
                resolve(user);
            }
        });
    }
    let passwordValidation = function(password){
        return new Promise(function(resolve,reject){
            if(isEmpty(password) || isNull(password) || isUndefined(password)){
                error.passwordmessage = 'Error in password feild';
                reject(error);
            }
            else {
                user.password = password;
                resolve(user);
            }
        });
    }
    
    nameValidation(name).then(function(result){
        console.log(result);
        
    }).catch(function(errorResult){
        console.log(errorResult.namemessage);
        
    })
    
    emailValidation(email).then(function(result1){
        console.log(result1);
        
    }).catch(function(errorResult1){
        console.log(errorResult1.emailmessage);
        
    })
    
    phoneValidation(phone).then(function(result2){
        console.log(result2);
        
    }).catch(function(errorResult2){
        console.log(errorResult2.phonemessage);
        
    })
    
    passwordValidation(password).then(function(result3){
        console.log(result3);
        
    }).catch(function(errorResult3){
        console.log(errorResult3.passwordmessage);
        
    })
    records.push(user);
}

function login(){
    email = prompt('enter email');
    password = prompt('enter password');

    let emailValidation = function(email){
        return new Promise(function(resolve,reject){
            if(isEmpty(email) || isNull(email) || isUndefined(email)){
                error.emailmessage = 'Error in email feild';
                reject(error);
            }
            else {
                resolve(user);
            }
        });
    }

    let passwordValidation = function(password){
        return new Promise(function(resolve,reject){
            if(isEmpty(password) || isNull(password) || isUndefined(password)){
                error.passwordmessage = 'Error in password feild';
                reject(error);
            }
            else {
                resolve(user);
            }
        });
    }
    emailValidation(email).then(function(result1){
        console.log(result1);
        
    }).catch(function(errorResult1){
        console.log(errorResult1.emailmessage);
        
    })
    passwordValidation(password).then(function(result3){
        console.log(result3);
        
    }).catch(function(errorResult3){
        console.log(errorResult3.passwordmessage);
        
    })
    for(key in records){
        if(records[key].email === email && records[key].password === password){
            alert('login successfull'); break;
        }
        else {
            alert('login failed');
        }
    }
}

console.log(records);
