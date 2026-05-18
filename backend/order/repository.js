//No me ha dado tiempo a finalizarlo lo siento.
const order = require('./model')
const repo = {}

repo.findOrder = (id) => {
    
    if (id == 0){
        return order
    }
    return null
}

repo.createOrder = (newOrder) => {
    
    return newOrder
}

repo.editOrder = (id, dataToUpdate) => {
    
    return { id: id, ...dataToUpdate }
}

repo.deleteOrder = (id) => {
   
    return { id: id, deleted: true }
}

repo.findMostProfitableProducts = () => {
    
    return [] 
}

module.exports = repo