import { isDemo } from "@/config";
import { pool } from "@/src/db/db"
import { mockBrackets } from "@/mock-data/mockBrackets";
import { mockPools } from "@/mock-data/mockPools";

export async function getBrackets (userId) {
  try {
  if(isDemo) {
        const globalBrackets = mockBrackets
        .filter(b => b.user_id === userId)
        .map(b => ({
          bracket_id: b.bracket_id,
          bracket_name: b.bracket_name,
          total_points: b.total_points,
          first_four_points: b.first_four_points,
          first_round_points: b.first_round_points,
          second_round_points: b.second_round_points,
          sweet16_points: b.sweet16_points,
          elite8_points: b.elite8_points,
          final4_points: b.final4_points,
          championship_points: b.championship_points,
          rank: b.rank,
          correct_predictions: b.correct_predictions,
          total_predictions: b.total_predictions,
          accuracy_percentage: b.accuracy_percentage,
        }));

        const poolBrackets = mockBrackets
          .filter(b => b.user_id === userId && b.pool_id !== null && b.pool_id !== undefined)
          .map(b => {
            const pool = mockPools.find(p => p.id === b.pool_id);

            return {
              bracket_id: b.bracket_id,
              bracket_name: b.bracket_name,
              total_points: b.total_points,
              first_four_points: b.first_four_points,
              first_round_points: b.first_round_points,
              second_round_points: b.second_round_points,
              sweet16_points: b.sweet16_points,
              elite8_points: b.elite8_points,
              final4_points: b.final4_points,
              championship_points: b.championship_points,
              pool_rank: b.pool_rank,
              correct_predictions: b.correct_predictions,
              total_predictions: b.total_predictions,
              accuracy_percentage: b.accuracy_percentage,
              pool_name: pool?.pool_name || "Unknown Pool",
            };
          });
        return { globalBrackets, poolBrackets };
  } else {
      const [globalBrackets] = await pool.execute(
        `SELECT 
          id AS bracket_id,
          bracket_name,
          total_points,
          first_four_points,
          first_round_points,
          second_round_points,
          sweet16_points,
          elite8_points,
          final4_points,
          championship_points,
          \`rank\`, 
          correct_predictions,
          total_predictions,
          accuracy_percentage
        FROM brackets b
        WHERE user_id = ? AND pool_id IS NULL`,
        [userId]
      );
    
        const [poolBrackets] = await pool.execute(
        `SELECT 
          b.id AS bracket_id,
          b.bracket_name,
          b.total_points,
          b.first_four_points,
          b.first_round_points,
          b.second_round_points,
          b.sweet16_points,
          b.elite8_points,
          b.final4_points,
          b.championship_points,
          b.pool_rank,
          b.correct_predictions,
          b.total_predictions,
          b.accuracy_percentage,
          p.pool_name
        FROM brackets b
        JOIN pools p ON p.id = b.pool_id
        WHERE b.user_id = ? AND b.pool_id IS NOT NULL`,
        [userId]
      );
  

        return { globalBrackets, poolBrackets };
    }
  } catch (error) {
    console.error('Error in getBrackets:', error);
    throw error;
  }
}