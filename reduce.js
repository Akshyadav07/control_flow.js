const mynums = [1, 2, 3]

const total = mynums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(total);

const shoppingcart = [ 
    {
        itemname : "js cource",
        price : 2999
    },
    {
        itemname : "py cource",
        price : 299
    },
    {
        itemname : "c++ cource",
        price : 2900
    },
    {
        itemname : "php cource",
        price : 3999
    },
]

const pricetopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetopay);
