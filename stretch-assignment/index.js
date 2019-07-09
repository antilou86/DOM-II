const blocks = document.querySelectorAll('.block');
const blockArray = Array.from(blocks);

const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');

redBlock.addEventListener('mousedown', (event) => {
    for (i=0; i <= blockArray.length -1; i++) {
        blockArray[i].style.flexWrap = 'nowrap';
        blockArray[i].style.order = 0;
    };
    redBlock.style.order = -1;
});

blueBlock.addEventListener('mousedown', (event) => {
    for (i=0; i <= blockArray.length -1; i++) {
        blockArray[i].style.flexWrap = 'nowrap';
        blockArray[i].style.order = 0;
    }
    blueBlock.style.order = -1;
});
greenBlock.addEventListener('mousedown', (event) => {
    for (i=0; i <= blockArray.length -1; i++) {
        blockArray[i].style.flexWrap = 'nowrap';
        blockArray[i].style.order = 0;
    }
    greenBlock.style.order = -1;
});
pinkBlock.addEventListener('mousedown', (event) => {
    for (i=0; i <= blockArray.length -1; i++) {
        blockArray[i].style.flexWrap = 'nowrap';
        blockArray[i].style.order = 0;
    }
    pinkBlock.style.order = -1;
});
grayBlock.addEventListener('mousedown', (event) => {
    for (i=0; i <= blockArray.length -1; i++) {
        blockArray[i].style.flexWrap = 'nowrap';
        blockArray[i].style.order = 0;
    }
    grayBlock.style.order = -1;
});

