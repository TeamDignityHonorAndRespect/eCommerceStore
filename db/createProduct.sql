INSERT INTO products
    (sku, owner_id, prod_name, description, price, retail_price, image_url, created_on)
VALUES
    ($1, $2, $3, $4, $5, $6, $7, CURRENT_DATE)
RETURNING *