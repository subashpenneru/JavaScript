var hero = {
    name: 'super man',
    power:['flying power','laser eyes','muscle power'],
    age: 30,
    yearBirth:'1989',
    address: {
        street: 'golden street',
        pincode: 1000010,
        planet: 'krypton'
    },
    readPower : function readPower(){
        return this.power;
    }
}
var heroInfo = function (heroData){
    console.log(heroData);
}
heroInfo(hero);

var readHeroien =  () => { // => inplace of function
    return "super women"
}
hero.readHeroien = readHeroien;
console.log(hero.readHeroien());
console.log(hero.readPower());

var removePower = (index,delcount)=>{
    hero.power.splice(index,delcount)
    return hero.power
}
console.log(removePower(0,2));

