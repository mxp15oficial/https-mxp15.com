// supabase.js
const SUPABASE_URL = "https://guavczqfnqkshhgpyccs.supabase.co";
const SUPABASE_ANON_KEY = "COLE_SUA_CHAVE_AQUI"; // Cole a chave anon public que você copiou

window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
console.log("Supabase inicializado!");
