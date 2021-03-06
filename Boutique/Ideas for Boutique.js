$(document).ready(function() {

        //On Page Load
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $('head').append('<link href="Ideas for Boutique mobile.css" type="text/css" rel="stylesheet"/>');
                var i = 0;
                var ratio = 2.625;
                var height = String(Math.round($('.content').width()/ratio))+'px';
                var logofs = String(Math.round($(window).width()/3.11))+'px';
                var defaultfs = String(Math.round($(window).width()/31.1))+'px';
                var hdefaultfs = String(Math.round($(window).width()/62.2))+'px';
                var qdefaultfs = String(Math.round($(window).width()/124.4))+'px';
                var tdefaultfs = String(Math.ceil($(window).width()/311))+'px';
                console.log(height);
                var m = setInterval(function() {
                        if (i < 2) {
                                height = String(Math.round($('.content').width()/ratio))+'px';
                                logofs = String(Math.round($(window).width()/3.11))+'px';
                                defaultfs = String(Math.round($(window).width()/31.1))+'px';
                                hdefaultfs = String(Math.round($(window).width()/62.2))+'px';
                                qdefaultfs = String(Math.round($(window).width()/124.4))+'px';
                                tdefaultfs = String(Math.ceil($(window).width()/622))+'px';
                                $('.content').css('height', height).css('border-bottom-width', tdefaultfs).css('border-top-width', tdefaultfs);
                                $('.logo').css('font-size', logofs);
                                $('html').css('font-size', defaultfs);
                                $('.wrapper').css('box-shadow', '0px 0px '+hdefaultfs+' #000000');
                                $('nav').css('margin-bottom', defaultfs).css('margin-top', hdefaultfs);
                                $('.navlink').css('margin-left', qdefaultfs).css('margin-right', qdefaultfs);
                                $('body').css('padding-bottom', hdefaultfs);
                                $('.information').css('margin-top', defaultfs);
                                i++;
                        }
                        else {
                                clearInterval(m);
                        }
                });
        }
        
        else {
                $('head').append('<link href="Ideas for Boutique.css" type="text/css" rel="stylesheet"/>')
                
                if ($('body').width() < 637) {
                        $('.wrapper').css('width', '100%').css('height', String(Math.round($(window).height()-40))).css('margin-top', '0px');
                        $('.footer').css('position', 'absolute').css('bottom', '0px');
                        
                        if ($('html').height() < 611) {
                                $('.footer').css('position', '').css('bottom', '');
                                $('.wrapper').css('height', '');
                                $('.formalities').css('position', 'absolute');
                        }
                }
                
                else {
                        $('.wrapper').css('width', '80%').css('height', '').css('margin-top','4%');
                        $('.footer').css('position', '').css('bottom', '');
                }
                
                var i = 0;
                var navwidth = String(Math.round($('#linkone').width()+$('#linktwo').width()+$('#linkthree').width()+60))+'px';
                var ratio = 2.625;
                var height = String(Math.round($('.content').width()/ratio))+'px';
                var m = setInterval(function() {
                        if (i < 2) {
                                height = String(Math.round($('.content').width()/ratio))+'px';
                                $('.content').css('height', height);
                                $('.wrapper').css('width', $('wrapper').width()).css('min-height', String(Math.round($('.header').height()+$('nav').height()+$('.content').height()+$('.information').height()+$('.footer').height()+100))+'px');
                                navwidth = String(Math.round($('#linkone').width()+$('#linktwo').width()+$('#linkthree').width()+80))+'px';
                                $('nav').css('width', navwidth);
                                i++;
                        }
                        else {
                                clearInterval(m);
                        }
                }, 25)
                
                
                //If window is resized
                $(window).resize(function() {
                        
                        $('.wrapper').css('min-height', String(Math.round($('.header').height()+$('nav').height()+$('.content').height()+$('.information').height()+$('.footer').height()+100))+'px');
                        $('.information').css('clear', 'both');
                        if ($('body').width() < 637) {
                                $('.wrapper').css('width', '100%').css('height', String(Math.round($(window).height()-40))).css('margin-top', '0px');
                                $('.footer').css('position', 'absolute').css('bottom', '0px');
                                
                                if ($('html').height() < 611) {
                                        $('.footer').css('position', 'relative').css('bottom', '');
                                        $('.wrapper').css('height', '');
                                        $('.formalities').css('position', 'absolute');
                                }
                                else {
                                        $('.formalities').css('position', 'fixed');
                                }
                                
                                if ($(window).width() < 471) {
                                        $('.formalities').css('position', 'absolute');
                                }
                        }
                        
                        //else if ($('body').width() > 1607) {
                        //        $('.header').css('float', 'left').css('margin-top', '20px').css('margin-left', '5%');
                        //        $('.content').css('float', 'left').css('margin-left', '5%').css('clear', 'left');
                        //        $('.information').css('max-width', '40%').css('float', 'right').css('margin-right', '5%').css('clear', '').css('margin-top', '-200px');
                        //        $('.footer').css('clear', 'both');
                        //        $('.wrapper').css('padding-top', '10px').css('min-height', String(Math.round($('.content').height()+$('.header').height()+$('.footer').height()+60))+'px');
                        //}
                        
                        else {
                                $('.wrapper').css('width', '80%').css('height', '').css('margin-top', '4%');
                                $('.footer').css('position', '').css('bottom', '');
                                $('.formalities').css('position', 'fixed');
                                $('.header').css('float', '').css('margin-top', '').css('margin-left', '');
                                $('.content').css('float', '').css('margin-left', '');
                                $('.information').css('clear', 'both').css('margin-top', '').css('max-width', '630px').css('float', '').css('margin-right', 'auto');
                        }
                        
                        height = String(Math.round($('.content').width()/ratio))+'px';
                        $('.content').css('height', height);
                        console.log(height);
                });
        }
});