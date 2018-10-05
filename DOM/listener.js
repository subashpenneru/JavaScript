var section = document.createElement('section');
var regbtn = document.createElement('button');
var email = document.createElement('input');
var uname = document.createElement('input');
var password = document.createElement('input');
section.innerHTML = "<h1>Registration</h1>"

regbtn.setAttribute('id','send');
regbtn.setAttribute('type','button');
regbtn.innerText = "SUBMIT";

email.setAttribute('id','email');
email.setAttribute('type','email');
email.placeholder = "Enter your email"

uname.setAttribute('id','name');
uname.setAttribute('type','text');
uname.placeholder = "Enter your name"

password.setAttribute('id','password');
password.setAttribute('type','password');
password.placeholder = "Enter your password"


document.body.appendChild(section);
section.appendChild(email)
section.appendChild(uname)
section.appendChild(password)

section.appendChild(regbtn);

/*   //////////     LOGIN  \\\\\\\\\\\\    */

var section1 = document.createElement('section');
var logbtn = document.createElement('button');
var email1 = document.createElement('input');
var uname1 = document.createElement('input');
var password1 = document.createElement('input');
section1.innerHTML = "<h1>Login Here!</h1>"

logbtn.setAttribute('id','save');
logbtn.setAttribute('type','button');
logbtn.innerText = "Login";

email1.setAttribute('id','email1');
email1.setAttribute('type','email');
email1.placeholder = "Enter your email"

password1.setAttribute('id','password1');
password1.setAttribute('type','password');
password1.placeholder = "Enter your password"


document.body.appendChild(section1);
section1.appendChild(email1)
section1.appendChild(password1)

section1.appendChild(logbtn);
var records = [];
var user = {}
var sendButton = document.getElementById('send');
sendButton.addEventListener('click',function(){  // Event Listener
    user.email = document.getElementById('email').value;
    user.uname = document.getElementById('name').value;
    user.password = document.getElementById('password').value;
    records.push(user);
});

var loginButton = document.getElementById('save');
loginButton.addEventListener('click',function(){
    var email = document.getElementById('email1').value;
    var password = document.getElementById('password1').value;
    var h2 = document.createElement('h2');
    if(user.email === email && user.password === password){
        h2.innerText = "Login Successfull"
    }
    else {
        h2.innerText = "Login Failed!"
    }
    section1.appendChild(h2);
});

console.log(user);
