// Write a JavaScript code to reverse the array colors without 
// using the reverse method.

 const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
 let reverseColor=[];

 for(let i=colors.length-1; i>=0;i--){
    reverseColor.push(colors[i])
 }
 console.log(reverseColor)