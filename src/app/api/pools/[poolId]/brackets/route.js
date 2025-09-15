import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { cookies } from "next/headers";
import { getPoolBrackets } from '@/src/lib/poolBrackets';

export async function GET(req, { params }) {
    const poolId = params.poolId;

    try {
        const cookiesStore = await cookies();
        const token = cookiesStore.get('token')?.value;
        const decodedUser = verifyToken(token);

        if(!decodedUser) {
        return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
        }

        const rows = await getPoolBrackets(poolId);

        return NextResponse.json({ data: rows });
    } catch(error) {
        console.error('Error fetching pool bracket rank data:', error)
        return NextResponse.json({ error: 'Failed to fetch pool bracket rank data'}, { status: 500 });
    } 
}