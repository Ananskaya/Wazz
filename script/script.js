// swiper
const heroSwiper = new Swiper('.hero-demonstration__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    spaceBetween: 10,
    autoplay: {
        delay: 6000,
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const aboutSwiper = new Swiper('.about-mobile__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    spaceBetween: 5,
    autoplay: {
        delay: 3000,
    },

});

const videoSwiper = new Swiper('.videos__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    spaceBetween: 5,
    autoplay: {
        delay: 3000,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// tabs
    const tabsBtn = document.querySelectorAll('.about-tabs__btn');
    const tabsItems = document.querySelectorAll('.about-tabs__slide');
    const tabsImages = document.querySelectorAll('.about__img');

    tabsBtn.forEach(function(item) {
        item.addEventListener('click', () => {
            let tabID = item.getAttribute('data-tab-id');
            let imgID = item.getAttribute('data-tab-img');
            let currentTab = document.querySelector(tabID);
            let currentImg = document.querySelector(imgID);

            tabsItems.forEach(function (item) {
                item.classList.remove('about-tabs__slide--active')
            })
            tabsImages.forEach(function (item) {
                item.classList.remove('about__img--active')
            })

            currentTab.classList.add('about-tabs__slide--active');
            currentImg.classList.add('about__img--active');
        });
    });

// modal
function openVideoModal() {
    document.getElementById('overlayVideo').classList.add('overlay--active');
}

function closeVideoModal() {
    document.getElementById('overlayVideo').classList.remove('overlay--active');
}