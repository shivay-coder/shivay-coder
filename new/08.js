const mynums = [1,2,3];
// const mytotal= mynums.reduce(function(acc, curval) { 
//     console.log(`acc:${acc} and curval: ${curval}`);
//     return acc + curval
// },0)

const mytotal = mynums.reduce((acc,curr)=>acc+curr, 0)
// console.log(mytotal);

const shoppingcart = [
    {
        itemname: "js course",
        price: "2999"
    },
    {
        itemname: "java",
        price: "29,999"
    },
    {
        itemname: "python course",
        price: "299"
    }
]

const pricetopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetopay);