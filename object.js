/*
-> objects store information in pair of keys and values
-> All keys must be unique
-> values may be duplicate
-> if more then one key has same name then last key 
   will be used
*/

//object literal 
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:78000,
//     city:"Noida",
//     state:"UP"
// }
// console.log(emp)


//Empty object literal 
// var emp = {}
// emp.id = 1001
// emp['name']="Nitin Chauhan"
// emp.dsg="Trainer"
// emp.city="Noida"
// emp['state']="UP"
// console.log(emp);


//new Object() 
// var emp = new Object()
// emp.id = 1001
// emp['name']="Nitin Chauhan"
// emp.dsg="Trainer"
// emp.city="Noida"
// emp['state']="UP"
// console.log(emp);

//Accessing Object Values with help of keys
// console.log(emp.name)
// console.log(emp['salary'])

//Accessing Object values through Loop 
// for(let key in emp){
//     console.log(key,"=",emp[key])
// }

//adding an item to existing object
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:78000,
//     city:"Noida",
//     state:"UP"
// }
// console.log(emp)
// emp.email = "vishankchauhan@gmail.com"
// emp["phone"]="9873848046"
// console.log(emp)

//deleting object item
// delete emp.name
// delete emp['city']
// console.log(emp)

//Nesting of Objects
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:78900,
//     ative:true,
//     subject:["Mern Stack","Mean Stack","PHP Full Stack","Python Full Stack"],
//     address:{
//         house:"82k",
//         street:"3",
//         locality:"Village Sample",
//         city:"Noida",
//         state:"UP"
//     }
// }
//console.log(emp)
//console.log(emp.name)
//console.log(emp.subject)
//console.log(emp.subject[2])
//console.log(emp.address)
//console.log(emp.address.city)



//function in Objects
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:78000,
//     city:"Faridabad",
//     state:"Haryana",
//     display(){
//         console.log(
//         `   
//             ID              :   ${this.id}
//             Name            :   ${this.name}
//             Designation     :   ${this.dsg}
//             Salary          :   ${this.salary}
//             City            :   ${this.city}
//             State           :   ${this.state}
//         `)
//     }
// }
// emp.display()

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:78000,
//     city:"Faridabad",
//     state:"Haryana",
//     display:function(){
//         console.log(
//         `   
//             ID              :   ${this.id}
//             Name            :   ${this.name}
//             Designation     :   ${this.dsg}
//             Salary          :   ${this.salary}
//             City            :   ${this.city}
//             State           :   ${this.state}
//         `)
//     }
// }
// emp.display()

// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:78000,
//     city:"Faridabad",
//     state:"Haryana",
//     display:()=>{
//         console.log(
//         `   
//             ID              :   ${emp.id}
//             Name            :   ${emp.name}
//             Designation     :   ${emp.dsg}
//             Salary          :   ${emp.salary}
//             City            :   ${emp.city}
//             State           :   ${emp.state}
//         `)
//     }
// }
// emp.display()


//getter and setter
//get
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:78000,
//     city:"Faridabad",
//     state:"Haryana",
//     get display(){
//         console.log(
//         `   
//             ID              :   ${this.id}
//             Name            :   ${this.name}
//             Designation     :   ${this.dsg}
//             Salary          :   ${this.salary}
//             City            :   ${this.city}
//             State           :   ${this.state}
//         `)
//     }
// }
// emp.display


//set
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     city:"Faridabad",
//     state:"Haryana",
//     set setSalary(sal){
//         this.salary=sal
//     },
//     get display(){
//         console.log(
//         `   
//             ID              :   ${this.id}
//             Name            :   ${this.name}
//             Designation     :   ${this.dsg}
//             Salary          :   ${this.salary}
//             City            :   ${this.city}
//             State           :   ${this.state}
//         `)
//     }
// }
// emp.setSalary=80000
// emp.display



//object destructuring
// var emp = {
//     id:1001,
//     name:"Nitin Chauhan",
//     dsg:"Trainer",
//     salary:78000,
//     city:"Noida",
//     state:"UP"
// }
// var {id,name,dsg,salary,city,state} = emp
// console.log(
//             `   
//                 ID              :   ${id}
//                 Name            :   ${name}
//                 Designation     :   ${dsg}
//                 Salary          :   ${salary}
//                 City            :   ${city}
//                 State           :   ${state}
//             `)



//object constructor or object prototype
var Employee = function(id,name,dsg,salary,city,state){
    this.id=id
    this.name=name
    this.dsg=dsg
    this.salary=salary
    this.city=city
    this.state=state
}
var e1 = new Employee(1001,"Nitin Chauhan","Trainer",50000,"Noida","UP")
var e2 = new Employee(1002,"Mohit Kumar","Trainer",50000,"Noida","UP")
var e3 = new Employee(1003,"Sumit","Trainer",50000,"Noida","UP")
console.log(e1)
console.log(e2)
console.log(e3)