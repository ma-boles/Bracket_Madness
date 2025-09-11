import { isDemo } from "@/config";
import { pool } from "@/src/db/db";


export async function searchUsers(q) {
  if (isDemo()) {
    if (!q) return [];

    const { mockUsers } = require("@/mock-data/mockUsers");

    const results = mockUsers
      .filter(u => u.username.toLowerCase().startsWith(q.toLowerCase()))
      .sort((a, b) => a.username.localeCompare(b.username))
      .slice(0, 10)
      .map(u => ({
        id: u.id,
        username: u.username,
      }));

    return results;
  }

  // Real DB query
  const [rows] = await pool.execute(
    `SELECT id, username
     FROM users
     WHERE username LIKE ?
     ORDER BY username ASC
     LIMIT 10`,
    [`${q}%`]
  );

  return rows;
}
