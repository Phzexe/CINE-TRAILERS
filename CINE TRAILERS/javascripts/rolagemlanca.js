// Seleciona os elementos do carrossel e dos vídeos
const carousel = document.querySelector('.carrossel');
const items = document.querySelectorAll('.item');
const leftArrow = document.querySelector('.carrossel-control.left');
const rightArrow = document.querySelector('.carrossel-control.right');

// Variável para armazenar o índice do item atual
let currentIndex = 0;

// Função para parar todos os vídeos
function pauseAllVideos() {
    items.forEach(item => {
        const video = item.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0; // Reseta o tempo do vídeo
        }
    });
}

// Função para iniciar o vídeo do item atual
function playCurrentVideo() {
    const currentItem = items[currentIndex];
    const video = currentItem.querySelector('video');
    if (video) {
        video.play();
    }
}

// Função para exibir o item atual
function showItem(index) {
    pauseAllVideos(); // Para todos os vídeos
    carousel.style.transform = `translateX(-${index * 100}%)`;
    playCurrentVideo(); // Inicia o vídeo do item atual
}

// Função para mover o carrossel para o próximo item
function moveToNextItem() {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        showItem(currentIndex);
    }
}

// Função para mover o carrossel para o item anterior
function moveToPrevItem() {
    if (currentIndex > 0) {
        currentIndex--;
        showItem(currentIndex);
    }
}

// Adiciona event listeners aos botões do carrossel
leftArrow.addEventListener('click', moveToPrevItem);
rightArrow.addEventListener('click', moveToNextItem);

// Inicializa a página com o primeiro item visível e o vídeo iniciado
window.addEventListener('load', () => {
    showItem(currentIndex);
});
