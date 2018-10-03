// create HTML element
var c=1;
var elemul = document.createElement('ul');
function createList(){
    
    var elemli = document.createElement('li');
    elemli.setAttribute('id','list'+c)
    elemli.innerText = 'item'+c;
    elemul.appendChild(elemli)
    c++;
}

document.body.appendChild(elemul);

function replaceItem(){
    var position = prompt('enter a item position')
    var li = document.querySelector('#list'+position);
    li.innerText = prompt('enter item name')
}
function removeItem(){
    var position = prompt('enter item position');
    var li = document.querySelector('#list'+position)
    li.outerHTML = null;
}

function removeAll(){
    var ul = document.querySelector('ul')
    // ul.outerHTML = null;
    document.body.removeChild(ul)
}
