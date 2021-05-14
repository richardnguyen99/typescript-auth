CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (255) NOT NULL,
    email VARCHAR (50) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL,
    last_modified TIMESTAMP NOT NULL,
    last_login TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_profiles (
  user_id UUID,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  birth_date DATE NOT NULL,
  address VARCHAR(100) NOT NULL,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(5) NOT NULL,
  zip_code VARCHAR(10) NOT NULL,

  phone_number VARCHAR(15),
  biography TEXT,
  url VARCHAR(50),
  profession VARCHAR(50),

  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

