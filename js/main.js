$(document).ready(function() {
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
        $('nav .nav-container').toggle('slide', {direction: 'right'}, 500);
    });
})