const products = [
    {
        id: 1,
        name: 'iPhone 12',
        price: 1000,
        category: 'celular',
        img: '',
        stock: 25,
        description: 'Descripción del producto'
    },
    {   
        id: '2', 
        name: 'iPhone 11', 
        price: 800, 
        category: 'celular', 
        img: '', 
        stock: 25, 
        description: 'Descripción del producto' },
    {   
        id: '3', 
        name: 'iPhone 10', 
        price: 700, 
        category: 'celular', 
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

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}