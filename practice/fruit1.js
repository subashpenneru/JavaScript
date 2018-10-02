alert('Welcome to SubashMart')
var fruitName;
var names = ['apple', 'mango', 'banana', 'orange','others']
var cost = [25,30,10,15,50]
var count;
var total;
var Tot = 0;
for(;;){
    fruitName = prompt('enter fruit name ', 'apple')

    if(fruitName != 'apple' && fruitName != 'mango' && fruitName != 'banana' && fruitName != 'orange'){
        names.splice(names.length-1,1,`${fruitName}`)
    }
    count=0;
    total=0;
for(i=0;i<names.length;i++){
    if(fruitName === names[i]){
        alert(`Each ${names[i]} cost is ${cost[i]}/-`)
        count = +prompt('How many do u want')
        total = count * cost[i];
        alert(`Cost: ${total}`)
        Tot += total;
        console.log(`${fruitName}  ${cost[i]}  X  ${count}  =  ${total}`);
    }
}


var addAnother =  confirm('Do u wana buy another')
if(!addAnother) break;
}
alert(`Total Price:- ${Tot}`)


