//This keyword 
const student={
    name:"vaibhav",
    age:19,
    eng:98,
    maths:95,
    phy:96,
    getAvg(){
        let avg=(this.eng+this.maths+this.phy)/3;
        console.log(`${this.name} got average marks ${avg}`);
    }
}

student.getAvg();

//setTimeout funtion

console.log("hello coder");
setTimeout(() => {
    console.log("Vaibhav Tyagi");
},4000);
console.log("I am");


// setInterval functions
console.log("hello coder");
let id=setInterval( () => {
    console.log("Vaibhav Tyagi");
},2000);
console.log(id);
