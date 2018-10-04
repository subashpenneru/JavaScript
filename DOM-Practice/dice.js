var value
var img = document.querySelector('img');
var input1 = document.querySelector('#p1');
var input2 = document.querySelector('#p2');
var h1 = document.createElement('h1');

var turns = 1;
var sum1 =0,sum2=0;
function diceRoll(){
    value = Math.floor(Math.random()*6)+1;
    console.log(value);
    
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
        sum1 += value;
        input1.setAttribute('value',`${sum1}`)
        
        if(sum1>=35) h1.innerText = 'player1 winner'
        
    }
    else {
        sum2 += value;
        input2.setAttribute('value',`${sum2}`)

        if(sum2>=35) h1.innerText = 'player2 winner';
    }
    turns++;
    document.body.appendChild(h1);
}
h1.style.color = 'red';