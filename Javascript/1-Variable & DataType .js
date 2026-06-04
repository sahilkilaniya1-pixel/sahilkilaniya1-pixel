// console.log("welcome to first day ");
// console.log("i love js");

// -------------------------------------------------------------------
// = assighment opertor

fullname = "sahil";
age = 24;
radius = 25;
x = null;
y = undefined;
console.log(age);


// variable rules

//* variable name are case sensitive; "a" & "A" is different.
//* only letters, digit, underscore(_) and $ is allowed (not even space).
//* only a letters , underscore(_) or $ should be 1st character.
//* reserved words connot be variable names.
// --------------------------------------------------------------
fullname = "sahil";
_fullname = "sahil";
$fullname = "sahil";
fullname = "sahil";
console.log(fullname);


Console = "Sahil";
console.log(Console);

// ----------------------------------------------------------------------

// fullName     camel case
// fullname
// full_name    snakecase
// full-name    kabab case
// FullName      pascal case

// -------------------------------------------------------------------------

// let , const & var      (ES6 - ecma script  after 2015)
// var: cariable can be re=declared & updated . a global scope variable.
// let:  variable cannot be re-decleared but can be updated  . A block variable
// const: variable connot be re-declared or updated . A block scope variable.


let fullname = "sahil";
let age = 24;
let totalprice = 100;

console.log(fullname);

// --------------------------------------------------------------------

var age = 24;
var age = 59;
var age = 86;

console.log(age);

let a;
a = "10";
console.log(a);

{
    let a = "10"
    console.log(a);
}

// let age = 24 ;
// let price = 100.5;

const student = {
    fullname: "sahil",
    age: 20,
    cgpa: 8.2,
    isPass: true,
}
student["name"] = "sahil";
console.log(student["name"]);

// -------------------------------------------------------------------

const product = {
    title: "ball pen",
    rating: 4,
    offer: 5,
    price: 270,
}
console.log(product);

const profile = {
    usernaname: "sahil",
    post: 1,
    follower: 70,
    following: 80,
    name: "sahil",
}
console.log(profile); 