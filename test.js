const products = [
    { id: 1, name: 'Laptop', price: 1200, tags: ['electronics', 'computer'] },
    { id: 2, name: 'Phone', price: 800, tags: ['electronics', 'computer'] },
    { id: 3, name: 'Tablet', price: 600, tags: ['electronics', 'computer'] },
];


const filter = products.filter(product => product.price > 700);


const abc= filter.map(({ name, price }) => `Product: ${name}, Price: ${price}`);


console.log(abc);




























