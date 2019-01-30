CREATE TABLE users
(
    user_id serial PRIMARY KEY,
    created_on TIMESTAMP NOT NULL,
    last_updated TIMESTAMP,
    user_role VARCHAR (50),
    name VARCHAR (50),
    auth_id VARCHAR
)