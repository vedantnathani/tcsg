# Requirements: High Finance Guild

## 1. Database Requirements (Supabase)
- **Members Table (`members`)**:
  - `id`: UUID or unique text identifier (primary key, default `gen_random_uuid()`)
  - `name`: Text, non-null
  - `role`: Text, non-null
  - `org`: Text, non-null
  - `category`: Text (e.g., 'capital', 'ca', 'strategy', 'finalist')
  - `credentials`: Text array or JSONB (e.g. `['CA', 'AIR 04', 'CFA']`)
  - `location`: Text
  - `quote`: Text
  - `bio`: Text
  - `interests`: Text array or JSONB
  - `is_featured`: Boolean default false
  - `initials`: Text (computed or stored)
  - `accent_gradient`: Text
  - `since`: Text default '2026'
  - `created_at`: Timestamptz default `now()`
- **Applications Table (`applications`)**:
  - `id`: UUID primary key default `gen_random_uuid()`
  - `full_name`: Text, non-null
  - `email`: Text, non-null
  - `linkedin_url`: Text
  - `role`: Text
  - `organization`: Text
  - `qualification`: Text
  - `honors_rank`: Text
  - `city`: Text
  - `why_join`: Text
  - `referral`: Text
  - `status`: Text default 'pending' ('pending', 'under_review', 'accepted', 'declined')
  - `created_at`: Timestamptz default `now()`
- **Security & RLS**:
  - Public read access for `members`
  - Public insert access for `applications`
  - Admin access (via Supabase service key or client-side verified admin session / RLS policy) for member creation and deletion

## 2. Frontend User Interface Requirements
- Seamless visual integration matching the current high-end editorial black/white/gold palette.
- Dynamic data binding: when members are fetched, cards render dynamically with existing stagger animations and modal click handlers.
- Smooth form submission with inline validation, disabled states, and gold-accented success notifications.
- Admin drawer/modal:
  - Accessible via subtle luxury trigger (e.g., footer discreet link or key combination)
  - Protected with passkey
  - Add member form with preview
  - Delete member confirmation button on cards when in admin mode

## 3. DevOps & Deployment Requirements
- Initialize local git repository
- `.gitignore` covering `.env`, node_modules, temp files
- `vercel.json` config for static deployment with clean caching headers
- GitHub remote push workflow using personal access token
