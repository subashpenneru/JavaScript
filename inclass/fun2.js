// self invoking function -- used when fun loaded in the begining only.
// fun scope - entire file
/* (function hero(name,age) {
    console.log(name,age);
}('Arya Stark',23));
 */
//  fun type based on structure.
// 1.fun declaration
// 2.fun expression -- 1.labelled fun, 2.anonymus fun expression.

heroInfo();
 function heroInfo() {
    console.log("Hero");    
}
heroInfo();
// fun expression.
// labelled Fun
var heroData = function heroInfo() {
    console.log("Hero");
    return 20;    
}
console.log(heroData); /* prints funcion */
console.log(heroData()) /* prints data */

// anonymus fun
var heroinfo = function() {
    console.log('this is hero info');
    return true;
}
console.log(heroinfo);

