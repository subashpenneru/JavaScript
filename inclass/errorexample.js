try {
    var employee = {
        name: "Jack Sparrow",
        id: 12345,
        salary:222222,
        dept: 'Pirate',
        // address: 'Black Pearl, Tortuga'
    };    

function employeeData(){
    try {
        
        if(employee.address == undefined) {
            /* var error = {
                name:'not found',
                message: 'Address is not found in employee'
            } */ 
            throw new Error('Address is not found in employee');
        }
        else {
            console.log(employee.address);
        }
    } catch (error) {
        if(error.name === 'ReferenceError'){
            employee.address = 'Davy Jones, Flying Dutchman'
            console.log(employee);
            
        }
        else throw error;
        
    }
    
}

employeeData();
}catch(error) {
    console.log(error);
}

// handling errors
/* 
    stdio - printout
    loging - printing to file(permanent)
    function for resolving
*/