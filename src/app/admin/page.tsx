import { createClient } from "@supabase/supabase-js";
import AdminClient from "./AdminClient";

export const dynamic = "force-dynamic";

async function getSubscribers() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("subscribers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return [];
  return data ?? [];
}

export default async function AdminPage() {
  const subscribers = await getSubscribers();
  return <AdminClient subscribers={subscribers} />;
}
