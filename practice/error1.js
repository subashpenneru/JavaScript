var user = {
    name: 'sai subash penneru',
    no: 50
};

function userDetails() {
    try {
        if (user.name.length>10) {
            var error = {
                name: 'limit exceeded',
                message: 'name must contain max 10 letters only'
            };
            throw error;
        } else {
            console.log('Name:- ', user.name);
            
        }
    } catch (error) {
        console.log(error);
    }
    try {
        if(user.no>100 && user.no<1000 ){
            console.log('No:- ',user.no);
            
        }
        else {
            var error = 'no must be with in range of 100 to 1000';
            throw error;
        }
    } catch (error) {
        console.log(error);
        
    }
    var userName = prompt('enter your name');
    try {
        if(userName == '') throw 'userName is empty'
        if(userName == undefined) throw 'userName is undefined'
        if(userName.length>10) throw 'userName limit exceeded'
        
    } catch (error) {
        console.log(error);
    }
    finally {
        console.log('Name:-',userName);
        
    }
}

userDetails();
