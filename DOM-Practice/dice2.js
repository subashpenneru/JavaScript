var value
var img = document.querySelector('img');
var input1 = document.querySelector('#p1');
var input2 = document.querySelector('#p2');
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
h1.style.color = 'red';
document.body.style.backgroundColor = "lightblue"
img.style.width = "150px"
img.style.height = "150px"