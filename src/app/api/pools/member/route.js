import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { getUserPools } from '@/src/lib/userPools';

export async function GET(req) {

  try {
    const token = req.cookies.get('token')?.value;

    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      console.warn('⛔ Invalid or missing token — unauthorized access attempt');

      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const userId = decodedUser.userId;   
    const rows = await getUserPools(userId);

    return NextResponse.json({ pools:rows }, { status: 200 });
    } catch (error) {
        console.error('Error in GET /api/pools/member:', error)
        return NextResponse.json({ message: 'Internal Server Error '}, { status: 500 });
    }
}