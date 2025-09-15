import { NextResponse } from 'next/server';
import { verifyToken } from '@/utils/verifyToken';
import { getInvites } from '@/src/lib/invites';

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;
    const decoded = verifyToken(token);
    if (!decoded) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const userId = decoded.userId;

    const rows = await getInvites(userId);

        return NextResponse.json({ invites: rows }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}