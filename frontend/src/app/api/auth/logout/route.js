import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logged out' }, { status: 200 });

  // Clear the cookie
  response.headers.set('Set-Cookie', 'token=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict; Secure');

  return response;
}
