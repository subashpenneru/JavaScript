var room = {
    status: 'clean',
    message: 'the room is clean'
};

let cleanRoom = function(){
    return new Promise(function(resolve,reject){
        if(room.status == 'clean'){
            resolve(room);
        }
        else {
            room.status = 'not clean';
            room.message = 'the room is not clean';
            reject(room);
        }

    });
}

let removeGarbaze = function(roomObj){
    return new Promise(function(resolve,reject){
        if(roomObj.status == 'clean'){
            roomObj.removeGarbaze = 'you can remove garbaze';
            roomObj.isGarbazeRemove = true;
            resolve(roomObj);
        }
        else {
            roomObj.removeGarbaze = 'you cannot remove garbaze';
            roomObj.isGarbazeRemove = false;
            reject(roomObj);
        }
    });
}

let winRewards = function(roomObj1){
    return new Promise(function(resolve,reject){
        if(roomObj1.isGarbazeRemove){
            roomObj1.winRewards = 'you are worthy to win reward';
            resolve(roomObj1);
        }
        else {
            roomObj1.winRewards = 'you are not worth to win this reward';
            reject(roomObj1);
        }
    });
}

cleanRoom().then(function(result){
    console.log(result);
    return removeGarbaze(result);
    
}).then(function(result2){
    console.log(result2);
    return winRewards(result2);

}).then(function(result3){
    console.log(result3);
    
}).catch(function(resultFromReject){
    console.log(resultFromReject);
    
})