// ===== ALTERNÂNCIA DE IDIOMA =====
const btnPT = document.getElementById('langPT');
const btnEN = document.getElementById('langEN');

// Todos os elementos com data-lang
const langElements = document.querySelectorAll('[data-lang]');

function setLanguage(lang) {
    // Atualiza botões
    btnPT.classList.toggle('active', lang === 'pt');
    btnEN.classList.toggle('active', lang === 'en');

    // Mostra/esconde elementos
    langElements.forEach(el => {
        if (el.dataset.lang === lang) {
            el.style.display = '';
        } else {
            el.style.display = 'none';
        }
    });
}

// Eventos dos botões
btnPT.addEventListener('click', () => setLanguage('pt'));
btnEN.addEventListener('click', () => setLanguage('en'));

// Idioma padrão: português
setLanguage('pt');