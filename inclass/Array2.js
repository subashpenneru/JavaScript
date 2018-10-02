/* var family = ["Davy Jones","Jack Sparrow", "Black Pearl","Elizabeth Swann",'Will Turner','Barbossa']
console.log(family);

for(var i=0;i<family.length;i++){
    if(family[i] === 'Will Turner'){
        // family[i] = 'William'
        family.splice(i,1,'William')
        family.push('Pirates of Carrebian')
    }
}
console.log(family);
 */

var ip = ['192.168.1.1','192.168.1.2','192.168.1.3','192.168.1.4',
'192.168.1.5','192.168.1.6','192.168.1.7','192.168.1.8','192.168.1.9','192.168.1.10'];
var impIP = [];
for(var i=0;i<ip.length;i++){
    if(ip[i] == '192.168.1.3' || ip[i] ==  '192.168.1.5' || ip[i] == '192.168.1.7' || ip[i] == '192.168.1.9'){
        impIP.push(ip[i]);
    }
}
console.log(ip);
console.log(impIP);

