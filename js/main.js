$(document).ready(function() {

    if ($(window).width() < 1023) {
        $('.sidebar').append($('header ul'), $('.hdr__main .lang'))

        $(document).on('click', '.hamburger', function(e){
            $('body').addClass('opened')
        })


        $(document).on('click', 'body', function(e){
            if (!$(e.target).is('.hamburger *, .hamburger, .sidebar, .sidebar *')) {
                $('body').removeClass('opened')
            }
        })

         $(document).on('click', '.ftr__top .toggle_ftr', function() {
            $(this).toggleClass('active')
            $(this).next().slideToggle()
        })

    }
 
});
    