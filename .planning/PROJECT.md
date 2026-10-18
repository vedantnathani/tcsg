# High Finance Guild — Supabase Backend & Deployment

## Overview
High Finance Guild is an invitation-only circle web application. The frontend is built with high-end editorial aesthetics (HTML/CSS/JS). This milestone integrates a Supabase backend for dynamic member directory management (addition & deletion) and invitation application form submissions, prepares GitHub version control with user token authentication, and configures zero-build deployment on Vercel.

## Core Objectives
1. **Supabase Database Schema**: Define tables for `members` and `applications` with Row Level Security (RLS) and seed scripts.
2. **Dynamic Member Directory**: Fetch live members from Supabase `members` table with graceful offline fallback.
3. **Application Form Submission**: Persist application requests directly into Supabase `applications` table with luxury feedback UI.
4. **Member Addition & Deletion Admin Console**: Provide a passkey-protected luxury admin modal to add new members or delete existing ones.
5. **Git & Vercel Deployment**: Initialize git repo, configure `vercel.json`, and provide clean steps for GitHub remote push with personal access token and Vercel hosting.
