import fritas from './img/fritas.png';
import xtudao from './img/xtudao.png';
import torresmo from './img/torresmo.png';
import batata from './img/batata.png';
import cafe from './img/cafe.png';
import combo from './img/combo.png';
import burrito from './img/burrito.png';
import salada from './img/salada.png';

const images =  [fritas, xtudao,torresmo,batata,cafe,combo,burrito,salada ];

const createImageMenu = (classNames) => {
    const imageElements = images.map((src, index) => {
        const img = new Image();
        img.src = src;
        img.classList.add(classNames[index]);
        return img;
    });
    return imageElements;
};
export { createImageMenu };