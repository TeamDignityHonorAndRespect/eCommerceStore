INSERT INTO users
    (created_on, user_role, name)
values
    (CURRENT_DATE, $2, $3)