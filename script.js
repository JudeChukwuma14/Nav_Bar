const bars = document.querySelector('.bars')
const allLinks = document.querySelector('.all-links')
const close = document.querySelector('.close')

bars.addEventListener('click', toggleMobileNav)


function toggleMobileNav(){
    allLinks.classList.add('display-nav')
    bars.classList.add('shadow')
    close.classList.remove('shadow')
}

close.addEventListener('click', removeMobileNav)

function removeMobileNav(){
    allLinks.classList.remove('display-nav')
    bars.classList.remove('shadow')
    close.classList.add('shadow')
}