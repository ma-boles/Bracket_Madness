CREATE TABLE brackets(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    bracket_name VARCHAR(255),
    first_four_points INT NOT NULL DEFAULT 0,
    first_round_points INT NOT NULL DEFAULT 0,
    second_round_points INT NOT NULL DEFAULT 0,
    sweet16_points INT NOT NULL DEFAULT 0,
    elite8_points INT NOT NULL DEFAULT 0,
    final4_points INT NOT NULL DEFAULT 0,
    championship_points INT NOT NULL DEFAULT 0,
    total_points INT NOT NULL DEFAULT 0,
    rank INT NOT NULL DEFAULT 0,
    total_predictions INT NOT NULL DEFAULT 0,
    correct_predictions INT NOT NULL DEFAULT 0,
    accuracy_percentage DECIMAL(5,2) NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);