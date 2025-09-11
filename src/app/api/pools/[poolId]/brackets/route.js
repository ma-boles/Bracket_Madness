import { NextResponse } from 'next/server';
import { verifyToken } from '@/src/lib/auth';
import { cookies } from "next/headers";
import { getPoolBrackets } from '@/src/lib/poolBrackets';

export async function GET(req, { params }) {

    const poolId = params.poolId;

      
// export async function GET(req, context) {
//     const awaitedContext = await context;
//   console.log('Awaited context:', awaitedContext);
//   const { params } = awaitedContext;
//   console.log('Params:', params);
//   const poolId = params?.poolId;
//   console.log('poolId:', poolId);
    // const { params } = await context;
    // const poolId = params.poolId;
    // // console.log('Params:', params);
//   console.log('poolId:', poolId);

    console.log('Hit pool brackets API');

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