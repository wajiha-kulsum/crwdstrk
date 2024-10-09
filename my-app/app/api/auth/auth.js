export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Hello from Next.js API in the auth folder!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  
  