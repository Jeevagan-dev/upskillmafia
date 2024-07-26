let head = document.getElementsByTagName('h1')[0];

let red = document.getElementsByClassName('red');
let blue = document.getElementsByClassName('blue');
let green = document.getElementsByClassName('green');
let yellow = document.getElementsByClassName('yellow');




function greet(){
  const myform = document.getElementsByTagName('form')[0];
  const newText = document.getElementsByTagName('input')[0].value;
  myform.addEventListener('submit',(event)=>{
    event.preventDefault();
    head.innerText = "Hello , " + newText ;
  })
}

let changeBg = (event)=>{
    let changecolor = document.getElementsByClassName(event.srcElement.className)[0];
    changecolor.style.backgroundColor = event.srcElement.className ;
    changecolor.style.color = 'white' ;
}