const toggleBtn = document.getElementById('toggle')


function closeNavbar(e) {
    if (
        document.body.classList.contains('show-nav') &&
        e.target !== toggle &&
        !toggle.contains(e.target) &&
        e.target !== navbar &&
        !navbar.contains(e.target)
      ) {
        document.body.classList.toggle('show-nav');
        document.body.removeEventListener('click', closeNavbar);
      } else if (!document.body.classList.contains('show-nav')) {
        document.body.removeEventListener('click', closeNavbar);
      }
}


toggleBtn.addEventListener('click',() => {
document.body.classList.toggle('show-nav')
document.body.addEventListener('click', closeNavbar);
})