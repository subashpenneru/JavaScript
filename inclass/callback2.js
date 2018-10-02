// var imagePath = '../images/crickter/Dhoni.jpg';
// var isImage = true;
// var showImagePath = ()=>{
//     return imagePath;
// }
// var changeImagepath = function (){
//     imagePath = '../images/crickter/dhoni.jpg';
//     return imagePath;
// }
// var clickImage = (img, callback,callback2)=>{
//     if(img){
//         console.log(callback());
//         console.log(callback2());
//     }
//     // else {
//     //     return 'no image found'
//     // }
// }
// clickImage(isImage,showImagePath,changeImagepath)

/* NESTED CALLBACK */
function first(amount,callback){
    return callback(amount*2,false);
}

function second(amount,callback){
    return callback(amount*2,false);
}

function third(amount,callback){
    return callback(amount*2,false);
}
function e(firstResult,error){
    if(!error){
        return firstResult;

    }
}

var d1 = first(500, e);
console.log(d1);
var d2 = second(d1,e);
console.log(d2);
var d3 = third(d2,e);
console.log(d3);
