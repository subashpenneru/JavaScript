var age = +prompt("Enter your age");
if(typeof age == "number"){
    if(age>=20){
       console.log("Age is greater than or equal to 20");        
    }
    else {
        console.log("Age is less than 20");
    }
}
console.log(age);

console.log(typeof age);
