
//Locating the html elements 
const body = document.querySelector('body');
const button = document.querySelector('#btn');
const span = document.querySelector('.color');

const colorArray = ['Red', 'Blue', 'Green', '#f15025', 'rgba(133,122,200)'];

//Adding an event Listener to the button
button.addEventListener('click', () => {
    const randomColors = randomNumber();
    body.style.backgroundColor = colorArray[randomColors];
    span.textContent = colorArray[randomColors];
})


//Function that returns the colors randomly 
const randomNumber = ()=>{
    return Math.floor(Math.random() * colorArray.length);
}