import { pool } from '../src/db/db';

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
            let currentRank = 1;
            let prevPoints = null;
            let ties = 0;


            for(let i = 0; i < rows.length; i++) {
                const { id, total_points } = rows[i];

                if(total_points === prevPoints) {
                    ties++;
                } else {
                    currentRank = i + 1;
                    ties = 0;
                }

                await pool.execute(`
                    UPDATE brackets
                    SET \`rank\` = ?
                    WHERE id = ?
                    `, [currentRank, id]
                );

                prevPoints = total_points;
            }
            
            console.log('Rankings updated successfully.');

    } catch (error) {
        console.error('Error ranking brackets:', error);
    } 
};

updateRank();