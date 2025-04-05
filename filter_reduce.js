const coding = ["js","py","ruby","cpp","js"]

// const values = coding.forEach((item) => {
//     console.log(item);  // forvalue is not return any value 
// })
// console.log(values);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newnums = mynum.filter( (num) => num > 4 ) // we can also use arrow fn like this (() => {} )
// console.log(newnums);

//   or we use this method like this 

const minum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 
// const latestnums = minum.filter( (num) => {
//     return num > 4
// }) 
// console.log(latestnums);

const newNum = []
myNum.forEach( (num) => {
    if ( num > 4 ){
        newNum.push(num)   
    }
})
console.log(newNum);
