function Pirates(name,ship,status) {
    this.name = name;
    this.ship = ship;
    this.status = status;
}
Pirates.prototype.actualage = 100;
Pirates.prototype.age = function(age){
    this.age = age;    
}

var pirate1 = new Pirates('Jack Sparrow','Black pearl','alive');
// pirate1.age = 45;

console.log(pirate1);
pirate1.age(45);
console.log(pirate1.age);

var pirate2 = new Pirates('Davy Jones','Flying Dutchman','dead');

console.log(pirate2);
pirate2.age(70);
console.log(pirate2.age);

var pirate3 = new Pirates('Armando Salazar','silent mary','dead');

console.log(pirate3);
// pirate3.age(100);
console.log(pirate3.actualage);
