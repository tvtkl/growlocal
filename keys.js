module.exports = (req, res) => {
  const origin = req.headers.origin || '';
  const allowed = ['https://whatcanwegrow.com', 'https://www.whatcanwegrow.com'];
  const isAllowed = allowed.some(o => origin === o) || origin.includes('vercel.app') || origin.includes('localhost');

  if (!isAllowed) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json');

  return res.status(200).json({
    googleMapsKey: process.env.GOOGLE_MAPS_KEY || '',
    cesiumToken: process.env.CESIUM_TOKEN || '',
    mapboxToken: process.env.MAPBOX_TOKEN || ''
  });
};
