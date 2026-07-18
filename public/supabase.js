// supabase.js
const SUPABASE_URL = "https://guavczqfnqkshhgpyccs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_1qUbWglTgDfCV4MIDT7qWQ_jetIG_ht";

// Verifica se o supabase foi carregado via CDN (no HTML)
if (typeof supabase === 'undefined') {
    console.error("A biblioteca Supabase não foi carregada. Verifique o link no seu HTML.");
} else {
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.supabaseClient = supabase; // Torna o cliente acessível globalmente
    console.log("Supabase inicializado com sucesso.");
}
