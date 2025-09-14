document.addEventListener('DOMContentLoaded', ()=> {
    //Меню-гамбургер начало
    const hamburger = document.querySelector('.hamburger'),
          header = document.querySelector('.header');
    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('menu__active')
    })   
    //Меню-гамбургер конец
    //слайдер 1 начало

    const swiper = new Swiper('.main__swiper', {
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //     delay: 3000,
    // },
    // speed: 2000,
    slidesPerView: 1.2,  // По умолчанию для экранов >= 500px
    spaceBetween: 20,
    centeredSlides: false,
    breakpoints: {
        500: {  // Для экранов шириной 500px и больше
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        0: {  // Для экранов шириной меньше 500px
            slidesPerView: 1.08,  // Показывает ~8% второго слайда (примерно 20-30px края, в зависимости от ширины слайда)
            spaceBetween: 10,     // Уменьшил отступ для компактности
        }
    }
});


    // Слайдер 1 конец
})