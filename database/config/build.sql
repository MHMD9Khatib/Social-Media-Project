BEGIN;
DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    community_name VARCHAR(100) NOT NULL,
    likee INTEGER ,
    user_id INTEGER,
    content_type VARCHAR(100),
    post_date TIMESTAMP NOT NULL
);

CREATE TABLE comment (
    id  PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    like INTEGER DEFAULT 0,
    date TIMESTAMP NOT NULL
);

CREATE TABLE like{
    id INT PRIMARY KEY,
    post_id INT,
    user_id INT,

}

CREATE TABLE share{
    id INT PRIMARY KEY,
    post_id INT,
    user_id INT,
}

COMMIT;