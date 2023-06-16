'use strict';

//in this case we have the id selection so we select the id not the class because if we select the class then we make change in bith player1 and in player2


const score0El=document.querySelector('#score--0');//# will defines the id
const score1El=document.getElementById('score--1');//this is the second way of select the id
const diceEl=document.querySelector('.dice');//for dice image
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');
const btnnew=document.querySelector('.btn--new');
const currscore0El=document.getElementById('current--0');
const currscore1El=document.getElementById('current--1');

const player1el=document.querySelector('.player--0');//it is the class of whole section of the player so we can change the color when switching the player
const player2el=document.querySelector('.player--1');


//now we make the score by defoult zero
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');//by this we can set our image to none
let currentscore=0;
let activeplayer=0;//this will tell that activeplayer is startingly is player0
const scores=[0,0]//holds the scores of the players
let plays=true;//this will be used when,we want  to stops the func. of all buttons after we wins





//====================== functionality of rollling the dice ====================================================



btnroll.addEventListener('click',function(){

    if(plays){//means playing will start


    //getting the random dice roll
    const dice=Math.trunc(Math.random()*6)+1;
    console.log(dice)

    //display the dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    //check for the rolled 1
    if(dice!==1)
    {
        currentscore+=dice;
        document.getElementById(`current--${activeplayer}`).textContent=currentscore;//by this we assign the csore dynamically
    }
    else {
    //switches the player

    document.getElementById(`current--${activeplayer}`).textContent=0;//because current player has to be 0 bcse it has loss due to 1
      activeplayer=activeplayer===0?1:0;
     currentscore=0;

     player1el.classList.toggle('player--active');
     player2el.classList.toggle('player--active');
     //here toggle does the work that if a player1 has 'activeplayer' class(responsible for color change) then
     //it will remove it or if doesnt have then it will add the activeplayer class.
      
    }
}
})





///========================= add functionality of the hold button ==================








btnhold.addEventListener('click',function(){

    if(plays){
//1. add current score to the activeplayers total score

scores[activeplayer]=scores[activeplayer]+currentscore;
document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];

//2. if currentscore>100 then declare you wins
if(scores[activeplayer]>=100){
    plays=false;//means we won and finshes the playing
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');//back grpund changes
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    document.getElementById(`current--${activeplayer}`).textContent='🥳🥳you won🏆🏆';
    diceEl.classList.add('hidden');
}else{

//3. switches the player(put the same code we did before)

document.getElementById(`current--${activeplayer}`).textContent=0;
activeplayer=activeplayer===0?1:0;
currentscore=0;
player1el.classList.toggle('player--active');
     player2el.classList.toggle('player--active');
}

    }
})



//=============================== add the functionality of the new button ==========================


btnnew.addEventListener('click',function(){
    
    score0El.textContent=0;
    score1El.textContent=0;
    
        currscore0El.textContent=0;
        currscore1El.textContent=0;
        player1el.classList.classList.remove('player--winner');
        player2el.classList.classList.remove('player--winner');
        player1el.classList.classList.add('player--active');
        player2el.classList.classList.remove('player--active');
        
     
    
})
