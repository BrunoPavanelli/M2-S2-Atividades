const nav = document.querySelector('.nav__list')
const buttonOpenNav = document.querySelector('.hamburg')
const buttonCloseNav = document.querySelector('.close')
const columnRight = document.querySelector('.column__right')

buttonOpenNav.addEventListener('click', () => {
    nav.classList.add('shown')
    buttonOpenNav.classList.add('hidden')
    buttonCloseNav.classList.add('shown')
    columnRight.classList.add('shown-flex')
})

buttonCloseNav.addEventListener('click', () => {
    nav.classList.remove('shown')
    buttonOpenNav.classList.remove('hidden')
    buttonCloseNav.classList.remove('shown')
    columnRight.classList.remove('shown-flex')
})

