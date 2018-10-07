var user = {};
var records = [];

var h2 = document.createElement('h2');
var a = document.createElement('a');

/*  REGISTRATION VALIDATIOn */
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
        a.setAttribute('href','login.html')
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

document.body.appendChild(h2);

/*   LOGIN VALIDATION   */
function loginValidation(){
    
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
    if(e>0 && p>0){
        var head = document.querySelector('h2');
        var count=0;
        for(i=0;i<records.length;i++){
            if(records[i].emailid === email && records[i].pwd === password){count++;}
        }
        if(count>0) {
            head.innerText = "Login successfull"
        }
        else head.innerText = "Login failed"
    }
}