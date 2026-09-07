//Artimetic operators
/*let a= 5;
let b=2;

console.log("a=",a,"& b=",b);
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
console.log("a%b = ",a%b);
console.log("a**b = ",a**b);//25*/

//unary operator

//let a= 5;
//let b=2;

//console.log("a=",a,"& b=",b);

//console.log ("a -- =",a--);  
//console.log ("a=",a); 

//Asignment Operators
  //let a = 5;
  //let b = 2;

  //a += 4; //a=a+4
  //console .log("a=",a);//9


  //Comparsion Operators
//let a = 5;
//let b = 5;


//console .log("5==5",a==b);//false


//Logical operators
// let a = 5;
// let b = 6;

//console.log ("cond1 && cond2 =", a<b && a === 6);
//console.log ("cond1 || cond2 =", a<b || a === 6);
//console.log ("!(6<5) =", !(a===6)); //true



//Conditional Statements



// let mode = "light";
// let color;

// if(mode === "dark"){
//   color = "black";

// }

// if(mode === "light"){
//   color = "white";
// }

// if(mode === "dark"){
//    color = "black";
// } else{
//   color = "white";
// }
// console.log(color);


// if  (age >= 18){
//   console.log(" you can vote");
// }


// if(age < 18){
//   console.log(" you can not vote");
// }


// let age = 16;

// if(age >= 18){
//   console.log("vote")
// }else{
//   console.log ("not vote");
// }


//odd or even

// let num = 10;

// if(num%2 ===0){
//   console.log( num," is even");
//   }else{
//     console.log(num," is odd");
//   }


//else-if statement

// let mode = "dark";
// let color;
// if (mode === "dark"){
//   color = "black";
// }else if (mode === "blue"){
//   color = "blue";
// }else if (mode === "pink"){
//   color = "pink";
// }else{
//   color = "white";
// }

// console.log(color);

// if (mode === "dark") {
//   console.log(mode);
// }


//Ternary operators

// let age = 19;

// let result  = age >= 18 ? "adult" : "not adult";
// console .log (result);/

//alert ("hello!");

// let name = prompt("hello!");
// console.log(name);


//practice Qs1
// let num = prompt ("enter a number");
// if (num %  9=== 0){
//   console.log(num, "is a multiple of 9");
//   }else{
//     console.log(num,"is Not a multiple of 9");
//   }

//practice Qs2

let score = prompt("enter your score (0-100):");
let grade;

if (score >= 90 && score <= 100){
  grade = "A";
  }else if (score >= 70 && score <= 89){
  grade = "B";   
}else if(score >= 60 && score <= 69){
  grade = "C";
}else if (score >=50 && score <= 59){
  grade = "d";
}else if (score >= 0 && score <= 49){
  grade = "F";
}

console.log ("according to your scores, your grade was :", grade);