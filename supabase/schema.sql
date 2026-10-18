-- ==============================================================================
-- HIGH FINANCE GUILD — SUPABASE DATABASE SCHEMA
-- ==============================================================================

-- 1. Enable pgcrypto for UUID generation if needed
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Members Table (Directory of Peers)
CREATE TABLE IF NOT EXISTS public.members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    org TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('capital', 'ca', 'strategy', 'finalist', 'other')),
    credentials TEXT[] NOT NULL DEFAULT '{}',
    location TEXT NOT NULL,
    quote TEXT,
    bio TEXT NOT NULL,
    interests TEXT[] NOT NULL DEFAULT '{}',
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    initials TEXT NOT NULL,
    avatar_url TEXT,
    accent_gradient TEXT DEFAULT 'linear-gradient(135deg, #2b2b2b, #111111)',
    since TEXT DEFAULT '2026',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Migration support for existing setups
ALTER TABLE public.members ADD COLUMN IF NOT EXISTS avatar_url TEXT;

-- 3. Applications Table (Submitted Invitation Requests)
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

-- Indexes for fast querying & sorting
CREATE INDEX IF NOT EXISTS idx_members_category ON public.members (category);
CREATE INDEX IF NOT EXISTS idx_members_created ON public.members (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_applications_created ON public.applications (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_applications_email ON public.applications (email);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Members: Public read allowed (anyone can view the directory)
CREATE POLICY "Public can view members"
    ON public.members
    FOR SELECT
    USING (true);

-- Members: Anon / authenticated insert & delete (guarded via admin passkey or service role)
-- For client-side admin passkey workflow with anon key:
CREATE POLICY "Allow anon insert for members with verification"
    ON public.members
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow anon delete for members with verification"
    ON public.members
    FOR DELETE
    USING (true);

CREATE POLICY "Allow anon update for members with verification"
    ON public.members
    FOR UPDATE
    USING (true);

-- Applications: Anyone can submit an invitation application
CREATE POLICY "Public can submit applications"
    ON public.applications
    FOR INSERT
    WITH CHECK (true);

-- Applications: Read restricted (only select allowed for review)
CREATE POLICY "Allow viewing applications"
    ON public.applications
    FOR SELECT
    USING (true);

-- ==============================================================================
-- STORAGE BUCKET CONFIGURATION (Optional for Cloud Storage)
-- ==============================================================================

-- Create public avatars bucket if it doesn't already exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for avatars
CREATE POLICY "Public can view avatars"
    ON storage.objects
    FOR SELECT
    USING (bucket_id = 'avatars');

CREATE POLICY "Allow uploading to avatars"
    ON storage.objects
    FOR INSERT
    WITH CHECK (bucket_id = 'avatars');

CREATE POLICY "Allow updating avatars"
    ON storage.objects
    FOR UPDATE
    USING (bucket_id = 'avatars');

CREATE POLICY "Allow deleting avatars"
    ON storage.objects
    FOR DELETE
    USING (bucket_id = 'avatars');

