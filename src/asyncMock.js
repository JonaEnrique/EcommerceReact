const products = [
    {
        id: '1',
        name: 'Pantalon 1',
        price: 1000,
        category: 'pantalones',
        img: '',
        stock: 25,
        description: 'Descripción del producto'
    },
    {   
        id: '2', 
        name: 'Pantalon 2', 
        price: 800, 
        category: 'pantalones', 
        img: '', 
        stock: 25, 
        description: 'Descripción del producto' },
    {   
        id: '3', 
        name: 'Remera 1', 
        price: 700, 
        category: 'remeras', 
        img: '', 
        stock: 25, 
        description: 'Descripción del producto' },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}