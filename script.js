const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next');
const container = document.querySelector('.images');

let counter = 0;

prevBtn.addEventListener('click', prevSlide);
prevBtn.addEventListener('click', nextSlide);

function prevSlide() {
    container.animate([{ opacity: '0.2' }, { opacity: '1.0' }]), {
        duration: 500,
        fill: 'forwards'
    }
    if (counter === 0) {
        counter = 5
    }
    counter--;

    container.style.backgroundImage = `img/bkg-${counter}.jpg`;
    console.log(counter);

}

function nextSlide() {
    container.animate([{ opacity: '0.2' }, { opacity: '1.0' }]), {
        duration: 500,
        fill: 'forwards'
    }
    if (counter === 4) {
        counter = -1
    }
    counter++;
    container.style.backgroundImage = `url(img/bkg-${counter}.jpg`;
    console.log(counter);
}