// Give a product description as a string. revers the order of the words while
// keeping the characters in each word unchanged

// input:
// "Lightweight and durable backpack"

// outPut:
// "backpack durable and Lightweight"

let string='Lightweight and durable backpack';
let splitString= string.split(' ')
// console.log(splitString)
let reverseString= "";

for(let i=splitString.length-1; i>=0; i--){
      reverseString = reverseString + splitString[i] ;
      if(i!==0){
        reverseString = reverseString+ " ";
      }   
}
console.log(reverseString)