import { pool } from '@/src/db/db';
import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';


export async function POST(req) {
    const token = req.cookies.get("token")?.value;
    const decodedUser = verifyToken(token);

    if(!decodedUser) {
            return NextResponse.json({ message: 'Unauthorized. Please log in.' });
        }

    try {
        const { bracket_name, pool_id } = await req.json();
        const userId = decodedUser.userId;

        // Prepare query to insert bracket data
        const [result] = await pool.execute ( `
            INSERT INTO brackets (user_id, bracket_name, pool_id)
            VALUES(?, ?, ?)`, [userId, bracket_name || null, pool_id || null]
        );

        const bracketId = result.insertId;
        let finalName = bracket_name;

        // Generate default name
        if(!bracket_name) {
            const shortYear = new Date().getFullYear().toString().slice(-2);
            finalName = `Challenge${shortYear}_00${bracketId}`;
            await pool.execute(
                `UPDATE brackets SET bracket_name = ? WHERE id = ?`,
                [finalName, bracketId]
            );
        }

        // Update pool_membership with new bracket id
        await pool.execute(`
            UPDATE pool_membership
            SET bracket_id = ?
            WHERE user_id = ? AND pool_id = ?`,
        [bracketId, userId, pool_id]
    );
        return NextResponse.json({ success: true, bracket_id: bracketId, bracket_name: finalName });

    } catch(error) {
        console.error('Error submitting bracket data:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error '});
     } 
}