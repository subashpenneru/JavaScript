
function dice(){
    return Math.floor(Math.random()*6)+1;
}

 var img = document.querySelector('img');
 var input = document.querySelector('input');
 var sum = 0;
 function rollDice(callback){
     var value = callback();
     switch (value) {
         case 1:
         img.setAttribute('src','../DOM/images/1.png')
         input.setAttribute('value',`${value}`)
         break;
         case 2:
         img.setAttribute('src','../DOM/images/2.png')
         input.setAttribute('value',`${value}`)
         break;
         case 3:
         img.setAttribute('src','../DOM/images/3.jpeg')
         input.setAttribute('value',`${value}`)
         break;
         case 4:
         img.setAttribute('src','../DOM/images/4.jpeg')
         input.setAttribute('value',`${value}`)
         break;
         case 5:
         img.setAttribute('src','../DOM/images/5.png')
         input.setAttribute('value',`${value}`)
         break;
         case 6:
         img.setAttribute('src','../DOM/images/6.png')
         input.setAttribute('value',`${value}`)
         break;
         default:
         break;
     }
     sum += value;
     var h1 = document.querySelector('h1')
     h1.innerText = `Score: ${sum}`
     document.body.appendChild(h1);
    if(sum >= 35) {
        window.location.reload();
    }
 }
 
 