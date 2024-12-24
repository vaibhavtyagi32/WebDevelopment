let arr=[1,2,3,4,5];

let print=function (el){
    console.log(el);
};

arr.forEach(print);
console.log("--------------------------------->");
// or

arr.forEach((el)=> {
    console.log(el);
});
console.log("--------------------------------->");

// or

arr.forEach(function (el){
    console.log(el);
});
console.log("--------------------------------->");

// array of objects

let a=[{
    name:"vaibhav",
    marks:95
},
{
    name:"aman",
    marks:34
},
{
    name:"shero",
    marks:83
}];

a.forEach((student) => {
    console.log(student.marks)
})
console.log("--------------------------------->");

//Map

let num=[1,2,3,4];
let double=num.map(function(el) {
    return el*2;
});
console.log(double);

let square=num.map((el)=> {
    return el*el;
});
console.log(square);


console.log("--------------------------------->");


//Filter

let nums=[1,2,3,4,5,6,7,8,9,10];
let even=nums.filter((el) => {
    return el%2==0;
});
console.log(even);
let ls5=nums.filter((el) => {
    return el>5;
});
console.log(ls5);


console.log("--------------------------------->");

// Every   { agar callback function sabhi value ke liye true return krega to true hoga agar ek bhi false hua to false hoga}

console.log([2,4,6].every((el)=> el%2==0));
console.log([2,4,6,8].every((el)=> el%2==0));
console.log([2,4,6,1].every((el)=> el%2==0));

//Some   {agar callback ki sabhi value ke liye false return hoga to false hoga agar ek bhi true hoga to true hoga}

console.log([1,2,3,4,5,6].some((el)=> el%2==0));
console.log([1,3,5,7].some((el)=> el%2==0));

//Reduce {ye hume ek single element return karke dega}

let n=[1,2,3,4,5];
let final_value=n.reduce((res,el) => res+el);
console.log(final_value);


//Maximum in array
l=[2,5,1,5,1,5,7,9];
let max=l.reduce((max,el) => {
    if(max<el)
    {
        return el;
    }
    else{
        return max;
    }
});
console.log(max);

// check if all numbers in my array is the multiple of 10 or not.?

let m=[10,20,30,40,5];
let f=m.every((el)=>{
    return el%10==0
});
console.log(f);

// min in an array

let fm=[2,3,4,5,6,7,8];
function min(res,el)
{
    if(res>el)
    {
        return el;
    }
    else{
        return res;
    }
}

let mini=fm.reduce(min);
console.log(mini);