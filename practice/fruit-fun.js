alert('Welcome to SubashMart')
var option = prompt(`select one option:
1.buy fruits
2.exit`,'1')
var fruitArray = [
    {name:'apple',cost:25},{name:'mango',cost:30},{name:'banana',cost:10},{name:'orange',cost:15}
]
var fruitBuy = [];
var fruit = function(){
    var fruitName = prompt('Enter fruit name: ')
    var fruitData = findFruit(fruitName);
    alert(`each ${fruitData.name} cost ${fruitData.cost}/-`)
    var fruitCount = +prompt('enter count: ')
    var total = fruitData.cost*fruitCount;
    alert(`Price:  ${total}`)
    var fruitPur = {};
    var c = 0;
    for(key in fruitBuy){
        if(fruitBuy[key].fruitName === fruitName){
            fruitBuy[key].fruitCount += fruitCount;
            fruitBuy[key].fruitTotalCost += total; 
            c++;
        }
    }
    if(c == 0){
        fruitPur.fruitName = fruitName;
        fruitPur.fruitTotalCost = total;
        fruitPur.fruitCount = fruitCount;
        fruitBuy.push(fruitPur)
    }
    
}
var display = function(){
    var fruitTotalSum = 0;
    for(fruits in fruitBuy){
        console.log(`Fruit name:${fruitBuy[fruits].fruitName},Fruit count:${fruitBuy[fruits].fruitCount},Fruit Total cost:${fruitBuy[fruits].fruitTotalCost}`);
        fruitTotalSum += fruitBuy[fruits].fruitTotalCost;
    }
    alert(`Total cost: ${fruitTotalSum}`)
}
var deleteFruit = function(){
    var fruitName = prompt('enter fruit name to delete')
    for(var key in fruitBuy){
        if(fruitBuy[key].fruitName === fruitName){
            delete fruitBuy[key]
        }
    }
    alert('deleted')
}
function findFruit(fruitName) {
    var count = 0;
    for(key in fruitArray){
        if(fruitArray[key].name === fruitName){
            return fruitArray[count];
        }
        count++;
    }
    if(count == fruitArray.length){
        return {name:fruitName,cost:50};
    }
}
for(;;){
    switch (option) {
        case '1':
            fruit();
            break;
        case '2':
            display();
            break;
        case '3':
            deleteFruit();
            break;
        default:
            break;
    }
    option = prompt(`select one option
    1.buy another
    2.display
    3.delete
    4.exit`)
    if(option === '4') break;
}
console.log(fruitBuy);
