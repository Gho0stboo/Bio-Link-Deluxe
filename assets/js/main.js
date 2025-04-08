// JavaScript para rolagem automática
const carousel = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-container .box');
let totalWidth = 0;

// Calcula a largura total do carrossel
items.forEach(item => totalWidth += item.offsetWidth);

// Função para rolar o carrossel
function autoScroll() {
  carousel.scrollBy({
    left: 1,  // Move 1px para a esquerda a cada chamada
    behavior: 'smooth'  // Rolagem suave
  });

  // Se o carrossel chegou ao final, reinicia a rolagem
  if (carousel.scrollLeft >= totalWidth - carousel.clientWidth) {
    carousel.scrollLeft = 0;
  }
}

// Chama a função autoScroll a cada 10ms para simular a rolagem contínua
setInterval(autoScroll, 10);
