const configs = {
    popular: { total: 100, label: "🔥 Jogos Populares" },
    pg: { total: 160, label: "🐯 PG" },
    pragmatic: { total: 420, label: "🎰 Pragmatic" },
    evolution: { total: 12, label: "🎲 Evolution" },
    tada: { total: 400, label: "👈 Tada" }
};

function renderGames(categoria) {
    const container = document.getElementById('game-container');
    const config = configs[categoria];
    
    // Atualiza botões
    document.querySelectorAll('.categorias button').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.includes(config.label.split(' ')[1])) btn.classList.add('active');
    });

    let html = `<h2>${config.label}</h2><div class="games-grid">`;
    
    for (let i = 1; i <= config.total; i++) {
        const hiddenClass = i > 12 ? 'hidden-game' : '';
        html += `
            <div class="game-card ${hiddenClass}">
                <img src="placeholder.jpg" alt="Jogo">
                <p>Jogo ${i}</p>
                <button onclick="window.location.href='jogo.html'">JOGAR</button>
            </div>`;
    }
    
    html += `</div>`;
    if (config.total > 12) {
        html += `<button class="btn-more" id="btn-more" onclick="showAll()">Mostrar Tudo ⏬</button>`;
    }
    
    container.innerHTML = html;
}

function showAll() {
    document.querySelectorAll('.hidden-game').forEach(el => el.classList.remove('hidden-game'));
    document.getElementById('btn-more').style.display = 'none';
}

// Força o carregamento ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
    renderGames('popular');
});
