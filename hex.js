
//Selecting elements in the html page
const bg = document.querySelector('body');
const btn = document.querySelector('#btn');
const span = document.querySelector('.hexaColor');


const colorCodes = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

//Adding an event listener to the buttons and looping through the color codes array
btn.addEventListener('click', ()=>{
    let codes = '#';
    for(let i = 0; i < 6; i++){
        codes += colorCodes[randomColor()];
    }
    span.textContent = codes;
    bg.style.backgroundColor = codes;
})


//Function that returns the colors randomly 
function randomColor(){
    return Math.floor(Math.random() * colorCodes.length);
}