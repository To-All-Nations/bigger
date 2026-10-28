import { createBrowserClient } from "@supabase/ssr";

/** Create a browser client only when a feature is ready to use Supabase. */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Supabase ist noch nicht konfiguriert. Siehe .env.example.");
  return createBrowserClient(url, key);
}
