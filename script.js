let values = [2, 22, 33, 44, 55, 66, 77, 89, 88];
let func = function(values) {
    
    let results = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 !== 0) {
            results.push(values[i]);
        }
    }
    console.log("the odd numbers are", results);
};
func(values) 


let equation = (function() {
    
    let results = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 == 0) {
            results.push(values[i]);
        }
    }
    console.log("the even numbers are", results);
})([2, 22, 33, 44, 55, 66, 77, 89, 88]); 



let numbers = [1,2,3,4,5,6,7,8,9,0];
let results = numbers.filter(numbers=>numbers %2 != 0)
console.log("the odd numbers are" , results)

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

console.log(titleCase("geeks for geeks")); 

let sum =( function (array) {
    let total = 0; 
    for (let i = 0; i < array.length; i++) {
        total += array[i]; 
    }
    return total; 
  
})([1, 2, 3, 4, 5]);


let array = [1,2,3,4,5]
let sums = function (array) {
    let total = 0; 
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total; 
};

console.log(sums(array)); 


let array = [1, 2, 3, 4, 5];
let sum = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};

console.log(sum(array)); 




let numbers = [22, 11, 32, 43, 1, 2, 4, 65, 7, 8];

(function() {
  let primes = [];
  for (let num of numbers) {
    if (num <= 1) continue; 
    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  console.log("The prime numbers are:", primes);
})();



let numbers = [22, 11, 32, 43, 1, 2, 4, 65, 7, 8];

(() => {
  let primes = [];
  for (let num of numbers) {
    if (num <= 1) continue; 
    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  console.log("The prime numbers are:", primes);
})();
