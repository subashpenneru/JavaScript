alert('lift')
let liftNumber = +prompt("Enter floor no")
if(liftNumber < 0){ alert("lift going down")}
if(liftNumber > 0){ alert("lift going up")}
alert(liftNumber + " floor 'doors open'")
    for (i = 0; i < 5; i++) {
        let lNumber = +prompt('Enter floor no')
        if (lNumber > liftNumber) {
            alert("lift going up")
            alert(lNumber + " floor 'doors open'")
        } else if (lNumber < liftNumber) {
            alert("lift going down")
            alert(lNumber + " floor 'doors open'")
        } else {
            alert("same floor, doors open")
        }
        liftNumber = lNumber;
    }