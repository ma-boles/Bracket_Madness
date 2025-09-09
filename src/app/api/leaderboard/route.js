import { NextResponse } from 'next/server';
import { getBrackets } from "@/src/lib/brackets"

export async function GET() {

    try {
        const brackets = await getBrackets();
        return NextResponse.json(brackets);
    } catch(error) {
        console.error('Error fetching bracket rank data:', error)
        return NextResponse.json({ error: 'Failed to fetch bracket rank data'}, { status: 500 });
    } 
}