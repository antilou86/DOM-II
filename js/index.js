// Your code goes here

//targets header and makes it dissapear for 2 seconds.
let headerImg = document.querySelector('.main-navigation');
headerImg.addEventListener('click', () => {
    headerImg.style.display = 'none';
    setTimeout(function(){
        headerImg.style.display = 'flex';
    },2000)
})

//targets nav and sends alert if any links are clicked
let navi= document.querySelector('.nav');
navi.addEventListener('click', (event) => {
    alert('Oh, NOEZ!! the links are broken. SOMEONE WAKE UP THE DEVS!');
    //stops alert from triggering when header is clicked, but doesnt stop it from dissapearing when links are clicked
    event.target.stopPropagation();
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
    setTimeout(() => {
        event.target.style.transform = `scale(1)`;
        }, 1000);
    
});

//same as above but for image 2
image2.addEventListener('mouseover',  event => {
    event.target.style.transform = 'scale(1.5)';
    setTimeout(() => {
    event.target.style.transform = `scale(1)`;
    }, 1000);
});

//I like this idea but i'll have to work on it when i have more time. 

// let p = document.querySelector('p')
//  p.addEventListener('keydown', event => {
//      if (event.key == 'ArrowRight')
//     {event.target.style.fontSize += '.5em';} else if (event.key == 'ArrowLeft') 
//     {event.target.style.fontSize -= '.5em';
//     }
//      });


//adds a snarky lil alert if someone tries to copy content. 
body.addEventListener('copy',() => {
    alert('Come on, try writing up your own content, thief.') ;
});

//targets buttons at the bottom of the page
let btn1 = document.querySelectorAll('.btn')[0];
let btn2 = document.querySelectorAll('.btn')[1];
let btn3 = document.querySelectorAll('.btn')[2];

console.log(btn1);

//something fun when button 1 is mashed down
btn1.addEventListener('mousedown', event => {
    event.target.innerHTML = 'LET ME GO';
});
//reverts changes on mouseup
btn1.addEventListener('mouseup', (event) => {
    event.target.innerHTML = 'Sign Me Up!';
});

//makes button2 do a wheelie on wheel scroll
btn2.addEventListener('wheel', (event) => {
    event.target.innerHTML = 'IT\'S A WHEELIE!!!';
    event.target.style.backgroundColor = 'red';
    event.target.style.transform = 'rotate(-20deg)';
    setTimeout(function(){
        event.target.innerHTML = 'Sign Me Up!';
        event.target.style.backgroundColor = '#17A2B8';
        event.target.style.transform = 'rotate(0deg)';
    }, 2000)
});
//displays secret message on alternate mouse click
btn3.addEventListener('auxclick', () => {

    alert('you\'ve discovered our hidden message. Too bad that means we have to...  dispose of you.')
});

//targets bottom image and flips it on right-click, also prevents context menu from popping up
let contentImg = document.querySelector('.content-destination img');
contentImg.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    event.target.style.transform = 'rotateX(180deg)';
    setTimeout( function(){
        event.target.style.transform = 'rotateX(0deg)';
    }, 2000);
});

