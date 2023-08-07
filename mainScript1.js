//Shahad Alshabani


for(let i =1 ; i<= 10 ; i++){
    console.log(Math.pow(i,2));
}
console.log("==================");

for(let i =1 ; i<= 20 ; i++){
    if(i % 2 != 0)
    console.log(i);
}
console.log("==================");

for(let i =1 ; i<= 25 ; i++){
    if(i % 2 == 0)
    console.log(i);
}
console.log("==================");

let output = "";
for(let i =1 ; i<= 8 ; i++){
    for(let j = i ; j<= i ; j++)
    {
        output += j + " ";
        
        
    }

   console.log(output);
}
console.log("==================");


let num1= 0;
let num2 = 1;
let sum = 0;
for(let i =1 ; i<= 20 ; i++){
    console.log(num1+" ");
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
}