var table = document.createElement('table');
var c=0;
var row=0;
var tr;
function createTable(){
    tr = document.createElement('tr');
    tr.setAttribute('id',`row${++row}`);
    if(row == 1){
        tr.style.height = "50px"
        tr.style.backgroundColor = "lightblue"
        var th = document.createElement('th');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        th.innerText = 'ITEM'
        th1.innerText = 'ITEM'
        th2.innerText = 'ITEM'
        tr.appendChild(th)
        tr.appendChild(th1)
        tr.appendChild(th2)
    }

    document.body.appendChild(table)
    table.appendChild(tr);
    
    if(row>=2){
        createTD();
        createTD();
        createTD();
    }
    
}

var count =0;
function createTD(){
    var td = document.createElement('td');
    td.style.height = '75px';
    td.style.textAlign = "center"
    td.style.backgroundColor = "lightgrey"
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
    tdlist.innerHTML = null;
}
function removeRowList(){
    var position = prompt('enter position to remove row');
    var rowlist = document.querySelector('#row'+position);
    rowlist.outerHTML = null;
}

// table.setAttribute('style','border:2px solid black')
table.style.border = "2px solid black";
table.style.width = "100%"