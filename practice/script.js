// inheritance
// const obj1 = {
//     name: "dev",
//     getName: function () {
//         return this.name
//     },
//     getRoll: function () {
//         return this.roll;
//     }
// };

// const obj2 = {
//     roll: 2,
//     name: "dev1",
//     __proto__: obj1
// }

// console.log(obj2.getRoll());

// const arr = ["a", "b", "c"];
// for (const name of arr) {
//     console.log(name);
// }

// const obj = {
//     name: 'dev',
//     age: 20
// }

// for (const name in obj) {
//     console.log(name);
// }


// function getSumZero(arr) {
//     for (let num of arr) {
//         for (let j = 1; j < arr.length; j++) {
//             if (num + arr[j] === 0) {
//                 return [num, arr[j]]
//             }
//         }
//     }
// }

// let result = getSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);


// es6 rest  operator

// rest => element which we passes combine

// function addNum(a,b,...other){
//     console.log(other);
//     return a+b;
// }

// const sum = addNum(1,3,4,6,7);
// console.log(sum);

// spread => we break down combine element
// element which you have passed that only get printed

// const name = ["raj","mohan","gopi"];
// function getName(name1,name2,name3){
//     console.log(name1,name2,name3);
// }

// getName(...name)


// const name = ["raj","mohan","gopi"];

// function getName(name1,name2){
//     console.log(name1,name2);
// }

// getName(name[0],name[1]);

// rest with object

// const student = {
//     name:"raj",
//     age:23,
//     hobbie:["novel"]

// };

// const {age,hobbie} = student;
// console.log(age,hobbie);

// const {age,...rest} =student;
// const{...rest} = student;
// console.log(rest);


// const student1 = {
//     name:"dev",
//     age:20
// }


// const updateStudentAge = {
//     ...student1,
//     age:29
// }

// console.log(updateStudentAge);

// function curring

// function Add(a,b,c){
//     return a+b+c;
// }

// const print = Add(2,2,2);
// console.log(print);

// function Add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// let res = Add(2);
// let data = res(2);
// let data1 = data(2);
// console.log(data1);


// const result = Add(2)(2)(2);
// console.log(result);

// callbacks
// a function passed as argument
// a function execute only after executing of another function



// function perOne(friend, callFriend) {
//     console.log(`hi bro i am busy right now i will call you back`);
//     callFriend();

// }

// function perTwo() {
//     console.log(`bro as i said i have called  you back`);
// }

// perOne("rajaiv", perTwo)

// sum(2, 4)

// function sum(a, b) {
//     add = a + b;
//     console.log(add);
// }


// before execution of code variable and function are placed at the top of their scope


// closure means => inner functions can access outer function variables as well as global variables


// const outerFunction = (a) => {
//     let b = 10;
//     const innerFunction = () => {
//         add = a + b;
//         console.log(add);
//     }
//     return innerFunction;
// }

// let inner = outerFunction(2);
// inner();




