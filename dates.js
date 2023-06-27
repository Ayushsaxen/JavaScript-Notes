//to set date and time
//1st Style : new Date() : return Current Date and time
// var a = new Date()
// console.log(a.toString())


//2nd Style : new Date(year,month,day,hour,minute,second,milisecond)
//we have to specify atleast two items in Date
//if we pass a single argument in Date then it treat it as miliseconds

// var a = new Date(2022,6,30,17,35,35,2000)
// var b = new Date(2022,6,30,17,35,35)
// var c = new Date(2022,6,30,17,35)
// var d = new Date(2022,6,30,17)
// var e = new Date(2022,6,30)
// var f = new Date(2022,6)
// var g = new Date(2022)
// console.log(a.toString())
// console.log(b.toString())
// console.log(c.toString())
// console.log(d.toString())
// console.log(e.toString())
// console.log(f.toString())
// console.log(g.toString())

//3rd Style : new Date(miliseconds)
// var a = new Date(1000000000000000)
// console.log(a)


//4th Style : new Date(dateString)
//var a = new Date("2022 07 30 15:35:40")
// var a = new Date("15:35:40 2022 07 30")
// console.log(a.toString())


//to get date and time
var a=new Date()
console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds());
console.log(a.getUTCDate());
console.log(a.getTime());//miliseconds
console.log(a.getDay()); //week day
console.log(Date.now());//miliseconds