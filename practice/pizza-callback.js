var pizzaData = [
    {name:'nonveg',type:'chicken cheese',price:500},{name:'nonveg',type:'mutton cheese',price:800},
    {name:'veg',type:'mexican veg',price:200},{name:'veg',type:'italian',price:300},{name:'veg',type:'veg cheese',price:500}
]
var pName = prompt('enter name');
var pType = prompt('enter type')

var odrer = (name,type,callback)=>{
    pizzaname = name;
    pizzaType = type;
    var data = callback(pizzaname,pizzaType);
    if(data){
        alert('your order taken');
        console.log(`order items Name: ${data.name}, Type: ${data.type}, Price: ${data.price}`);
    } 
}

odrer(pName,pType,findOrder);

var prepare = ()=>{
    console.log('your order is taken, preparing');
}
setTimeout(prepare,2000);

var dispatch = ()=>{
    console.log('your order is dispatched');
} 
setTimeout(dispatch,5000)

function delivery(callback){
    var data = callback(pName,pType)
    console.log(`delivery, your items ${data.name} ${data.type}, ${data.price}`);
}
setTimeout(function(){
    delivery(findOrder)
},10000)

function findOrder(name,type){
    for(key in pizzaData){
        if(pizzaData[key].name == name  && pizzaData[key].type == type){
            return pizzaData[key];
        }
    }
}