console.log(document.querySelector('.message'));
//here the document is a object and queryselector is the method that will return the code elements(here the class=>message)
//by this we can get the css code(query ) 
//the below code is more specific than the above because it will give the data in that perticular task

console.log(document.querySelector('.message').textContent)
//it will return the text in that class 
//this is the ex. of the DOM manipulation

//BY THE DOM manipulation you can make a change in the HTML and CSS by the JS

document.querySelector('.message').textContent='correct number';
//as you can see above the we have manipulated(changed) the text content through the th js  more ex.

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=20;
document.querySelector('.guess').value=12;

//Event Listener is the thing that will happen when any event will occur by mouse or the keyboard



//========== MAKING OUR GUESSING NUMBER ===============
let numberg=Math.trunc(Math.random()*20)+1;
    let score=20;
    let highscore=0;
   

//this shows the corrret number and it will hode untill a player wins


//======================= HANDELING CLICK EVENTS ====================

//we will listens to the event on the "click" button 
//the "addEventListener" method has two arguments in it [1. Event is about to happen(ex=click etc)
                                                    //[ 2. is the EventHandeler means wha will happen if it we click on that]
                                                    
     
 document.querySelector('.check').addEventListener('click',function (){

    
 const guess= Number(document.querySelector('.guess').value);//here we have num. type because we must have the numbers to compare
 console.log(guess,typeof(guess));
    if(!guess)
    {
        document.querySelector('.message').textContent='please enter the number';
    }else if(guess===numberg)
    {
        
        document.querySelector('.message').textContent='🏆YOU HAVE WON THE GAME';
        document.querySelector('.number').textContent=numberg;
        document.querySelector('body').style.backgroundColor='#60b347'; 
        document.querySelector('.number').style.width='30rem';
        if(score>highscore)
        {
highscore=score;
        document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess>numberg)
    {
        if(score>1)
        {
            document.querySelector('.message').textContent='↗️ NUMBER IS TOO HIGH';
            score--;
            document.querySelector('.score').textContent=score;
        }else
        {
            document.querySelector('.message').textContent='☠️ GAME IS OVER'
        }
    }
    else if(guess<numberg)
    {
        if(score>1)
        {
            document.querySelector('.message').textContent='↗️ NUMBER IS TOO LOW';
            score--;
            document.querySelector('.score').textContent=score;
        }else
        {
            document.querySelector('.message').textContent='☠️ GAME IS OVER'
        }
    }
   
 })      
 

 //================ MANIPULATING THE CSS WITH THE JS ========================
 //here we add the feature of the screen(body) turn to green and number will get wider if you win
 //you can find that code in upper lines where player is winning
 

 
//now we add the functionality of the "again" button
/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/
document.querySelector('.again').addEventListener('click',function()
{
    let numberg=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='START GUESSING🤔';
    score=20;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('.number').style.width='15rem';
})