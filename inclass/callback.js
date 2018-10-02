// let x = function (){
//     console.log('i am function called from another function');
// };
// let y = (msg,callback)=>{
//     console.log('do something here');
//     console.log(msg);
//     callback();   
// }
// y('here',x);

let add = (num1,num2)=>{
    return num1+num2;
}
let mul = (num1,num2)=>{
    return num1*num2;
}
let sub = (num1,num2)=>{
    return num1-num2;
}
let div = (num1,num2)=>{
    return num1/num2;
}
let calc = (num1,num2,callback)=>{
    if(typeof callback == 'function'){
        return callback(num1,num2);
    }
    else return 'problem'
    
}
console.log(calc(10,2,add));
