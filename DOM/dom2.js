var elem = document.createElement('section')
elem.setAttribute('id','sec');   /* takes attribute and add to it */
elem.setAttribute('class','sect')

var secid = elem.getAttribute('class');
console.log(secid);

var elempara = document.createElement('p')
var elemh1 = document.createElement('h1')
elemh1.innerHTML = `<p>New to DOM</p>`
elemh1.innerHTML += `<p>Welcome to DOM</p>`

elempara.innerText = 'Paragraph'

document.body.appendChild(elem);
elem.appendChild(elemh1)
elem.appendChild(elempara);


var h1 = document.querySelector('.sect h1');
console.log(h1);


/* Query selectors - always work on first come first select.
    get selectors

    we can select with 
    element name, id, class.
*/


// var elemh1 = document.querySelector('.head');
// console.log(elemh1);
// elemh1.innerText = 'New to DOM'