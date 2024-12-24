// let n=5;
// for(let i=1;i<=n;i++){
//     console.log("hellos ",i);
// }

// console.log(process.argv);
// let args=process.argv;
// for(let i=2;i<args.length;i++){
//     console.log("hello ",args[i]);
// }


const someValue=require("./math");
console.log(someValue.sum(1,2));

const info=require("./Fruit");
console.log(info);
console.log(info[0]);
console.log(info[1]);
console.log(info[2]);
