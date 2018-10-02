alert('Welcome to SubashMart')
var fruitName;
var Tot=0;
var fruits = new Array();
for(;;){
    fruitName = prompt('Enter fruit name: ')
    var count=0;
    var total=0;
    switch (fruitName) {
        case 'apple':
            alert('each apple cost is 25/-')
            count = +prompt('enter count')
            total = count*25;
            var fruit = new Object();
            fruit.name = fruitName;
            fruit.count = count;
            fruit.cost = total;
            fruits.push(fruit);
            break;
        case 'mango':
            alert('each mango cost is 30/-')
            count = +prompt('enter count')
            total = count*30;
            var fruit = new Object();
            fruit.name = fruitName;
            fruit.count = count;
            fruit.cost = total;
            fruits.push(fruit);
            break;
        case 'banana':
            alert('each banana cost is 10/-')
            count = +prompt('enter count')
            total = count*10;
            var fruit = new Object();
            fruit.name = fruitName;
            fruit.count = count;
            fruit.cost = total;
            fruits.push(fruit);
            break;
        case 'orange':
            alert('each orange cost is 15/-')
            count = +prompt('enter count')
            total = count*15;
            var fruit = new Object();
            fruit.name = fruitName;
            fruit.count = count;
            fruit.cost = total;
            fruits.push(fruit);
            break;    
        default:
            alert(`each ${fruitName} cost is 50/-`)
            count = +prompt('enter count')
            total = count*50;
            var fruit = new Object();
            fruit.name = fruitName;
            fruit.count = count;
            fruit.cost = total;
            fruits.push(fruit);
            break;
    }
    Tot += total;
    var con = confirm('buy another')
    if(!con) {break;}
}
for(i in fruits){
    console.log(`${fruits[i].name} X ${fruits[i].count} = ${fruits[i].cost}`);
}
var del = confirm('delete any one')
if(del) {
    Tot = 0;
    var delName = prompt('enter')
    for(j in fruits){
        if(fruits[j].name === delName){
            delete fruits[i]
        }
    }
    console.log('final items');
    for(k in fruits){
        console.log(`${fruits[k].name} X ${fruits[k].count} = ${fruits[k].cost}`);
        Tot += fruits[k].cost;
    }
    console.log(`Total cost ${Tot}`)
}
else {
    console.log(`Total cost ${Tot}`)
}
