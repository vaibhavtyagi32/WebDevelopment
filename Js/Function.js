function hello()
{
    console.log("hello");
}
hello();

function print1to5()
{
    for(let i=1;i<=5;i++)
    {
        console.log(i);
    }
}
print1to5();
function isAdult()
{
    let age=18;
    if(age>=18)
    {
        console.log("Adult");
    }
    else{
        console.log("not adult");
    }
}
isAdult();

//practice Qs1
function printPoem()
{
    console.log("Twinkle Twinkle, little star");
    console.log("how I Wonder what you are");
}
printPoem();

function diceRoll()
{
    console.log(Math.floor(Math.random()*6)+1);
}
diceRoll();

// functions with arguments

function printName(name)
{
    console.log(name);
}
printName("vaibhav");

function printInfo(name,age)
{
    console.log(`Name ${name} andd Age ${age}`);
}
printInfo("vaibhav",19);

function sum(a,b){
    console.log(a+b);
}
sum(2,3)

function averageOf3(a,b,c)
{
    let avg=(a+b+c)/3;
    console.log("Average is "+avg);
}
averageOf3(1,2,3);

function mulTable(n)
{
    for(let i=1;i<=10;i++)
    {
        console.log(`${n} * ${i} = ${n*i}`);
    }
}
mulTable(5);

//return the sum of number from 1 to n
function sum1ton(n)
{
    let sum=0;
    for(let i=1;i<=n;i++)
    {
        sum=sum+i;
    }
    return sum;
}

console.log(sum1ton(10));

// return the concatenation of all string in an array

function concatString(n)
{
    let s="";
    for(let i=0;i<n.length;i++)
    {
        s=s+" "+n[i];
    }
    return s;
}
let a=["vaibhav","tyagi","hello"];
console.log(concatString(a));


// function expression 
let sum1=function(a,b){
    return a+b;
}
sum1(3,6);
console.log(sum1);


// higher order function...
function multiplegreet(func,count)  //higher oredr function
{
    for(let i=1;i<=count;i++)
    {
        func();
    }
}
let greet=function(){
    console.log("hello");
}
multiplegreet(greet,5);
multiplegreet(function() {console.log("namaste")},5);


//higher order function with return statement

function oddEvenFactory(request){
    if(request=="odd")
    {
        return function(n){
            if(n%2!=0)
            {
                console.log("odd");
            }
        }
    }
    else if(request=="even")
    {
        return function(n)
        {
            if(n%2==0)
            {
                console.log("even");
            }
        }
    }
    else{
        console.log("wrong choice");
    }
}
let request="odd";

//Arrow functions

const addition = (a,b) => {
    console.log(a+b);
}
addition(2,3);

const hii = () => {
    console.log("hello");
}
hii();

//implicit return in arrow function
const summing = (a,b,c) => (a+b+c);
console.log(summing(1,2,3));

//write an arrow function to return the square of any number

let square= (n) => (n*n);
console.log(square(50));

// print hello world 5 time at interval of 2s 

setTimeout( ()=> {
    clearInterval(id);
},11000);
let id=setInterval( () => {
    console.log("hello world");
},2000);
console.log(id);

// write arrow functions that takes arrays as an input and return the avgerage of array number

arrayAverage= (a) => {
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
        sum=sum+a[i];
    }
    return sum/a.length;
}
let array=[10,20,30];
console.log(arrayAverage(array));

//Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

let isEven=(n)=>(n%2==0)
console.log(isEven(8));

