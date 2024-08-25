document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdown.addEventListener('click', () => {
        const isVisible = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isVisible ? 'none' : 'block';
    });

    // Fechar o menu se clicar fora dele
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});