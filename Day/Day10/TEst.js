//function greet(name){
   // var message = "hello " + name;
   // return message;
   // 
//console.log(greet("shreya"));
////const sum = (a,b) =>a + b; 
//console.log(sum(3,10));
//
///function add(...numbers){
   // var sum = 0;//
   // for(var n of numbers){
       // sum += n;
   // }
   // return sum;
//}//
//console.log(add(5,10,15,20));
//function runtwice(fn){
    //fn();
    //fn();
//}
//const sayhi = () => "hi";
//console.log(runtwice(sayhi));

let arr =[1,2,3,4,5];
console.log(arr);
let arr1 =new Array(1,2,3);
console.log(arr1);
let arr2 = new Array(5);
console.log(arr2);
let arr3 =['a','b'];
arr3[2] = 'c';
console.log(arr3);
console.log(arr.length);
arr.length = 3;
console.log(arr);
arr.length = 7;
console.log(arr);
let arr5 = ["ace","king","queen" ,"diamond","heart"];
arr5.slice(1,3);
console.log(arr5.slice(1,3));
let a = [1,2,8];
let b = [...a];
console.log(b);
// findIndex()

const users = [
    { id: 1, name: "Rakesh" },
    { id: 2, name: "Bipin" }
];

const user = users.find(student => student.id === 2);
console.log(user);

const index = users.findIndex(student => student.name === "Bipin");
console.log(index);
let num  = [1,2,3,4,5];
 let pum  = num.map(n =>(n*2));
console.log(pum);
console.log(num.sort((a,b) => b-a));
console.log(num.reverse());
console.log(num.join(","));
let [x, ,z] =[1,2,3];
console.log(x);
console.log(z);
//let num5 = [33,44,55];
//console.log(sum(...num5));
let num6 = [1,1,2,3,5,6,7,7,5,4,6,8];
console.log([...new Set(num6)]);