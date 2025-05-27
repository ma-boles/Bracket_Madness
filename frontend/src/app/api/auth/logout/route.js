export async function POST(req, res) {
    res.setHeader('Set-Cookie', 'token=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict; Secure');

        return new Response(JSON.stringify({ message: 'Logged out' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
       