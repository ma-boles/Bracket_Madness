import { NextResponse } from 'next/server';
import { getPredictions } from "@/src/lib/predictions"

export async function GET(req, context) {
    const { bracketId } = await context.params;
    try {
        const predictions = await getPredictions(bracketId);
        return NextResponse.json(predictions);
    } catch(error) {
        console.error('Error fetching predictions:', error)
        return NextResponse.json({ error: 'Failed to fetch predictions'}, { status: 500 });
    } 
}