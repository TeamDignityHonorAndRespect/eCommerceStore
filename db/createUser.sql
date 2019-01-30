-- INSERT INTO users
--     (created_on, user_role, name)
-- values
--     (CURRENT_DATE, $2, $3)

INSERT INTO users
    (created_on, user_role, name, auth_id)
values
    (CURRENT_DATE, 'user', ${user_name}, ${auth_id})