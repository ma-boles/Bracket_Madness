import { NextResponse } from 'next/server';
import { getBracketRank } from '@/src/lib/bracketRank';

export async function GET() {

    try {
        const data = await getBracketRank();
        return NextResponse.json({ data });
    } catch(error) {
        console.error('Error fetching bracket rank data:', error)
        return NextResponse.json({ error: 'Failed to fetch bracket rank data'}, { status: 500 });
    } 
}