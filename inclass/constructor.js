// constructor returns dynamic object.
// are use to instansiate an object
function Projector(company,size,price,warranty){
    this.company = company;
    this.size = size;
    this.price = price;
    this.warranty = warranty;
}

let projector = new Projector('EPSON','2X2',20000,'2 years');
projector.size = '3X4'
console.log(projector);

