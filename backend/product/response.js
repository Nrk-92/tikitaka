const response = {}

response.map = (product) => {
    if (product && product.id !== undefined){
        return {
            product: {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                stock: product.stock
            }
        }
    }
    return { product: product }
}

response.mapAll = (products) => {
    let mappedProducts = []

    if (products && products.length > 0) {
        products.forEach((product) => {
            mappedProducts.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                stock: product.stock
            })
        })
    }

    return {
        products: mappedProducts
    }
}

module.exports = response