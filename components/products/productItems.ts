export interface product {
    id: number,
    name: string,
    category: string,
    price: number,
    stock: number,
}

const products: product[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        category: 'Electronics',
        stock: 40,
    },
    {
        id: 2,
        name: 'Product 2',
        price: 24.99,
        category: 'Clothing',
        stock: 0,
    },
    {
        id: 3,
        name: 'Product 3',
        price: 5.49,
        category: 'Home & Kitchen',
        stock: 10,
    },
]
export default products;