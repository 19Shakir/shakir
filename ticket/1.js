console.log("hello world");
console.log("hello worl");
let obj={
    id:101,
    Name :"SHAKIR",
    salary:100000,
 };
 console.log(obj);

 //NEW OBJECT
let emp = new Object()
emp.id= 102,
emp.Name= "AHMAD",
emp.salary = 1500,
console.log(emp);


let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);


console.log(emp.Name);

//FUNCTION

function Emp(a,b,c)
{
this.id = a;
this.Name = b;
this.salary = c;
}
const e = new Emp(103,"WACHKOO",420);
console.log(e);

