var name = prompt('enter your name:');
var email = prompt('enter email-id:');
var age = +prompt('enter age:')

var user = {}; var error = {};
function isEmpty(name){
    
    return (name === '')?true:false;
}
function isNull(name){
    return (name === null)?true:false;
}
function isUndefined(name){
    return (name === undefined)?true:false;
}

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

let ageValidation = function(age){
    return new Promise(function(resolve,reject){
        if(isEmpty(age) || isNull(age) || isUndefined(age)){
            error.agemessage = 'Error in age feild';
            reject(error);
        }
        else {
            user.age = age;
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

ageValidation(age).then(function(result2){
    console.log(result2);
    
}).catch(function(errorResult2){
    console.log(errorResult2.agemessage);
    
})