$(document).ready(function() {
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
        $('nav ul').toggle('slide', {direction: 'right'}, 500);
    });
})