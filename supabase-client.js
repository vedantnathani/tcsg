/**
 * HIGH FINANCE GUILD — SUPABASE INTEGRATION CLIENT
 * Handles Live Member Directory, Application Submissions, and Admin Operations.
 */

// Default configuration with localStorage overrides for seamless developer / user setup
const CONFIG_KEY_URL = 'HF_SUPABASE_URL';
const CONFIG_KEY_KEY = 'HF_SUPABASE_ANON_KEY';
const CONFIG_KEY_PIN = 'HF_ADMIN_PASSKEY';

// Default / fallback passkey for admin controls
export const DEFAULT_ADMIN_PIN = 'GUILD2026';

export function getSupabaseConfig() {
  const url = localStorage.getItem(CONFIG_KEY_URL) || window.ENV_SUPABASE_URL || '';
  const anonKey = localStorage.getItem(CONFIG_KEY_KEY) || window.ENV_SUPABASE_ANON_KEY || '';
  const adminPin = localStorage.getItem(CONFIG_KEY_PIN) || window.ENV_ADMIN_PIN || DEFAULT_ADMIN_PIN;

  return { url: url.trim(), anonKey: anonKey.trim(), adminPin };
}

export function saveSupabaseConfig(url, anonKey, adminPin) {
  if (url) localStorage.setItem(CONFIG_KEY_URL, url.trim());
  if (anonKey) localStorage.setItem(CONFIG_KEY_KEY, anonKey.trim());
  if (adminPin) localStorage.setItem(CONFIG_KEY_PIN, adminPin.trim());
}

// Initial fallback members in case Supabase is not yet populated
export const FALLBACK_MEMBERS = [
  {
    id: 'm1',
    name: 'Aditya Birla',
    role: 'Managing Director, Special Situations',
    org: 'Kora Capital',
    category: 'capital',
    credentials: ['CA', 'AIR 04', 'CFA'],
    location: 'Mumbai',
    quote: 'True downside protection lies in understanding governance psychology, not just liquidation models.',
    bio: 'Aditya has spent fourteen years orchestrating structured credit and special situation acquisitions throughout Southeast Asia. Former head of restructuring at a global investment bank.',
    interests: ['Distressed Assets', 'Private Credit', 'Cross-Border M&A'],
    isFeatured: true,
    initials: 'AB',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    accentGradient: 'linear-gradient(135deg, #2b2b2b, #111111)',
    since: '2026'
  },
  {
    id: 'm2',
    name: 'Pooja Venkatesh',
    role: 'Partner, Financial Advisory',
    org: 'Grant & Partners',
    category: 'ca',
    credentials: ['CA', 'AIR 17'],
    location: 'Bengaluru',
    quote: 'Precision in statutory structuring creates the bedrock upon which decade-long market leaders build.',
    bio: 'Advising hyper-growth technology enterprises on cross-border tax domiciliation, corporate demergers, and capital markets readiness.',
    interests: ['Corporate Restructuring', 'Tax Structuring', 'Sovereign Wealth'],
    isFeatured: false,
    initials: 'PV',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    accentGradient: 'linear-gradient(135deg, #3d3d3d, #141414)',
    since: '2026'
  },
  {
    id: 'm3',
    name: 'Kabir Malhotra',
    role: 'Principal, Buyout Fund',
    org: 'Everstone Horizon',
    category: 'capital',
    credentials: ['CA Finalist', 'IIM Ahmedabad'],
    location: 'New Delhi',
    quote: 'The best investments are those where every operational metric looks uncomfortable to consensus.',
    bio: 'Leading industrial technology and consumer supply chain buyouts across India. Board observer across four platform acquisitions.',
    interests: ['Consumer Platforms', 'Control Buyouts', 'Value Creation'],
    isFeatured: false,
    initials: 'KM',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
    accentGradient: 'linear-gradient(135deg, #333333, #181818)',
    since: '2026'
  },
  {
    id: 'm4',
    name: 'Nandini Saxena',
    role: 'Senior Vice President, M&A',
    org: 'Axis Global Markets',
    category: 'strategy',
    credentials: ['CA', 'Merit Scholar'],
    location: 'Mumbai',
    quote: 'Mergers are negotiated on balance sheets, but completed through relentless cultural alignment.',
    bio: 'Over $4.2B in completed domestic and cross-border transactions across financial services, infrastructure, and renewable assets.',
    interests: ['Strategic M&A', 'Infrastructure Capital', 'Public Markets'],
    isFeatured: false,
    initials: 'NS',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
    accentGradient: 'linear-gradient(135deg, #404040, #101010)',
    since: '2026'
  },
  {
    id: 'm5',
    name: 'Rohan Mehra',
    role: 'Head of Capital Markets',
    org: 'Apex Syndicate',
    category: 'finalist',
    credentials: ['CA Finalist', 'AIR 09 Foundation'],
    location: 'London',
    quote: 'Global liquidity behaves like water—it flows where regulatory friction is minimized and trust is institutionalized.',
    bio: 'Specializing in debt capital markets syndication and sovereign ESG frameworks between London and Mumbai.',
    interests: ['Bond Syndication', 'FX Governance', 'Treasury Risk'],
    isFeatured: false,
    initials: 'RM',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
    accentGradient: 'linear-gradient(135deg, #383838, #161616)',
    since: '2026'
  },
  {
    id: 'm6',
    name: 'Ananya Deshmukh',
    role: 'Group CFO & Board Member',
    org: 'Vertex Infrastructure',
    category: 'ca',
    credentials: ['FCA', 'Rank Holder', 'DISA'],
    location: 'Mumbai',
    quote: 'Capital allocation is the singular test of institutional discipline; everything else is commentary.',
    bio: 'Directing treasury, M&A, and public bond issuances for one of India’s largest infrastructure conglomerates. Over 20 years in strategic balance sheet engineering.',
    interests: ['Infrastructure Bonds', 'Strategic Capital', 'Corporate Governance'],
    isFeatured: true,
    initials: 'AD',
    avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
    accentGradient: 'linear-gradient(135deg, #2f2f2f, #0d0d0d)',
    since: '2026'
  },
  {
    id: 'm7',
    name: 'Devansh Kothari',
    role: 'Associate Director, Growth Equity',
    org: 'WestBridge Capital',
    category: 'capital',
    credentials: ['CA', 'AIR 22'],
    location: 'Bengaluru',
    quote: 'Growth without cash flow durability is vanity; we seek compounding engines with moat resilience.',
    bio: 'Underwriting growth rounds in software, consumer fintech, and business services. Evaluated 200+ ventures across South Asia.',
    interests: ['Growth Equity', 'Fintech', 'Unit Economics'],
    isFeatured: false,
    initials: 'DK',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    accentGradient: 'linear-gradient(135deg, #363636, #111111)',
    since: '2026'
  },
  {
    id: 'm8',
    name: 'Isha Singhania',
    role: 'Founder & Principal',
    org: 'Aura Advisory Group',
    category: 'strategy',
    credentials: ['CA', 'AIR 11'],
    location: 'Singapore',
    quote: 'The right advisory structure anticipates tax revisions a decade before policy whitepapers are printed.',
    bio: 'Providing family offices and sovereign allocators with cross-jurisdictional holding company architecture and wealth preservation governance.',
    interests: ['Family Office', 'Cross-Border Wealth', 'Governance'],
    isFeatured: false,
    initials: 'IS',
    avatarUrl: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=500&q=80',
    accentGradient: 'linear-gradient(135deg, #303030, #131313)',
    since: '2026'
  }
];

let supabaseInstance = null;

export function getSupabaseClient() {
  if (supabaseInstance) return supabaseInstance;

  const { url, anonKey } = getSupabaseConfig();
  if (url && anonKey && window.supabase) {
    try {
      supabaseInstance = window.supabase.createClient(url, anonKey);
      return supabaseInstance;
    } catch (err) {
      console.warn('Failed to initialize Supabase client:', err);
      return null;
    }
  }
  return null;
}

// Fetch all members from Supabase, or return local fallback list
export async function getMembers() {
  const client = getSupabaseClient();
  if (!client) {
    const local = localStorage.getItem('HF_LOCAL_MEMBERS');
    if (local) {
      try { return JSON.parse(local); } catch (e) {}
    }
    return FALLBACK_MEMBERS;
  }

  try {
    const { data, error } = await client
      .from('members')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.warn('Supabase members fetch error, using local fallback:', error.message);
      const local = localStorage.getItem('HF_LOCAL_MEMBERS');
      return local ? JSON.parse(local) : FALLBACK_MEMBERS;
    }

    if (data && data.length > 0) {
      // Map database row schema to UI model
      return data.map(row => ({
        id: row.id,
        name: row.name,
        role: row.role,
        org: row.org,
        category: row.category,
        credentials: Array.isArray(row.credentials) ? row.credentials : (row.credentials ? [row.credentials] : []),
        location: row.location,
        quote: row.quote || '',
        bio: row.bio || '',
        interests: Array.isArray(row.interests) ? row.interests : (row.interests ? [row.interests] : []),
        isFeatured: Boolean(row.is_featured),
        initials: row.initials || row.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
        avatarUrl: row.avatar_url || row.avatarUrl || '',
        accentGradient: row.accent_gradient || 'linear-gradient(135deg, #2b2b2b, #111111)',
        since: row.since || '2026'
      }));
    } else {
      return FALLBACK_MEMBERS;
    }
  } catch (err) {
    console.error('Exception fetching members:', err);
    return FALLBACK_MEMBERS;
  }
}

// Add Member to Supabase (and local store if offline)
export async function insertMember(memberData) {
  const client = getSupabaseClient();
  const dbPayload = {
    name: memberData.name,
    role: memberData.role,
    org: memberData.org,
    category: memberData.category || 'capital',
    credentials: memberData.credentials || [],
    location: memberData.location || 'Mumbai',
    quote: memberData.quote || '',
    bio: memberData.bio || '',
    interests: memberData.interests || [],
    is_featured: Boolean(memberData.isFeatured),
    initials: memberData.initials || memberData.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
    avatar_url: memberData.avatarUrl || memberData.avatar_url || null,
    accent_gradient: memberData.accentGradient || 'linear-gradient(135deg, #2e2e2e, #111111)',
    since: memberData.since || '2026'
  };

  if (client) {
    const { data, error } = await client
      .from('members')
      .insert([dbPayload])
      .select()
      .single();

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }
    return data;
  } else {
    // Offline / demo fallback storage
    const local = localStorage.getItem('HF_LOCAL_MEMBERS');
    let list = local ? JSON.parse(local) : [...FALLBACK_MEMBERS];
    const newMember = {
      ...memberData,
      id: 'local_' + Date.now()
    };
    list.push(newMember);
    localStorage.setItem('HF_LOCAL_MEMBERS', JSON.stringify(list));
    return newMember;
  }
}

// Delete Member from Supabase
export async function deleteMember(memberId) {
  const client = getSupabaseClient();
  if (client && !memberId.startsWith('m') && !memberId.startsWith('local_')) {
    const { error } = await client
      .from('members')
      .delete()
      .eq('id', memberId);

    if (error) {
      throw new Error(`Delete failed: ${error.message}`);
    }
    return true;
  } else {
    // Local / fallback deletion
    const local = localStorage.getItem('HF_LOCAL_MEMBERS');
    let list = local ? JSON.parse(local) : [...FALLBACK_MEMBERS];
    list = list.filter(m => m.id !== memberId);
    localStorage.setItem('HF_LOCAL_MEMBERS', JSON.stringify(list));
    return true;
  }
}

// Submit Application Form to Supabase
export async function submitApplication(appData) {
  const client = getSupabaseClient();
  const dbPayload = {
    full_name: appData.fullName,
    email: appData.email,
    linkedin_url: appData.linkedinUrl,
    role: appData.role,
    organization: appData.organization,
    qualification: appData.qualification,
    honors_rank: appData.honorsRank || null,
    city: appData.city,
    why_join: appData.whyJoin,
    referral: appData.referral || null,
    status: 'pending'
  };

  if (client) {
    const { data, error } = await client
      .from('applications')
      .insert([dbPayload])
      .select()
      .single();

    if (error) {
      throw new Error(`Application submission error: ${error.message}`);
    }
    return { success: true, data };
  } else {
    // Fallback store locally
    const existing = JSON.parse(localStorage.getItem('HF_APPLICATIONS') || '[]');
    existing.push({ ...dbPayload, id: 'app_' + Date.now(), created_at: new Date().toISOString() });
    localStorage.setItem('HF_APPLICATIONS', JSON.stringify(existing));
    return { success: true, localOnly: true };
  }
}
