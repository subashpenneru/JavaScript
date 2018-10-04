var crew = {
    "name": "jack Sparrow",
    "age": 40,
    "position": "captain",
    "address": {
        "ship": "Black Pearl",
        "port": "Tortuga",
        "location": "carribean"
    },
    "family": ["Hector Barbossa","Davy Jones","Black Beard","Armando Salzaar"],
    
}

try {
    var ul = document.createElement('ul')
    var h1 = document.createElement('h1')
    var h4 = document.createElement('h4')

    h1.innerText = crew.name;
    h4.innerText = crew.name+ " Friends"

    for(i=0;i<crew.family.length;i++){
        var li = document.createElement('li')
        li.innerText = crew.family[i];
        ul.appendChild(li);

    }
    document.body.appendChild(h1);
    document.body.appendChild(h4);

    document.body.appendChild(ul)
} catch (error) {
    console.log(error);
    
}