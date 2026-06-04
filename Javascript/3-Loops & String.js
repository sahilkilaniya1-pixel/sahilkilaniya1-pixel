// // print 1 to 5 loop

const { jsx } = require("react/jsx-runtime")

for (let count = 1; count <= 10; count++) {
    console.log("Sahil");  // 5 time execute
}
console.log("Loop has ended")

// // =================================================
// // calculate sum of 1 to 5
let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log("sum", sum);
console.log("loop has ended");


for (let i = 1; i <= 5; i++) {
    console.log("i =", i);
}

// // ===========================================
//  infinte loop - a loop never end
// print 1 o 5

for (let i = 1; i >= 0; i++) {
    console.log("i=", i)
}


// // ==================================================
// // while loop
let count = 1; // Variable banaya

while (count <= 5) { // 'condition' ki jagah sahi shart lagayi
    console.log("Kaam ho raha hai, count =", count);
    count++; // count ko badhana zaroori hai, warna loop kabhi nahi rukega
}

let i = 1;
while (i <= 5) {
    // console.log("i", i);
    console.log("Sahil");
    i++;
}

// // ===============================================
//  do-while loop
// while(condition){
//     // do some work
// } while(condition);

let j = 1; // 20 ki jagah 1 rakha taaki loop chal sake

do {
    console.log("Apna college"); // Dot (.) lagaya
    j++; // 'i' ki jagah 'j' use kiya
} while (j <= 10); // 'i' ki jagah 'j' use kiya

let i = 1; // 5 ki jagah 1 se shuru karein

do {
    console.log("i =", s);
    i++;
} while (i <= 5);


// // ==================================================
// // For-of loop

// // for(let val for strVar){
// //     // do some work
// // }

let str = "sahil";   // iterator -> characters
let size = 0;
for (let i of str) {
    console.log("value=i=", i);
    size++;
}

console.log("string size = ", size); //5



// // for-in loop

let student = {
    name: "sahil",
    age: 23,
    cgpa: 7.5,
    isPass: true,
};
for (let key in student) {
    console.log("key=", key, "value=", student[key]);
}

for (let num = 0; num <= 5; num++) {
    console.log("num=", num);
}

for (let num = 0; num <= 10; num++) {
    if (num % 2 == 0) {
        //  even number
        console.log("num=", num);
    }
}


let gameNum = 25;
let userNum = prompt("Guess the game number: ");
while (userNum != gameNum) {
    // game
    userNum = prompt("you enterw wrong number:")
}
console.log("congratulations, you enter the right number");


// // ======================================================
// // String  in js



// // create string  --->

let str = "sahil"; // Pehli baar (Theek hai)
str = "naya naam"; // Dobara use karte waqt 'let' mat likhiye 
console.log(str[2]);

// string length  --->
// str.length


// string indices --->
// str[0].str[1],str[2]



// ==============================================
// Template literam
// A way to have embedded expression in strings
//   `this is a Template literal`

// String interpolation
//  To create strings by doing substituion of place holders
// `string text${exression} string text`
let obj = {
    items: "pen",
    price: "10"
}
let output = `the coist of ${obj.item} is ${obj.items} rupees`;
console.log(output);
console.log("the  cost of", obj.item, "is", obj.price, "rupees");

// =================================================
let str="sahil\nkilaniya";
console.log(str.length);

// ==================================================
// These are built -in function to manipulate a string 
str.toUpperCase()
str.toLocaleLowerCase()
str.trim() //removes whitespaces


let str = "sahil kilaniya"
// 'sahil kilaniya'
// str.toUpperCase()
// 'SAHIL KILANIYA'
Str = str.toUpperCase();

// =================================
let str = "sahil kilaniya"
// 'sahil kilaniya'
// str.toUpperCase()
// 'SAHIL KILANIYA'
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr);
