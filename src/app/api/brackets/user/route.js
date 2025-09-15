import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { getBrackets } from "@/src/lib/brackets"; 


export async function GET(req) {
  try {
    const token = req.cookies.get('token')?.value;

    const decodedUser = verifyToken(token);

    if(!decodedUser) {
      console.warn('Invalid or missing token — unauthorized access attempt');

      return NextResponse.json({ message: 'Unauthorized'}, { status: 401 });
    }

    const userId = decodedUser.userId;

    const { globalBrackets, poolBrackets } = await getBrackets(userId);
    
    return NextResponse.json({ globalBrackets, poolBrackets });

  } catch (error) {
    console.error('GET /api/brackets error:', error);
    return NextResponse.json({ error: 'Failed to fetch brackets data' }, { status: 500 });
   } 
}