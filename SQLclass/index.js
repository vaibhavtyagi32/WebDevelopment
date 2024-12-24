const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'data_app',
    password: '9899552393'
  });

// Inserting data  ino user table
let q="INSERT INTO user (id,username,email,password) VALUES ?";
let data=[];

let getRandom = ()=> {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}
for(let i=1;i<=100;i++)
{
  data.push(getRandom());
}

// INSERTING MULTIPLE DATA INTO TABLE;
// let user=[["123b","123_newUserb","abc@gmail.comb","abcb"],["123c","123_newUserc","abc@gmail.comc","abcc"]];



try{
    connection.query(q,[data],(err,result)=>{
        if (err) throw err;
        console.log(result);
    });
}
catch(err){
    console.log(err);
}


connection.end();





