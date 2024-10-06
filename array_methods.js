const num=[1,2,3,4,5];
const num2=[6,7,8,9,0];

// filter()
const even = num.filter(number=>number%2==0);
//console.log(even);

// map- create arrray from existing array !
const square =even.map(num=>num**2);
//console.log(square);

//find - find first element matching the condn !
const find = square.find(num=>num<50);
//console.log(find);

//concat
const concat= num+num2;
console.log(concat);
