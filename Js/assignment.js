let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==num)
    {
        arr.splice(i,1);
    }
}
console.log(arr);
console.log("----------------------");
let number=287152;
let count=0;
while(number!=0)
{
    let n=number/10;
    count++;
}
console.log(count);
console.log("----------------------");
let k=287152;
let sum=0;
while(k!=0)
{
    let r=k%10;
    sum=sum+r;
    k=k/10;
}
console.log(sum);
console.log("----------------------");
let a=[1,2,3,4,5,6,2,3];
let g=a[0];
for(let d=0;d<a.length;d++)
{
    if(g<=a[d])
    {
        g=a[d];
    }
}
console.log("greater is "+g);

