/**
 *  oops:
 *  -> designed by Bjarne Stroustroup(C++ Founder)
 *  -> object oriented programming Structure
    oops is a computer science term which defines a well
    structured series or steps to construct a computer
    application which composed of multiple objects,
    each object can handle data, get and transfer 
    messages to each other, since objects are not
    dependent on each other oops is seen as being
    more flexible then procedural approach

    OOPS Approachs:
    1. Abstraction  :   Data Hiding
    2. Encapsulation:   Binding data and function in a single unit
    3. Polymorphism :   Many forms of Single Entity
    4. Inheritance   :   Code Reusability

    class is required to implement oops

    class: class is a technique by which we can define a new
           data type as we required

           class is a blue print of objects

           class is a collection of properties and behaviours
           where properties means variables of different-different
           data types also known as data members and behaviors
           means various functions also known as member methods
           or member functions
    syntax:
    class ClassName{
        constructor(){
            ----
        }
        method1(){
            ----
        }
        method2(){
            ----
        }
        --
    }
    */ 
//class without constructor
// class Sample{
//     display(){
//         console.log("In display function")
//     }
//     show(){
//         console.log("In show function")
//     }
// }
// var obj = new Sample()
// obj.show()
// obj.show()
// obj.show()
// obj.display()


// class Add{
//     get(a,b){
//         this.a=a
//         this.b=b
//         this.sum=this.a+this.b
//     }
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`);
//     }
// }
// var x = new Add()
// x.get(100,200)
// x.display()



/*
class with constructor
Constructor:
    -> a special member method of class which provide memory
       initialization to a class object
    -> there is no need to call constructor it called automatically
       when object is declared with help of new
    -> it can be parameterised
    -> if we not provide defination to a constructor in class
        then compiler provide defination to constructor
    -> constructor returns nothing
 */
// class Sample{
//     constructor(){
//         console.log("Constructing Class Sample")
//     }
//     display(){
//         console.log("In display of Sample Class")
//     }
//     show(){
//         console.log("In show function of Sample Class")
//     }
// }
// var x = new Sample()
// x.display()
// x.show()

// class Add{
//     constructor(a,b){
//         this.a=a
//         this.b=b
//         this.sum=this.a+this.b
//     }
//     display(){
//         console.log(`${this.a} + ${this.b} = ${this.sum}`);
//     }
// }
// var x = new Add(100,200)
// x.display()


/**
 * Inheritance:
 * oops approach provide a feature to reuse all members
 * of any previous existing class in a new class
 * 
 * eg. if a class named B inherit class A then class
 * B can reuse all member of class A so class B
 * is called child class,derived class or subclass
 * and class A is called parent class,super class
 * or base class
 * 
 * types:
 *  1. Single Inheritance
 *  2. Multilevel Inheritance
 *  3. Hierarchical Inheritance
 * 
 * syntax:
 *  class Parent{
 *  ----
 *  -----
 *  }
 *  class Child extends Parent{
 *      ----
 *      ----
 * }
 * Note: a child can access only those member of class
 * parent which child doesn't have if both parent class 
 * and child class having same named members then
 * child class member override parent member this 
 * concept is called method overridding, and it is a type
 * of polymorophism
 */

// class Sample{
//     display(){
//         console.log("In display of Sample Class")
//     }
//     show1(){
//         console.log("In show1 of Sample Class")
//     }
// }
// class Example extends Sample{
//     display(){
//         console.log("In display of Example Class")
//     }
//     show2(){
//         console.log("In show2 of Example Class")
//     }
// }
// var x = new Example()
// x.display()
// x.display()
// x.show1()
// x.show2()

// class Sample{
//     constructor(){
//         console.log("Constructing Class Sample")
//     }
//     display(){
//         console.log("In display of Sample Class")
//     }
//     show1(){
//         console.log("In show1 of Sample Class")
//     }
// }
// class Example extends Sample{
//     display(){
//         console.log("In display of Example Class")
//     }
//     show2(){
//         console.log("In show2 of Example Class")
//     }
// }
// var x = new Example()
// x.display()
// x.display()
// x.show1()
// x.show2()


// class Sample{
//     display(){
//         console.log("In display of Sample Class")
//     }
//     show1(){
//         console.log("In show1 of Sample Class")
//     }
// }
// class Example extends Sample{
//     constructor(){
//         super()
//         console.log("Constructing Class Example")
//     }
//     display(){
//         console.log("In display of Example Class")
//     }
//     show2(){
//         console.log("In show2 of Example Class")
//     }
// }
// var x = new Example()
// x.display()
// x.display()
// x.show1()
// x.show2()


// class Sample{
//     constructor(){
//         console.log("Constructing Class Sample")
//     }
//     display(){
//         console.log("In display of Sample Class")
//     }
//     show1(){
//         console.log("In show1 of Sample Class")
//     }
// }
// class Example extends Sample{
//     constructor(){
//         super()
//         console.log("Constructing Class Example")
//     }
//     display(){
//         console.log("In display of Example Class")
//     }
//     show2(){
//         console.log("In show2 of Example Class")
//     }
// }
// var x = new Example()
// x.display()
// x.display()
// x.show1()
// x.show2()

//Single Inheritance: when a single child class inherit a 
//single parent class
// class Sample{
//     constructor(a,b){
//         this.a=a
//         this.b=b
//     }
// }
// class Example extends Sample{
//     display(){
//         this.sum=this.a+this.b
//         console.log(`${this.a} + ${this.b} = ${this.sum}`);
//     }
// }
// var x = new Example(100,200)
// x.display()

//mulilevel Inheritance: when a child class inherit another child class
// class Parent{
//     constructor(){
//         this.a = [10,20,30,40,50,60,70,80,90,100]
//     }
// }
// class Child1 extends Parent{
//     display(){
//         console.log(this.a)       
//     }
// }
// class Child2 extends Child1{
//     reverse(){
//         for(let i=0,j=this.a.length-1;i<j;i++,j--){
//             let temp=this.a[i]
//             this.a[i]=this.a[j]
//             this.a[j]=temp
//         }
//     }
// }
// var x = new Child2()
// console.log("Original Array Elements are")
// x.display()

// console.log("Reversed Array Elements are")
// x.reverse()
// x.display()


//Hierarchical Inheriatnce: when a single parent class inherit by
//              more then one child class
class Parent{
    constructor(a,b){
        this.a=a
        this.b=b
    }
}
class Add extends Parent{
    display(){
        console.log(`${this.a} +  ${this.b} = ${this.a+this.b}`);
    }
}
class Sub extends Parent{
    display(){
        console.log(`${this.a} -  ${this.b} = ${this.a-this.b}`);
    }
}
class Mul extends Parent{
    display(){
        console.log(`${this.a} *  ${this.b} = ${this.a*this.b}`);
    }
}
class Div extends Parent{
    display(){
        console.log(`${this.a} /  ${this.b} = ${this.a/this.b}`);
    }
}
class Mod extends Parent{
    display(){
        console.log(`${this.a} %  ${this.b} = ${this.a%this.b}`);
    }
}
class Pow extends Parent{
    display(){
        console.log(`${this.a} **  ${this.b} = ${this.a**this.b}`);
    }
}
var obj1 = new Add(15,6)
var obj2 = new Sub(15,6)
var obj3 = new Mul(15,6)
var obj4 = new Div(15,6)
var obj5 = new Mod(15,6)
var obj6 = new Pow(15,6)

obj1.display()
obj2.display()
obj3.display()
obj4.display()
obj5.display()
obj6.display()