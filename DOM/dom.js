// create HTML element
var c=1;
function createList(){
    
    var elemul = document.createElement('ul');
    var elemli = document.createElement('li');
    elemli.innerText = 'item'+c;

    document.body.appendChild(elemul);
    elemul.appendChild(elemli)
    c++;
}