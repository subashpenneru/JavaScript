var john = {
    firstName:"Ageon",
    lastName:"Targaryen",
    age:28,
    gender:"Male",
    isMarried: false
};

for(key in john){
    console.log(john[key]);
}

var data = Object.keys(john);
console.log(data);

for(i=0;i<data.length;i++){
    console.log(john[data[i]]);
    
}