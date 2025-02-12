// Given a product price as a string (e.g..  '$249'), 
// extract the numeric digits and calculate their sum


let string='$24 9';

let splitString=string.split('');
//  console.log(splitString)
let sum=0;

for(let i=0; i<splitString.length;i++){
    let element = splitString[i];
    if(!isNaN(element) && element!==' '){
      sum=sum+ parseInt(element)
    }
}

console.log(sum)



// MY CODE, this is not correct way, If string ='2$4 9' then my code is not working
// for(let i=1; i<splitString.length; i++){
//     const element=parseInt(splitString[i]);
//     sum=sum+element;
// }
// console.log(sum)


