// let adeifemi = 'ogunseye';
// let parent = 'adebanjo';
// let family = 'adifemi + parent'
// console.log(family);

// let surname = 'adebanjo'
// console.log(surname.length);

// console.log(surname[3]);
// console.log(surname.substr(3,4));
// console.log(surname.substring(3,5));

// mthematical operation

// let k = 7;
// k += 2;
// // console.log(k);

// const calArea = function(radius){
//     return 3,14 * radius**2;
// }

let g = 10;
g++;
// console.log(g);

//   FUNCTIONS
//DATE  1/9/22

// function greeting(name){
//     alert('hello + name');
// }
// function processUserInput('')

// function printMyName(name) {
//     alert('hello , namr');
// }
// // callback function
// function ourCallBackFunction (c) {
//     c(name);
// }
// ourCallBackFunction(printMyName);

// function addNum (x , y) {
// console.log(x + y);
// }
//  function ourCallBackFunction(g) {
// g(2,3);
// }
// ourCallBackFunction(addNum);

// subtraction;

// function addNum (x , y) {
//     console.log(x - y);
//     }
//      function ourCallBackFunction(g) {
//     g(2,3);
//     }
//     ourCallBackFunction(addNum);

//     mmodule.exports ={ addNum};

// function fullName(name){
//     console.log(`HELLO ${name}`);
// }
// function callBack(n){
//   let surname =  n('Bayo Ade')
//   console.log(surname)
// }
// callBack(fullName);

// function adebanjo(ifeoluwa) {
//     console.log(`hello ${ifeoluwa}`);
// }
// function showMe(game){
//     let ludo = (greet);
// }
// showMe(adebanjo);

// function nameHouse(name){
// alert(`hello ${name}`);
// }
// function callBack(g){
//     let s = prompt('what is my name');
//     g(s);
// }
// callBack(nameHouse);

// function nameHouse(name){
//     console.log(`hello ${name}`);
//     }
//     function callBack(g){
//         let s = console.log('what is my name');
//         g(s);
//     }
//     callBack(nameHouse);

// Decrement and increment

// let banjo = 80;
// banjo++;
// console.log(banjo);

// let banjo = 80;
// banjo--;
// console.log(banjo);

// let myAnimal = 'dog';
// let newCity = 'Abeokuta';
// console.log(`My ${myAnimal} love ${newCity}.`);

// incase you want to give acces to individual;

// let name = 'tope';
// if(name == 'tope'){
//     console.log('correct')
// } else if( name !== 'tope' ){
//     console.log('incorrect');
// }

// formula for accepting and dening access
// let name = 'cope';
// if( name.includes('t')){
//     console.log('correct')
// } else if( !name.includes('t') ){
//     console.log('incorrect');
// }

// Checking on Math.random()

// let x = Math.random();
// let y = x * (Math.random(10));
// console.log(y + x);

// const num = Math.floor(Math.random()* 20);
// console.log(num);

// use a return function to find the are of circle.
// function areaOfCircle(q){
//     let area = Math.PI * q * q;
//     return area;
// }
// console.log(areaOfCircle(4));

// not conclusive

// function fullName(){
//     let firstName = ('ade');
//     let space = ('');
//     let lastName = ('banjo');
//     let printName = ('firstName + space + lastName');
//     console.log(printName);
// }
// fullName();

// function printName(name){
//     alert(`Hello ${name}.`);
// }
// function callBack (p){
//     let name = prompt('victor.');
//     callBack('name');
// }
// callBack(printName);

// function square(){
// let num = 3;
// let sq = (num * num);
// console.log(sq);
// }
// square();

// function twoNum() {
//     let numz = 3;
//     let nub = 6;
//     let addtin = (numz + nub);
//     console.log(addtin);
// }
// twoNum();

// function printFullName(){
//     let firstName = ('shola');
//     let space = ('');
//     let lastName = ('Ogunseye');
//     let fullName = ('firstName + space + lastname');
//     console.log(fullName);
// }
// printFullName();

// need to be check again

// const printFullName = ('firstName, lastName') => (`${firstName} ${lastName}`);
// console.log( printFullName ('shola', 'ogunseye'));

// const changeToUpperCase = arr = {
//     let newArr = [];
//     for(const element of arr) {
//         newarr.push(element. changeToUpperCase())
//     }
//     return newArr;
// }
// const countries = ['Nigeria', 'Ghana', 'South Africa', 'Ethopia',];
// console.log(changeToUpperCase(countries));

// function with default name;

// function greetings(name ='Shola') {
//     let message = (`${name}, welcome to Niger.`);
// return message;
// }
// console.log(greetings('Shola'));

// write your name on the console

function FullName(firstName = "Shola", lastName = "Ogunseye") {
  let nameFull = "Shewa Adebanjo";
  return nameFull;
}
console.log(FullName());

// function personDetails(firstName = 'Shola', lastName = 'Ogunseye'){
//     let fullName = (`shola ogunseye`);
//     return fullName;
// }
// console.log(personDetails ());

// function addnumbers (a, b){
//     let value = (2, 3);
//     let addsum = (a + b);
//     return addsum;
// }
// console.log(addnumbers(2, 3));

// function areaOfRectangle (lenght, width){
//     let perMeters = (7, 4);
//     let area = (lenght * width);
//     return area;
// }
// console.log(areaOfRectangle(7, 4));

// condition if/ else/ if else
// let numba = 3;
// if (numba > 0){
//     console.log(`${numba} is  a positive number`);
// }

// let wins = -2;
// if (wins > 0) {
//     console.log(`${wins} show the match`)
// } else {
//     console.log(`${wins} not show the match`)
// }

// let i = 1
// if (i < 0) {
//     console.log('get result')
// } else {
//     console.log('get no result')
// }

// let i = 18;
// if (i => 18) {
//     console.log( 'you are old enough to drive')
// } else {
//     console.log(' wait for number off years to turn 18')
// }

let i = 18;
if (i < 15) {
  console.log("you are old enough to drive");
} else {
  console.log(`wait for three ${3} more  of years to turn 18`);
}