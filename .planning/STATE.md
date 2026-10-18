# Project State: High Finance Guild

## Current Phase: Phase 1 (Supabase Schema & SQL Migrations)
- Status: Ready to execute Phase 1
- Milestone: 1 (Supabase Integration & Vercel Deployment)

## Phase Progress
- [ ] Phase 1: Supabase Schema & SQL Migrations
- [ ] Phase 2: Client Config & Live Member Directory
- [ ] Phase 3: Invitation Application Submission Integration
- [ ] Phase 4: Admin Console for Member Addition & Deletion
- [ ] Phase 5: Git Repository Setup & Vercel Deployment Configuration

## Architecture Decisions
- Vanilla HTML/CSS/JS frontend maintained for fast performance and zero-build overhead on Vercel.
- Supabase JS library loaded via official CDN/ESM for clean static browser runtime.
- Configuration structure: `supabase-config.js` allows configuring Project URL & Anon Key with local storage persistence and mock data fallback.
- Admin protection: Luxury modal with customizable admin passkey and direct Supabase management.
