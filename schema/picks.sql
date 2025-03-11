CREATE TABLE picks(
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_id INT,
    user_id INT NOT NULL,
    round VARCHAR(20) NOT NULL,
    winner VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES results(game_id)
);