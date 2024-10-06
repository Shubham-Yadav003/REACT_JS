//destucting
// const myfavlang=['HTML','Js','Java','C','Python','SQL'];

// //es5
// var lang1= myfavlang[0];
// var lang3 = myfavlang[2];
// console.log("1st lang:"+ lang1);
// console.log("2st lang:"+ lang3);

// //es6

// const [first, second, , fourth]=myfavlang;
// console.log("1st lang:"+first);
// console.log(second);
// console.log(fourth);

//spread(...)-- copy
const fruits=['apple','banana','cherry'];
const veg =['carrot','bhindi','baigan'];

//copy
const fruitscopy1=[...fruits];
//console.log("copy", fruitscopy1);

//merge
const fruitscopy2=[...fruits,...veg];
//console.log("copy", fruitscopy2);

//adding elements
const add= ['mango',...fruits,'pineapple'];
//console.log(add);

const newAdd=['mango', fruits[0],'haldi'];
//console.log(newAdd);

const [first, second]=fruits;
const[third , fourth]=veg;
console.log(first,second,third, fourth);





