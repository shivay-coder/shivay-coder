const coding = ["js","ruby","java","python","cpp"]
// const values = coding.forEach((item) => {
//     // console.log(item);
// })
// console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9,10]
const newnums = mynums.filter((num)=>num>4)
const thisnums = mynums.filter((num)=> {
   return num > 4
})
console.log(newnums)
console.log(thisnums)