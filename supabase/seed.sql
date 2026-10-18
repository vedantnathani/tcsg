-- ==============================================================================
-- HIGH FINANCE GUILD — SEED DATA SCRIPT
-- ==============================================================================

-- Ensure avatar_url column exists
ALTER TABLE public.members ADD COLUMN IF NOT EXISTS avatar_url TEXT;

INSERT INTO public.members (
    name, role, org, category, credentials, location, quote, bio, interests, is_featured, initials, avatar_url, accent_gradient, since
) VALUES
(
    'Aditya Birla',
    'Managing Director, Special Situations',
    'Kora Capital',
    'capital',
    ARRAY['CA', 'AIR 04', 'CFA'],
    'Mumbai',
    'True downside protection lies in understanding governance psychology, not just liquidation models.',
    'Aditya has spent fourteen years orchestrating structured credit and special situation acquisitions throughout Southeast Asia. Former head of restructuring at a global investment bank.',
    ARRAY['Distressed Assets', 'Private Credit', 'Cross-Border M&A'],
    TRUE,
    'AB',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    'linear-gradient(135deg, #2b2b2b, #111111)',
    '2026'
),
(
    'Pooja Venkatesh',
    'Partner, Financial Advisory',
    'Grant & Partners',
    'ca',
    ARRAY['CA', 'AIR 17'],
    'Bengaluru',
    'Precision in statutory structuring creates the bedrock upon which decade-long market leaders build.',
    'Advising hyper-growth technology enterprises on cross-border tax domiciliation, corporate demergers, and capital markets readiness.',
    ARRAY['Corporate Restructuring', 'Tax Structuring', 'Sovereign Wealth'],
    FALSE,
    'PV',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    'linear-gradient(135deg, #3d3d3d, #141414)',
    '2026'
),
(
    'Kabir Malhotra',
    'Principal, Buyout Fund',
    'Everstone Horizon',
    'capital',
    ARRAY['CA Finalist', 'IIM Ahmedabad'],
    'New Delhi',
    'The best investments are those where every operational metric looks uncomfortable to consensus.',
    'Leading industrial technology and consumer supply chain buyouts across India. Board observer across four platform acquisitions.',
    ARRAY['Consumer Platforms', 'Control Buyouts', 'Value Creation'],
    FALSE,
    'KM',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
    'linear-gradient(135deg, #333333, #181818)',
    '2026'
),
(
    'Nandini Saxena',
    'Senior Vice President, M&A',
    'Axis Global Markets',
    'strategy',
    ARRAY['CA', 'Merit Scholar'],
    'Mumbai',
    'Mergers are negotiated on balance sheets, but completed through relentless cultural alignment.',
    'Over $4.2B in completed domestic and cross-border transactions across financial services, infrastructure, and renewable assets.',
    ARRAY['Strategic M&A', 'Infrastructure Capital', 'Public Markets'],
    FALSE,
    'NS',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
    'linear-gradient(135deg, #404040, #101010)',
    '2026'
),
(
    'Rohan Mehra',
    'Head of Capital Markets',
    'Apex Syndicate',
    'finalist',
    ARRAY['CA Finalist', 'AIR 09 Foundation'],
    'London',
    'Global liquidity behaves like water—it flows where regulatory friction is minimized and trust is institutionalized.',
    'Specializing in debt capital markets syndication and sovereign ESG frameworks between London and Mumbai.',
    ARRAY['Bond Syndication', 'FX Governance', 'Treasury Risk'],
    FALSE,
    'RM',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
    'linear-gradient(135deg, #383838, #161616)',
    '2026'
),
(
    'Ananya Deshmukh',
    'Group CFO & Board Member',
    'Vertex Infrastructure',
    'ca',
    ARRAY['FCA', 'Rank Holder', 'DISA'],
    'Mumbai',
    'Capital allocation is the singular test of institutional discipline; everything else is commentary.',
    'Directing treasury, M&A, and public bond issuances for one of India’s largest infrastructure conglomerates. Over 20 years in strategic balance sheet engineering.',
    ARRAY['Infrastructure Bonds', 'Strategic Capital', 'Corporate Governance'],
    TRUE,
    'AD',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80',
    'linear-gradient(135deg, #2f2f2f, #0d0d0d)',
    '2026'
),
(
    'Devansh Kothari',
    'Associate Director, Growth Equity',
    'WestBridge Capital',
    'capital',
    ARRAY['CA', 'AIR 22'],
    'Bengaluru',
    'Growth without cash flow durability is vanity; we seek compounding engines with moat resilience.',
    'Underwriting growth rounds in software, consumer fintech, and business services. Evaluated 200+ ventures across South Asia.',
    ARRAY['Growth Equity', 'Fintech', 'Unit Economics'],
    FALSE,
    'DK',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    'linear-gradient(135deg, #363636, #111111)',
    '2026'
),
(
    'Isha Singhania',
    'Founder & Principal',
    'Aura Advisory Group',
    'strategy',
    ARRAY['CA', 'AIR 11'],
    'Singapore',
    'The right advisory structure anticipates tax revisions a decade before policy whitepapers are printed.',
    'Providing family offices and sovereign allocators with cross-jurisdictional holding company architecture and wealth preservation governance.',
    ARRAY['Family Office', 'Cross-Border Wealth', 'Governance'],
    FALSE,
    'IS',
    'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=500&q=80',
    'linear-gradient(135deg, #303030, #131313)',
    '2026'
);
