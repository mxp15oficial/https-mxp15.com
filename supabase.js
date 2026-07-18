// supabase.js
const SUPABASE_URL = "SUA_URL_AQUI";
const SUPABASE_ANON_KEY = "SUA_CHAVE_AQUI";

// É crucial que a inicialização esteja definida assim:
window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

