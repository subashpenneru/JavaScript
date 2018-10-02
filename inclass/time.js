alert('start program')

var print1 = function(){
    console.log('i am print');
}
setTimeout(print1,1000);
var print2 = function(){
    console.log('hi');
}
setTimeout(print2,5000);
// clearTimeout(data);
// var inter = setInterval(function(){
//     alert('i am interval call..')
// },1000);

// clearInterval(inter);