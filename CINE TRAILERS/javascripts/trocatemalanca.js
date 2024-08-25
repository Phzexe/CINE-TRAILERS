// Função para alternar o tema
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Remove o tema atual e adiciona o novo tema
    body.classList.remove(`${currentTheme}-theme`);
    body.classList.add(`${newTheme}-theme`);
    
    // Salvar o tema no localStorage
    localStorage.setItem('theme', newTheme);
    
    // Atualizar o texto do botão
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.textContent = newTheme === 'dark' ? '🌙 Trocar Tema' : '🌕 Trocar Tema';
}

// Verificar e aplicar o tema salvo no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(`${savedTheme}-theme`);
    
    // Atualizar o texto do botão com base no tema salvo
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.textContent = savedTheme === 'dark' ? '🌙 Trocar Tema' : '🌕 Trocar Tema';
    
    // Adicionar o evento de clique no botão de troca de tema
    themeToggleButton.addEventListener('click', toggleTheme);
});
