// in js this refrs to objects !
// in strict mode if global space then it will give window obj 
//within function it will give undefined 

// if we given any reference like window.x() it will again give window obj even in strict mode !  

// "use strict";
// function x() {
//     console.log(this);
// }
// x();

const obj={
    y:3,
    z:function(){
        console.log(this);
    }
}

//obj.z();

// call bind and apply

// const obj2={
//     name:'rahul',
// }

// obj.z.call(obj2);

const obj4={
    e:45,
    g:()=>{
        console.log(this);
    },
};
//obj4.g();

const obj5={
    i:45,
    c:function (){
        const p=()=>{
            console.log(this);
        }
        p();
    },
}
obj5.c();

