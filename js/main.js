$(document).ready(function(){
    $('#site-menu-btn').on('click', function(){
        $('body').addClass('active-navigation');
    });
    $('#site-menu').on('click', 'li', function(){
        $('body').removeClass('active-navigation');
    });
});
