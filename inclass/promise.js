let promiseToClean = new Promise(function(resolve, reject){
    let isClean = false;
    if(!isClean){
        var room = {
            status: 'clean',
            message: 'the room is clean'
        }
        resolve(room);}
    else reject('the room is not clean');
});
promiseToClean.then(function(optFromResolve){
    console.log(optFromResolve);
    return optFromResolve;

}).then(function(optFromFirstPromise){
    var result = `${optFromFirstPromise.status} now remove garbaze`
    console.log(result);
    return result;

}).then(function(optFromSecondPromise){
    var result1 = `${optFromSecondPromise} now can check reward`
    console.log(result1);

}).catch(function(optFromReject){
    console.log(optFromReject);
    
});