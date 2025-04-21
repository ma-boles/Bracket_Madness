CREATE TABLE predictions(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    bracket_id INT NOT NULL,
    game_id INT NOT NULL,
    winner_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (bracket_id) REFERENCES brackets(id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES results(game_id),
    FOREIGN KEY (winner_id) REFERENCES teams(team_id),
    UNIQUE KEY unique_predictions (bracket_id, game_id)
);