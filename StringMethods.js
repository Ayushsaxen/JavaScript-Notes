/*
    String: collection of Characters or Sequence of Characters or
            array of Characters
 */
//String Constant
var a = "JavaScript is a Scripting Language"

//console.log(a)

//String using Loops
// //string using for Loop
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }

// //string using while Loop
// let i=0
// while(i<a.length){
//     console.log(a[i])
//     i++
// }

// //string using do while Loop
// let i=0
// do{
//     console.log(a[i])
//     i++
// }while(i<a.length)

// //string for in loop
// for(let i in a){
//     console.log(a[i]);
// }

// //string for of loop
// for(let i of a){
//     console.log(i);
// }

//string methods
//charAt() return character at any specific index
// console.log(a[0])
// console.log(a.charAt(0))
// console.log(a[1])
// console.log(a.charAt(1))


//charCodeAt(): return Unicode of first character of String
// console.log(a.charCodeAt());
/*
A=65    a=97    0=48
B=66    b=98    1=49
-
Z=90    z=122   9=57
*/
// for(let i in a){
//     console.log(a[i],"=",a.charCodeAt(i))
// }
/*
fromCharCode(): convert a Unicode into Character
 */
// console.log(String.fromCharCode(97));

/*
indexOf()     :   return first index of any substring in string
                  and return -1 if item not found in string
lastIndexOf() :   return last index of any substring in string
                  and return -1 if item not found in string
search()      :   return first index of any substring in string
                  and return -1 if item not found in string
includes()    :   check whether a substring is exist in string or not
                  it return true of false
*/
// console.log(a.indexOf(" "));
// console.log(a.search(" "));
// console.log(a.lastIndexOf(" "));
// console.log(a.includes(" "));
// console.log(a.indexOf("Nitin"));
// console.log(a.search("Nitin"));
// console.log(a.lastIndexOf("Nitin"));
// console.log(a.includes("Nitin"));


// Copy a string into another
// var b=a
// console.log("Copied String is ",b);

//concat() : concat one or more strings in a string
// var a = "Ducat"
// var b = "Education"
// var c = "Noida"
// var d = a+" "+b+" "+c
// var e = a.concat(" ",b," ",c)
// console.log(d)
// console.log(e)

/*
startsWith() : check whether a string start with specific
               sub string or not
endsWith()   : check whether a string end with specific sub
               string or not
*/
// var a = prompt("Enter the String :  ")
// if(a.startsWith("www."))
// document.write(`'${a}' is a Web URL`)
// else if(a.endsWith("@gmail.com"))
// document.write(`'${a}' is a Gmail Id`)
// else
// document.write(`'${a}' is a Normal Message`)

//toUpperCase()
//toLocaleUpperCase()
// console.log(a.toUpperCase())
// console.log(a.toLocaleUpperCase())

//toLowerCase()
//toLocaleLowerCase()
// console.log(a.toLowerCase())
// console.log(a.toLocaleLowerCase())

//substr() return a substring from pos to number of characters
//substring() return a substring from pos to pos  characters
//slice()

// console.log(a.substr(7,11)) //return 11 character from 7th index
// console.log(a.substring(7,11))//return characters from 7th to 10th
// console.log(a.slice(7,20))  //return characters from 7th to 20th
// console.log(a.slice(20))    //return all characters from string after 20th index
// console.log(a.slice(-20))   //return last 20 characters


//repeat()  :   create number of copies of a string
//console.log(a.repeat(5))


//replace()        
//replaceAll() 
// console.log(a.replace(" ","_"))
// console.log(a.replaceAll(" ","_"))

//split()
// console.log(a.split(" "))

// trim() remove all leading white space characters from string from both side
// trimStart()remove all leading white space characters from string from left side   
// trimEnd()remove all leading white space characters from string from right side
var a = "          JavaScript               "
var b = a.trim()
var c = a.trimStart()
var d = a.trimEnd()
console.log(a.length)
console.log(b.length)
console.log(c.length)
console.log(d.length)



/*
localeCompare() : compare two strings
                    return 0 if both string are same
                    return 1 if first string comes last in
                    alphabetical order
                    return -1 if first string comes firt in
                    alphabetical order
*/
// var a = "Nitin"
// var b = "Naman"
// console.log(a.localeCompare(b))
// console.log(b.localeCompare(a))