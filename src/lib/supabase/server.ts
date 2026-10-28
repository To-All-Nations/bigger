import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/** Create a request-scoped server client. No authentication policy is applied here. */
export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Supabase ist noch nicht konfiguriert. Siehe .env.example.");
  const cookieStore = await cookies();
  return createServerClient(url, key, {
    cookies: {
      getAll() { return cookieStore.getAll(); },
      setAll(cookiesToSet) {
        try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); }
        catch { /* Server Components cannot write cookies. A proxy is added with the auth design. */ }
      },
    },
  });
}
