# BIGGER database migrations

This directory is reserved for BIGGER-owned, versioned Supabase migrations. It intentionally contains no schema changes yet: the V1 data model, access rules, retention periods, and the exact Supabase project have not been approved.

After those decisions are confirmed, create each migration with the Supabase CLI (`supabase migration new <descriptive_name>`) so the CLI controls its version prefix. Review and test changes against an explicitly confirmed BIGGER development project before any production use.
