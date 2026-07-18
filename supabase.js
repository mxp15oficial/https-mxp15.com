 supabase.js
const SUPABASE_URL = "SUA_URL_AQUI";
const SUPABASE_ANON_KEY = "SUA_CHAVE_AQUI";

// Criação correta do cliente para a v2 da biblioteca
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
