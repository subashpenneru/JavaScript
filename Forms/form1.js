/* FIRST NAME */
var divFName = document.createElement('div');
var labelFName = document.createElement('label');
var inputFName = document.createElement('input');
var pFName = document.createElement('p');
/* LAST NAME */
var divLName = document.createElement('div');
var labelLName = document.createElement('label');
var inputLName = document.createElement('input');
var pLName = document.createElement('p');
/* EMAIL-ID */
var divemail = document.createElement('div');
var labelemail = document.createElement('label');
var inputemail = document.createElement('input');
var pemail = document.createElement('p');
/* PASSWORD */
var divpassword = document.createElement('div');
var labelpassword = document.createElement('label');
var inputpassword = document.createElement('input');
var ppassword = document.createElement('p');
/* BUTTON-REGISTER */
var btn = document.createElement('button');

divFName.setAttribute('class','inpdiv');
divFName.setAttribute('id','divfname');
labelFName.innerText = "First Name: "
labelFName.setAttribute('class','lab');
labelFName.setAttribute('id','lfname');
inputFName.setAttribute('type','text');
inputFName.setAttribute('class','inp');
inputFName.setAttribute('id','fname');

divLName.setAttribute('class','inpdiv');
divLName.setAttribute('id','divlname');
labelLName.innerText = "Last Name: "
labelLName.setAttribute('class','lab');
labelLName.setAttribute('id','llname');
inputLName.setAttribute('type','text');
inputLName.setAttribute('class','inp');
inputLName.setAttribute('id','lname');

divemail.setAttribute('class','inpdiv');
divemail.setAttribute('id','divemail');
labelemail.innerText = "Email-ID: "
labelemail.setAttribute('class','lab');
labelemail.setAttribute('id','lemail');
inputemail.setAttribute('type','email');
inputemail.setAttribute('class','inp');
inputemail.setAttribute('id','email');

divpassword.setAttribute('class','inpdiv');
divpassword.setAttribute('id','divpassword');
labelpassword.innerText = "Password: "
labelpassword.setAttribute('class','lab');
labelpassword.setAttribute('id','lpassword');
inputpassword.setAttribute('type','password');
inputpassword.setAttribute('class','inp');
inputpassword.setAttribute('id','password');

btn.setAttribute('type','button');
btn.setAttribute('name','button');
btn.innerText = "REGISTER";

document.body.appendChild(divFName);
divFName.appendChild(labelFName)
divFName.appendChild(inputFName)
divFName.appendChild(pFName);

document.body.appendChild(divLName)
divLName.appendChild(labelLName)
divLName.appendChild(inputLName)
divLName.appendChild(pLName);

document.body.appendChild(divemail)
divemail.appendChild(labelemail)
divemail.appendChild(inputemail)
divemail.appendChild(pemail);

document.body.appendChild(divpassword)
divpassword.appendChild(labelpassword)
divpassword.appendChild(inputpassword)
divpassword.appendChild(ppassword);

document.body.appendChild(btn);

btn.addEventListener('click',function(){
    var fname = document.getElementById('fname').value;
    try {
        if(fname == "") throw "first name should not be empty";
        else if(fname.length>10) throw "more than 10 characters are not allowed"
        else {
            for(i=0;i<fname.length;i++){
                if(isNaN(fname[i]) || fname[i] == " "){}
                else throw "Numbers are not allowed";
            }
        }
    } catch (error) {
        pFName.innerText = error;
    }
    var lname = document.getElementById('lname').value;
    try {
        if(lname == "") throw "last name should not be empty";
        else if(lname.length>10) throw "more than 10 characters are not allowed"
        else {
            for(i=0;i<lname.length;i++){
                if(isNaN(lname[i]) || lname[i] == " "){}
                else throw "Numbers are not allowed";
            }
        }
    } catch (error) {
        pLName.innerText = error;
    }
    var emailCount = 0;
    var emailid = document.getElementById('email').value;
    try {
        if(emailid == "") throw "email should not be empty";
        else {
            for(i=0;i<emailid.length;i++){
                if(emailid[i] == '@') emailCount++;
            }
            if(emailCount == 0 || emailCount>1) throw "enter valid email-id"
        }
    } catch (error) {
        pemail.innerText = error;
    }
    var passwordCount = 0;
    var pwd = document.getElementById('password').value;
    var letters = /^[A-Za-z0-9]+$/;
    try {
        if(pwd == "") throw "password should not be empty";
        else if(pwd.length<8) throw "must be atleast 8 characters"
        else {
            for(i=0;i<pwd.length;i++){
                if(pwd[i].match(letters)){passwordCount++;}
            }
            if(pwd.length == passwordCount) throw "password must contain one special character";
        }
    } catch (error) {
        ppassword.innerText = error;
    }
})

divFName.style.height = "50px"
divLName.style.height = "50px"
divemail.style.height = "50px"
divpassword.style.height = "50px";

pFName.style.color = "red";
pFName.style.fontSize = "13px"
pFName.style.marginLeft = "80px"
pFName.style.marginTop = "1px"

pLName.style.color = "red";
pLName.style.fontSize = "13px"
pLName.style.marginLeft = "80px"
pLName.style.marginTop = "1px"

inputemail.style.marginLeft = "10px"
pemail.style.color = "red";
pemail.style.fontSize = "13px"
pemail.style.marginLeft = "80px"
pemail.style.marginTop = "1px"

inputpassword.style.marginLeft = "10px"
ppassword.style.width = "200px"
ppassword.style.color = "red";
ppassword.style.fontSize = "13px"
ppassword.style.marginLeft = "80px"
ppassword.style.marginTop = "1px"

btn.style.marginLeft = "100px"
btn.style.marginTop = "20px"