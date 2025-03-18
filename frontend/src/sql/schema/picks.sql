CREATE TABLE picks(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    game_id INT,
    round VARCHAR(20) NOT NULL,
    winner_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES results(game_id),
    FOREIGN KEY (winner_id) REFERENCES teams(team_id)
);