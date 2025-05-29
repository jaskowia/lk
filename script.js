document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Aqui você pode adicionar lógica para enviar os dados do formulário
            // para um servidor (por exemplo, via Fetch API ou XMLHttpRequest).
            // Por enquanto, vamos apenas simular um envio.

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            // Simula o envio
            setTimeout(() => {
                formMessage.style.display = 'block';
                formMessage.style.backgroundColor = '#d4edda'; // Verde claro para sucesso
                formMessage.style.color = '#155724'; // Texto verde escuro
                formMessage.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

                contactForm.reset(); // Limpa o formulário
            }, 1000); // Espera 1 segundo para simular o envio
        });
    }

    // Exemplo de interatividade: scrolar suavemente para as seções
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});