# Project State: High Finance Guild

## Current Phase: Operational & Production Database Connected
- Status: Secure serverless environment variable integration (/api/config) active for Vercel deployment, zero secrets committed to source code.
- Remote: `https://github.com/vedantnathani/tcsg.git`

## Phase Progress
- [x] Phase 1: Supabase Schema & SQL Migrations (`members`, `applications`, `avatars` bucket)
- [x] Phase 2: Client Config & Live Member Directory with Portraits & Initials Fallbacks
- [x] Phase 3: Invitation Application Submission Integration with Dual-write Local Fallback
- [x] Phase 4: Admin Registrar Console (`GUILD2026`) with Drag-and-drop Image Upload & Member Management
- [x] Phase 5: Candidate Applications Tab in Admin with Instant "Induct as Member" Action
- [x] Phase 6: Real-Time Submission Debugger & Telemetry Panel on Form & Admin Health Inspector
- [x] Phase 7: Dedicated Unlisted Partner Dashboard at `/partner` (Registrar removed from public website)

## Architecture Summary
- **Frontend**: Vanilla HTML/CSS/JS with zero build dependencies, preserving peak performance and aesthetics.
- **Backend / Database**: Supabase PostgreSQL tables (`members`, `applications`), Row-Level Security (RLS) policies, and storage bucket.
- **Diagnostics Layer**: Interactive Telemetry Console directly on invitation form showing exact PostgreSQL error codes (`42501`, `42P01`, `42703`), PostgREST hints, and one-click copyable SQL fixes.
- **Admin Health Inspector**: Live probe testing database connectivity, table accessibility, local backup counts, and one-click cloud synchronization.
- **Deployment**: `vercel.json` configured for instant zero-configuration static deployment.
