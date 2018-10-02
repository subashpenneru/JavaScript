// while Loop
// let count = 3;
// let OTP = "120934";
// let x = 1;
/* while (count>0) {
    console.log(count);
    count--;
} */

/* do {
    if(count == 0){OTP = '464040'}
    console.log("OTP: "+OTP);
    count--;
} while(count>=0)
 */
// for Loop
/* for (var i = 1;i <= 10;i++) {
    console.log(i);
} */

// door example

let doorCount = 5;
let msg = 'door is opened'
let x = 1;
do {
    if(doorCount == 0){msg = 'door closed'}
    console.log(doorCount);
    console.log(doorCount-(doorCount-x) + ' time ',msg);
    doorCount--; x++;    
} while (doorCount>=0);