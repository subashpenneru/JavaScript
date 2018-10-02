
/* promise Asynchronous Type */

var promise = new Promise(function (resolve,reject){
    resolve(1000);
});
promise.then(first).then(second).then(third).then(function (response){
    console.log('last result', response);
    
}).catch(function(error){
    console.log(error);
    
})

function first(amount){
    return amount*2;
}

function second(amount){
    return (amount*2);
}

function third(amount){
    return (amount*2);
}
