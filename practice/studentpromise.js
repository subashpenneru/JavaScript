var student = {
    status: true,
    message: 'get reward'
};

let clearSSC = ()=>{
    return new Promise(function(resolve,reject){
        if(student.status){
            student.message = 'get cycle as reward';
            resolve(student);
        }
        else {
            student.status = false;
            student.message = 'did not get cycle as reward';
            reject(student);
        }
    })
}

let clearHSC = (student)=>{
    return new Promise(function(resolve,reject){
        if(student.status){
            student.message = 'get bike as reward';
            resolve(student);
        }
        else {
            student.status = false;
            student.message = 'did not get bike as reward';
            reject(student);
        }
    })
}

let clearBTECH = (student)=>{
    return new Promise(function(resolve,reject){
        if(student.status){
            student.message = 'get job as reward';
            student.isClearBtech = false;
            resolve(student);
        }
        else {
            student.status = false;
            student.isClearBtech = true;
            student.message = 'did not get job as reward';
            reject(student);
        }
    })
}

let getJOB = (student)=>{
    return new Promise(function(resolve,reject){
        if(student.isClearBtech){
            student.message = 'get married';
            resolve(student);
        }
        else {
            student.status = false;
            student.message = 'did not get married';
            reject(student);
        }
    })
}

clearSSC().then(function(result){
    console.log(result);
    return clearHSC(result);  
}).then(function(result1){
    console.log(result1);
    return clearBTECH(result1);
}).then(function(result3){
    console.log(result3);
    return getJOB(result3);
}).then(function(result4){
    console.log(result4);
    
}).catch(function(errorResult){
    console.log(errorResult);
    return clearHSC(errorResult);

})