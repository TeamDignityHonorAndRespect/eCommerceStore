CREATE TABLE products
(
    prod_id serial PRIMARY KEY,
    sku integer,
    owner_id integer references users(user_id),
    prod_name VARCHAR (50) NOT NULL,
    description VARCHAR (355) NOT NULL,
    price money NOT NULL,
    retail_price money NOT NULL,
    created_on TIMESTAMP NOT NULL,
    last_updated TIMESTAMP
)