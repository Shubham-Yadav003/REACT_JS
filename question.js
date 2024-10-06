// class vehicle{
//     #make;
//     #model;
    
//     constructor(make,model){
//         this.#make=make;
//         this.#model=model;
//     }

//  getDetails(){
//   console.log(this.#make);
//   console.log(this.#model);
//     }

//     static comapreVahicles(value1, value2){
//         if(value1.#make==value2.#make && value1.#model== value2.#model){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }

// class car extends vehicle{
//   #year;
//   #milege;

//     constructor(make,model,year, milege){
//         super(make,model);
//         this.#year=year;
//         this.#milege=milege;
//     }

//     getDetails(){
//         console.log(super.getDetails());
//         console.log(this.#year);
//         console.log(this.#milege);

//     }
//     drive(distance){
//         this.#milege+=distance;
//     }
    

// }


// const abc= new vehicle(1992, 'ford');
// abc.getDetails();

// const xyz= new car('ford','camry',2006,200 );
// const mz= new car('ford','camr',2007,100 );
// //xyz.getDetails();
// //xyz.drive(50);

// console.log(comapreVahicles(abc, mz));

class Vehicle {
    #make;
    #model;
    
    constructor(make, model) {
        this.#make = make;
        this.#model = model;
    }

    getDetails() {
        console.log(this.#make);
        console.log(this.#model);
    }

    getMake() {
        return this.#make;
    }

    getModel() {
        return this.#model;
    }

    static compareVehicles(value1, value2) {
        return value1.getMake() === value2.getMake() && value1.getModel() === value2.getModel();
    }
}

class Car extends Vehicle {
    #year;
    #mileage;

    constructor(make, model, year, mileage) {
        super(make, model);
        this.#year = year;
        this.#mileage = mileage;
    }

    getDetails() {
        super.getDetails();
        console.log(this.#year);
        console.log(this.#mileage);
    }

    drive(distance) {
        this.#mileage += distance;
    }
}

const abc = new Vehicle('Ford', 1992);
abc.getDetails();

const xyz = new Car('Ford', 'Camry', 2006, 200);
const mz = new Car('Ford', 'Camr', 2007, 100);

console.log(Vehicle.compareVehicles(abc, mz)); // false
