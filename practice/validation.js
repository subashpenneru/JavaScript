try {
    var name = prompt('enter name');

    if(name === '') throw new Error('name should not be empty');
    if(name == undefined) throw new Error('name is undefined');
    if(name == 'null') throw new Error('name should not be null')
    if(!isNaN(name)) throw new Error('numbers not accepted');
    else {
        for(nCheck=0;nCheck<name.length;nCheck++){
            if(name[nCheck] == ' ') {continue;}
            if(!isNaN(name[nCheck])) throw new Error('name field doesnot accept numbers');
            else console.log(name[nCheck]);
            
        }
    }
    
} catch (error) {
    console.log(error);
    
}