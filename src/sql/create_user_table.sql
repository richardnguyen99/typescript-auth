CREATE TABLE user_account (
    user_id serial PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (255) NOT NULL,
    email VARCHAR (50) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL,
    last_modified TIMESTAMP NOT NULL,
    last_login TIMESTAMP
);
