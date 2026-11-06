
// Menu Hambúrguer Responsivo
const menuHamburger = document.querySelector('.menu-hamburger');
const navList = document.querySelector('.nav-list');
const menuOverlay = document.querySelector('.menu-overlay');
const navLinksItems = document.querySelectorAll('.nav-list a');


function toggleMenu() {
    menuHamburger.classList.toggle('active');
    navList.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}

function closeMenu() {
    menuHamburger.classList.remove('active');
    navList.classList.remove('active');
    menuOverlay.classList.remove('active');
}

if (menuHamburger && navList && menuOverlay) {
    menuHamburger.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', closeMenu);

    navLinksItems.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });
}

// =========================================
// TEMA CLARO E ESCURO (DARK/LIGHT MODE)
// =========================================
const themeToggleBtn = document.getElementById('tema-toggle');
const themeIcon = document.getElementById('theme-icon');

// 1. Verifica se já existe um tema salvo no navegador ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.classList.replace('bi-sun', 'bi-moon-stars');
    themeToggleBtn.setAttribute('aria-pressed', 'true');
}

// 2. Adiciona o evento de clique no botão
themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe do tema no body
    document.body.classList.toggle('light-theme');
    
    const isLight = document.body.classList.contains('light-theme');
    
    // Atualiza o atributo de acessibilidade (aria-pressed)
    themeToggleBtn.setAttribute('aria-pressed', isLight);
    
    // Altera o ícone e salva a preferência no localStorage
    if (isLight) {
        themeIcon.classList.replace('bi-sun', 'bi-moon-stars');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('bi-moon-stars', 'bi-sun');
        localStorage.setItem('theme', 'dark');
    }
});

const contatosForm = document.querySelector('.contatos-form');

if (contatosForm) {
    contatosForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Para captura dos valores digitados
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Para exibir mensagem de feedback ao usuário
        alert(`Obrigado pelo contato, ${name}! Sua mensagem foi enviada com sucesso.`);

        // Para limpar o formulário
        contatosForm.reset();
    });
}

// Para destacar o link ativo no menu durante o scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Para verificar se a rolagem atual está dentro da seção
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// Adicionar animação de revelação ao rolar a tela (Fade-in)
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Para aplicar o observador em todas as seções e cards
document.querySelectorAll('section, .habilidades-card, .projetos-card').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
});