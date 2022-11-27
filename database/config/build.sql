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
    title TEXT  ,
    content TEXT ,
    community_name TEXT,
    likee INTEGER ,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    content_type TEXT,
    post_date TIMESTAMP 
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    likee INTEGER ,
    date TIMESTAMP
);

CREATE TABLE likee(
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE likeComments(
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE
);

-- CREATE TABLE share{
--     id INT PRIMARY KEY,
--     post_id INT,
--     user_id INT,
-- }

COMMIT;