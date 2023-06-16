'use strict'
// here the strict mode will help devlopers to introduce bugs and the errors in the codes
// it will actually create the  visible errors for us and also forbids us to do some things
//just like it tells that where the error is happened 

//-----functions---------------

function f1()
{
console.log('hello this is my first function');
}
// below we calling the function
f1();


//---------- example of the returning function-------
function fruits(apple,oranges)
{
    const juice=`juice of the ${apple} apples and ${oranges} oranges will be made`
    console.log(juice);
}

fruits(2,3);







//--------------- arrow functions -----
//in which the functions are written in the form of the arrows and we store that function in the variable
//syntax ===>   variablename = functionname => thing that we want to return  ex.
// by this we can prevent writing return keyword
 const arrowf= firstarrow => 1000 - firstarrow ;
 const f2=arrowf(500);
 console.log(f2);



 //=========== ARRAYS IN THE JAVASCRIPT  ===================


 //IN JS WE USE [ ] BRACKETS TO WRITE THE ARRAYS

 const name1=['tirth','anilkumar','joshi'];
console.log(name1);

//there is another way of making the array so we can write by
const arrr2= new Array('tirth', 'anilkumar','joshi');
console.log(arrr2);
console.log(arrr2.length);
console.log(arrr2[arrr2.length-1]);
//here by the upper line we get the last element of the array because arrr2.lenght is here 3 and can't be 0
//so it will return the value at the 2nd place





//========== methods in the array ========================================


// first of all we talk about the push method   
//push is used to insrt the array element
const friend= new Array('joe','jack','will');
friend.push('ichigo');
console.log(friend);
// you can also add the name from the begining that can be one by the "unshift"
friend.unshift('itachi');
console.log(friend)
//pop is used just same as push but in opposite way
// and also you can remove the first element by the "shift"(opposite of unshift)
//and if i wnt to know the number of the name ichigo than we use "indexOf()"
// the "includes" method will tell that the element is in the array or not





//=============================  OBJECTS IN JS ========================



//here we make the object of the TIRTH and it will consists the parameters 
const tirth=
{
name:'tirth',
ageyear:2002,
profession:'student',
friends:['ichigo','itachi','minato','goku'],
//as previous we see that object property has any type of the value
//now, the property can also have the type of function

calcAge: function (ageyear)
{
return 2022-this.ageyear;
//here we write "this" and it will fetch the exaxtly data fron the object  "TIRTH" bcse it written in the object parantheses
//"this" is help when we want to change the object name so we dont have to change it every where(bcse we write before tirth.ageyear)
}
}
console.log(tirth);

//now if we want to fetch the data  by the property/ atrribute name then
console.log(tirth.friends);
//or
console.log(tirth['friends']);


const know=prompt('what do you want to know about the tirth' )
console.log(tirth.know);//we get here undefined because tirth dont have know property
                         //so here the bracket notation will helps
console.log(tirth[know]);
console.log(tirth.calcAge());




//======================== FOR LOOPS IN THE JS ==========================



for(let i=1;i<=10;i++)
{
console.log("the lifting weight repetations will be"+i);
}
//you can also print the array using the for loop
const name2=['tirth','anilkumar'    ,'joshi'];
for(let j=0;j<name2.length;j++)
{
    console.log(name2[j]);
}


//run the loop backwards by the for loop


for(let z=(name2.length-1);z>=0;z--)
{
    console.log(name2[z]);
}

//=========== WHILE LOOP IN THE JS====================
//in js we have to define the variable outside of the loop
//and also increse it outside

let rep=1;
while(rep<=10)
{
    console.log("the repetations in the gym is"+rep);
    rep++;
}

//you want a user that it will roll(choose)  a dice for a number you have to run untill 6
let dice=Math.trunc(Math.random()*6)+1;
while(dice!==6)
{
    console.log("the number on the dice is "+ dice );
     dice=Math.trunc(Math.random()*6)+1;
     if(dice==6)
     console.log("the loop is about to end ")
}


//program to find the max value in the array
const calcarraymax=function(temp){
let max= temp[0];
for(let i=0;i<temp.length;i++)
{
    if(temp[i]>max)
    max=temp[i];

    
}
console.log(max);


};
calcarraymax([10,25,17]);




