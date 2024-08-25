// Seleciona o botão e os elementos que devem ser afetados pelo tema
const themeToggleButton = document.getElementById('theme-toggle');
const elementsToTheme = document.querySelectorAll('body, header, nav, .carousel, .nav-menu li a');

// Função para aplicar o tema claro
function applyLightTheme() {
    document.body.classList.add('light-theme');
    elementsToTheme.forEach(element => element.classList.add('light-theme'));
    themeToggleButton.textContent = '🌙 Modo Escuro';
}

// Função para aplicar o tema escuro
function applyDarkTheme() {
    document.body.classList.remove('light-theme');
    elementsToTheme.forEach(element => element.classList.remove('light-theme'));
    themeToggleButton.textContent = '🌞 Modo Claro';
}

// Verifica se o tema claro já estava salvo no localStorage
if (localStorage.getItem('theme') === 'light') {
    applyLightTheme();
} else {
    applyDarkTheme();
}

// Adiciona um evento de clique ao botão
themeToggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
        applyDarkTheme();
        localStorage.setItem('theme', 'dark');
    } else {
        applyLightTheme();
        localStorage.setItem('theme', 'light');
    }
});
