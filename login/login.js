$(document).ready(function () {
    $('.frame-signup').fadeOut();
    // $(window).scrollTop($(window).height() - 100);
    var position = $('#heading-page').position();
    var hd_top = position.top;
    
    // $(window).scrollTop(hd_top);
    setTimeout(() => $(window).scrollTop(hd_top - 50), 500);
    $('.frame .button-change-1').click(function() {
        if ($(this).text().toLowerCase() == 'login') {
            
            $('.frame-signup').fadeOut('swing', function(){
                $('.frame-login').fadeIn();
            });
        } else {
            $('.frame-login').fadeOut('swing', function() {
                $('.frame-signup').fadeIn();
            });
        }
    });
    $('#confirm-admin:checked').click(function() {  
        if ($(this).val() == "true")
            $('.frame-login .submit-btn').attr('href', 'admin.html');
        else
            $('.frame-login .submit-btn').attr('href', 'index.html');
        console.log($(this).val());
    });
});
