CREATE TABLE results(
    game_id INT AUTO_INCREMENT PRIMARY KEY,
    espn_game_id INT,
    round VARCHAR(20) NOT NULL,
    seed_team1 INT NOT NULL,
    team1 VARCHAR(50) NOT NULL,
    score1 INT NOT NULL,
    seed_team2 INT NOT NULL,
    team2 VARCHAR(50) NOT NULL,
    score2 INT NOT NULL,
    actual_winner VARCHAR(50) NOT NULL,
    next_game_id INT
);