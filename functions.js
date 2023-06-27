/**
 * function:
 * function is a building block of any program by which we can divide
 * our large program into small parts
 * or
 * function is group of statements
 * or function is a self contained statement block
 * 
 * Advantages of using a function:
 * 1. function provide a feature of code reusability
 * 2. function decrease instruction  space of a program
 * 3. function decrease data space of a program
 * 4. function increase code readability
 * 
 Note1: a function can't access variables defined in other function
        directly to do so we have to use concept of arguments and
        return value
 Note2: a function can access variables defines in global scope
        and vice versa not true


 * types of functions on basis of arguments and return value
 * 1. function without return value without parameter
 * 2. function with return value without parameter
 * 3. function without return value with parameter
 * 4. function with return value with parameter

syntax:
    function functionName(paramerters){
        --------
        --------
        number of Statements
        --------
        --------
    }
    functionName()
 */
//sample function
// function sample(){
//     console.log("In Sample Function")
// }
// console.log("In Global Scope")
// sample()
// sample()
// sample()
// sample()
// console.log("Back to Global Scope")

// function fun1(){
//     console.log("In fun1 function")
//     fun2()
//     console.log("Back to fun1 function")
// }
// function fun2(){
//     console.log("In fun2 function")
//     fun3()
//     console.log("Back to fun2 function")
// }
// function fun3(){
//     console.log("In fun3 function")
// }
// console.log("In Global Scope")
// fun1()
// console.log("Back to Global Scope")

//function call within function

// 1. function without return value without parameter
// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     console.log("Sum = ",sum)
// }
// function sample(){
//     add()
// }
// sample()

// 2. function with return value without parameter
// function add(){
//     var a = 10
//     var b = 20
//     var sum = a+b
//     return sum
// }
// function sample(){
//     var s = add()
//     console.log("Sum = ",s)
// }
// sample()


// function add(){
//     var a = 10
//     var b = 20
//     return a+b
// }
// function sample(){
//     console.log("Sum = ",add())
// }
// sample()

// 3. function without return value with parameter
// function add(x,y){      //parameters or formal parameters
//     var sum = x+y
//     console.log(`sum = ${sum}`)
// }
// function sample(){
//     var a = 10
//     var b = 20
//     add(a,b)        //arguments or actual paramters
// }
// sample()

// 4. function with return value with parameter
// function add(x,y){  
//     var sum = x+y
//     return sum
// }
// function sample(){
//     var a = 10
//     var b = 20
//     var s = add(a,b)        
//     console.log(`sum = ${s}`)
// }
// sample()

// function add(x,y){  
//     return x+y
// }
// function sample(){
//     var a = 10
//     var b = 20
//     console.log(`sum = ${add(a,b)}`)
// }
// sample()


//default parameters
// function sample(a=0,b=0,c=0){
//     console.log(a,b,c)
// }
// sample(10,20,30)
// sample(10,20)
// sample(10)
// sample()

// function sample(a=0,b=0,c=0){
//     if(a && b && c){
//         console.log("Code in which 3 parameters are require shoold write here")
//     }
//     else if(a && b){
//         console.log("Code in which 2 parameters are require shoold write here")
//     }
//     else if(a){
//         console.log("Code in which 1 parameters are require shoold write here")
//     }
//     else{
//         console.log("Code in which No parameters are require shoold write here")
//     }
// }
// sample(10,20,30)
// sample(10,20)
// sample(10)
// sample()


//function returing an Array
// function sample(){
//     return [10,20,30]
// }
// console.log(sample())

// //function returing an Object
// function sample(){
//     return {a:10,b:20,c:30}
// }
// console.log(sample())

//Regular Functions
// function sample(){
//     console.log("In sample function")
// }
// sample()

//anonymous function Note : added inES6 Version
// var sample = function(){
//     console.log("In sample function")
// }
// sample()

//arrow function or fat arrow function Note : added inES6 Version
// var sample = ()=>console.log("In sample function")
// sample()

//storage class
/**     
var             function level
let             block level
const           block level
no keyword      global
 */

function sample(){
    if(true){
        a = 10 
        var b = 20
        let c = 30
        const d = 40
        console.log(`In if Block of Sample a = ${a} b = ${b} c = ${c} d = ${d}`)
    }
    console.log(`In Sample a = ${a} b = ${b}`)
}
sample()
console.log(`Outside Sample a = ${a}`)