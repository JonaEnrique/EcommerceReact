const products = [
    {
        id: '1',
        name: 'Pantalon 1',
        price: 1000,
        category: 'pantalones',
        img: 'https://http2.mlstatic.com/D_NQ_NP_968186-MLA69364221498_052023-O.webp',
        stock: 25,
        description: 'Descripción del producto'
    },
    {   
        id: '2', 
        name: 'Pantalon 2', 
        price: 800, 
        category: 'pantalones', 
        img: 'https://http2.mlstatic.com/D_NQ_NP_723515-MLA49558516520_042022-O.webp', 
        stock: 25, 
        description: 'Descripción del producto'
    },
    {   
        id: '3', 
        name: 'Remera 1', 
        price: 700, 
        category: 'remeras', 
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/053/068/products/mujer-afro-11-da492bf8650e3e52e116645715620104-640-0.webp', 
        stock: 25, 
        description: 'Descripción del producto'
    },
    {
        id: '4',
        name: 'Pantalon 3',
        price: 1000,
        category: 'pantalones',
        img: 'https://http2.mlstatic.com/D_NQ_NP_636335-MLA51279879369_082022-O.webp',
        stock: 25,
        description: 'Descripción del producto'
    },
    {
        id: '5',
        name: 'Pantalon 4',
        price: 1000,
        category: 'pantalones',
        img: 'https://www.estilos.com.pe/208927-home_default/essence-camisa-ml-landers.jpg',
        stock: 25,
        description: 'Descripción del producto'
    },
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