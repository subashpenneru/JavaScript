// function definition or declaring function
function showMSG(name="Arya Stark",age) {
    console.log('Hi EveryOne',name,age);
    return name;
}
var data = showMSG();
console.log(data);

showMSG('Hello'); /* function call */

// parametrized function - one parameter function (we can use as many as we want but 5 is recommended)
/* function showMSG1(msg){
    console.log('Hello World, I am ',msg);
}
showMSG1("Robot");

function showMSG2(name,age,dob,gender,phone){
    var user = {};
    user.name = name;
    user.age = age;
    user.dob = dob;
    user.gender = gender;
    user.phone = phone;
    console.log("the user is:",user);
    
}
showMSG2('subash',23,'1995-5-5','male','7095692523');

var user = {};
    user.name = 'subash';
    user.age = 23;
function showMSG3(user){
    console.log(user);
}
showMSG3(user); */