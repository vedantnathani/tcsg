# Roadmap: High Finance Guild Backend & Deployment

## Milestone 1: Supabase Integration & Vercel Deployment

- [x] **Phase 1: Supabase Schema & SQL Migrations**
  - Goal: Define relational tables for `members` and `applications` with Row Level Security (RLS) policies and seed data script.
  - Deliverables: `supabase/schema.sql`, `supabase/seed.sql`

- [x] **Phase 2: Client Config & Live Member Directory**
  - Goal: Connect frontend to Supabase via `@supabase/supabase-js`, dynamically fetch members from the database with category filtering, search, and fallback to cached/initial data.
  - Deliverables: `supabase-client.js`, dynamic fetching in `index.html`

- [x] **Phase 3: Invitation Application Submission Integration**
  - Goal: Handle `#invitation-form` submissions, validating inputs and persisting them to the Supabase `applications` table with luxury feedback toast/state.
  - Deliverables: Form handler in `index.html` / `supabase-client.js`

- [x] **Phase 4: Admin Console for Member Addition & Deletion**
  - Goal: Implement a passkey-protected luxury administrative console allowing authorized admins to add new members and delete existing members from the Supabase database.
  - Deliverables: Admin modal UI, member creation form, delete action trigger, passkey verification

- [x] **Phase 5: Git Repository Setup & Vercel Deployment Configuration**
  - Goal: Initialize git repo, create `.gitignore`, configure `vercel.json` for static delivery, set up remote push with personal GitHub access token, and verify deployment readiness.
  - Deliverables: `.gitignore`, `vercel.json`, git commit, deployment guide
