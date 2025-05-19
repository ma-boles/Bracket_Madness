CREATE TABLE pool_membership (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pool_id INT NOT NULL,
    user_id INT NOT NULL,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    bracket_id INT DEFAULT NULL,
    `role` ENUM('member', 'admin') DEFAULT 'member',
    `status` ENUM('active', 'pending') DEFAULT 'pending',
    UNIQUE KEY unique_membership(pool_id, user_id),
    UNIQUE KEY unique_bracket(bracket_id),
    FOREIGN KEY (pool_id) REFERENCES pools(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (bracket_id) REFERENCES brackets(id)
);