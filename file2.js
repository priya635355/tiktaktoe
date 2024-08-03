/*let num = 10;
if (num % 2 === 0){
    console.log(num,"even");
}
else{
    console.log(num,"odd");
}*/
/*let num = prompt("enter a number:");

if (num % 5 === 0) {
    console.log(num,"is multiple of 5");
} else {
    console.log(num,"is not multipler of 5");
}*/

 /*let num = prompt("enter a number (0-100):");
 let grade;
 if(num >= 90 && num<=100){
    grade="A";
 }else if( num>=70 && num<=89){
    grade="B";
 } else if(num >= 60 && num<=69){
    grade="C";
 } else if( num>=50 && num<=59){
    grade="D";
 } else if(num>=0 && num<=0){
    grade="F";
 }
 console.log( "your grade is:", grade);*/

 /*for (let i=1; i<=100; i++){
   if( i % 2===0){
      console.log("i=",i);
 }
}*/
/*let gameNum= 25;
let userNum = prompt("guess the game number:");
while( gameNum != userNum){
   userNum = prompt("you enterd the wrong number. guess again:");

}
console.log("congratulation enter number is right number");
*/
/*let obj ={
   item :"pen",
   price : 10,
};
let output = `the cost of ${obj.item} is ${obj.rupees}`;
console.log(output);
*/
/*let specialString =`this is a template literal ${1+3+5}`;
console.log(specialString);*/
/*let fullName = prompt (" enter your full name without spaces");
let userName = "@" + fullName + fullName.length;
console.log(userName);
*/
/*let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of marks) {
   sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks of the class=${avg}`);
*/
/*let i =[ 150, 645, 300, 900, 50];
let idex =0;
for(let val of i){
   console.log(`value of index ${idex}=${val}`);
   let offer = val /10;
   i[idex] =i[idex] - offer;
   console.log("value after offer=", i );
    idex++;
}*/
/*let arr =[1,3,5,6,9,8,4];
 arr.splice(2,2, 101 ,105)
*/
/*let arr = [ "blooberg", "microsoft", "uber", "google", "ibm","netflix",];
//arr.shift();
//arr.splice(2,1,"ola");
arr.push("amazon");*/
/*function sum(a , b){
   // a , b local variable
   s = a+b;
   //console.log(s);
   return s;
}
  let val = sum(3,7);
  console.log(val);*/
  // use arrow function
  /*const arrowMul = ( a, b) =>{
   console.log(a * b);
  }
  arrowMul(7,8);*/
   /*function countVowel (str) {
      let count=0;
     for( const char of str){
      if( char==="a" || char==="e" || char==="i"|| char==="o" || char==="u") {
       count++;
      }
     }
     console.log(count);
   }
   countVowel("priyaVishvkarma");*/
   //for each loop in array
   /*let arr = [" pune", "delhi", "mumbai",];
    arr.forEach((val) => {
      console.log(val.toUpperCase());
    });*/
    /*let nums = [ 2,4,5,3,];
     nums.forEach((num) =>{
      console.log(num*num);
     });*/
     /*let arr = [1, 3, 5, 6];
     const output = arr.reduce((res, curr) => {
      return res + curr;
     });
     console.log(output); */
     /*let n= prompt("enter anumber:");
     let arr = [];
     for (let i=1; i<= n; i++){
      arr [ i-1]=i;
     }
     console.log(arr);
       let totalSum=arr.reduce((sum, curr) => {
         return sum + curr;
      });
      console.log("totalSum = " , totalSum);
      let factorial = arr.reduce((totalSum, curr) => {
         return totalSum *curr;
      });
      console.log(factorial)*/
     /* let h2 = document.querySelector("h2");
       console.dir(h2.innerText);
       h2.innerText = h2.innerText + " from apna college students";*/
       /*let divs = document.querySelectorAll(".box");
       let idx = 1;
       for (div of divs){
         div.innerText = `new unique value $(idx)`;
         idx++;
       }
       console.dir(divs.innerText);*/
       /*let newBtn= document.createElement("button");
       newBtn.innerText = "click me";
       newBtn.style.color = "white";
       newBtn.style.backgroundColor =" red";
       document.querySelector("body").prepend("newBtn");*/
      /* let modebtn = document.querySelector("#mode");
        let currMode= "light";//dark
        modebtn.addEventListener("click", () =>{
         if ( currMode ==="light"){
            document.querySelector("body").style.backgroundColor = "black";
           } else {
            currMode = "light";
            document.querySelector("body").style.backgroundColor = "white";

           }
           console.log(currMode);
        });*/
      let boxes = document.querySelectorAll(".box");
      let resetBtn = document.querySelector("#reset-btn");
      let newGameBtn = document.querySelector("#new-btn");
      let msgContainer = document.querySelector(".msg-container");
      let msg = document.querySelector("#msg");
      let turnO= true;
      const winPatterns = [
         [0, 1, 2],
         [0, 3, 6],
         [0, 4, 8],
         [1, 4, 7],
         [2, 4, 6],
         [2, 5, 8],
         [3, 4, 5],
         [6, 7, 8],
      ];
      const resetGame =() => {
         turnO= true;
         enableboxes();
         msgContainer.classList.add("hide");
         
      };

      boxes.forEach((box) => {
         box.addEventListener("click", () => {
           
            if (turnO) {
               box.innerText ="O";
               turnO = false;
            }else {
               box.innerText = "X";
               turnO = true;
            }
            box.disabled = true;
            checkWinner ();
         });
      });
      const disableboxes = () =>{
         for (let box of boxes){
            box.disabled = true;
         }
      };
      const enableboxes = () =>{
         for (let box of boxes){
            box.disabled = false;
            box.innerText = "";
         }
      };
      const showWinner = (winner) =>{
         msg.innerText =`congratulation, winner is ${winner}`;
         msgContainer.classList.remove("hide");
         disableboxes();
      };
      const checkWinner = () => {
         for (let  pattern of winPatterns) {
            let pos1Val = boxes [pattern[0]].innerText;
            let pos2Val = boxes [pattern[1]].innerText;
            let pos3Val = boxes [pattern[2]].innerText;

            if (pos1Val != "" && pos2Val !="" && pos3Val !="" ){
               if ( pos1Val === pos2Val && pos2Val=== pos3Val) {
                  
                  showWinner(pos1Val);
               } 
            }
         }
      };
      newGameBtn.addEventListener("click", resetGame);
      resetBtn.addEventListener("click",resetGame);
    