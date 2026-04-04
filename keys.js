export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    googleMapsKey: process.env.GOOGLE_MAPS_KEY || '',
    cesiumToken: process.env.CESIUM_TOKEN || '',
    mapboxToken: process.env.MAPBOX_TOKEN || ''
  });
}
