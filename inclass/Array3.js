var ip = ['192.168.1.1','192.168.1.2','192.168.1.3','192.168.1.4',
'192.168.1.5',];
var names = ["Davy Jones","Jack Sparrow", "Black Pearl"]
var age = [55,28,23]
var ipData = [ip, names]
var nameData = [ip, age]
var combo = [ipData, nameData]

// console.log(combo);

for(var i=0;i<combo.length;i++){
    for(var j=0;j<combo[i].length;j++){
        for(var k=0;k<combo[i][j].length;k++){
            console.log(`combo[${i}][${j}][${k}]:- `,combo[i][j][k]);            
        }
        console.log('//////////////////////////////');
                
    }
}