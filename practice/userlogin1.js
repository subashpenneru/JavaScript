var user = [];
var error = {};

alert('Welcome to MyApp');
var option = prompt(`select one option:
    1.registration
    2.login`,"login");
for(;;){
    switch (option) {
        case '1': case 'registration':
            register(regValidation);
            break;
        case '2': case 'login':
            login(loginvalidation);
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

function register(callback){
    name = prompt('enter your name');
    callback(name);
    email = prompt('enter your email');
    callback(email);
    phone = prompt('enter phone no:');
    callback(phone);
    password = prompt('enter password');
    callback(password);
}

function validation(userdetails){
    return new Promise(function(resolve,reject){
        if(isEmpty(userdetails) || isNull(userdetails) || isUndefined(userdetails)){
            error.message = 'error occur in field'
            reject(error);
        }
        else {
            user.push(userdetails);
            resolve(user);
        }
    });
}

function regValidation(regdetails){
    validation(regdetails).then(function(result){
        console.log(regdetails, result);
        
    }).catch(function(errorResult){
        console.log(errorResult.message);
        
    })
}
function login(callback){
    email = prompt('enter email');
    callback(email);
    password = prompt('enter password');
    callback(password);

    /* for(key in user){
        if(user[key] === email){
            var emailFlag = true;
        }
        if(user[key] === password){
            var passwordFlag = true;
        }
    }

    if(emailFlag && passwordFlag){
        console.log('login successfull'); 
    }
    else console.log('login failed'); */
    
    if(user[1] === email && user[3] === password){
        console.log('login successful');
    }
    else console.log('login failed')
}

function userValidation(userdetails){
    return new Promise(function(resolve,reject){
        if(isEmpty(userdetails) || isNull(userdetails) || isUndefined(userdetails)){
            error.message = 'error occur in field'
            reject(error);
        }
        else {
            resolve(userdetails);
        }
    });
}

function loginvalidation(regdetails){
    userValidation(regdetails).then(function(result){
       console.log('logindetails: ',result);
       
    }).catch(function(errorResult){
        console.log(errorResult.message);
        
    })
}
