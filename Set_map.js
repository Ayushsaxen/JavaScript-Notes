/**
 Set: collection of Unique Elements
 */
//how to make a set
//how to make a set using new Set()

var a = [10,20,30,40,10,10,10,10,20,30,20,30,20,20,20,20,10,10,20,30,40,50,60,70,80,90,10,100,100,100,10,10,10,20,30,40,50,60,70,80,90,10,100]
// console.log(a)

var b =new Set(a)

// a = Array.from(b)
// console.log(b)
// console.log(a)

//add item to set
//add() used to add an item in set,do nothing if item already exist
// console.log(b)
// b.add(100)
// console.log(b)
// b.add(110)
// console.log(b)


//delete() used to delete any particular item from Set
//do nothing if delete is empty

// console.log(b)
// b.delete(50)
// console.log(b)

//clear()   //remove all items from set
// b.clear()
// console.log(b)

//size
//console.log(b.size);

//has() return true if item exist in set else return false
// console.log(b.has(50))
// console.log(b.has(500))


/*
    values:     return an iterator containing all items of set
    keys:       return an iterator containing all items of set
    entries:    return an iterator in pair if value,value 
                containing all items of set
 */
// console.log(b.keys())
// console.log(b.values())
// console.log(b.entries())


//map: collection of item but in pair of key and value
//      keys must be unique but values may be duplicate
//if we use duplicate key in a map then only last key will used

//how to make a map
var a = new Map([
    ["Nitin",78000],
    ["Mohit",88000],
    ["Tarun",65000],
    ["Varun",98000],
    ["Mohit",75000],
    ["Sumit",45650],
    ["Vinay",15000]
])
// console.log(a)

//set() of map insert an item in map and if key already exist then
//set() update keys value
// a.set("Sumit",35400)
// a.set("Ravi",154555)
// console.log(a)


//delete() used to delete any particular key from Map do nothing in case of Empty
// console.log(a)
// a.delete("Nitin")
// console.log(a)


//clear()   //used to delete all items from Map
// console.log(a)
// a.clear()
// console.log(a)


//a.size  //return number of items of Map
// console.log(a.size)

//has() : return true is map has an item else return false
// console.log(a.has("Mohit"))
/*
    values:     return an iterator containing all keys of map
    keys:       return an iterator containing all values of map
    entries:    return an iterator in pair if key,value 
                containing all items of map
 */
console.log(a.keys())
console.log(a.values())
console.log(a.entries())
