import _ from 'lodash';
import './style.css';



import { nav,content } from './Nav.js';
const cabeca = document.querySelectorAll('.cabeca');


cabeca.forEach(cabeca => {
    cabeca.addEventListener('click', (e) => {
        const tx = cabeca.innerHTML.trim(); // Use trim para remover espaços em branco extras

        if (tx === "Home") {
            // Se clicar em "Home", mostra a seção home
            content.innerHTML = ''; // Limpa o conteúdo atual
            content.appendChild(nav.sec); // Adiciona a seção home ao conteúdo
        }
        if (tx === "Menu") {
            content.innerHTML = '';
            content.appendChild(nav.sectionMenu); // Adiciona a seção home ao conteúdo

        }
        if (tx === "Sobre") {
            alert('Não tem nada aki!!');
        }
    });
});

/////////////////////////////////////


