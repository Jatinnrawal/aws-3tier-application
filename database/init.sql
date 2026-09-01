CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL
);

INSERT INTO users (name, email)
VALUES
    ('Jatin', 'jatin@example.com'),
    ('DevOps User', 'devops@example.com')
ON CONFLICT (email) DO NOTHING;
