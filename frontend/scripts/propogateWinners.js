import { pool } from "../src/db/db";


const propogateWinners = async() => {

    try {
        const [results] = await pool.execute(`
            UPDATE results as r1
            JOIN results AS r2 ON r1.next_game_id = r2.game_id
            SET
                r2.team_a_id = IF(r1.next_slot_id = 'team_a_id', r1.winner_id, r2.team_a_id),
                r2.team_b_id = IF(r1.next_slot_id = 'team_b_id', r1.winner_id, r2.team_b_id) 
            WHERE r1.winner_id IS NOT NULL
                AND((r1.next_slot_id = 'team_a_id' AND r2.team_a_id IS NULL)
                    OR(r1.next_slot_id = 'team_b_id' AND r2.team_b_id IS NULL));
        `);
        console.log('Winner propogation completed successfully');
    } catch(error) {
        console.error('Error propogating winners:', error);
    } 
};

module.exports = propogateWinners;