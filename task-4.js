// Reverse the words of a sentence. Only the position of the word will
//  be reversed. check out the output

const statement = 'I am a hard working person'
const statementSplit=statement.split(' ');
// console.log(statementSplit)

let reversWord=[];
for(let i=statementSplit.length-1; i>=0;i--){
    // console.log(i)
    reversWord.push(statementSplit[i]);
}
console.log(reversWord)