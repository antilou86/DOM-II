//creates an array from all elements with the .block class
const blocks = document.querySelectorAll('.block');
const blockArray = Array.from(blocks);

//variable creation for each unique block element
const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');

//5 event listeners
//each listener loops through all block elements and sets
//the order to zero. then sets the clicked elements order
//to -1 to ensure it jumps to the top

redBlock.addEventListener('click', (event) => {
    for (i=0; i <= blockArray.length -1; i++) {
        blockArray[i].style.flexWrap = 'nowrap';
        blockArray[i].style.order = 0;
    };
    event.target.style.order = -1;
});

blueBlock.addEventListener('click', (event) => {
    for (i=0; i <= blockArray.length -1; i++) {
        blockArray[i].style.flexWrap = 'nowrap';
        blockArray[i].style.order = 0;
    }
    event.target.style.order = -1;
});
greenBlock.addEventListener('click', (event) => {
    for (i=0; i <= blockArray.length -1; i++) {
        blockArray[i].style.flexWrap = 'nowrap';
        blockArray[i].style.order = 0;
    }
    event.target.style.order = -1;
});
pinkBlock.addEventListener('click', (event) => {
    for (i=0; i <= blockArray.length -1; i++) {
        blockArray[i].style.flexWrap = 'nowrap';
        blockArray[i].style.order = 0;
    }
    event.target.style.order = -1;
});
grayBlock.addEventListener('click', (event) => {
    for (i=0; i <= blockArray.length -1; i++) {
        blockArray[i].style.flexWrap = 'nowrap';
        blockArray[i].style.order = 0;
    }
    event.target.style.order = -1;
});

//travel to the right on mousedown


let scriptMaker = (element) => {
    //grabs 1st instance of whichever element you pass in
    let parentElement = document.querySelectorAll(element)[0];
    //creates a new fragment of html
    let fragment = document.createDocumentFragment();
    //creates html element <script> and adds it to fragment
    let script = document.createElement('script');
    fragment.prepend(script);
    //selects new <script> element and adds the greensock CDN info.
    let scriptFrag = fragment.querySelector('script')
    scriptFrag.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js");
    //appends <script> (with the source) to your selected element
    parentElement.appendChild(fragment);
    }
scriptMaker('body');
    
//uses gsap to animate the lil blocks based on mousedown and mouseleave events.
redBlock.addEventListener('mousedown', (event) => {   
    TweenMax.to(event.target, 5, {x:1000} );
});
redBlock.addEventListener('mouseleave', (event) => {   
    TweenMax.to(event.target, 3, {x:0} );
});
//blue
blueBlock.addEventListener('mousedown', (event) => {   
    TweenMax.to(event.target, 5, {x:1000} );
});
blueBlock.addEventListener('mouseleave', (event) => {   
    TweenMax.to(event.target, 3, {x:0} );
});
//green
greenBlock.addEventListener('mousedown', (event) => {   
    TweenMax.to(event.target, 5, {x:1000} );
});
greenBlock.addEventListener('mouseleave', (event) => {   
    TweenMax.to(event.target, 3, {x:0} );
});
//pink
pinkBlock.addEventListener('mousedown', (event) => {   
    TweenMax.to(event.target, 5, {x:1000} );
});
pinkBlock.addEventListener('mouseleave', (event) => {   
    TweenMax.to(event.target, 3, {x:0} );
});
//gray
grayBlock.addEventListener('mousedown', (event) => {   
    TweenMax.to(event.target, 5, {x:1000} );
});
grayBlock.addEventListener('mouseleave', (event) => {   
    TweenMax.to(event.target, 3, {x:0} );
});

