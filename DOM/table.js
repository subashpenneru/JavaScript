var table = document.createElement('table');
var c=0;
var row=0;
var tr;
function createTable(){
    tr = document.createElement('tr');
    tr.setAttribute('id',`row${++row}`);
    createTD();
    createTD();
    createTD();
    document.body.appendChild(table)
    table.appendChild(tr);
}

var count =0;
function createTD(){
    var td = document.createElement('td');
    td.setAttribute('id',`data${++count}`)
    td.innerText = `item${++c}`
    tr.appendChild(td);
}

function replaceItem(){
    var position = prompt('enter data position')
    var datalist = document.querySelector('#data'+position);
    datalist.innerText = prompt('enter item name')
}
function removeItem(){
    var position = prompt('enter position to remove');
    var tdlist = document.querySelector('#data'+position);
    tdlist.outerHTML = null;
}
function removeRowList(){
    var position = prompt('enter position to remove row');
    var rowlist = document.querySelector('#row'+position);
    rowlist.outerHTML = null;
}