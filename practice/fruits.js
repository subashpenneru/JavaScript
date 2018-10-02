let fruitName1 = prompt('Enter fruit name')
console.log(typeof(fruitName1));

if(fruitName1 != '' && typeof fruitName1 == 'string'){
    let fruitCount1 = +prompt('Enter fruit count')
    if(fruitCount1 != '' && !isNaN(fruitCount1)){
        var flag = confirm('Add another')
        if(flag){
            let fruitName2 = prompt('Enter fruit name')
            if(fruitName2 != '' && typeof fruitName2 == 'string'){
                let fruitCount2 = +prompt('Enter fruit count')
                if(fruitCount2 != '' && !isNaN(fruitCount2)){
                    var flag = confirm('Add another')
                    if(flag){
                        let fruitName3 = prompt('Enter fruit name')
                        if(fruitName3 != '' && typeof fruitName3 == 'string'){
                            let fruitCount3 = +prompt('Enter fruit count')
                            if(fruitCount3 != '' && !isNaN(fruitCount3)){
                                console.log(`your purchase order:
                                fruit name: ${fruitName1}
                                count: ${fruitCount1}
                                fruit name: ${fruitName2}
                                count: ${fruitCount2}
                                fruit name: ${fruitName3}
                                count: ${fruitCount3}
                                Total: ${fruitCount1+fruitCount2+fruitCount3}`)                                        
                            }
                            else {
                                console.log('fruit count should be number');
                                
                            }
                        }
                        else {
                            console.log('fruit name should be string');
                            console.log(`your purchase order:
                            fruit name: ${fruitName1}
                            count: ${fruitCount1}
                            fruit name: ${fruitName2}
                            count: ${fruitCount2}
                            Total: ${fruitCount1+fruitCount2}`)
                        }    
                    }
                    else {
                        console.log(`your purchase order:
                        fruit name: ${fruitName1}
                        count: ${fruitCount1}
                        fruit name: ${fruitName2}
                        count: ${fruitCount2}
                        Total: ${fruitCount1+fruitCount2}`)
                    }
                }
                else {
                    console.log('fruit count should be number');
                    
                }
            }
            else {
                console.log('fruit name should be string');
                console.log(`your purchase order:
                fruit name: ${fruitName1}
                count: ${fruitCount1}
                Total: ${fruitCount1}`)
            }
        }
        else {
            console.log(`your purchase order:
            fruit name: ${fruitName1}
            count: ${fruitCount1}
            Total: ${fruitCount1}`)
        }
    }
    else {
        console.log('fruit count should be number');    
    }
}
else {
    console.log('fruit name should be string');
        
}
