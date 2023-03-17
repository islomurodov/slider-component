const prevBtn = document.querySelector('.prev__item'),
    nextBtn = document.querySelector('.next__item'),
    imgs = document.querySelector('.slider__items');

const img = document.querySelectorAll('.slide');


let index = 0;

function changeImage() {
    if ( index > img.length - 1 ) {
        index = 0;
    } else if ( index < 0 ) {
        index = img.length - 1;
    }
    imgs.style.transform = `translateX(${-index * 500}px)`;
} 


nextBtn.addEventListener("click", function change(){
    index++;
    resetInterval();
    changeImage();
});

prevBtn.addEventListener('click', function change(){
    index--;
    resetInterval();
    changeImage();
});

let interval = setInterval(run, 2000);

function run() {
    index++;
    changeImage();
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}