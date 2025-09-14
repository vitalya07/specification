document.addEventListener('DOMContentLoaded', ()=> {
    //Меню-гамбургер начало
    const hamburger = document.querySelector('.hamburger'),
          header = document.querySelector('.header');
    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('menu__active')
    })   
    //Меню-гамбургер конец
})