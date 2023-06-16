'use strict';
//here we makes the variable of the differernt classes so we dont have to make the write it again and again

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const closebtn=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal');

for(let i=0;i<btnsOpenModal.lenght;i++)
btnsOpenModal[i].addEventListener('click',function(){
    console.log("button clicked");  
    modal.classlist.remove('hidden');
    overlay.classList.remove('hidden');
});


//there are 3 events in the keyborads in js 
//1 keydown is fired when we pressdown the key(uses generally)
//2 keypress as fire continuesly as we keep our finger on certain key
//3 keyup when we lift or finger off the keyboad or off the key

// by below code we can add the key manipulation

const closemodal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && modal.contains('hidden'))
closemodal();

})

//here we have the 'e' variable that will store all the activity from the event listener
//herre it will store the which key is pressed so we willmake the condition that if escape will presses than 
//it will close the modal ,,, the second condition says that this thing will apply only when modaal is visble
