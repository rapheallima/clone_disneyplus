document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSelection = document.querySelector('.hero');
    const alturaHero = heroSelection.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaHeader()
        }

        else {
            mostraHeader()
        }
    })

    // Seção de atrações, programação das abas

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodosAbas();
            aba.classList.add('shows__list--is-active')
            removeAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    // Seção FAQ, accordion

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreFechaResposta);
    }
})

function ocultaHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function mostraHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreFechaResposta(e) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = e.target.parentNode;

    elementoPai.classList.toggle(classe)
}

function removeAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodosAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}