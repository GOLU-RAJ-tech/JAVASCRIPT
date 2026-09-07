// console.log("apna college");
// console.log("apna college");
// console.log("apna college");
// console.log("apna college");
// console.log("apna college");


//for loop print 1 to 5
//  for(let i=0;i<5;i++){
//      console.log("i =",i);
// }


//calculate sum of 1 to n
// let n=5;
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
//     console.log(sum);
// }

// console.log("sum =",sum);
// console.log("loop has ended")



//while loop
// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

//do while loop
// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=10);

//for-of loop

// let str ="javascript";

// let size = 0;
// for(let i of str){ //iterator -> charact
//     console.log("i=",i);
//     size++;
// }
// console.log("string size =",size);//10

//for in loop

// let student ={
//     name :"Rahul kumar",
//     age :20,
//     cgpa :7.5,
//     ispass: true,
// };
//   for(let key in student){
//     console.log("key=",Key," value=", student[key]); 
//  }

//practice Qs1

// for(let num=0;num <=100;num++){
//     if(num%2 === 0){
//         //even number
//       console.log("num=",num);    
//     }
// }

//practice Qs2

let gameNum = 25;

let userNum = prompt ("Guess the game number:");

while(userNum != gameNum){//game
        userNum =   prompt("you enterd wrong number.Guess again:");
    }
console.log("congratulations,you entererd the right number");
