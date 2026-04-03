export const config = { runtime: 'edge' };

export default async function handler(req) {
  // Only allow requests from your domain
  const origin = req.headers.get('origin') || '';
  const allowed = ['https://whatcanwegrow.com', 'https://www.whatcanwegrow.com'];
  
  // In development, also allow localhost
  const isAllowed = allowed.includes(origin) || origin.includes('vercel.app') || origin.includes('localhost');

  if (!isAllowed) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(
    JSON.stringify({
      googleMapsKey: process.env.GOOGLE_MAPS_KEY || '',
      cesiumToken: process.env.CESIUM_TOKEN || ''
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': origin,
        'Cache-Control': 'no-store'
      }
    }
  );
}
