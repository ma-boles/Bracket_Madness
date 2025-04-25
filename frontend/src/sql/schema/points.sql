CREATE TABLE points(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    bracket_id INT NOT NULL,
    round VARCHAR(15),
    game_id INT NOT NULL,
    awarded_points INT NOT NULL DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (bracket_id) REFERENCES brackets(id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES results(game_id) ON DELETE CASCADE,
    UNIQUE KEY unique_bracket_game (user_id, bracket_id, game_id)
);