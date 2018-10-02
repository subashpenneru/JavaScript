alert('Pizza#ut')

var user_records = [];
var user = new Object();
var pizzaData = [
    {name:'nonveg',type:'chicken cheese',price:500},{name:'nonveg',type:'mutton cheese',price:800},
    {name:'veg',type:'mexican veg',price:200},{name:'veg',type:'italian',price:300},{name:'veg',type:'veg cheese',price:500}
]
var pizzaBuy = [];
var userOrder = {};

var user_option = prompt(`choose one option:
1.order
2.new user Register here`);


for(;;){
    if(user_option == '1'){
        var user_account_data = login(user_account);
    }
    switch (user_option) {
        case '1':
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
        
        order(pizzaName,PizzaType,user_account_data,findPizza,itemsOrder);
            break;
        case '2':
            register();
            break;
        default:
            break;
    }
    user_option = prompt(`choose option
    1.order
    2.order another
    3.place`)
    
    if(user_option == '3'){
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
    
    if(user_option == '3') {break;}
}



function register(){
    var userName = prompt('enter user name:')
    var userEmail = prompt('enter user email-id:')
    var userPhone = prompt('enter user mobile:')
    var userPassword = prompt('enter password')
    user = {}
    user.userName = userName;
    user.userEmail = userEmail;
    user.userPhone = userPhone;
    user.userPassword = userPassword;
    user_records.push(user);

    console.log('registered successfully');
}

function login(callback){
    var login_name = prompt('enter name:')
    var login_password = prompt('enter password');
    var user_records_data = callback(login_name,login_password)
    alert(`Hello! ${user_records_data.userName}, Welcome to pizaa#hut. place your order`)
    return user_records_data;
}

function user_account(username,password) {
    var count =0;
    for(key in user_records){
        if(user_records[key].userName === username && user_records[key].userPassword == password){
            return user_records[count];
        }
        count++;
    }
}

function order(name,type,user_data,callback2,callback3){
    pizza_name = name;
    pizza_type = type;
    var data = callback2(pizza_name,pizza_type);
    var cost = data.price * count;
    userOrder = {};
    userOrder.user_Name = user_data.userName;
    userOrder.user_Mobile = user_data.userPhone
    userOrder.pizzaName = data.name;
    userOrder.pizzaType = data.type;
    userOrder.cost = cost;
    pizzaBuy.push(userOrder)
    
    console.log(`your items ordered are:,
    Name: ${userOrder.pizzaName}, Type: ${userOrder.pizzaType}, Price: ${userOrder.cost}`)
    
}


function itemsOrder(){
    
    var sum = 0;
    for(key in pizzaBuy){
        console.log(`Name: ${pizzaBuy[key].pizzaName}, Type: ${pizzaBuy[key].pizzaType}, Price: ${pizzaBuy[key].cost}`);
        sum += pizzaBuy[key].cost; 
    }
    console.log(`Total cost: ${sum}`);
    
}

function findPizza(name,type){
    for(key in pizzaData){
        if(pizzaData[key].name == name  && pizzaData[key].type == type){
            return pizzaData[key];
        }
    }
}