document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade para mudar a cor de fundo
    const bgColorPicker = document.getElementById('bgColor');
    const body = document.body;

    // Tenta carregar a cor de fundo salva no localStorage
    const savedColor = localStorage.getItem('siteBackgroundColor');
    if (savedColor) {
        body.style.backgroundColor = savedColor;
        bgColorPicker.value = savedColor; // Define o valor do seletor de cor
    }

    // Adiciona um listener para o evento 'input' (muda em tempo real) no seletor de cor
    bgColorPicker.addEventListener('input', (event) => {
        const newColor = event.target.value;
        body.style.backgroundColor = newColor;
        // Salva a nova cor no localStorage para que ela persista
        localStorage.setItem('siteBackgroundColor', newColor);
    });

    // Você pode adicionar mais funcionalidades interativas aqui, se desejar!
    // Ex: Animações ao scroll, pop-ups, etc.
});