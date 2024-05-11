import { createSection, createHgroup, createHeader } from './domManipulation.js';
import { createImageElements } from './imageHandling.js';
import { createImageMenu } from './imageMenu.js';


const content = document.querySelector('.content');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const ft2 = document.createElement('div');
const sec = createSection();

const nav = (function () {
    //HOme
    const hgroup = createHgroup();
    const header = createHeader('Burger Club', 'The Ultimate', 'savor the Flavor, Join the Club!');
    const [frame1, frame2, frame3, frame4, icon] = createImageElements(['f1', 'f2', 'f3', 'f4', 'ft']);
    hgroup.appendChild(header);
    sec.appendChild(hgroup);
    sec.appendChild(icon);
    div2.appendChild(frame1);
    div2.appendChild(frame2);
    div2.appendChild(frame3);
    div2.appendChild(frame4);
    div2.classList.add('ft2')

    div1.appendChild(icon);
    div2.appendChild(ft2);
    sec.appendChild(div1);
    sec.appendChild(div2);
    content.appendChild(sec);

    // menu
    const [fritas, xtudao, torresmo, batata, cafe, combo, burrito, salada] = createImageMenu(['options', 'options', 'options', 'options', 'options', 'options', 'options', 'options'])
    const sectionMenu = document.createElement('section');
    sectionMenu.classList.add('menu');
    const lanches = document.createElement('div');

    lanches.classList.add('menu');
    lanches.appendChild(fritas);
    lanches.appendChild(xtudao);
    lanches.appendChild(torresmo);
    lanches.appendChild(batata);
    lanches.appendChild(cafe);
    lanches.appendChild(combo);
    lanches.appendChild(burrito);
    lanches.appendChild(salada);
    sectionMenu.appendChild(lanches);
    // lanches.appendChild(xtudao)
    return { sec, sectionMenu }; // Retorna a seção criada para uso posterior
})();

export { nav, content }