const friends = ['tom Hanks', 'Tom Cruise', 'Tom Brady','Tom Solaiman'];

const fLengths = friends.map(friend =>friend.length);
// console.log(fLengths);

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 1500, color: 'black'},
    {name: 'watch', price: 3000, color: 'black'},
    {name: 'wsticky note', price: 30, color: 'pink'},
    {name: 'water glass', price: 3, color: 'white'},
]

const productNames = products.map(product => product.name);
// console.log(productNames);

const productPrices = products.map(product => product.price);
// console.log(productPrices);

const productColors = products.map(product => product.color);
// console.log(productColors);
products.forEach(product => console.log(product));
// products.map(product => console.log(product));