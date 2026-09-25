
// Ex9 methods in object

let car ={
    Model: "Shankaroonshata",
    Made: "Baidoa",
    year: 2002,
    start: function (){
        console.log("The car has started " + this.Model);
    }
}

car.start();
console.log(car["Made"]);
console.log(car.year);















