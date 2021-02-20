const slider = document.querySelector('.imageslider');
const  sliderimages = document.querySelectorAll('.imageslider  img');
const dotv = document.querySelectorAll('.btn');

//Button prev and next
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 1;

const size = sliderimages[0].clientWidth;

slider.style.transform = 'translateX(' +(-size * counter) + 'px)';

next.addEventListener('click', () => {
if (counter >= sliderimages.length - 1) return;
slider.style.transition = "transform 0.2s ease-in-out";
manualnav((counter-1));
counter++;
slider.style.transform = 'translateX(' +(-size * counter) + 'px)';
});


prev.addEventListener('click', () => {
    if (counter <= 0)return;
    slider.style.transition = "transform 0.2s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' +(-size * counter) + 'px)';
    manualnav((counter));
    
});

slider.addEventListener('transitionend', () => {
if (sliderimages[counter].id === 'lastClone'){
    slider.style.transition = 'none';
    counter = sliderimages.length - 2;
    slider.style.transform = 'translateX(' +(-size * counter) + 'px)';
}
if (sliderimages[counter].id === 'firstClone'){
    slider.style.transition = 'none';
    counter = sliderimages.length - counter;
    slider.style.transform = 'translateX(' +(-size * counter) + 'px)';
}

});

function manualnav(manual) {
   sliderimages.forEach((imageslider) => {
      imageslider.classList.remove('active');
   });
   dotv.forEach((btn,i) => {
       btn.classList.remove('active');
 });

    dotv[manual].classList.add('active');
    sliderimages[manual].classList.add('active');
}
dotv.forEach((btn,i) => {
  btn.addEventListener('click', ()=> { 
    manualnav(i);
    slider.style.transition = "transform 0.4s ease-in-out";
    counter = i+1;
    slider.style.transform = 'translateX(' +(-size * counter) + 'px)';
  });
});