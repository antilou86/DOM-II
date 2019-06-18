// Your code goes here
let navi= document.querySelector('.nav');

navi.addEventListener('click', () => {
    alert('Oh, NOEZ!! the links are broken. SOMEONE CALL THE DEVS!');
});


let body = document.querySelector('body');

console.log(body);

body.addEventListener('dblclick', () => {
    body.style.backgroundColor = 'grey';
    navi.style.backgroundColor = 'grey';
    document.querySelector('header').style.backgroundColor= 'grey';
    body.style.color = 'white';
    document.querySelector('header').style.color = 'white';
    alert('night mode initiated,')
});