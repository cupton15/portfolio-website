$(document).ready(function() {
    $('.no-fouc').removeClass('no-fouc')
    
    $('.nav-link').on('click', function(){
        $('.content').css('display', 'none');
        $('.content').fadeIn(500);

        if($(window).width() < 1000){
            $('#nav-toggle').toggleClass('active');
            $('nav .nav-container').hide('slide', { direction: 'right'}, 500);   
        }
    })



    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
        $('nav .nav-container').toggle('slide', {direction: 'right'}, 500);
    });
})

console.warn('TODO: insert hilarious developer inside-joke here')