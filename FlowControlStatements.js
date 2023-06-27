/*
Flow Control Statements or Decision Making Statements
1. Conditional Statements or Selection Statements:
    1. if Statement
    2. if else Statement
    3. Netsed if else Statement
    4. if else if ladder Statement
    5. switch case Statement
2. Iteration Statements or Loops:
    1. for Loop
    2. for in Loop
    3. for Of Loop
    4. while Loop
    5. do while Loop
    6. Nested Loops
3. Jump Statements:
    1. break Statement
    2. Continue Statement

if Statement: used when execution of a Statement Block depend
              on a condition
syntax:
if(condition){
    -----
    number of Statements
    -----
}
Note: {} are optional if we have only one statement in statement
      block
 */
// if(true){
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")

// if(false){
//     console.log("Hello World1")
//     console.log("Hello World2")
//     console.log("Hello World3")
// }
// console.log("Hello World4")
// console.log("Hello World5")
// console.log("Hello World6")


/*
if else Statement: used when execution of one Statement Block
                   out of two Statement blocks depend
                   on a condition
syntax:
if(condition){
    -----
    number of Statements block1
    -----
}
else{
    -----
    number of Statements block2
    -----
}
 */
// var num = parseInt(prompt("Enter the Number : "))
// if(num%2===0)
// document.write(`${num} is Even`)
// else
// document.write(`${num} is Odd`)

/*
Nested if Else: if else within if else Statement
syntax:
    if(condition1){
        ------
        if(condition2){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
    else
    {
        ------
        if(condition3){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
 */
// var a = parseInt(prompt("Enter the First Number : "))
// var b = parseInt(prompt("Enter the Second Number : "))
// var c = parseInt(prompt("Enter the Third Number : "))
// if(a<b){
//     if(a<c)
//     document.write(`${a} is Smallest`)
//     else
//     document.write(`${c} is Smallest`)
// }
// else{
//     if(b<c)
//     document.write(`${b} is Smallest`)
//     else
//     document.write(`${c} is Smallest`)
// }

/*
 if else if ladder : when we have n number of conditions
 syntax:
    if(condition1){
        -----
        -----
    }
    else if(condition2){
        -----
        -----
    }
    else if(condition3){
        -----
        -----
    }
    else if(condition4){
        ------
        ------
    }
    --
    --
    --
    else if(conditionN){
        ------
        ------
    }
    else{
        ------
        ------
    }
 */
// var a = parseInt(prompt("Enter the First Number : "))
// var b = parseInt(prompt("Enter the Second Number : "))
// var c = parseInt(prompt("Enter the Third Number : "))
// var d = parseInt(prompt("Enter the Fourth Number : "))
// var e = parseInt(prompt("Enter the Fifth Number : "))
// if(a>=b && a>=c && a>=d && a>=e)
// document.write(`${a} is Greatest`)
// else if(b>=c && b>=d && b>=e)
// document.write(`${b} is Greatest`)
// else if(c>=d && c>=e)
// document.write(`${c} is Greatest`)
// else if(d>=e)
// document.write(`${d} is Greatest`)
// else
// document.write(`${e} is Greatest`)

// var ch = prompt("Enter the Character : ")
// if(ch.length!==1)
// document.write("Invalid Input")
// else{
//     if(ch>='a' && ch<='z')
//     {
//         if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
//         document.write(`'${ch}' is Lower Case Vowel`)
//         else
//         document.write(`'${ch}' is Lower Case Consonant`)
//     }
//     else if(ch>='A' && ch<='Z')
//     {
//         if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
//         document.write(`'${ch}' is Upper Case Vowel`)
//         else
//         document.write(`'${ch}' is Upper Case Consonant`)
//     }
//     else if(ch>='0' && ch<='9')
//     document.write(`'${ch}' is Digit`)
//     else if(ch==" ")
//     document.write("Space")
//     else
//     document.write(`'${ch}' is a Special Character`)
// }

// var a = Number(prompt("Enter the First Number :  "))
// var b = Number(prompt("Enter the Second Number :  "))
// var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress / for Division\nPress % for Remainder\npress * for Mulitplication\nPress ** Power\nEnter Your Choice :  ")
// switch (ch) {
//     case '+':
//         document.write(`${a} + ${b} = ${a + b}`)
//         break
//     case '-':
//         document.write(`${a} - ${b} = ${a - b}`)
//         break
//     case '*':
//         document.write(`${a} * ${b} = ${a * b}`)
//         break
//     case '/':
//         document.write(`${a} / ${b} = ${a / b}`)
//         break
//     case '%':
//         document.write(`${a} % ${b} = ${a % b}`)
//         break
//     case '**':
//         document.write(`${a} ** ${b} = ${a ** b}`)
//         break
//     default:
//         document.write(`Invalid Choice`)
//         break
// }

// var num = parseInt(prompt("Enter the Number of Month :  "))
// switch (num) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         document.write("Month Has 31 Days")
//         break
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         document.write("Month Has 30 Days")
//         break
//     case 2:
//         let year = parseInt(prompt("Enter the Year Number :  "))
//         if (year % 100 == 0) {
//             if (year % 400 == 0)
//                 document.write("Month has 29 Days")
//             else
//                 document.write("Month has 28 Days")
//         }
//         else {
//             if (year % 4 == 0)
//                 document.write("Month has 29 Days")
//             else
//                 document.write("Month has 28 Days")
//         }
//         break
//     default:
//         document.write("Invalid Choice")
// }

// var num = parseInt(prompt("Enter the Number of Month :  "))
// switch (num) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         document.write("Month Has 31 Days")
//         break
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         document.write("Month Has 30 Days")
//         break
//     case 2:
//         let year = parseInt(prompt("Enter the Year Number :  "))
//         if (year % 400 == 0 || (year%4==0 && year%100!=0))
//             document.write("Month has 29 Days")
//         else
//             document.write("Month has 28 Days")
//         break
//     default:
//         document.write("Invalid Choice")
// }
/*
Switch Case Statement:
    used to make a menu based program
syntax:
    switch(expression){
        case constant1:
            ------
            ------
            break
        case constant2:
            ------
            ------
            break
        case constant3:
            ------
            ------
            break
        -
        -
        case constantN:
            ------
            ------
            break
        default:
            ------
            ------
    }
 */
/*
Iteration Statements or Loops:
used to iterate or repeat number of statements n times

1. for loop: use when we know number of iterations
syntax:

    for(Initialization;condition;updation){
        -----------
        -----------
        number of statements
        -----------
        -----------
    }
 */
// for(var i=1;i<=10;i++){
//     console.log(`${i} Hello World`)
// }

// for(var i=1;i<=10;++i){
//     console.log(`${i} Hello World`)
// }

// for(var i=1;i<=10;i=++i){
//     console.log(`${i} Hello World`)
// }

// for(var i=1;i<=10;i=i++){
//     console.log(`${i} Hello World`)
// }

// var i=1
// for(;;){
//     if(i>10)
//     break
//     console.log(`${i} Hello World`)
//     i++
// }


// for(var i=1;i<=10;i++);
// {
//     console.log(`${i} Hello World`)
// }

// for(let i=1;i<=10;i++)
// {
//     console.log(`${i} Hello World`)
// }

// for(let i=10;i;i--){
//     console.log(`${i} Hello World`)
// }


// var num = parseInt(prompt("Enter the Number :  "))
// for(let i=1;i<=10;i++){
//     document.write(`${num} * ${i} = ${num*i}<br>`)
// }

/*
for Loop Questions:
1. WAP to print sum of Even and Odd Numbers in specific Range
2. WAP to print factorial of any specific number
3. WAP to check whether a number is perfect number or not
4. WAP to check whether a number is prime number or not
 */
// var num = parseInt(prompt("Enter the Number :  "))
// var f = 1
// for(let i=num;i>=1;i--){
//     f=f*i
//     if(i>1)
//     document.write(`${i} *`)
//     else
//     document.write(`${i}`)
// }
// document.write(` = ${f}`)

// var num = parseInt(prompt("Enter the number :  "))
// var flag=false
// for(let i=2;i<=num**0.5;i++){
//     if(num%i==0)
//     {
//         flag=true
//         break
//     }
// }
// if(flag==false && num>=2)
// document.write(`${num} is Prime`)
// else
// document.write(`${num} is not Prime`)

/*
num=6
i=6 5   4   3   2   1
f=6 30  120 360 720 720
 */

/*
while Loop:
used when we does not have a fix idea of number of iterations
syntax:
    Initialization
    while(condition){
        -----
        -----
        number of statements
        -----
        -----
        updation
    }
 */
// let i=1
// while(i<=10){
//     console.log(`${i} Hello World`)
//     i++
// }

//Fibonacci Series:0    1   1   2   3   5   8   13  21  34  55  89  144....
// var num = parseInt(prompt("Enter the last Term Range of Fibonacci Series :  "))
// var a = 0
// var b = 1
// var sum = a+b
// document.write(`${a} ${b}`)
// while(sum<=num){
//     document.write(` ${sum}`)
//     a=b
//     b=sum
//     sum=a+b
// }
/*
num =   100
a   =   0   1   1   2   3   5   8   13  21  34  55 
b   =   1   1   2   3   5   8   13  21  34  55  89  
sum =   1   2   3   5   8   13  21  34  55  89  144
op:0 1  1   2   3   5   8   13  21  34  55  89
 */

// var num = parseInt(prompt("Enter the Number :  "))
// var sum = 0         
// while(num!=0){      //12456     1245    124     12      1       0
//     let r=num%10    //6         5       4       2       1
//     sum=sum+r       //0+6=6     6+5=11  11+4=15 15+2=17 17+1=18
//     num=parseInt(num/10)//1245  124     12      1       0
// }
// document.write(`sum = ${sum}`)

// var num = parseInt(prompt("Enter the Number :  "))
// var rev = 0
// while(num!=0){          //147       14          1           0
//     let r=num%10        //7         4           1
//     rev=rev*10+r        //0*10+7=7  7*10+4=74   74*10+1=741
//     num=parseInt(num/10)//14        1           0
// }
// document.write(`Reverse = ${rev}`)
/*
while Loop Questions:
1. WAP to calculate sum of even and odd digits of a specific number
2. WAP to count even and odd digits in a number
3. WAP to reverse a number
4. WAP to check whether a number is NEON number or not
    (1,9)
5. WAP to check whether a number is Armstrong number or not
    (1,153,370,371,407)
6. WAP to check whether a number is Palindrome Number or not
    (121,1234321)
7. WAP to check whether a number is Magical Number or not
    (81,1458,1729)
 */

// var num = parseInt(prompt("Enter the Number :  "))
// var n=num       //1729
// var sum = 0     
// while(num!=0){          //1729  172     17      1       0
//     let r=num%10        //9     2       7       1
//     sum=sum+r           //0+9=9 9+2=11  11+7=18 18+1=19
//     num=parseInt(num/10)//172   17      1       0
// }
// num=sum
// var rev = 0
// while(num!=0){          //19        1           0
//     let r=num%10        //9         1
//     rev=rev*10+r        //0*10+9=9  9*10+1=91
//     num=parseInt(num/10)//1         0
// }
// if(sum*rev==n)
// document.write(`${n} is Magical Number`)
// else
// document.write(`${n} is not a Magical Number`)


/*
do while Loop:
used when we have to execute number of statements atleast one
time whether condition is false

syntax:
Initialization
do
{
    ------
    ------
    number of Statements
    ------
    ------
    updation
}while(condition);
 */

// var i=100
// do{
//     console.log(`${i} Hello World`)
//     i++
// }while(i<=10);


// do {
//     let a = parseInt(prompt("Enter the First Number :  "))
//     let b = parseInt(prompt("Enter the Second Number :  "))
//     var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress * for Multiplication\nPress / for Division\nPress % for Remainder\nPress ** for Power\nEnter Your Choice :  ")
//     switch (ch) {
//         case "+":
//             console.log(`${a} + ${b} = ${a + b}`)
//             break
//         case "-":
//             console.log(`${a} - ${b} = ${a - b}`)
//             break
//         case "*":
//             console.log(`${a} * ${b} = ${a * b}`)
//             break
//         case "/":
//             console.log(`${a} / ${b} = ${a / b}`)
//             break
//         case "%":
//             console.log(`${a} % ${b} = ${a % b}`)
//             break
//         case "**":
//             console.log(`${a} ** ${b} = ${a ** b}`)
//             break
//         default:
//             console.log(`Invalid Choice`)
//     }
//     ch = prompt("Press n to Exit\nElse Press any Other Key to Continue :  ")
// }while(ch!='n');

/*
    Nested loops:
    Loops within Loops:
*/

// for(let num=1;num<=20;num++){
//     console.log(`Table of ${num} is`)
//     for(let i=1;i<=10;i++){
//         console.log(`${num} * ${i} = ${num*i}`)
//     }
// }


//1. WAP to print  all perfect numbers(6,28,496,8128)
//2. WAP to print and count all palindrome numbers in a range
//3. WAP to print and count all armstrong numbers(153,370,371,407)
//4. WAP to print all magical Numbers (81,1458,1729)
