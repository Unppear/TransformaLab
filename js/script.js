'use strict';

/*<---Botôes mobile--->*/

$('#btnMobile_open').click(() => {
    $('#mobile').fadeIn();
});

$('#btnMobile_close').click(() => {
    $('#mobile').fadeOut();
});

/*<---Botôes popup--->*/

const popup_background = $('.background_popup'), partners_array = $('.partners .content div'), 
popup_array = [$('.cftec_popup'), $('.senai_popup'), $('.senac_popup')];


$('.btn_close').click(function() {
    const index = $('.btn_close').index(this);

    if(index == 0) {
        popup_background.fadeOut();
        popup_array[0].fadeOut();
    }
    else if(index == 1) {
        popup_background.fadeOut();
        popup_array[1].fadeOut();
    }
    else if(index == 2) {
        popup_background.fadeOut();
        popup_array[2].fadeOut();
    };
});

partners_array.click(function() {
    const index = partners_array.index(this);

    if(index == 0) {
        popup_background.fadeIn(200, function() {
            $(this).css('display', 'flex');
        });
        popup_array[0].fadeIn(200, function() {
            $(this).css('display', 'flex');
        });
    }
    else if(index == 1) {
        popup_background.fadeIn(200, function() {
            $(this).css('display', 'flex');
        });
        popup_array[1].fadeIn(200, function() {
            $(this).css('display', 'flex');
        });
    }
    else if(index == 2) {
        popup_background.fadeIn(200, function() {
            $(this).css('display', 'flex');
        });
        popup_array[2].fadeIn(200, function() {
            $(this).css('display', 'flex');
        });
    };
});