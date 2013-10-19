$(document).ready(function() {
        
    //On Page Load
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('head').append('<link href="Ideas for Boutique mobile.css" type="text/css" rel="stylesheet"/>');
        $('.wrapper').css('height', String(Math.ceil($(window).height()-25)));
    }
    
    else {
        $('head').append('<link href="Ideas for Boutique.css" type="text/css" rel="stylesheet"/>')
        
        if ($('body').width() < 637) {
            $('.wrapper').css('width', '100%').css('height', String(Math.ceil($(window).height()-40)));
            $('.footer').css('position', 'absolute').css('bottom', '0px');
            
            if ($('html').height() < 611) {
                $('.footer').css('position', '').css('bottom', '');
                $('.wrapper').css('height', '');
            }
        }
        
        else {
            $('.wrapper').css('width', '70%').css('height', '');
            $('.footer').css('position', '').css('bottom', '');
        }
        
        var ratio = 2.625;
        var height = String(Math.ceil($('.content').width()/ratio))+'px';
        $('.content').css('height', height);
        $('.wrapper').css('width', $('wrapper').width());
        
        //If window is resized
        $(window).resize(function() {
                
            if ($('body').width() < 637) {
                $('.wrapper').css('width', '100%').css('height', String(Math.ceil($(window).height()-40)));
                $('.footer').css('position', 'absolute').css('bottom', '0px');
                
                if ($('html').height() < 611) {
                    $('.footer').css('position', '').css('bottom', '');
                    $('.wrapper').css('height', '');
                }
            }
            
            else {
                $('.wrapper').css('width', '70%');
                $('.footer').css('position', '');
                $('.footer').css('bottom', '');
                $('.wrapper').css('height', '');
            }
            
            height = String(Math.ceil($('.content').width()/ratio))+'px';
            $('.content').css('height', height);
            console.log(height);
        });
    }
});