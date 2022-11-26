0. configuraçoes para banco de dados

- criar as tabelas
```sql
CREATE TABLE Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(255),
    instock_quantity INT,
    price DECIMAL(8, 2)
);

CREATE TABLE Customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    password VARCHAR(255),
    email VARCHAR(255) UNIQUE
);

CREATE TABLE ProductOrder (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    customer_id INT,
    product_quantity INT,
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (customer_id) REFERENCES Customer(id)
);
```

- inserir 
```sql
INSERT INTO Product VALUES (1, "Apple MacBook Pro", "15 inch, i7, 16GB RAM", 5, 667.00);

INSERT INTO Customer VALUES (1, "Anjalee", "2w33he94yg4mx88j9j2hy4uhd32w", "anjalee@gmail.com");

INSERT INTO ProductOrder VALUES (1, 1, 1, 1);
```

1. Configure o ambiente de projeto Node.js

npm install express body-parser mysql2 dotenv

npm install typescript --save-dev

npm install @types/node @types/express @types/body-parser @types/mysql @types/dotenv --save-dev

npx tsc --init

```json
"compilerOptions": {
    "target": "es6",   
    "module": "commonjs",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
}
```


```json
"scripts": {
    "start": "tsc && node dist/app.js",
},
```