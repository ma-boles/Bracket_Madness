import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { cookies } from "next/headers";
import { getPoolMembers } from '@/src/lib/poolMembers';

export async function GET(req, { params }) {
  const poolId = params.poolId;


  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get('token')?.value;
    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }


    const rows = await getPoolMembers(poolId);    

    const activeMembers = [];
    const pendingMembers = [];

    for (const row of rows) {
        const member ={
            user_id: row.user_id,
            username: row.username
        };

        if(row.status === 'active') {
            activeMembers.push(member);
        } else if (row.status === 'pending') {
            pendingMembers.push(member);
        }
    }

    return NextResponse.json({ activeMembers, pendingMembers });
    
    } catch(error) {
        console.error("Error fetching pool members:", error);
        return NextResponse.json({ message: "Server error"}, { status: 500 });
    }
}