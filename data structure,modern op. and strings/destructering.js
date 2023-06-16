'use strict'
//here we will use the theme of the restrurent
//destructering means breakdown the complex data structures into smaller ds like variables

//first we retrive the arr elements to variables by this old methords
const arr=[10,11,12];
const a=arr[0];
const b=arr[1];
const c=arr[2];

//second by destructuring method
const[x,y,z]=arr;
//this [] is not an array this is destructuring assignment

//===================================================================================================================================

const restaurant = {
    
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
     
    openingHours:{
        thu: {
            open:12,
            close:22
        },
        fri: {
             open:11,
            close:23},
        sat: {
             open:0,
            close:24},
    },

    order: function(starterIndex,mainIndex){
        return[this.starterMenu[starterIndex],
            this.mainMenu[mainIndex]]
    },
    order_pizza: function(ing1,ing2,ing3){//spread ex.
        console.log(`here is your pizza with ${ing1} and ${ing2} and ${ing3}`);
    },
    order_pasta:function(mainINg,...othersING){//rest ex.
        console.log(`your pasta has maninly${mainINg}and least ${othersING}`);
    },
}  
const [first,second]=restaurant.categories;
console.log(first,second); 
//if i want 1st and 3rd then

let [s,,t]=restaurant.categories; //here we used the let because we can further change in swapping
console.log(s,t);

//swaping by older method
const temp=s;
s=t;
t=temp;
console.log(s,t);

//=== switching with detructuring=====
[s,t]=[t,s] //so here we get the our first result bcse of switching 
console.log(s,t);


console.log(restaurant.order(1,2));
//by this we acccss the starter and main by the order function by creating variables






//========================================= DESTRUCTURING OBJECTS ==============================
//for destructuring the objects we use the curly "{}" braces

const {name,categories,openingHours}=restaurant;
console.log(name,categories,openingHours);

//if we want to assign the new name
const {name:restaurantName,categories:restaurantCategories,openingHours:Resop}=restaurant;
console.log(restaurantName,restaurantCategories,Resop);


//mutating variables("swap/ changes variables")
let p=999;
let q=888;
const obj={p:7,q:8,r:9};

({p,q}=obj);//now we get the values of p and q from the obj OBJECT
console.log(p,q); 

//retrive the nested objects
const {fri:{open:o,close:co}}=openingHours;
console.log(o,co);




//========================== THE SPREAD OPERATOR ==================================
//the spread operator is used to basically expand the array into all its element,, so basically unpacking the all the array at the once

const arr1=[7,8,9];
//if we want to add the new memb, then by old method
const oldarr1=[1,2,arr1[0],arr1[1],arr1[2]];
console.log(oldarr1);

//by the spread operator
const newarr=[1,2,...arr1];
console.log(newarr);

console.log(...newarr);//by this we can log the indivisually all elements 


//now if we want to add the new item in our restrount main menu than we do it like
const newMainMenu=[...restaurant.mainMenu,'Pav Bhaji'];
console.log(newMainMenu);


//the spread operator is diff from destructuring is that it doesnt created by help of the variables

//============ functionalities of the spread op. ======

//1.copy arrays
const copyMainMenu=[...restaurant.mainMenu];
//2.joint arrays
const jMainMenu=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(jMainMenu);

//spread op. are work on iterables
//Iterables:arrays,maps,string,sets. NOT OBJECTS
//but in es2018 it also works in the OBJECTS

const MYname='TIRTH';
const MYname1=[...MYname,'','A.']
console.log(MYname1);

//PRACTICAL EX.
const ingredients=[
    prompt('let\s make pizza with ingredient1 ?'),
    prompt('  ingredient2 ?'),
    prompt('  ingredient3 ?')];
    console.log(ingredients);
    restaurant.order_pizza(...ingredients);


//============================================= REST PATTERNS AND PARAMETERS ========================


//rest is exactly opposite of the spread op.
//it will pack the elements into the arrays
//it uses the spread syntax   but in spread we have "..." in right side of the "=" and in the rest we have  it left side
//the rest element must be last element

const [u,v,...others] =[1,2,3,4,5]
console.log(u,v,others);


const [pizza,,rissotto,...others1]=[...restaurant.mainMenu,...restaurant.starterMenu]
console.log(pizza,rissotto,others1);

//IN OBJECTS
const {sat,...weekdays}=restaurant.openingHours;
console.log(weekdays); 
   
//IN FUNCTIONS
const add= function (...numbers) {
    console.log(numbers);
    let sum=0;
    for(let i=0;i<numbers.length;i++)sum+=numbers[i];
    console.log(sum);
}
add(1,2,3)
add(1,2,3,5,5,55,6);
add(4,4,5,67,8,9,3,2,2,3,4,55,6);//by this rest we can use for many arguments in the functions


restaurant.order_pasta('spegeti','souse','flour','oregano');





//================================ SHORT CIRCUITING(&& and _) ==========================================



//so we can use OR operator with NON BOOLEAN values
console.log(3 || 'tirth' ); 
//so it will gives the 3 bcse
//if the comp. is b/w nonboolean than it will automatically return the truthy values 
//here it will even not checks the 'tirth' bcse it finds truthy 3 so it will give 3
//THAT IS WHAT WE MEANT SHORT CIRCUITING

console.log(''|| 'tirth');
console.log(true || 0);
console.log(undefined || null);
console.log(''||undefined||null||'tirth'||20);  //HERE WE GET 'TIRTH' AS RESULT BCSE ITS A FIRST TRUTHY VALUE

//PRACTICAL EX. IF WE WANT TO ADD GUEST NO. THAN IT WILL CHOOSE DEFUALT(TRUTHY) VALUE IF IT DOESNT EXIST
const guests=restaurant.numbGuest?restaurant.numbGuest:10;
console.log(guests);

//or we can do this
restaurant.numbGuest=20;
const guests1=restaurant.numbGuest || 10;

console.log(guests1);
//but if we set the value =0 then we get the 0 as the default value



console.log('------- AND OP. ----------');//it is opp. of the 'OR'

//AND VALUE WILL SHORT CIRCUITS WHEN FIRST VALUE IS FALSY
console.log(0 && 'tirth');
console.log(9 && 'tirth');


//PRACTICAL EXAM
if(restaurant.order_pasta){
    restaurant.order_pasta('musharooms','oregano')
};
//OR BY THE &&
restaurant.order_pasta && restaurant.order_pasta('musharooms','oregano');




//==============================================================================================
//=========================================================================================================
///============================================================================================================================
//===============================CODING CHALLANGE #1 =======================================

/* 
    We're building a football betting app (soccer for my American friends 😅)!
    Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  

  //#1
  const [player1,player2]=game.players;
  console.log(player1,player2);

  //#2
  const [gk,...fieldPlayers]=player1;
  console.log(gk,fieldPlayers);

  //#3
  const allPlayers=[...player1,...player2];
  console.log(allPlayers);

  //#4
  const players1Final=[...player1,'Thiago', 'Coutinho' ,'Perisic'];
  console.log(players1Final);

  //#5
  const {odds:{team1,x:draw,team2}}=game;
  console.log(team1,draw,team2);

  //#6
  const printGoals=function(...players){
console.log(`the goals scored are ${players.length}`);
  }
  printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
  printGoals('Davies', 'Muller');
  printGoals(game.scored);
  //so in upper we add the spead bcsse without that it will consider it as the one array

printGoals(...game.scored);

//#7
team1<team2 && console.log('team 1 is more likely to win');





//==============================================================================================================
//==================================LOOPING ARRAY BY 'FOR-OF' LOOP ========================================

//here we looping our entire menu of the restrunt

const menu=[...restaurant.starterMenu,...restaurant.mainMenu];

for(const item of menu) console.log(item); 
//each element will be logged one by one
//NOTE: in this looping type of for you can still use the BREAK and CONTINUE words

//if you want the current item an also the index then you can do this 
for(const [id,ele] of menu.entries()) {
   
    console.log(`${id+1}:${ele}`);// by this line the menu will start from the 1 as in restro
}


//============================================================================================================
//=============================    OPTIONAL CHAINING    ==================================================

//IF we write the 
//console.log(restruant.openHour.mon) then we get the error of uncought so we first have to check that first that it exist or not
//so we can do it by the 2 ways

//#1
if(restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.openingHours);
//so by this if it is not true than it will not give any result so NO ERROR

//              or we can do this by function of the ES2020 OPTIONAL CHAINING

//#2

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open);
//so here it works that if the property have at the left of the "?" (here "mon") will true then the openingHours will get read
//if it doent true than it will gib=ve the "undefined";
//WHY IT IS DIFF FROM "IF" ====> IN IF WE DONT HAVE ANY OUTPUT SO WE CANT DECIDE BUT IN "OC" WE HAVE UNDEFINED SO WE CAN HAVE THAT EHIS PROPERTY IS NOT TRUE

//EXAMPLE
const days=['mon','tues','wed','thu','fri','sat','sun'];
for(const day of days){
    const open=restaurant.openingHours[day]?.open ?? 'closed';//by this you not get "on mon we open at undefined"
    //here we used the ?? so it will prevent sat open to undefined bcse its open on 0 so falsy value 
    //?? is called "nullish cohesion op."
    console.log(`on ${day} we open on ${open}`);    
}

//if want to use the variable as the properth than you have to write it into the []

//YOU CAN ALSO CHECK FOR THE METHODS AS THEY EXISTS OR NOT
console.log(restaurant.order ?.(0,1) || 'METHOD DOEN\T EXISTS');





//===============================================================================================================
//========================= LOOPING OBJECTS,OB KEYS,VALUES AND ENTRIES ==========================================


//WE can also loop over the objects but in indirect way
//in object we can loop both property and value or together

//first we loop propertyNAMES(keys)

const properties=Object.keys(openingHours);
console.log(properties);

let openstr=`we are open on ${properties.lenght} days `;
//or more advance
for(const day of properties ){
    openstr += `${day},`;
}
console.log(openstr)

//PROPERTY VALUES 
const values=Object.values(openingHours);
console.log(values);

//ENTIRE ARRAY(property + values)

const entrire=Object.entries(openingHours);
// console.log(entrire);
//we will loop over both the one

for(const [key,{open,close}] of entrire)
{
   console.log(`on ${key} we open at ${open} and close at ${close}`)
}
//here we used the {open,close} bcse 'value'  is the object not propp. so we have replace it  with its prop. 




//===============================================================================================================
//=====================================CODING CHALLANGE #3 ===================================================
//======================================================================================================


/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/


//#1
const fnames=Object.entries(game.scored)
for(const [i,name] of fnames ){
    console.log(`${name} has scored the ${i} goal`);
}

//#2

const odds1=Object.values(game.odds);
let average=0;
for(const odd of odds1)
    average+=odd;
    average /= odds1.length ; //this means average=average/odds
    console.log(average);

//#3
for(const [team,odds] of Object.entries(game.odds)){  //here we use the Ob.ent bcse we want to fetch that from the object

const teamstr=team==='x'?'draw':`victory ${game[team]}`;
console.log(`odd of ${teamstr} is ${odds}`);

}

//in previous version of the js we have only two data stru array and objects but in the es6 we have more two
//sets and maps



//==================================================================================================================
//============================================= SETS ==================================================================

//SET IS BASICALLY A COLLECTION OF THE UNIQUE VALUES 
//SO "A SET CAN NEVER HAVE ANY DUPLICATES"

//NOW WE HAVE TO USE "NEW " KEYWOED FOR CREATING A SET

const orderSet= new Set(['pasta','pizza','pizza','risotto','pasta','pizza']);        //IN () WE  WRITES ITERABLES LIKE THE ARRAY
console.log(orderSet);  //now it will print only the non repeated strings

console.log(new Set('TIRTH'));  //you got only 'T' 'I' 'R' 'H'

//knowing the size of the set we have "size" keyword
console.log(orderSet.size);

//if certain element is in the set or not "has" keyword //in arrays we have "include"
console.log(orderSet.has('pizza'));
console.log(orderSet.has('DOSA'));

//add the new reciepi
orderSet.add('pav bhaji');
console.log(orderSet);  

//delete the recipie
orderSet.delete('risotto');
console.log(orderSet);


//UNLIKE ARRAYS IN SETS THERE IS NO INDEXES SO WE CAN NOT ERETRIVE THE DATA SO NO DATA RETR, IN THE SETS
//IF YOUR GOAL IS TO RETRIVE THE DATA IN ORDER THEN USE THE ARRAYS 

//LOOPING
for(const setloop of orderSet){
    console.log(setloop);
}

//IN NORMAL USE CASE SET IS USED TO REMOVE DUPLICATE VALUES IN THE ARRAYS
//EXAMPLE
const staff=['waiter','manager','sweeper','waiter','manager'];
const setStaff=[...new Set(staff)]; //converted it to the arrays using the spread  
console.log(setStaff); 


//=================================================================================================================
//================================================ MAPS ========================================================

//A MAP IS A DATA STRUCTURE THAT WE CAN USE TO "MAP VALUES TO KEYS"
//DIFFE BW MAPS AND OBJECTS: THAT IN MAPS KEYS CAN HAVE ANY TYPE
                          // IN OBJECTS KEYS ARE ALWAYS STRINGS


const rest=new Map();
rest.set('name','classicano italiano');   //here name is the key and ci is the value                          
rest.set(1,'frienze,italy');
console.log(rest.set(2,'lisbon,portugal')); //it have number type key and it will print entire MAP

//WE CAN ALSO DO CHAINING BY THE "SET"
rest.set('catagories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11 )
    .set('close',23)
    .set(true,'we are open')
    .set(false,'we are closed');

//YOU CAN GET THAT PERTICULAR KEY DATA BY THE "GET" KEYWORD
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));


//FUN CHALLANGE
const ftime=24;
console.log( rest.get(ftime >rest.get('open') && ftime<rest.get('close')));
//now how it works 
//so first it will compare that our ftime is greater than open or close suppose if it gives true than it will 
//indirectly prints the "we are open"


//METHORDS IN MAPS {EXCEPT SET AND GET}
console.log(rest.has('catagories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);


//IF YOU DO THIS YOU GET THE ERROR
/* 
rest.set([1,2] , 'test);
console.log(rest.get([1,2]))
SO YOU WILL GET ERROR UNDEFINED BCSE HEAP IN JS WILL CONSIDER IT AS SOME OTHER ARRR 
*/

const arr11=[1,2];
rest.set(arr11,'test');
console.log(rest.get(arr11));


//new way of enhancing the map
const question=new Map([
    ['question','which language is the best?'], 
    [1,'c'],
    [2,'java'],
    [3,'JAVASCRIPT'],
    ['correct',3],
    [true,'correct 🎉'],
    [false,'incorrect!']    
]);
console.log(question);//so as we can see as it has the same structure as "Object.entries"


//CONVERT OBJECT TO MAP
console.log(Object.entries(openingHours));
const hoursMap=new Map(Object.entries(openingHours));
console.log(hoursMap);



//ITERATING THE MAPS
//LITTLE QUIZ
console.log(question.get('question'));
for(const [key,value] of question){       //here no need to write .entries bcse MAPs are iterables
    if(typeof key==='number')
   console.log(`answer is ${key} : ${value}`);
    
}
const answer=Number(prompt('answer for quiz'));
console.log(answer);

console.log(question.get(question.get('correct')===answer));




//===================================================================================================================
//=======================================CODING CHALLLANGE #3 ========================================================
//=======================================================================================================================




/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

  //#1

  const events=gameEvents.values();
  const  chSet=[...new Set(events)];
  console.log(chSet);

  //#2

  gameEvents.delete(64);
  //console.log(gameEvents)

  //#3
  console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`); 

  //#4
  const half=gameEvents.keys<45?"first":"second";
  for(const [min,event] of gameEvents){
    const half=min<45?"first":"second";
    console.log(`[${half }half] ${min}:${event}`)
  }



//===================================================================================================================================
//========================================== WORKING WITH THE STRINGS PART1 ===================================================


//here we uses the airplane example
const airline='Tata Air India';
const modal='boing';

console.log(modal[0]);//by this we have the first char of the 'boing'
console.log(modal.length);// for the lenght 


//===METHODS OF THE STRIGS

//get the certain index position
console.log(modal.indexOf('i'));
console.log(airline.lastIndexOf('i'));//here you get the index of the 'i' from the last
console.log(airline.slice(5)); //this will starts the strings after the 4th index[5th place]
console.log(airline.slice(5,8));//by this it can slice btw 5 to 8

console.log(airline.slice(0,airline.indexOf(' ')));
//is used when we used when we dont know the last index of the word so here it will print, 
//word until the first space will come 

console.log(airline.slice(airline.lastIndexOf(' ')+1));
//this will print the last word without space at the begining.

console.log(airline.slice(-3));
//this will extrsct the code from the ending
console.log(airline.slice(1,-1));


//here we use some in the ex. here we detect that the Plane has the middle seat or not

const checkMiddleSeat=function(seat){
//B and E are the middle seat
const s=seat.slice(-1);

if(s==='B'|| s==='E')

            console.log(`${seat} is middle seat 😒`);

else
            (console.log('you got luckey 😁'))
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');



//===================================================================================================================================
//========================================== WORKING WITH THE STRINGS PART2 ===================================================

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());


//replace the part of the string

const priceGB='200,10£';
const priceUS=priceGB.replace('£','$').replace(',','.');
console.log(priceUS);

const Announcement='all the passanger came nearby boarding door 23,boarding door 23';
console.log(Announcement.replaceAll('door','gate'));//this will replace all 'door' with the 'gate'


//booleans
const planes='mig 21';
console.log(planes.includes('mig 21'));
console.log(planes.startsWith('MIG'));
console.log(planes.endsWith('21'));



//===================================================================================================================================
//========================================== WORKING WITH THE STRINGS PART3 ===================================================

//split
console.log('a+new+string'.split('+'));//now it will split the string by the + and store it to the new aray

//using the destructuring

const [Firstname,Lastname]='Tirth Joshi'.split(' ');
console.log(`my name is ${Firstname} and surname is ${Lastname}`);  

//   'join' mehod will do the exacty opposite of the 'split'

const newName=['Mr.',Firstname,Lastname].join(' ');
console.log(newName);


//EXAMPLE
//supose the passanger have the multipld name and we want to capitalize the only the first letter
//then we first split and store into the array then we capitelixe the first letter by looping the array

const CapitalizeName= function(name){
const names=name.split(' ');
const nameUpper=[];
      for(const n of names)
      {
         nameUpper.push(     n[0].toUpperCase()+n.slice(1)  ) ;
      }

// or 

      for(const n of names)
          {
             nameUpper.push(     n.replace(n[0],n[0].toUpperCase())  ) ;
         }



 console.log(nameUpper.join(' '));
}
CapitalizeName('tirth anilkumar joshi');


//PADDING
const padd='go to gate no. 40';
console.log(padd.padStart(25,'+'));
//so this will padd the string from the start and add the '+' from the start until the string get the 25 letter long

console.log(padd.padEnd (25,'+'));

//REPEAT
const message='BAD WEATHER ... ALL THE FLIGHTS DELAYED';
console.log(message.repeat(4));// this will repeat 4 times 




//===============================================================================================================================
//=========================================CODING CHALLANGE #4============================================================
//=====================================================================================================================================
//=========================================================================================================================


// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/  
//NOTE a camel case is the pair of word in which the second word's first word is capital

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows=text.split('\n')
  console.log(rows);

  for(const [i,row] of rows.entries()){
   const [first,second]= row.toLowerCase().trim().split('_')
  const output=`${first} ${second.replace(second[0],second[0].toUpperCase())}`;
  console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
}
     })