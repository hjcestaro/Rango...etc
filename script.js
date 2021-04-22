window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

function toggleMenu() {
    const menu = document.querySelector('.menuToggle')
    const navigation = document.querySelector('.navigation')

    menu.classList.toggle('active')
    navigation.classList.toggle('active')
}