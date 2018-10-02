// use inheritance by prototype in JS

function Motor(type,wheels,name,company,color){
    this.name = name;
    this.color = color;
    this.type= type;
    this.wheels = wheels;
    this.company = company;
}

// not able to modify object directly.

// Motor.speed = function(){
//     return 120;
// };
Motor.prototype.speed = 200;
Motor.prototype.changeSpeed = function(newSpeed){
    this.speed = newSpeed;
}

var bike = new Motor('petrol',2,'pulsar','bajaj','black');
bike.name = 'scooty'
// delete bike.wheels;
console.log(bike);
console.log(bike.speed);
bike.changeSpeed(300);
console.log(bike.speed);


