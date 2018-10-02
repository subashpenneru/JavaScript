var pizzaData = [
    {name:'nonveg',type:'chicken cheese',price:500},{name:'nonveg',type:'mutton cheese',price:800},
    {name:'veg',type:'mexican veg',price:200},{name:'veg',type:'italian',price:300},{name:'veg',type:'veg cheese',price:500}
]
var pizzaBuy = [];
var userOrder = {};

for(i=0;i<2;i++){
    var pizzaName;
var PizzaType; 
var menu = prompt(`pizza name:
1.Non-Veg pizza
2.Veg pizza`);

if(menu == '1'){
    pizzaName = 'nonveg';
    PizzaType = prompt(`choose type:
    1.chicken cheese
    2.mutton cheese`,'chicken cheese')
    var count = +prompt('enter how many')
}
else if(menu == '2'){
    pizzaName = 'veg'
    PizzaType = prompt(`choose type:
    1.mexican veg
    2.italian
    3.veg cheese`,'mexican veg')
    var count = +prompt('enter how many')
}
else {
    alert('choose correct option')
}


var order = (name,type,callback,callback2)=>{
    pizza_name = name;
    pizza_type = type;
    var data = callback(pizza_name,pizza_type);
    var cost = data.price * count;
    userOrder = {};
    userOrder.pizzaName = data.name;
    userOrder.pizzaType = data.type;
    userOrder.cost = cost;
    pizzaBuy.push(userOrder)
    
    // console.log(`your items are ordered,
    // Name: ${userOrder.pizzaName}, Type: ${userOrder.pizzaType}, Price: ${userOrder.cost}`)
    if(i==1){
        console.log('your total items ordered:');
        callback2();
    }
}
order(pizzaName,PizzaType,findPizza,itemsOrder);

function itemsOrder(){
    
    var sum = 0;
    for(key in pizzaBuy){
        console.log(`Name: ${pizzaBuy[key].pizzaName}, Type: ${pizzaBuy[key].pizzaType}, Price: ${pizzaBuy[key].cost}`);
        sum += pizzaBuy[key].cost; 
    }
    console.log(`Total cost: ${sum}`);
    
}

if(i==1){
    var prepare = ()=>{
        console.log('your order is taken, preparing');
    }
    setTimeout(prepare,2000);
    
    var dispatch = ()=>{
        console.log('your order is dispatched');
    } 
    setTimeout(dispatch,5000)
    
    function delivery(callback){
        console.log('"Your items"');
        callback();
        console.log(`delivered`);
        
    }
    setTimeout(function(){
        delivery(itemsOrder)
    },8000)
    
}


function findPizza(name,type){
    for(key in pizzaData){
        if(pizzaData[key].name == name  && pizzaData[key].type == type){
            return pizzaData[key];
        }
    }
}
}
