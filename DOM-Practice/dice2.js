var value
var section = document.createElement('section');
var img = document.createElement('img');
img.setAttribute('src','../DOM/images/tenor.gif');
var div = document.createElement('div');

var label1 = document.createElement('label');
var label2 = document.createElement('label');
label1.innerText = "player1:"
label2.innerText = "player2:"
var input1 = document.createElement('input');
var input2 = document.createElement('input');

var div1 = document.createElement('div');
var btn = document.createElement('button');
btn.innerText = "DICE";
btn.setAttribute('type','button');
btn.setAttribute('onclick','diceRoll()');

var h1 = document.createElement('h1');
var turns = 1;
var total = 23;
var sum1 =0,sum2=0;
function diceRoll(){
    value = Math.floor(Math.random()*6)+1;
    
    switch (value) {
        case 1:
        img.setAttribute('src','../DOM/images/1.png')
        break;
        case 2:
        img.setAttribute('src','../DOM/images/2.png')
        break;
        case 3:
        img.setAttribute('src','../DOM/images/3.jpeg')
        break;
        case 4:
        img.setAttribute('src','../DOM/images/4.jpeg')
        break;
        case 5:
        img.setAttribute('src','../DOM/images/5.png')
        break;
        case 6:
        img.setAttribute('src','../DOM/images/6.png')
        break;
        default:
        break;
    }
    if(turns%2 != 0){
        if((sum1+value)<=total){
            sum1 += value;
            input1.value = sum1;
        }
        if(sum1 == 23) {
            h1.innerText = 'Player1 Wins'
        }
        
    }
    if(turns%2 == 0) {
        if((sum2+value)<=total){
            sum2 += value;
            input2.value = sum2;
            
        }
        if(sum2 == 23) {
            h1.innerText = 'Player2 Wins'
        }   
    }
    turns++;
    document.body.appendChild(h1);
}

document.body.appendChild(section);
section.appendChild(img);
document.body.appendChild(div);
div.appendChild(label1);
div.appendChild(input1)

div.appendChild(label2);
div.appendChild(input2)

document.body.appendChild(div1);
div1.appendChild(btn);

h1.style.color = 'red';
document.body.style.backgroundColor = "#42bff4"
img.style.width = "250px"
img.style.height = "250px"
btn.style.width = "100px"
btn.style.height = "50px"
div1.style.marginTop = "25px"
div1.style.textAlign = "center"

section.style.textAlign = "center"
section.style.marginBottom = "25px"

input1.style.marginRight = "300px"

input1.style.height = "25px"
input2.style.height = "25px"
label1.style.marginRight = "15px"
label2.style.marginRight = "15px"