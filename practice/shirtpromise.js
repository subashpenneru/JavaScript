var shirt = {
    status: true,
    message: 'to buy a shirt'
};

let getShirt = ()=>{
    return new Promise(function(resolve,reject){
        if(shirt.status) {
            shirt.status = true;
            shirt.message = 'bought a shirt'
            resolve(shirt);
        }
        else {
            shirt.status = false;
            shirt.message = 'not bought a shirt';
            reject(shirt);
        }
    });
}

let wearShirt = (shirt)=>{
    return new Promise(function(resolve,reject){
        if(shirt.status) {
            shirt.status = false;
            shirt.message = 'wear a shirt'
            resolve(shirt);
        }
        else {
            shirt.status = false;
            shirt.message = 'didnt wear a shirt';
            reject(shirt);
        }
    });
}
let showShirt = (shirt)=>{
    return new Promise(function(resolve,reject){
        if(shirt.status) {
            shirt.message = 'i will showoff'
            resolve(shirt);
        }
        else {
            shirt.status = false;
            shirt.message = 'willnot showoff';
            reject(shirt);
        }
    });
}

getShirt().then(function(result){
    console.log(result);
    return wearShirt(result)

}).then(function(result1){
    console.log(result1);
    return showShirt(result1)
}).then(function(result3){
    console.log(result3);
    
}).catch(function(errorResult){
    console.log(errorResult);
    
})