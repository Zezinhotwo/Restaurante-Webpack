import Frame1 from './img/Frame1.png';
import Frame2 from './img/Frame2.png';
import Frame3 from './img/Frame3.png';
import Frame4 from './img/Frame4.png';
import Icon from './img/burg.png';


const images = [Frame1, Frame2, Frame3, Frame4, Icon];

const createImageElements = (classNames) => {
    const imageElements = images.map((src, index) => {
        const img = new Image();
        img.src = src;
        img.classList.add(classNames[index]);
        return img;
    });
    return imageElements;
};


export { createImageElements };