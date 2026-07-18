const SUPABASE_URL = "https://guavczqfnqkshhgpyccs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_1qUbWglTgDfCV4MIDT7qWQ_jetIG_ht";

// A forma correta para a v2 do Supabase é esta:
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
