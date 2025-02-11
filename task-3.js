// Use a for...of loop to concatenate all the elements of an array 
// into a single string.

 var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

 
var emptyString='';

for(let number of numbers){
    emptyString = emptyString+number ;
}
console.log(emptyString)
