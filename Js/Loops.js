for(let i=1;i<=5;i++)
{
    console.log(i);
}
console.log("------------------");
// for(let j=1;j<=15;j++)
// {
//     if(j%2!=0)
//     {
//         console.log(j,"is odd");
//     }
// }
for(let i=1;i<=15;i=i+2){
    console.log(i);
}
console.log("------------------");
for(let j=15;j>=1;j=j-2)
{
    console.log(j);
}
console.log("------------------");
for(let i=2;i<=15;i=i+2){
    console.log(i,"is even");
}
console.log("------------------");
let n=5;
for(let i=1;i<=10;i++)
{
    console.log(`${5} * ${i} = ${n*i}`);
}
console.log("------------------");
let k=prompt("enter any number");
k=parseInt(k);
for(let i=k;i<=k*10;i=i+k)
{
    console.log(i);
}
console.log("------------------");
let fav="pushpa";
let guess=prompt("guess any movie");
while(guess!=fav)
{
    if(guess!="quit")
    {
        console.log("quitting the game");
        break;
    }
    console.log("wrong");
    guess=prompt("guess any movie");
}
if(guess==fav)
{
    console.log("congrats");
}
console.log("------------------");
let i=1;
while(i<=5)
{
    if(i==3)
    {
        console.log("we use break at three");
        break;
    }
    console.log(i);
    i++;   
}
console.log("------------------");
let fruits=["apple","orange","mango","grapes","banana","papaya"];
for(let i=0;i<fruits.length;i++)
{
    console.log(i,fruits[i]);
}
console.log("------------------");
for(let i=fruits.length-1;i>=0;i--)
{
    console.log(i,fruits[i]);
}
console.log("------------------");
let heroes=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
for(let i=0;i<heroes.length;i++)
{
    console.log(`List #${i}`);
    for(let j=0;j<heroes[i].length;j++)
    {
        console.log(heroes[i][j]);
    }
}
console.log("------------------");
let fals=["apple","orange","mango","grapes","banana","papaya"];
for(fal of fals)
{
    console.log(fal);
}