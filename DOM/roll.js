
function dice(){
   return Math.floor(Math.random()*6)+1;
}
var img = document.querySelector('img');

function rollDice(callback){
    var value = callback();
    console.log(value);
    switch (value) {
        case 1:
        img.setAttribute('src','images/1.png')
        break;
        case 2:
        img.setAttribute('src','images/2.png')
        break;
        case 3:
        img.setAttribute('src','images/3.jpeg')
        break;
        case 4:
        img.setAttribute('src','images/4.jpeg')
        break;
        case 5:
        img.setAttribute('src','images/5.png')
        break;
        case 6:
        img.setAttribute('src','images/6.png')
        break;
        default:
            break;
    }
}