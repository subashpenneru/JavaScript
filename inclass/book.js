let bookName = prompt("Enter Book Name")
console.log(typeof bookName);

if(bookName != '' && typeof bookName == 'string'){
    let bookCount = +prompt("Enter count")
    console.log(typeof bookCount);
    console.log(bookCount);
    
    if(bookCount != '' && !isNaN(bookCount)){
        console.log("Your purchase order for Book Book Name: " +bookName + " count = " +bookCount);
    }
    else {
        console.log('book count should be number');
    }
}
else {
    
    console.log('book name should be string');
    
}

