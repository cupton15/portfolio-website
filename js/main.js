$(document).ready(function() {
    $('.nav-link').on('click', function(){
        $('.content').css('display', 'none');
        $('.content').fadeIn(500);

        if($('#nav-toggle').width === 0){
            $('#nav-toggle').toggleClass('active');
            $('nav .nav-container').hide('slide', { direction: 'right'}, 500);   
        }
    })

    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
        $('nav .nav-container').toggle('slide', {direction: 'right'}, 500);
    });
})