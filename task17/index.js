import data from './data.js';
function adddata(){
    alert('hey');
}


function skipdata(){

}
let browser = document.getElementsByClassName('browse')[0];
let newdiv = document.createElement('div');
    newdiv.innerHTML = `<h1>${data[1].name}</h1>
    <button id='adddata' > add item </button>
    
    `;
    
    browser.appendChild(newdiv);

document.getElementById('adddata').addEventListener('click',()=>{
   
})
console.log(data)