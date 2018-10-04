/* get selector
    5 types.
    getElementById.
    getElementsByclass.
    getElementByName.
    getElementByTag.

*/

var section = document.createElement('section');
var count = 1;
function addPara() {
    var p = document.createElement('p');
    var input = document.createElement('input');
    
    p.setAttribute('id','para'+count);
    p.setAttribute('class','para');
    input.setAttribute('name','email');
    input.setAttribute('id','email'+count);
    p.innerText = `Para Text ${count}`
    section.appendChild(p);
    section.appendChild(input);
    count++;
}
function select(){
    /* var allPara = document.querySelectorAll('p'); // select all elements.
    for(var index=0;index<allPara.length;index++){
        console.log(allPara[index]);
        
    } */

    // document.getElementById('para2').innerText = "new Para text";
    // var classPara = document.getElementsByClassName('para');
    // console.log(classPara);

    var inp = document.getElementsByName('email');
    for(var index=0;index<inp.length;index++){
        console.log(inp[index]);
        
    }
    
}

function sendText() {
    var email1 = document.getElementById('email1');
    console.log(email1.value);
}

function clearText() {
    var email1 = document.getElementById('email1');
    email1.value = null;    
}

document.body.appendChild(section);

