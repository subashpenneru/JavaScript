/* var names = new Array("jhon snow","Arya stark","Daenerys Targaryen");
console.log(names);

names.push('Tyrion Lannister')
console.log(names);
 */
// storing on key base

var john = {
    firstName:"Ageon",
    lastName:"Targaryen",
    age:28,
    gender:"Male",
    isMarried: false
};
// console.log(john['firstName']+" "+ john['lastName']);var imp = new Array('192.168.1.1','192.168.1.2','192.168.1.3','192.168.1.4',
// '192.168.1.5','192.168.1.6','192.168.1.7','192.168.1.8','192.168.1.9','192.168.1.10')

// console.log(imp);


// john.age += 2;

// console.log(john);
john.address = {
    place:"Winterfell",
    position:"King in the North",
    slogan:"winter is coming"
};
// console.log(john.address);

// console.log(john.address.slogan);

var addresses = new Array();
addresses[0] = john.address
addresses[1] = {
    place:"Castle Black",
    position:"Lord Commander",
    slogan:"winter is coming"
};

console.log(addresses);
