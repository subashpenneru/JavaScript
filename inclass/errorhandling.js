// avoid unexpected output in program

console.log('this is 1st statement');
try {
    console.log('this is 2nd statement');
    asdfghjkl
    console.log('this is 3rd statement');
    console.log('this is 4th statement');
    console.log('this is 5th statement');
} catch (error) {
    console.log(error);
    console.log('Name:',error.name);
    console.log('MSG:',error.message);
    console.log(error.stack);
     
}finally{
    console.log('always execute block');
    console.log('this is 4th statement');
    console.log('this is 5th statement');
}


// 1.throw custom error
// 2.type of error

/* 
    Bulid in Error
    --> Syntax Error.
    --> Reference Error.
    --> Error.

    - Error constructor.
*/