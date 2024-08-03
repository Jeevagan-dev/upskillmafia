//problem1
console.log('problem1');
const numbers = [1,4,6,8,2,7];

const squaredNum = numbers.map(num => Math.pow(num,2) );

console.log(squaredNum);

//problem2
console.log('problem2');
// const studentMark = parseInt(prompt('Enter your mark'));
const studentMark = 39 ;

const Grade = studentMark > 80 ? "A" : studentMark > 60 ? "B" : studentMark > 40 ? "C":studentMark > 30 ? "D" : "F";

console.log(Grade);

//problem3
console.log('problem3');
const car = {
    name : 'Suzuki 2',
    model : 203849,
    year : 2023
}

const changeYear = (car,year) =>{
    car.year = year;

}

changeYear(car,2015);

const {model , year} = car ;

console.log(model , year);

//problem4
console.log('problem4');

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }
  

  const numbersArr = [10, 15, 23, 28, 37, 44, 59, 63];

  const primeNumbers = numbersArr.filter(isPrime);
  
  console.log(primeNumbers); 


  //problem5 

  console.log('problem5');

  console.log("Map function is created to iterate the array values and print it in a single line code");
  console.log("filter function is used to filter the specific result and return as new array");
  console.log('reduce is used to add accumulator and current value for example summing the array');

    //problem6 

    console.log('problem6');
  
    const fetchPost = async ()=>{
        const RequestData = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        const result = await RequestData.json();

        const resultData = result.map((post)=> console.log(post.id + ' ' + post.name));
    } 

    fetchPost();
  

  //problem7

 console.log('problem7');

  const person = {
    name : 'jeev',
    address:{
        door: 3/404 ,
        city : 'arani'
    },
    contact:{
       email: 'xyz@gmail.com',
       phone: 1234567890
    }
  }
  
  const phone = person.contact?.phone;
  console.log(phone);


    const person2 = {
    name : 'jeev',
    address:{
        door: 3/404 ,
        city : 'arani'
    },
    contact:{
       email: 'xyz@gmail.com',
    }
  }

  const withoutPhone = person2.contact?.phone;

  console.log(withoutPhone);