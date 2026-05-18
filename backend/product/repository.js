const db = require('../db'); 

const repo = {};

repo.findProduct = async (id) => {
    const query = 'SELECT * FROM product WHERE id = ?';
    const [rows] = await db.execute(query, [id]);
    
    if (rows.length > 0) {
        return rows[0];
    }
    return null;
};

repo.findAll = async () => {
    const query = 'SELECT * FROM product';
    const [rows] = await db.execute(query);
    return rows;
};

repo.createProduct = async (newProduct) => {
    const query = 'INSERT INTO product (name, price, image, stock) VALUES (?, ?, ?, ?)';
    const [result] = await db.execute(query, [
        newProduct.name, 
        newProduct.price,
        newProduct.image,
        newProduct.stock
    ]);
    
    return { id: result.insertId, ...newProduct };
};

repo.editProduct = async (id, dataToUpdate) => {
    const query = 'UPDATE product SET name = ?, price = ?, image = ?, stock = ? WHERE id = ?';
    await db.execute(query, [
        dataToUpdate.name,
        dataToUpdate.price,
        dataToUpdate.image,
        dataToUpdate.stock,
        id
    ]);
    return { id: Number(id), ...dataToUpdate };
};

repo.deleteProduct = async (id) => {
    const query = 'DELETE FROM product WHERE id = ?';
    await db.execute(query, [id]);
    return { id: Number(id), deleted: true };
};

module.exports = repo;