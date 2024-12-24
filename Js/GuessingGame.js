let max=prompt("Enter maximum number");
let num=Math.floor(Math.random()*max)+1;
console.log(num);
let guess=prompt("guess any number");
while(true)
{
    if(guess=="quit")
    {
        console.log("quitting the game");
        break;
    }
    
    if(guess==num)
    {
        console.log("correct");
        break;
    }
    else if(num>guess)
    {
        guess=prompt("hint : Guess larger number");
    }
    else{
        guess=prompt("hint : Guess smaller number"); 
    }
}