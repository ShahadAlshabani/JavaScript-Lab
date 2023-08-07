//Shahad Alshabani

console.log("========square number between 1 and 10 ==========");

for(let i =1 ; i<= 10 ; i++){
    console.log(Math.pow(i,2));
}
console.log("=========odd number between 1 and 20=========");

for(let i =1 ; i<= 20 ; i++){
    if(i % 2 != 0)
    console.log(i);
}
console.log("=========even number between 1 and 25.=========");

for(let i =1 ; i<= 25 ; i++){
    if(i % 2 == 0)
    console.log(i);
}
console.log("=========Tree of numbers=========");

let output = "";
for(let i =1 ; i<= 8 ; i++){
    for(let j = i ; j<= i ; j++)
    {
        output += j + " ";
        
        
    }

   console.log(output);
}
console.log("========Fibonacci sequence==========");


let num1= 0;
let num2 = 1;
let sum = 0;
let text="";
for(let i =1 ; i<= 20 ; i++){
    text += ","+ num1;
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
}
console.log(text);
