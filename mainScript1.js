//Shahad Alshabani

console.log("========even & odd numbers ==========");

let number1 = 1;
if(number1  % 2 == 0){
    console.log("even");

}
else {
    console.log("odd");

}
console.log("========Grades ==========");

let grade = 81;
if(grade > 100){
    console.log("undefined");

}else if(grade >= 90){
    console.log("A");

}else if(grade >= 80){
    console.log("B");

}else if(grade >= 70 ){
    console.log("C");

}else if(grade >= 60){
    console.log("D");


}else if(grade <= 59 && grade >= 1){
    console.log("F");

}else {
    console.log("undefined");
}

console.log("========Fizz Buzz==========");

let number9 = 15;
if(number9 % 3 == 0 && number9 % 5 == 0){
    console.log("fizzbuzz");
}else if(number9 % 3 == 0){
    console.log("fizz");

}else if(number9 % 5 == 0){
    console.log("buzz");

}else{
    console.log("undefined");

}

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
