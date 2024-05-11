const createSection = () => {
    const sec = document.createElement('section');
    sec.classList.add('first');
    return sec;
};

const createHgroup = () => {
    const hgroup = document.createElement('hgroup');
    hgroup.classList.add('hgroup');
    return hgroup;
};

const createHeader = (title, subHeader, subText) => {
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h5 = document.createElement('h5');
    h1.classList.add('title');
    h2.classList.add('subTx');
    h5.classList.add('subTx1');
    h1.innerText = title;
    h2.innerText = subHeader;
    h5.innerText = subText;
    const headerContainer = document.createElement('div');
    headerContainer.appendChild(h1);
    headerContainer.appendChild(h2);
    headerContainer.appendChild(h5);
    return headerContainer;
};

export { createSection, createHgroup, createHeader};