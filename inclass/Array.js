var names = ["Davy Jones", "Jack Sparrow", "Black Pearl","Elizabeth Swann",'Will Turner','Barbossa'];

console.log(names);
// names.splice(start, deletecount)
// names.splice(1, 2, "Elizabeth Swann")

var reqNames = names.slice(1,5)
// names.push('Will Turner') /* append data at the end */
// names.unshift('Barbossa') /* append data at the begining */
// names.shift() /* remove element from the begining */
// names.pop() /* remove element from the last */

console.log(reqNames);
