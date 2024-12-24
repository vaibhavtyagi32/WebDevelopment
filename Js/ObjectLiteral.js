let student={
    name:"vaibhav",
    age:19,
    marks:98
};
console.log(student["name"]);
console.log(student.gender="male");
console.log(student)
delete student.gender;
console.log(student)
const post={
    username:"vaibhavtyagiii471",
    content:"this is first post",
    like:100,
    reposts: 9,
    tags:["aman","akbar","antheni"]
};
console.log(post["username"]);
console.log(post.like);
console.log(post.tags[1]);

const classInfo={
    aman:{
        grade:"A",
        city:"pune"
    },
    vaibhav:{
        grade:"A+",
        city:"Ghaziabad"
    },
    karan:{
        grade:"B",
        city:"banglore"
    }
}
console.log(classInfo.vaibhav);
console.log(classInfo.karan);
console.log(classInfo.aman);
classInfo.karan.city="modinagar";
console.log(classInfo.karan);


//Array of objects

const info=[
    {
        name:"vaibhav",
        grade:"A"
    },
    {
        name:"aman",
        grade:"B"
    },
    { 
        name:"karan",
        grade:"C"
    }
];
console.log(info[1].name);