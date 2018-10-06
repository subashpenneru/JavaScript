var h1 = document.createElement('h1');
var btn1 = document.createElement('button');
var btn2 = document.createElement('button');
var div = document.createElement('div');
var img = document.createElement('img');
img.setAttribute('id','myImage');
img.setAttribute('src','pic_bulboff.gif');

h1.innerText = "BULB"
btn1.addEventListener('click',function(){
    var imgData = document.getElementById('myImage');
    imgData.setAttribute('src','pic_bulbon.gif');
})
btn1.innerText = "Turn on the light";

btn2.addEventListener('click',function(){
    var imgData1 = document.getElementById('myImage');
    imgData1.setAttribute('src','pic_bulboff.gif');
})
btn2.innerText = "Turn off the light";

document.body.appendChild(h1);
document.body.appendChild(div);
div.appendChild(btn1);
div.appendChild(img);
div.appendChild(btn2);

// Styles

img.style.width = "100px"
btn1.style.height = "50px"
btn1.style.marginRight = "50px"
btn1.style.marginLeft = "50px"

btn2.style.height = "50px"
btn2.style.marginLeft = "50px"