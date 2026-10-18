/**
 * THE CAPITAL & STRATEGY GUILD — SUPABASE INTEGRATION CLIENT
 * Handles Live Member Directory, Application Submissions, and Admin Operations.
 */

import { SUPABASE_CONFIG } from './supabase-config.js';

// Default configuration with localStorage overrides for seamless developer / user setup
const CONFIG_KEY_URL = 'HF_SUPABASE_URL';
const CONFIG_KEY_KEY = 'HF_SUPABASE_ANON_KEY';
const CONFIG_KEY_PIN = 'HF_ADMIN_PASSKEY';

// Default / fallback passkey for admin controls
export const DEFAULT_ADMIN_PIN = '#Networking@108';

let remoteConfigLoaded = false;

// Dynamically load Supabase credentials from Vercel Environment Variables via /api/config
export async function loadEnvironmentConfig() {
  if (remoteConfigLoaded) return;
  try {
    const res = await fetch('/api/config');
    if (res.ok) {
      const data = await res.json();
      if (data.url && data.anonKey) {
        window.ENV_SUPABASE_URL = data.url;
        window.ENV_SUPABASE_ANON_KEY = data.anonKey;
        if (data.adminPin) window.ENV_ADMIN_PIN = data.adminPin;
        supabaseInstance = null; // Re-bind client with live credentials
      }
    }
  } catch (err) {
    // Offline or static preview mode fallback
  } finally {
    remoteConfigLoaded = true;
  }
}

export function getSupabaseConfig() {
  const url = localStorage.getItem(CONFIG_KEY_URL) || window.ENV_SUPABASE_URL || SUPABASE_CONFIG.url || '';
  const anonKey = localStorage.getItem(CONFIG_KEY_KEY) || window.ENV_SUPABASE_ANON_KEY || SUPABASE_CONFIG.anonKey || '';
  const adminPin = localStorage.getItem(CONFIG_KEY_PIN) || window.ENV_ADMIN_PIN || SUPABASE_CONFIG.adminPin || DEFAULT_ADMIN_PIN;

  return { url: url.trim(), anonKey: anonKey.trim(), adminPin };
}

export function saveSupabaseConfig(url, anonKey, adminPin) {
  if (url !== undefined) localStorage.setItem(CONFIG_KEY_URL, url.trim());
  if (anonKey !== undefined) localStorage.setItem(CONFIG_KEY_KEY, anonKey.trim());
  if (adminPin !== undefined) localStorage.setItem(CONFIG_KEY_PIN, adminPin.trim());
  supabaseInstance = null;
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
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    accentGradient: 'linear-gradient(135deg, #2b2b2b, #111111)',
    since: '2026',
    linkedinUrl: 'https://www.linkedin.com'
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
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    accentGradient: 'linear-gradient(135deg, #3d3d3d, #141414)',
    since: '2026',
    linkedinUrl: 'https://www.linkedin.com'
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
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    accentGradient: 'linear-gradient(135deg, #333333, #181818)',
    since: '2026',
    linkedinUrl: 'https://www.linkedin.com'
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
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    accentGradient: 'linear-gradient(135deg, #404040, #101010)',
    since: '2026',
    linkedinUrl: 'https://www.linkedin.com'
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
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    accentGradient: 'linear-gradient(135deg, #383838, #161616)',
    since: '2026',
    linkedinUrl: 'https://www.linkedin.com'
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
    avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    accentGradient: 'linear-gradient(135deg, #2f2f2f, #0d0d0d)',
    since: '2026',
    linkedinUrl: 'https://www.linkedin.com'
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
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    accentGradient: 'linear-gradient(135deg, #363636, #111111)',
    since: '2026',
    linkedinUrl: 'https://www.linkedin.com'
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
    avatarUrl: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=600&q=80',
    accentGradient: 'linear-gradient(135deg, #303030, #131313)',
    since: '2026',
    linkedinUrl: 'https://www.linkedin.com'
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
        since: row.since || '2026',
        linkedinUrl: row.linkedin_url || row.linkedinUrl || ''
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
    since: memberData.since || '2026',
    linkedin_url: memberData.linkedinUrl || memberData.linkedin_url || null
  };

  if (client) {
    let { data, error } = await client
      .from('members')
      .insert([dbPayload])
      .select()
      .single();

    // Gracefully handle case where Supabase table doesn't have avatar_url or linkedin_url column yet
    if (error && error.message && (error.message.includes('avatar_url') || error.message.includes('linkedin_url'))) {
      console.warn("Retrying member insertion with safe payload due to schema cache mismatch:", error.message);
      const safePayload = { ...dbPayload };
      if (error.message.includes('avatar_url')) delete safePayload.avatar_url;
      if (error.message.includes('linkedin_url')) delete safePayload.linkedin_url;

      const retryRes = await client
        .from('members')
        .insert([safePayload])
        .select()
        .single();

      if (!retryRes.error && retryRes.data) {
        return retryRes.data;
      }
      error = retryRes.error;
    }

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

// Invalidate cached Supabase client instance
export function resetSupabaseClient() {
  supabaseInstance = null;
  return getSupabaseClient();
}

// SQL Fix script for instant copy-pasting into Supabase SQL Editor
export function getApplicationsSqlFix() {
  return `-- ==============================================================================
-- THE CAPITAL & STRATEGY GUILD — APPLICATIONS TABLE & RLS FIX SCRIPT
-- Paste and run this directly in your Supabase SQL Editor
-- ==============================================================================

-- 1. Create applications table if it does not exist
CREATE TABLE IF NOT EXISTS public.applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    linkedin_url TEXT,
    role TEXT NOT NULL,
    organization TEXT NOT NULL,
    qualification TEXT NOT NULL,
    honors_rank TEXT,
    city TEXT NOT NULL,
    why_join TEXT NOT NULL,
    referral TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'accepted', 'declined')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Ensure indexes
CREATE INDEX IF NOT EXISTS idx_applications_created ON public.applications (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_applications_email ON public.applications (email);

-- 3. Enable Row-Level Security
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- 4. Open INSERT to everyone (public & anonymous applicants)
DROP POLICY IF EXISTS "Public can submit applications" ON public.applications;
CREATE POLICY "Public can submit applications"
    ON public.applications
    FOR INSERT
    TO public, anon, authenticated
    WITH CHECK (true);

-- 5. Open SELECT to read applications in Admin Registry
DROP POLICY IF EXISTS "Allow viewing applications" ON public.applications;
CREATE POLICY "Allow viewing applications"
    ON public.applications
    FOR SELECT
    TO public, anon, authenticated
    USING (true);

-- 6. Open DELETE to dismiss applications in Admin Registry
DROP POLICY IF EXISTS "Allow deleting applications" ON public.applications;
CREATE POLICY "Allow deleting applications"
    ON public.applications
    FOR DELETE
    TO public, anon, authenticated
    USING (true);

-- 7. Reload PostgREST schema cache immediately
NOTIFY pgrst, 'reload schema';`;
}

// Submit Application Form to Supabase with comprehensive trace
export async function submitApplication(appData) {
  const cfg = getSupabaseConfig();
  const trace = {
    timestamp: new Date().toISOString(),
    hasSupabaseUrl: Boolean(cfg.url),
    supabaseUrl: cfg.url ? (cfg.url.length > 35 ? cfg.url.substring(0, 35) + '...' : cfg.url) : 'NOT CONFIGURED',
    fullSupabaseUrl: cfg.url || '',
    hasAnonKey: Boolean(cfg.anonKey),
    clientInitialized: false,
    localSaved: false,
    supabaseSuccess: false,
    httpStatus: null,
    error: null,
    payloadSummary: {
      fullName: appData.fullName,
      email: appData.email,
      role: appData.role,
      organization: appData.organization
    }
  };

  const dbPayload = {
    full_name: appData.fullName,
    email: appData.email,
    linkedin_url: appData.linkedinUrl || null,
    role: appData.role,
    organization: appData.organization,
    qualification: appData.qualification,
    honors_rank: appData.honorsRank || null,
    city: appData.city,
    why_join: appData.whyJoin,
    referral: appData.referral || null,
    status: 'pending'
  };

  // Always save a local copy so candidate application is NEVER lost
  try {
    const existing = JSON.parse(localStorage.getItem('HF_APPLICATIONS') || '[]');
    existing.unshift({
      ...dbPayload,
      id: 'local_app_' + Date.now(),
      created_at: new Date().toISOString()
    });
    localStorage.setItem('HF_APPLICATIONS', JSON.stringify(existing));
    trace.localSaved = true;
  } catch (e) {
    console.warn('Local storage backup warning:', e);
  }

  const client = getSupabaseClient();
  if (!client) {
    trace.error = {
      code: 'CONFIG_MISSING',
      message: 'Supabase URL or Anon Public Key is not configured in supabase-config.js.',
      details: 'Public applicants connect to Supabase through the public credentials in supabase-config.js.',
      hint: 'Your application has been safely preserved in Local Storage. To enable public applicants on any browser to submit directly to your database, add your Supabase Project URL and Anon Public Key to supabase-config.js.',
      sqlFix: null
    };
    return { success: false, localOnly: true, trace, error: trace.error };
  }

  trace.clientInitialized = true;
  try {
    const res = await client
      .from('applications')
      .insert([dbPayload]);

    if (res.error) {
      const err = res.error;
      let hint = err.hint || '';
      let sqlFix = null;

      if (err.code === '42501' || (err.message && err.message.toLowerCase().includes('row-level security'))) {
        hint = 'PostgreSQL Row-Level Security (RLS) is blocking anonymous inserts into public.applications.';
        sqlFix = `ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;\nDROP POLICY IF EXISTS "Public can submit applications" ON public.applications;\nCREATE POLICY "Public can submit applications" ON public.applications FOR INSERT TO anon, authenticated, public WITH CHECK (true);\nNOTIFY pgrst, 'reload schema';`;
      } else if (err.code === '42P01' || (err.message && err.message.includes('relation') && err.message.includes('does not exist'))) {
        hint = 'The table "public.applications" does not exist in your Supabase database.';
        sqlFix = getApplicationsSqlFix();
      } else if (err.code === '42703' || (err.message && err.message.includes('column'))) {
        hint = 'Schema cache mismatch. The columns in the database do not match PostgREST cache.';
        sqlFix = `NOTIFY pgrst, 'reload schema';`;
      }

      trace.error = {
        code: err.code || 'POSTGREST_ERROR',
        message: err.message || 'Database error occurred during insert',
        details: err.details || '',
        hint,
        sqlFix
      };
      trace.httpStatus = res.status || 400;
      console.error('Supabase application submission error trace:', trace);
      return { success: false, localOnly: true, error: trace.error, trace };
    }

    trace.supabaseSuccess = true;
    trace.httpStatus = res.status || 201;
    return { success: true, localOnly: false, data: res.data, trace };
  } catch (err) {
    trace.error = {
      code: 'NETWORK_OR_EXCEPTION',
      message: err.message || String(err),
      details: err.stack || '',
      hint: 'Network failure or Supabase client threw an unhandled exception.',
      sqlFix: null
    };
    console.error('Supabase application submission exception:', trace.error);
    return { success: false, localOnly: true, error: trace.error, trace };
  }
}

// Live Database Diagnostic Health Check
export async function diagnoseDatabase() {
  const cfg = getSupabaseConfig();
  const report = {
    sdkLoaded: typeof window.supabase !== 'undefined',
    urlConfigured: Boolean(cfg.url),
    url: cfg.url || 'Not configured',
    anonKeyConfigured: Boolean(cfg.anonKey),
    membersCheck: { ok: false, count: 0, hasAvatarCol: false, error: null },
    applicationsCheck: { ok: false, count: 0, rlsBlocked: false, tableMissing: false, error: null },
    storageCheck: { ok: false, error: null },
    localStorageAppsCount: 0,
    overallStatus: 'CHECKING'
  };

  // Local storage count
  try {
    const local = JSON.parse(localStorage.getItem('HF_APPLICATIONS') || '[]');
    report.localStorageAppsCount = local.length;
  } catch (e) {}

  const client = getSupabaseClient();
  if (!client) {
    report.overallStatus = 'CONFIG_MISSING';
    return report;
  }

  // 1. Probe members table
  try {
    const { data, error, count } = await client
      .from('members')
      .select('id, name, avatar_url', { count: 'exact', head: false })
      .limit(5);

    if (error) {
      report.membersCheck.error = `${error.code ? '[' + error.code + '] ' : ''}${error.message}`;
    } else {
      report.membersCheck.ok = true;
      report.membersCheck.count = count !== null ? count : (data ? data.length : 0);
      report.membersCheck.hasAvatarCol = true;
    }
  } catch (err) {
    report.membersCheck.error = err.message;
  }

  // 2. Probe applications table
  try {
    const { data, error, count } = await client
      .from('applications')
      .select('id, full_name, created_at', { count: 'exact', head: false })
      .limit(5);

    if (error) {
      report.applicationsCheck.error = `${error.code ? '[' + error.code + '] ' : ''}${error.message}`;
      if (error.code === '42501' || (error.message && error.message.toLowerCase().includes('row-level security'))) {
        report.applicationsCheck.rlsBlocked = true;
      }
      if (error.code === '42P01' || (error.message && error.message.includes('relation') && error.message.includes('does not exist'))) {
        report.applicationsCheck.tableMissing = true;
      }
    } else {
      report.applicationsCheck.ok = true;
      report.applicationsCheck.count = count !== null ? count : (data ? data.length : 0);
    }
  } catch (err) {
    report.applicationsCheck.error = err.message;
  }

  // 3. Probe storage avatars bucket
  try {
    const { data, error } = await client.storage.from('avatars').list('', { limit: 1 });
    if (error) {
      report.storageCheck.error = error.message;
    } else {
      report.storageCheck.ok = true;
    }
  } catch (err) {
    report.storageCheck.error = err.message;
  }

  if (report.applicationsCheck.tableMissing) {
    report.overallStatus = 'APPLICATIONS_TABLE_MISSING';
  } else if (report.applicationsCheck.rlsBlocked) {
    report.overallStatus = 'RLS_BLOCKED';
  } else if (report.membersCheck.ok && report.applicationsCheck.ok) {
    report.overallStatus = 'OPERATIONAL';
  } else {
    report.overallStatus = 'PARTIAL_ERROR';
  }

  return report;
}

// Sync Local Cached Applications to Supabase Cloud
export async function syncLocalApplicationsToSupabase() {
  const client = getSupabaseClient();
  if (!client) {
    throw new Error('Supabase client not initialized. Please configure Project URL and Anon Key first.');
  }

  const localRaw = localStorage.getItem('HF_APPLICATIONS');
  const localList = localRaw ? JSON.parse(localRaw) : [];
  if (localList.length === 0) {
    return { syncedCount: 0, total: 0, errors: [] };
  }

  let syncedCount = 0;
  const errors = [];

  for (const item of localList) {
    const dbPayload = {
      full_name: item.full_name || item.fullName,
      email: item.email,
      linkedin_url: item.linkedin_url || item.linkedinUrl || null,
      role: item.role,
      organization: item.organization,
      qualification: item.qualification,
      honors_rank: item.honors_rank || item.honorsRank || null,
      city: item.city,
      why_join: item.why_join || item.whyJoin,
      referral: item.referral || null,
      status: item.status || 'pending'
    };

    const { error } = await client.from('applications').insert([dbPayload]);
    if (error) {
      errors.push(`${item.email || 'Application'}: [${error.code || 'ERR'}] ${error.message}`);
    } else {
      syncedCount++;
    }
  }

  return { syncedCount, total: localList.length, errors };
}


// Fetch all Candidate Applications for the Admin Section
export async function getApplications() {
  const client = getSupabaseClient();
  const list = [];
  list.supabaseError = null;
  list.supabaseCount = 0;
  list.localCount = 0;

  if (client) {
    try {
      const { data, error } = await client
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        list.supabaseError = {
          code: error.code || 'UNKNOWN',
          message: error.message,
          hint: error.hint || ''
        };
        console.warn('Supabase fetch applications notice:', error.message);
      } else if (Array.isArray(data)) {
        list.supabaseCount = data.length;
        data.forEach(row => {
          list.push({
            id: row.id,
            source: 'supabase',
            fullName: row.full_name,
            email: row.email,
            linkedinUrl: row.linkedin_url,
            role: row.role,
            organization: row.organization,
            qualification: row.qualification,
            honorsRank: row.honors_rank,
            city: row.city,
            whyJoin: row.why_join,
            referral: row.referral,
            status: row.status || 'pending',
            createdAt: row.created_at
          });
        });
      }
    } catch (err) {
      list.supabaseError = { code: 'EXCEPTION', message: err.message };
      console.warn('Exception fetching applications from Supabase:', err);
    }
  } else {
    list.supabaseError = { code: 'CONFIG_MISSING', message: 'Supabase URL/Key not configured in this browser.' };
  }

  // Merge any locally stored applications
  try {
    const local = JSON.parse(localStorage.getItem('HF_APPLICATIONS') || '[]');
    list.localCount = local.length;
    const existingIds = new Set(list.map(a => a.id));
    for (const item of local) {
      if (!existingIds.has(item.id)) {
        list.push({
          id: item.id,
          source: 'local',
          fullName: item.full_name || item.fullName,
          email: item.email,
          linkedinUrl: item.linkedin_url || item.linkedinUrl,
          role: item.role,
          organization: item.organization,
          qualification: item.qualification,
          honorsRank: item.honors_rank || item.honorsRank,
          city: item.city,
          whyJoin: item.why_join || item.whyJoin,
          referral: item.referral,
          status: item.status || 'pending',
          createdAt: item.created_at
        });
      }
    }
  } catch (e) {}

  return list;
}

// Delete an Application (Admin dismiss)
export async function deleteApplication(appId) {
  const client = getSupabaseClient();
  if (client && !appId.startsWith('local_app_')) {
    try {
      await client.from('applications').delete().eq('id', appId);
    } catch (e) {
      console.warn('Error deleting from Supabase:', e);
    }
  }

  try {
    const local = JSON.parse(localStorage.getItem('HF_APPLICATIONS') || '[]');
    const filtered = local.filter(a => a.id !== appId);
    localStorage.setItem('HF_APPLICATIONS', JSON.stringify(filtered));
  } catch (e) {}

  return true;
}


// Upload Avatar Image to Supabase Storage (with client-side optimization and dataURL fallback)
export async function uploadAvatar(file) {
  if (!file) return null;

  // Resize and compress on client to guarantee fast loading
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDim = 500;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const client = getSupabaseClient();
  if (client) {
    try {
      const fileExt = file.name ? file.name.split('.').pop() : 'jpg';
      const fileName = `avatar_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
      const { data, error } = await client.storage
        .from('avatars')
        .upload(fileName, file, { cacheControl: '3600', upsert: true });

      if (!error && data) {
        const { data: publicUrlData } = client.storage.from('avatars').getPublicUrl(fileName);
        if (publicUrlData?.publicUrl) {
          return publicUrlData.publicUrl;
        }
      }
    } catch (err) {
      console.warn('Supabase storage upload notice, utilizing optimized image payload:', err);
    }
  }

  // Graceful fallback to optimized data URL
  return dataUrl;
}

