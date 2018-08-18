DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
    item_id INT NOT NULL,
    pruduct_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INT,
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

INSERT INTO products (item_id,pruduct_name,department_name,price,stock_quantity)
VALUES  (1,"2018 Acura Integra","Sales",30,2),
        (2,"2018 Honda Civic","Sales",20,5),
        (3,"2018 Honda Pilot","Sales",35,2),
        (4,"2018 Hyundai Elantra","Sales",20,4),
        (5,"2018 Hyundai Tucson","Sales",28,4),
        (6,"2018 Jaguar F-Type","VIP-Sales",50,5),
        (7,"2018 Jaguar F-Pace","VIP-Sales",60,1),
        (8,"2010 Kia Sorrento","Used-Sales",10,2),
        (9,"2017 Lexus RX","Sales",32,4),
        (10,"1969 Ford Mustang Mach-1","Used",55,1);