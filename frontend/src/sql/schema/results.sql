CREATE TABLE results(
    game_id INT PRIMARY KEY,
    espn_game_id VARCHAR(15) NULL,
    round ENUM('First Four', '1st Round', '2nd Round', 'Sweet 16', 'Elite 8', 'FInal Four', 'Championship') NOT NULL,
    team_a_id INT NULL,
    team_a_score INT DEFAULT NULL,
    team_b_id INT NULL,
    team_b_score INT DEFAULT NULL,
    winner_id INT DEFAULT NULL,
    next_game_id INT NULL,
    next_slot_id ENUM('team_a_id', 'team_b_id') NOT NULL,
    FOREIGN KEY (team_a_id) REFERENCES teams(team_id),
    FOREIGN KEY (team_b_id) REFERENCES teams(team_id),
    FOREIGN KEY (winner_id) REFERENCES teams(team_id),
    FOREIGN KEY (next_game_id) REFERENCES results(game_id)
);