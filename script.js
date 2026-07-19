// Funções de Navegação Geral
function entrar() {
    window.location.href = "/home.html";
}

function cadastrar() {
    window.location.href = "/cadastro.html";
}

function entrarJogo() {
    window.location.href = "/jogo.html";
}

// Funções de Financeiro
function irParaDeposito() {
    window.location.href = "/deposito.html";
}

function irParaSaque() {
    window.location.href = "/saque.html";
}

// Lógica de Saque (Página de Saque)
function realizarSaque() {
    let valor = parseFloat(document.getElementById('valor-saque').value);
    
    if (typeof usuario !== 'undefined' && usuario.aposta_pendente > 0) {
        alert("Bloqueado: Você ainda precisa completar o requisito de aposta.");
    } else if (isNaN(valor) || valor < 10 || valor > 15000) {
        alert("O valor de saque deve estar entre R$ 10,00 e R$ 15.000,00.");
    } else {
        alert("Solicitação de saque de R$ " + valor.toFixed(2) + " enviada!");
    }
}

// Lógica de Cadastro com Supabase
async function executarCadastro(event) {
    if (event) event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    const { data, error } = await window.supabase.auth.signUp({
        email: email,
        password: senha,
    });

    if (error) {
        console.error("Erro no cadastro:", error.message);
        alert("Erro ao cadastrar: " + error.message);
    } else {
        console.log("Sucesso!", data);
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    }
}
