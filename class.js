// class std{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     display(){ 
//         console.log(` name is ${this.name}  \nage is ${this.age}`);
// }
// }

// const stdd= new std('ppp',5) ;
// stdd.display();

class car{
    constructor(brand){
        this.brand=brand;
    }
    present(){
        return `i have a ${this.brand}`;
    }
}

class model extends car{
    constructor(brand,model){
        super(brand);
        this.model=model;
        

    }
    show(){
        return this.present()+" it is a "+ this.model;
    }
}

const mycar= new model("ford","mustang");
console.log(mycar.show());