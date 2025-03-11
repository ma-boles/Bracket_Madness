CREATE TABLE points(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id NOT NULL,
    total_points INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);