'use strict';

//==========================================================================================================================
//======================================= DEFAULT PARAMETERS ================================================= 

const bookings=[];

const createBooking = function(flightNum,Passangers=2,Price=200){

                const booking={
                    flightNum,
                    Passangers,
                    Price,
                }
                console.log(booking);
               bookings.push(booking);
               

}
createBooking('boing123',undefined,undefined);
//now here the thing is that 2nd para meter is undefined mean it compare that to the default by the short circuiting
//so it choose 1 rather than the falsy values



//==========================================PASSING THE ARGUMENTS ================================================

const flight='LH234';
const tirth={
    name: 'Tirth Joshi',
    passport:23398843094523
}

const checkIn=function (flightNum1,passanger){

    flightNum1='LH200';
    passanger.name='mr.'+passanger.name; 

    if(passanger.passport===23398843094523){
      alert('you have checked in');
    }else{alert('not valid passport')}

};
checkIn(flight,tirth);
console.log(flight);
console.log(tirth);

//so here in the output you can see that only output of the 'tirth' manipulated not of the flight 
//bcse in checkIn function we only pass the 'reference' for the passanger of tirth's name(ref. type arg.)
//but in the 'flight' we try to manipulated that by the 'flightNum1' by the 'primitive type arg.'
//so nothing would changes but in the 'passanger.name' it also changes the original.

//in reference funct. its only copy the reference in the 'memory heap' so, they will get manipulated bcse
//they basicallly are the same object in the memory

//REAL LIFE EX.....
const newPassport=function(person){
    person.passport=Math.trunc(Math.random()*100000000000);
    console.log(person.passport);
};

newPassport(tirth);
checkIn(flight,tirth);


//so here the thing is happened that first it manipulates the passport no. by any random value as we pass 
//the 'tirth' object
//then we call the 'checkIn' function so it will have that random value of passport so 
//it will alert the 'not valid passport'  ;


//===========================================================================================================================
//================================== FUNCTIONS ACCEPTING CALLBACK FUCTIONS =======================================
//====================================== HIGHER ORDER FUNCTIONS =====================================

//HIGHER ORDER IS A FUNCTION TYPES IN WHICH WE PASS THE ANOTHER FUNCTIONS AS THE PARAMERTER

const onWord= function(str){
    return str.replace(/ /g,'').toLoweCase();
};

const UpperFirstWord= function(str){
    const [first,...others]=str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
};
    

//higher order function
const transformer=function(str,fn){

    console.log('original string is'+str);
    console.log(`transformed string is  ${fn(str)}`);
    console.log(`transformed by ${fn.name}`);

}
transformer("Javascript is the best",UpperFirstWord);


//other example of the callback
const high5=function(){
    console.log('🖐🏽');
}
document.body.addEventListener('click',high5);


//so this callback is mainly used in the abstraction of the code
//"abstraction means==> we dont really care that the what code does we want just code to happened"
//here 'transformer' uses the abstraction by really dont care what the 'str' and 'fn' do 


//===========================================================================================================================
//=========================================== THE CALL AND APPLY METHOD ===================================================
//==========================================================================================================


//here we below we use the this keyword that will point to the lufthansa airline

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
      console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
  };
  lufthansa.book(239, 'Jonas Schmedtmann');
  lufthansa.book(635, 'John Smith');
  

//now suppose the lufthansa have the another frenchaise named "eurowings"
// now it also have to be  the same method as the lufthansa named=>"book"
//but the booking will work in lufthansa bcse of "this"  so we can not use ot in the "euroswings"
//so we make it new function through the reference

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };
  const book = lufthansa.book; //here we try to access the book using ref.

  // Does NOT work
// book(23, 'Sarah Williams');


//now we can acccesss direcrtly we here use of CALL starts
 
book.call(eurowings,23,'sarah williams')
//here the first arguments is the one which will be trying to call
console.log(eurowings); 

book.call(lufthansa,40,'marry cooper');
console.log(lufthansa);


//SUMMERY ===>so the summery is that even though the code of "book" is in the lufthansa we can access by the call
//now we can make new airlines easily


//==============APPLY
//it also does the same thing but it will not recieve list of args.
//but it will recieeve array and then passs to function

book.apply(eurowings,[534,'marry cooper']);