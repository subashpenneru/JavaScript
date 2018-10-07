var user = {};
var records = [];
var h2 = document.querySelector('h2');
var a = document.createElement('a');

/*  REGISTRATION VALIDATION */
function validation(){
    /* FIRST NAME */
    var f=0,l=0,e=0,p=0;
    var firstName = document.getElementById('fname').value;
    try {
        if(firstName == ""){
            throw "first name should not be empty"
        }
        else if(firstName.length>10){
            throw "more than 10 characters will not be allowed";
        }
        else {
            for(i=0;i<firstName.length;i++){
                if(isNaN(firstName[i])){user.fname = firstName; f++}
                else throw "Numbers are not allowed"
            }
        }
    } catch (error) {
        var spnFirstName = document.getElementById('spnfname');
        spnFirstName.innerText = error;
    }
    /* LAST NAME */
    var lastName = document.getElementById('lname').value;
    try {
        if(lastName == ""){
            throw "last name should not be empty"
        }
        else if(lastName.length>10){
            throw "more than 10 characters will not be allowed";
        }
        else {
            for(i=0;i<lastName.length;i++){
                if(isNaN(lastName[i])){user.lname = lastName;l++}
                else throw "Numbers are not allowed"
            }
        }
    } catch (error) {
        var spnLastName = document.getElementById('spnlname');
        spnLastName.innerText = error;
    }
    /* EMAIL_ID */
    var emailCount = 0;
    var email = document.getElementById('emailid').value;
    try {
        if(email == ""){
            throw "email should not be empty"
        }
        else {
            for(i=0;i<email.length;i++){
                if(email[i] == '@') emailCount++;
            }
            if(emailCount == 0 || emailCount>1) throw "enter valid email-id"
            else {user.emailid = email; e++}
        }
    } catch (error) {
        var spnLastName = document.getElementById('spnemail');
        spnLastName.innerText = error;
    }
    /* PASSWORD */
    var pwdCount = 0;
    var password = document.getElementById('password').value;
    var letters = /^[A-Za-z0-9]+$/;
    try {
        if(password == ""){
            throw "password should not be empty";
        }
        else if(password.length<8) throw "password must be atleast 8 characters"
        else {
            for(i=0;i<password.length;i++){
                if(password[i].match(letters)) {
                    pwdCount++;
                }
            }
            if(pwdCount == password.length)throw "password must contain atleast one special character";
            else {user.pwd = password; p++}
        }
    }catch(error){
        var spnPassword = document.getElementById('spnpassword');
        spnPassword.innerText = error;
    }
    if(f>0 && l>0 && e>0 && p>0){
        records.push(user);
        console.log(records);
        
        h2.innerHTML = "Registration successfull "
        a.innerText = "Login here"
        a.setAttribute('href','#')
        var form = document.querySelector('form');
        a.addEventListener('click', function(){
            form.innerHTML = null;
            var section = document.createElement('section');
            var div = document.createElement('div');
            var div1 = document.createElement('div');
            var div2 = document.createElement('div');            
            var label = document.createElement('label');
            var label1 = document.createElement('label');
            var inputE = document.createElement('input');
            var inputE1 = document.createElement('input');
            var spanE = document.createElement('span')
            var spanE1 = document.createElement('span')
            var btn2 = document.createElement('button');

            label.innerText = "Email-Id:"
            label1.innerText = "Password:"
            inputE.setAttribute('type','email');
            inputE.setAttribute('id','loginemailid');
            inputE.placeholder = "Enter your Email-id"

            inputE1.setAttribute('type','password');
            inputE1.setAttribute('id','loginpassword');
            inputE1.placeholder = "Enter your Password";

            spanE.setAttribute('id','spnloginemail');
            spanE1.setAttribute('id','spnloginpassword');

            btn2.innerText = "LOGIN";
            btn2.setAttribute('type','button')
            btn2.addEventListener('click',function(){
                /* EMAIL_ID */

            var e=0,p=0;
            var emailCount = 0;

            var email = document.getElementById('loginemailid').value;
            try {
                if(email == ""){
                    throw "email should not be empty"
                }
                else {
                    for(i=0;i<email.length;i++){
                        if(email[i] == '@') emailCount++;
                    }
                    if(emailCount == 0 || emailCount>1) throw "enter valid email-id"
                    else {e++}
                }
            } catch (error) {
                var spnLastName = document.getElementById('spnloginemail');
                spnLastName.innerText = error;
            }
            /* PASSWORD */
            var pwdCount = 0;
            var password = document.getElementById('loginpassword').value;
            var letters = /^[A-Za-z0-9]+$/;
            try {
                if(password == ""){
                    throw "password should not be empty";
                }
                else if(password.length<8) throw "password must be atleast 8 characters"
                else {
                    for(i=0;i<password.length;i++){
                        if(password[i].match(letters)) {
                            pwdCount++;
                        }
                    }
                    if(pwdCount == password.length)throw "password must contain atleast one special character";
                    else {p++}
                }
            }catch(error){
                var spnPassword = document.getElementById('spnloginpassword');
                spnPassword.innerText = error;
            }
                var firstname, lastname;
            if(e>0 && p>0){
                var head = document.createElement('h2');
                var h3 = document.createElement('h3');
                var count=0;
                for(i=0;i<records.length;i++){
                    if(records[i].emailid === email && records[i].pwd === password){
                        count++;
                        firstname = records[i].fname;
                        lastname = records[i].lname;
                    }
                }
                if(count>0) {
                    head.innerText = "Login successfull";
                    h3.innerText = "Welcome "+firstname+" "+lastname;
                }
                else {
                    head.innerText = "Login failed";
                }
                document.body.appendChild(head);
                document.body.appendChild(h3);
            }
                
            })
            form.appendChild(section);
            section.appendChild(div);
            div.appendChild(label);
            div.appendChild(inputE);
            div.appendChild(spanE);
            section.appendChild(div1);
            div1.appendChild(label1);
            div1.appendChild(inputE1);
            div1.appendChild(spanE1);
            section.appendChild(div2);
            div2.appendChild(btn2);

            var div = document.getElementsByTagName('div');
                for(i=0;i<div.length;i++){
                    div[i].style.margin = "25px 0px"
                }
                var spanForm = document.getElementsByTagName('span');
                for(j=0;j<spanForm.length;j++){
                    spanForm[j].style.color = "red"
                }
        })
        
        h2.appendChild(a);  
    }
    else {
        h2.innerText = "Registration Failed! please try again"
    }
}

var div = document.getElementsByTagName('div');
for(i=0;i<div.length;i++){
    div[i].style.margin = "25px 0px"
}
var spanForm = document.getElementsByTagName('span');
for(j=0;j<spanForm.length;j++){
    spanForm[j].style.color = "red"
}
