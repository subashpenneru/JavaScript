var section = document.createElement('section');
var reg = ["Name","Email-Id","Age","Password"];
var regInput = ["text","email","number","password"]
var registerData = [];
var h1 = document.createElement('h1');

function register(){
    registerDetails();
    registerDetails();
    registerDetails();
    registerDetails();
    var divi = document.getElementsByTagName('div')
    
    // var inputs = document.getElementsByClassName('inp');
    for(i=0;i<divi.length;i++){
        divi[i].style.margin = "25px 0px";
    }
    var inputs = document.getElementsByTagName('input');
    for(i=0;i<inputs.length;i++){
        inputs[i].style.float = "right"
        inputs[i].style.marginRight = "400px"

    }
    
}

var regCount = 0;
var regc = 0;
function registerDetails(){
    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');

    div.setAttribute('class','divison');
    label.setAttribute('class','lab');
    input.setAttribute('class','inp');
    input.setAttribute('type',`${regInput[regc++]}`)

    label.innerText = `Enter your ${reg[regCount++]}: `;

    section.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);

    
}

function sendData() {
    var inputData = document.getElementsByClassName('inp');
    for(i=0;i<inputData.length;i++){
        registerData.push(inputData[i].value)
        console.log(inputData[i].value);
                
    }
}
var logcount = 0;
var logc = 0;
var log = ["Email-Id","password"];
var logInput = ["email","password"];

function login(){
    section.innerHTML = null;
    loginDetails();
    loginDetails();

}
function loginDetails(){
    var div = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');
    div.setAttribute('class','divison');
    label.setAttribute('class','lab');
    input.setAttribute('class','inp');
    input.setAttribute('type',`${logInput[logc++]}`)

    label.innerText = `Enter your ${log[logcount++]}`

    section.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
}

function submit() {
    var loginData = document.getElementsByClassName('inp');
    if(registerData[1] == loginData[0].value && registerData[3] == loginData[1].value){
        h1.innerText = "Login Successful"
    }
    else {
        h1.innerText = "Login Failed"
    }
    section.appendChild(h1)
}

document.body.appendChild(section)
h1.style.color = "red";
