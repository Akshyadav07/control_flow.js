const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newnum = mynum.map((num) => {
//     return num + 1
// })

const mynums = mynum
.map((num) => num * 10)
.map((num) => num+1)
.filter((num) => num >= 10) 

console.log(mynums);
