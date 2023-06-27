/*
  Array: 
    -> collection of items arrangement in contiguous order
    -> can contain duplicate items
    -> can contain differnt type value


    Note: Array index always start with ZERO
    syntax:
    var arrayObject=[item1,item2,item3,....,itemN]
 */

//1st type to create an array using array literal style
// var a=[10,20,30,40,50,60,70,80,90,100,true,false,"Hello","World",'Ducat',[1,2,3,4,5]]
// console.log(a);

//2nd type to create an array using empty array
// var a = []
// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40)
// a.push(50)
// a.push(60,70,80,90,100)
// console.log(a);


//3rd type : Array constructor
// var a = Array(10,20,30,40,50,60,70,80,90,100)
// console.log(a)


//4th type : Array constructor
// var a = Array()
// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40)
// a.push(50)
// a.push(60,70,80,90,100)
// console.log(a);

/*
toString convert an array into string and use , as separator
join() convert an array into string and you can specify
         seperator bydefault join function use , as seperator
*/
// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a.toString())
// console.log(a.join())
// console.log(a.join(" "))
// console.log(a.join("|"))
// console.log(a.join(":"))

// document.write(a)
//document.write(a.join(" "))


/*
array: push() pop() shift() unshift() splice() delete
push():   insert one or more then one element in last of an array
and return updated length of array
pop()     delete an element from last of an array and return deleted
array element
unshift() insert one or more then one element element in starting
of an array and return updated length of array
shift()   delete an element from first position of an array and return deleted
array element
splice()  used to insert or delete or update elements from any
specific position of array and return array of deleted
elements
syntax:
array.splice(pos,numberOfItemToDelete,itemstoInsert)

delete  : it delete an item from array and leave empty space
*/
// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)
// console.log("Updated Length of Array = ",a.push(110))
// console.log(a)
// console.log("Updated Length of Array = ",a.push(120,130,140,150))
// console.log(a)

// console.log(a)
// console.log("Updated Length of Array = ",a.unshift(5))
// console.log(a)
// console.log("Updated Length of Array = ",a.unshift(1,2,3,4))
// console.log(a)

// console.log(a)
// console.log("Deleted Elements = ",a.splice(3,0,35,36,37,38,39))
// console.log(a)

// console.log(a)
// console.log("Deleted Element = ",a.pop())
// console.log(a)

// console.log(a)
// console.log("Deleted Element = ",a.shift())
// console.log(a)

// console.log(a)
// console.log("Deleted Elements = ",a.splice(3,5))
// console.log(a)

// console.log(a)
// delete a[5]
// console.log(a)


//slice() return a list of items from pos to pos
// var a = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300]
// console.log(a.slice(5,15))
// console.log(a.slice(15))
// console.log(a.slice(-10))


//concat()
// var a = [1,2,3,4,5]
// var b = [10,20,30,40,50]
// var c = [110,200,300,400,500]
// var d = ["Nitin","Amit","Sumit","Naman","Aman"]
// var e = a.concat(b,c,d)
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)


var a = [10,20,30,40,50,60,70,80,90,100]
//accessing array elements using normal for loop
// for(let i=0;i<a.length;i++){
//   process.stdout.write(`${a[i]} `)
//console.log(a[i])
// }


//accessing array elements using while loop
// let i=0
// while(i<a.length){
//   console.log(a[i])
//   i++
// }


//accessing array elements using do while loop
// let i=0
// do{
//   console.log(a[i])
//   i++
// }while(i<a.length);
  
  
//accessing array elements using for in loop
// for(let i in a){
//   console.log(a[i])
// }
  
//accessing array elements using for of loop
// for(let i of a){
//   console.log(i)
// }

// var a = [15,48,95,15,65,24,584,8,498,45,65,15,64,5]
// var max=15
// for(let item of a){
//   if(max<item)
//   max=item
// }
// console.log(`Greatest Element = ${max}`)


//entries() generate an iterator which contains key and value of items
//accessing array elements using entries()
// var b = a.entries()
// for(let item of b){
//   console.log(item);
// }



//find()  : return the item from array which pass a text
//findIndex():retunn the index of item from array which pass a test
//map()   : return an array of containg result for all elements of array
//filter(): return an array of items that pass a test

// var a = [15,14,16,17,19,23,21,24,25,65,15,84,84,55,54,51,53]
// function check(item){
//   var flag=false
//   for(let i=2;i<=item**0.5;i++){
//     if(item%i==0){
//       flag=true
//       break
//     }
//   }
//   if(flag==false && item>=2)
//   return true
//   else
//   return false
// }
// console.log(a.find(check))
// console.log(a.findIndex(check))
// console.log(a.map(check))
// console.log(a.filter(check))

//includes() return true if array contains an item else retur false
//indexOf()  return lowest index of item from array and return -1
//            if item not found in Array
//lastIndexOf()  return highest index of item from array and
//               return -1 if item not found in Array

//var a = [20,30,10,20,30,40,50,60,10,10,10,20,30,70,80,90,100]
// console.log(a.includes(10))
// console.log(a.includes(1000))

// console.log(a.indexOf(10))
// console.log(a.lastIndexOf(10))

//reverse()
// var a = [10,20,30,40,50,60,70,80,90,100]
// console.log(a)
// a.reverse()
// console.log(a)

//sort()
var a = [51,54,58,15,45,65,1,25,45,84,9,15,100,1000,9,8,4,1,2,3,50]
//var a = ["Amit","Nitin","Sumit","Satish","Vicky","Jitender"]
// console.log(a)
// function check(a,b){
// //  console.log(a,b)
//   return a-b
// }
// a.sort(check)
// console.log(a)

// console.log(a)
// a.sort((a,b)=>a-b)  //ascending Order
// console.log(a)

// console.log(a)
// a.sort((a,b)=>b-a)  //ascending Order
// console.log(a)

//Array Destructuring

var a = [
    1001,
    "Nitin Chauhan",
    "Trainer",
    78000,
    "vishankchauhan@gmail.com",
    "9873848046",
    "Faridabad",
    "Haryana"
]
// console.log(
//   `
//     Id          : ${a[0]}
//     Name        : ${a[1]}
//     Designation : ${a[2]}
//     Salary      : ${a[3]}
//     Email       : ${a[4]}
//     Phone       : ${a[5]}
//     City        : ${a[6]}
//     State       : ${a[7]}
//   `
// )
var [id,name,dsg,salary,email,phone,city,state] = a
console.log(
  `
    Id          : ${id}
    Name        : ${name}
    Designation : ${dsg}
    Salary      : ${salary}
    Email       : ${email}
    Phone       : ${phone}
    City        : ${city}
    State       : ${state}
  `
)