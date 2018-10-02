function Motor(brand,price,speed,warranty){
    this.brand = brand;
    this.price = price;
    this.speed = speed;
    this.warranty = warranty;
}

let car1 = new Motor('Jaguar',6000000,'200mph','4 years')
console.log(car1);

let bike1 = new Motor('Yamaha YZF-R15',115000,'131kmph','1 year')
console.log(bike1);

function Class(course,trainer,noOfStudents,time){
    this.course = course;
    this.trainer = trainer;
    this.noOfStudents = noOfStudents;
    this.time = time;
}

let students = new Class('Full Stack','WK',20,'2 hrs');
console.log(students);
