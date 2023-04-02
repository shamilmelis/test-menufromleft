

const openMenu = document.getElementById('open__menu__button');
openMenu.addEventListener('click', function() {
    let containerOpen = document.getElementById('container_blocks')
    let body = document.getElementById('body');
    body.classList.add('noScroll')
    containerOpen.style.display = 'flex';
    containerOpen.classList.remove('container_blocks_close')
})

const closeMenu = document.getElementById('close__menu__button');
closeMenu.addEventListener('click', function() {
    body.classList.remove('noScroll')
    let containerOpen = document.getElementById('container_blocks')
    containerOpen.classList.add('container_blocks_close')
})