CREATE TABLE results(
    game_id INT AUTO_INCREMENT PRIMARY KEY,
    espn_game_id INT,
    round VARCHAR(20) NOT NULL,
    seed_team_a INT,
    team_a VARCHAR(50),
    score_a INT,
    seed_team_b INT,
    team_b VARCHAR(50),
    score_b INT,
    actual_winner VARCHAR(50),
    next_game_id INT,
    next_slot_id VARCHAR(10)
);