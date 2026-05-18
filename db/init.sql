USE TikiTaka;

-- TABLAS
CREATE TABLE IF NOT EXISTS product (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255),
    stock INT NOT NULL,

    CONSTRAINT pk_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS `order` ( 
    id INT AUTO_INCREMENT,
    customer_email VARCHAR(100) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_price DECIMAL(10,2) NOT NULL,

    CONSTRAINT pk_id PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS order_detail (
    id INT AUTO_INCREMENT NOT NULL,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    amount INT NOT NULL,
    product_price DECIMAL(10,2) NOT NULL,
    
    CONSTRAINT pk_id PRIMARY KEY (id),
    CONSTRAINT fk_order_id FOREIGN KEY (order_id) REFERENCES `order`(id),
    CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES product(id)
);



-- INSERTS
INSERT INTO product (name, price, image, stock) VALUES
('Equipacion personalizada (camiseta y pantalones) TikiTaka', 64.99, '/img/equipo1.jpg', 100),
('Accesorios personalizados (Espinilleras y Medias) TikiTaka', 31.99,'/img/accesorio1.jpg', 110),
('Botas de futbol personalizadas TikiTaka', 104.99, '/img/botas1.jpg', 70),
('Sudadera de entrenamiento personalizada TikiTaka', 45, '/img/sudadera1.jpg',60),
('Balon TikiTaka temporada 26/27 serializado', 120, '/img/balon1.jpg', 10),
('Botas TikiTaka temporada 26/27 serializadas', 200, '/img/botas2.jpg', 5);


