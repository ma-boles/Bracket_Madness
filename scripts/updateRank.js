const { pool } = require('../src/db/db');


const updateRank = async () => {

    try {
        const [rows] = await pool.execute(`
            SELECT 
                id,
                total_points
            FROM brackets
            ORDER BY total_points DESC
            `);

            // ranking logic
            let position = 1;
            let currentRank = 1;
            let prevPoints = null;


            for(let i = 0; i < rows.length; i++) {
                const { id, total_points } = rows[i];

                if(total_points !== prevPoints) {
                    currentRank = position; // Update rank only if points change
                } 

                await pool.execute(`
                    UPDATE brackets
                    SET \`rank\` = ?
                    WHERE id = ?
                    `, [currentRank, id]
                );

                prevPoints = total_points;
                position++; // Always increase position
            }
            
            console.log('Rankings updated successfully.');
            

                // Fetch brackets pool rank + update
                const [pools] = await pool.execute(
                    `SELECT DISTINCT pool_id
                    FROM brackets
                    WHERE pool_id IS NOT NULL`
                );

                for(const { pool_id } of pools) {
                    const [brackets] = await pool.execute(
                        `SELECT id,
                            total_points
                          FROM brackets
                          WHERE pool_id = ?
                          ORDER BY total_points DESC`,
                          [pool_id]
                    );

                    let position = 1;
                    let prevPoints = null;
                    let currentRank = 1;

                for(const { id, total_points } of brackets) {
                    if(total_points !== prevPoints) {
                        currentRank = position;
                    }

                    await pool.execute(
                        `UPDATE brackets
                        SET pool_rank = ?
                        WHERE id = ?`, 
                    [currentRank, id]
                );
                    
                    prevPoints = total_points;
                    position++;
                }

                console.log(`Pool rank updated successfully for ${pool_id}.`);

            }

    } catch (error) {
        console.error('Error ranking brackets:', error);
    } 
};

module.exports = updateRank;