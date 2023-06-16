

let MarkWight=78;
let JohnWight=92;
let Markhight=1.69;
let Johnhight=1.95;

let bmi1=MarkWight/Markhight**2;
let bmi2=JohnWight/Johnhight**2;


let markHigher=bmi1>bmi2;


console.log(bmi1);
console.log(bmi2);
console.log(markHigher);
const name='tirth';
const newtype=`hi I am ${name}`;
console.log(newtype);
const old='just a reguler string';
console.log(old);
console.log('hi this is tirth');
const inputstr='2002';
console.log(inputstr + 21 );//here this will concatinate the string not add because here default input 
                           //type is string so this will concatinate
//so we can solve that problem by "number()" function that will change our string to the number for ex//

console.log (Number(inputstr) + 21);
//now here we get the  output as the 2023   
// if we use "number()" for the real string than we got the result as "NaN" not a number

//if you want to convert the number to the string than use "String()"
//NOTE: if we get the value in the console is WHITE colored than its string and if its PURPLE than its integer
//the "+" is used to concatinate the string but when we use to conc. the string and number than it will automatically convert the number into the strings so we get the output as in the white color
//this is called as the "coercion"..
//the "-" is used to  when we use to conc. the string and number than it will automatically convert the strings into the numbers so we get the output as in the purple color
//the "*" and "/" will also work as same as "-"
//the logical op. also work as the "-"





//                    ----------FALSY AND TRULY VALUES---------------------

//there are 5 types of the falsy values==            0, "", undefined, null, NaN
//every thing else will become the truly values
//ex. of the falsy value is ====   "console.log(boolean(0))" ===> this will give the value="FALSE"
//ex.  console.log(boolean(hight))  ====> "FALSE"  because this is undefined 



//                  ---------------EQUALITY OPERATORS     ==VS ===    ------------
// == ----> known as loose equality                 === -----> known as the strict equality 
// === MEANS we assigns the constant value to the operator 
// the == is uses the type conveersion means it will give true value to '18'==18 means it will convert 18 str to num
// but 18===19 will give false also to the '18'===18



//                ----------switch statement---------
const day='monday';

switch(day)//here in the switch we write the thing that we want to compare 
{
case 'monday':
    console.log("oh no its monday a weekday")
    break;

case 'tuesday':
case 'wednesday':
console.log("this is other than monday")
    break;
}

