



// carousel
const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button-carousel");
var isTypingActive = 0;

let current = 0;
let prev = 4;
let next = 1;

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    if (activeSection == 2) {
        if (isTypingActive == 0) {
            isTypingActive = 1
            current = number;
            prev = current - 1;
            next = current + 1;

            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
                slides[i].classList.remove("prev");
                slides[i].classList.remove("next");
            }

            if (next == 5) {
                next = 0;
            }

            if (prev == -1) {
                prev = 4;
            }

            deleteLetter()
            countLetter = 0;
            TyperText = slides[current].id;
            setTimeout(() => {
                document.getElementById('textDinamically').textContent = 'PERSONA: '
                typeWriter()
            }, 400)

            slides[current].classList.add("active");
            slides[prev].classList.add("prev");
            slides[next].classList.add("next");
        }
    }
}


for (let i = 0; i < button.length; i++) { // прокрутка по кнопкам
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

setInterval(() => {
    if (isTypingActive == 0) {
        gotoNext();
    }
}, 5000); // автоматическая прокрутка


// появление логотипа при наведении нв кнопку
const mainbutton = document.getElementById('mainbutton'); // select the button element
mainbutton.addEventListener('mouseover', () => {
    buttonElem = document.getElementById('active-button-elem')
    buttonElem.style.position
    buttonElem.style.display = 'block'
    setTimeout(() => {
        buttonElem.style.marginTop = '10px';
        buttonElem.style.transition = 'margin-top 0.2s'; // add a transition effect to the animation
        buttonElem.classList.remove('animateback')
        buttonElem.classList.add('animate')
    }, 100);
});

mainbutton.addEventListener('mouseout', () => {

    buttonElem = document.getElementById('active-button-elem')
    buttonElem.classList.remove('animate')
    buttonElem.classList.add('animateback')
    buttonElem.style.marginTop = '-50px';
    buttonElem.style.transition = 'margin-top 0.3s'; // add a transition effect to the animation

    setTimeout(() => {
        buttonElem.style.display = 'none'
    }, 100);
});



// follower cursor

const left_block = document.querySelector('.left-follow');
const right_block = document.querySelector('.right-follow');
const follower = document.querySelector('.follower-element');

left_block.addEventListener('mouseenter', () => {
    follower.style.display = 'block';
});

left_block.addEventListener('mousemove', (event) => {
    follower.style.transform = 'scaleX(1)';
    follower.style.top = `${event.clientY - 40}px`;
    follower.style.left = `${event.clientX - 40}px`;
    document.body.style.cursor = 'none';
});

left_block.addEventListener('mouseleave', () => {
    follower.style.display = 'none';
    document.body.style.cursor = 'default';
});


right_block.addEventListener('mouseenter', () => {
    follower.style.display = 'block';
});

right_block.addEventListener('mousemove', (event) => {
    follower.style.transform = 'scaleX(-1)';
    follower.style.top = `${event.clientY - 40}px`;
    follower.style.left = `${event.clientX - 40}px`;
    document.body.style.cursor = 'none';
});

right_block.addEventListener('mouseleave', () => {
    follower.style.display = 'none';
    document.body.style.cursor = 'default';
});


// click 

left_block.addEventListener('click', () => {
    // console.log('1')
    // console.log(getComputedStyle(left_block).display)
    if (getComputedStyle(left_block).display === 'block') {
        // console.log('2')
        gotoPrev();
    }
});


right_block.addEventListener('click', () => {
    if (getComputedStyle(right_block).display == 'block') {
        gotoNext();
    }
});


// переход к карусели

const speed = 50;
var TyperText = 'ALEM'
const textContainer = document.getElementById("textDinamically");
let countLetter = 0;

function typeWriter() {
    if (countLetter < TyperText.length) {
        textContainer.innerHTML += TyperText.charAt(countLetter);
        countLetter++;
        setTimeout(typeWriter, speed);
    } else {
        isTypingActive = 0
    }
}

function deleteLetter() {
    DinamicText = document.getElementById("textDinamically");
    let text = DinamicText.textContent;
    length = text.length - 1;
    // console.log(`${length} ${text}`)

    if (length > 6) {
        // console.log(`${length} ${text}`)
        document.getElementById("textDinamically").innerHTML = text.substring(0, length);
        setTimeout(deleteLetter, speed);
    }
}

var field = document.getElementById('text-page1');
var activeSection = 1

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var triggerElement = document.getElementById('carousel-elem');
    var triggerPosition = triggerElement.offsetTop - 300;
    // console.log(`${scrollPosition} ${activeSection}`)
    if (scrollPosition > 250 && activeSection == 1) {
        buttonElem = document.getElementById('active-button-elem')
        buttonElem.style.position = 'relative'

        field.classList.remove('animateback');
        field.classList.add('animate');

        document.getElementById('mainbutton').textContent = 'в корзину';

        document.getElementById('scrollElem').classList.remove('animate');
        document.getElementById('scrollElem').classList.add('animateback');
        this.setTimeout(() => {
            document.getElementById('scrollElem').style.display = 'none'
        }, 100)

        setTimeout(() => {
            document.getElementById('textDinamically').classList.remove('animateback');
            document.getElementById('textDinamically').classList.add('animate');

            countLetter = 0;
            document.getElementById('textDinamically').textContent = 'PERSONA: '
            TyperText = document.querySelectorAll(".item")[0].id;
            typeWriter();




            document.getElementById('carousel-elem').style.opacity = 0;
            document.getElementById('carousel-elem').style.display = 'flex'
            field.classList.remove('container');
        }, 400);
        document.getElementById('carousel-elem').classList.remove('animateback');
        document.getElementById('carousel-elem').classList.add('animate');
        activeSection = 2

    } else if (scrollPosition < 250 && activeSection == 2) {
        buttonElem = document.getElementById('active-button-elem')
        buttonElem.style.position = 'fixed'

        document.getElementById('textDinamically').classList.remove('animate');
        document.getElementById('textDinamically').classList.add('animateback');

        deleteLetter();

        document.getElementById('scrollElem').classList.remove('animateback');
        document.getElementById('scrollElem').classList.add('animate');
        this.setTimeout(() => {
            document.getElementById('scrollElem').style.display = 'flex'
        }, 100)

        document.getElementById('mainbutton').textContent = 'выбрать';

        document.getElementById('carousel-elem').classList.remove('animate');
        document.getElementById('carousel-elem').classList.add('animateback');
        setTimeout(() => {
            document.getElementById('carousel-elem').style.display = 'none'
            field.classList.add('container');
            field.classList.remove('animate');
            field.classList.add('animateback');
        }, 300);
        activeSection = 1
    }
});




// Scroll animations

const toggleLink = document.getElementById('photo-link');
const toggleLinkSvg = document.getElementById('button-photo');

const SvgLink = document.getElementById('button-photo-svg');

toggleLinkSvg.addEventListener('click', (event) => {
    photosContainer.classList.remove('animate')
    photosContainer.classList.add('animateback')
    document.getElementById('persona-photo1').classList.remove('animate')
    document.getElementById('persona-photo2').classList.remove('animate')
    document.getElementById('persona-photo3').classList.remove('animate')
    document.getElementById('persona-photo1').classList.add('animateback')
    document.getElementById('persona-photo2').classList.add('animateback')
    document.getElementById('persona-photo3').classList.add('animateback')
    SvgLink.classList.remove('animate')
    SvgLink.classList.add('animateback')
    setTimeout(() => {
        photosContainer.style.display = 'none';
        document.getElementById('b-text2-center').style.opacity = 0.39;
        toggleLinkSvg.style.display = 'none';
        toggleLink.style.display = 'inline';
    }, 200);
})

toggleLink.addEventListener('click', (event) => {
    event.preventDefault();
    photosContainer = document.getElementById('persona-photos-container')
    if (photosContainer.style.display === 'none') {
        photosContainer.style.display = 'block';

        photosContainer.classList.remove('animateback')
        photosContainer.classList.add('animate')
        document.getElementById('b-text2-center').style.opacity = 0.1;
        document.getElementById('persona-photo1').classList.remove('animateback')
        document.getElementById('persona-photo2').classList.remove('animateback')
        document.getElementById('persona-photo3').classList.remove('animateback')
        document.getElementById('persona-photo1').classList.add('animate')
        document.getElementById('persona-photo2').classList.add('animate')
        document.getElementById('persona-photo3').classList.add('animate')
        SvgLink.classList.remove('animateback')
        SvgLink.classList.add('animate')
        toggleLinkSvg.style.display = 'inline';
        toggleLink.style.display = 'none';
    }
});


function scrollToSection() {
    window.scrollTo({
        top: 1200,
        behavior: 'smooth'
    });
}


const sectionScroll = document.getElementById('scroll-section');
const viewportHeight = window.innerHeight;
const scrollHeight = sectionScroll.offsetTop + sectionScroll.offsetHeight;


window.addEventListener('scroll', function () {
    // console.log(`${window.scrollY} ${scrollHeight}=${sectionScroll.offsetHeight}-${viewportHeight} (${sectionScroll.offsetTop + sectionScroll.offsetHeight})`)


    var scrollPosition = window.scrollY;
    var triggerElement = document.getElementById('scroll-section');
    var image = document.getElementById('scroll-img');
    var text = this.document.getElementById('scroll-text');
    var triggerPosition = triggerElement.offsetTop - 200;
    if (scrollPosition + 300 > triggerPosition) { // img
        image.style.display = 'block';
        image.style.display = 'block';
        image.style.position = 'fixed';
        image.style.right = (triggerPosition - scrollPosition + 200) * (-1) + 'px';
        if (parseInt(image.style.right) > 0) {
            image.style.right = '0px'
        }
    } else {
        image.style.display = 'none';
    }

    // console.log(`${scrollPosition} + 650 > ${triggerPosition} || ${scrollPosition + 650}`)


    if (activeSection == 2) {
        follower.style.display = 'none';
        if (scrollPosition > 1300) {
            document.getElementById('section1').classList.remove('animateback')
            document.getElementById('section1').classList.add('animate')

        } else {
            if (document.getElementById('section1').classList.contains('animate')) {
                document.getElementById('section1').classList.remove('animate')
                document.getElementById('section1').classList.add('animateback')
            }
        }
    }

    console.log(`${triggerPosition} ${scrollPosition}`)

    if (scrollPosition + 650 > triggerPosition) { // text
        text.style.display = 'block';
        text.style.left = (triggerPosition - scrollPosition + 300) * (-2) + 'px';
        if (parseInt(text.style.left) > -49) {
            const var1 = 290;
            image.style.position = 'fixed';
            text.style.opacity = 1 - (scrollPosition - var1 - triggerPosition) * 1.5 / 500;
            document.getElementById('b-text2-center').style.position = 'fixed'
            document.getElementById('b-text2-center').style.top = '15%'
            if (parseFloat(text.style.opacity) <= 0) {
                text.style.display = 'none';
                // document.getElementById('text-container').style.display = 'block';
                document.getElementById('b-text2-center').style.display = 'block'
                document.getElementById('b-text2-center').classList.remove('activeback')
                document.getElementById('b-text2-center').classList.add('active')
                // textCenter2 = document.getElementById('b-text2-center')
                // textCenter2.left = '-10px';
                // textCenter2.style.transition = 'left 0.3s'; // add a transition effect to the animation
            } else {
                // document.getElementById('text-container').style.display = 'none'
                if (document.getElementById('b-text2-center').classList.contains('active')) {
                    document.getElementById('b-text2-center').classList.remove('active')
                    document.getElementById('b-text2-center').classList.add('activeback')
                    this.setTimeout(() => {
                        document.getElementById('b-text2-center').style.display = 'none'
                    }, 200)
                }
            }


            //text.style.left = '-49px'
        }
    } else {
        text.style.display = 'none';
    }

    if (window.scrollY + window.innerHeight > scrollHeight) {
        // document.getElementById('text-container').style.position = 'absolute';
        // document.getElementById('text-container').style.bottom = '0px';
        document.getElementById('b-text2-center').style.position = 'absolute'
        document.getElementById('b-text2-center').style.top = '57%'

        document.getElementById('scroll-img').style.position = 'absolute';
        document.getElementById('scroll-img').style.bottom = '0px';
    }
});