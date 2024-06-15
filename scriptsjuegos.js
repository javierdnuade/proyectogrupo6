document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada y lista");

    const menuToggle = document.getElementById('menu-ham');
    const menu = document.getElementById('buttons-header');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
