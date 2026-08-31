// Funções de Navegação Geral
function entrar() {
    window.location.href = "home.html";
}

function cadastrar() {
    window.location.href = "cadastro.html";
}

// ALTERADO: Agora redireciona diretamente para o servidor externo de jogos
function entrarJogo() {
    window.location.href = "https://x29xka0q.com";
}

// Função global de Logout (Limpa a sessão e manda para o login)
function fazerLogout() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
}
