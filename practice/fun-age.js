var age = {
    name: null,
    year:2018,
    birthYear:null
};
console.log(age);

var dataEntry = ()=>{
    age.name = prompt('enter name');
    age.birthYear = +prompt('enter year of birth');
}
dataEntry();

var ageCalc = ()=>{
    if(age.birthYear > age.year){
        return 'not possible';
    }
    else {
        return `age: ${age.year - age.birthYear}`
    }  
}
console.log(ageCalc());

var retire = ()=>{
    if(age.birthYear > age.year){
        return 'not possible';
    }
    else if((age.year-age.birthYear)>60){
        return 'already retired';
    }
    else if((age.year-age.birthYear) == 60){
        return 'this year';
    }
    else return `retirement age: ${60-(age.year-age.birthYear)}`
}
console.log(retire());
