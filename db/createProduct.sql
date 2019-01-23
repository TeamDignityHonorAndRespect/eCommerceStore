INSERT INTO products
    (sku, owner_id, prod_name, description, price, retail_price, created_on)
values
    ($1, $2, $3, $4, $5, $6, CURRENT_DATE)