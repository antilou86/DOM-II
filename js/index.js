// Your code goes here
//targets nav and sends alert if any links are clicked
let navi= document.querySelector('.nav');
navi.addEventListener('click', () => {
    alert('Oh, NOEZ!! the links are broken. SOMEONE WAKE UP THE DEVS!');
});

//targets body and adds day/night mode on doubleclick
let body = document.querySelector('body');
body.addEventListener('dblclick', () => {
   if (body.style.backgroundColor == 'grey') {
    body.style.backgroundColor = 'white';
    navi.style.backgroundColor = 'white';
    document.querySelector('header').style.backgroundColor= 'white';
    body.style.color = 'black';
    document.querySelector('header').style.color = 'black';
   } else {
    body.style.backgroundColor = 'grey';
    navi.style.backgroundColor = 'grey';
    document.querySelector('header').style.backgroundColor= 'grey';
    body.style.color = 'white';
    document.querySelector('header').style.color = 'white';
}});

//targets the two images in body main
let image1 = document.querySelectorAll('.img-content')[0];
let image2 = 
document.querySelectorAll('.img-content')[1];

//increases image scale on mouseover and shrinks it for mouseleave
image1.addEventListener('mouseover', event => {
    event.target.style.transform = 'scale(1.5)';
});
image1.addEventListener('mouseleave', event => {
    event.target.style.transform = `scale(.6)`;
 });
//same as above but for image 2
image2.addEventListener('mouseover', event => {
    event.target.style.transform = 'scale(1.5)';
});
image2.addEventListener('mouseleave', event => {
    event.target.style.transform = `scale(.6)`;
 });

 body.addEventListener('keydown', event => {
     if (event.key == 'ArrowRight')
    {event.target.style.fontSize += '.5em';} else if (event.key == 'ArrowLeft') 
    {event.target.style.fontSize -= '.5em';
    }
     });