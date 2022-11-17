BEGIN;
DROP TABLE IF EXISTS user, posts, comment, like, share;
CREATE TABLE user(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password TEXT NOT NULL
);

-- CREATE TABLE post(
--     id INT PRIMARY KEY,
--     title VARCHAR(250) NOT NULL,
--     content VARCHAR(250) NOT NULL,
--     created_date TIMESTAMP,
--     liks INT,
--     comments INT,
--     share INT,
--     edite_post VARCHAR(250) NOT NULL,
--     edited BOOLEAN NOT NULL DEFAULT false,
--     views INT,
--     user_id INT,
--     -- constraint fk_post_user
--     -- foreign key (user_id) 
--     -- REFERENCES user (user_id)
-- );
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    community_name VARCHAR(100) NOT NULL,
    like INTEGER DEFAULT 0,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    content_type VARCHAR(100) DEFAULT 'text',
    post_date TIMESTAMP NOT NULL DEFAULT NOW()
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
    -- constraint fk_like_post
    -- foreign key (post_id) 
    -- REFERENCES user (post_id),
    -- constraint fk_like_user
    -- foreign key (user_id) 
    -- REFERENCES user (user_id)
}

CREATE TABLE share{
    id INT PRIMARY KEY,
    post_id INT,
    user_id INT,
    -- constraint fk_like_post
    -- foreign key (post_id) 
    -- REFERENCES user (post_id),
    -- constraint fk_like_user
    -- foreign key (user_id) 
    -- REFERENCES user (user_id)
}

COMMIT;