const response = {}

response.map = (order) => {

    if (order && order.id !== undefined){
        return {
            order:{
                id: order.id,
                clientMail: order.clientMail,
                date: order.date,
                totalPrice: order.totalPrice
            }
        }
    }

    return {
        order:order
    }
}

response.mapAnalytics = (products) => {
    return {
        analytics: {
            mostProfitableProducts: products
        }
    }
}

module.exports = response