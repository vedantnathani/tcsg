// Vercel Serverless Function to deliver Supabase config from Environment Variables
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  const adminPin = process.env.ADMIN_PIN || process.env.SUPABASE_ADMIN_PIN || 'GUILD2026';

  return res.status(200).json({
    url: url.trim(),
    anonKey: anonKey.trim(),
    adminPin: adminPin.trim()
  });
}
