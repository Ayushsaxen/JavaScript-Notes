/*
Hoisting in JS

during execution of a program we have two phase
1. creation  phase
2. execution phase

create phase: this phase contains defination of all variables
              and functions prototype  of a program
            
execution phase: this phase contains program statements

so hoisting in js is a machanism where variables and function
declarations(creation phase) are moved to the top of their scope
before the code execute(execution phase)
*/

//code we write
// console.log(a)
// var a = 10
// console.log(a)

//code send for execution
// var a
// console.log(a)
// a = 10
// console.log(a)
/*
in ES6 i.e ECMASCRIPT 2015 hoisting is avoided by let or const
     keyword by using the let keyword instead of var we can 
     avoid hoisting
*/
// console.log(a)
// let a = 10
// console.log(a)

//use strict mode
// "use strict"
// a = 10
// console.log(a)

//  "use strict"
// var a = 10
// delete a
// console.log(a);

/*
Scope Chain and lexical Scoping:
the scope chain is used to resolve the value of variable in js
scope chain in js is laxically defined which means that we can
see what the scope chin will be only by looking at the code

at the top we have global scope which is window object
then local scope(function)

so lexical scoping means  the inner function can access variables 
defined in outer function and global scope but outer function can't
access variables defined in inner function but can access variables
define in global scope but global scope can't access variables
defined inside any function
*/

// var a = 10
// function outer(){
//     var b = 20
//     function inner(){
//         var c = 30
//         console.log(`In Inner function a = ${a} b = ${b} and c = ${c}`);
//     }
//     inner()
//     console.log(`In Outer Function a = ${a} b = ${b}`)
// }
// outer()
// console.log(`In Main Scope a = ${a}`)

/*
closure:
    closure is a function object that remembers values
    in enclosing scope even if they are not present in memory

    it is a record that store a function together its environment

    a clousure unlike a plain function allows the function to 
    access those captured variables through the closure's copy
    of their values or reference,even when the function is
    invoked outside their scope
 */
// var a = 10
// function outer() {
//     var b = 20
//     function inner() {
//         var c = 30
//         console.log(`In Inner function a = ${a} b = ${b} and c = ${c}`);
//     }
//     return inner
// }
// var c = outer()
// c()
// c()
// c()
// c()
// c()
/*
Synchronous and Asynchronous Programming in JS

Synchronous: one task has to wait to complete previous task
             i.e line by line execution
Asynchronous: one task doesn't have to wait to complete
             previous task it is also callesd non blocking IO Model
*/

//Synchronous
// function fun1(){
//     console.log("In fun1 function")
// }
// function fun2(){
//     console.log("In fun2 function")
// }
// function fun3(){
//     console.log("In fun3 function")
// }
// function fun4(){
//     console.log("In fun4 function")
// }
// function fun5(){
//     console.log("In fun5 function")
// }
// fun1()
// fun2()
// fun3()
// fun4()
// fun5()


//ASynchronous
function fun1(){
    setTimeout(()=>console.log("In fun1 function"),5000)
}
function fun2(){
    setTimeout(()=>console.log("In fun2 function"),4000)
}
function fun3(){
    setTimeout(()=>console.log("In fun3 function"),3000)
}
function fun4(){
    setTimeout(()=>console.log("In fun4 function"),2000)
}
function fun5(){
    setTimeout(()=>console.log("In fun5 function"),1000)
}
fun1()
fun2()
fun3()
fun4()
fun5()
