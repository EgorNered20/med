var isMobile = false;
var counter = 0;
var enable_submit = false;
jQuery(document).ready(function(){
    var w_h = $(window).height();

    $('.scroll').on('click', function(){
        var anchor = $(this).data('scroll');
        $('.mobile-menu, .close-nav').removeClass('active');
        var anchor_link = $(anchor).offset().top;

        if($(this).hasClass('mouse')){
            $('html, body').stop().animate({
                scrollTop : anchor_link + 300 +  "px"
            }, 1500, 'easeInOutExpo');
        }else{
            $('html, body').stop().animate({
                scrollTop : anchor_link +  "px"
            }, 1500, 'easeInOutExpo');
        }

        event.preventDefault();
    });

    var interval = setInterval(function() {
        counter++;
        $("#seconds").text(counter);
        if (counter === 5) {
            enable_submit = true;
            clearInterval(interval);
        }
    }, 1000);

    document.querySelectorAll('form[data-secret]').forEach(function(form) {
        var secret = form.getAttribute('data-secret') / form.getAttribute('data-multiplier');
        form.querySelector('[name="secret"]').value = secret;
    });

    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
        isMobile = true;
    }
    $('.tlt').textillate();
    Pace.on('hide', function(){

        $('body').css('background', '#fff');
        $('.pace').addClass('hidden-type');
        $('.loader-circle').addClass('hidden-type');
        $('.wrapper').css('opacity', '1');

        if(!isMobile){

            var wow = new WOW(
                {
                    animateClass: 'animated',
                    mobile:       false,
                    offset:       0,
                    callback:     function(box) {
                        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
                    }
                }
            );
            wow.init();
        }

    });

    $('.custom-modal-open').fancybox({
        autoSize: true,
        type: 'inline',
        closeBtn: false,
        padding: 0,
        scrolling: 'visible',
        fixed: false,
        autoCenter: false,
        beforeShow: function() {
            $('input').removeClass('incorrect');
            $('input[type="text"]').val('');
            $('textarea').val('');

            $(".fancybox-skin").css("background-color", "transparent");

        },
        afterShow: function(){
            $('.fancybox-skin').addClass('active');
        },
        beforeClose: function(){
            $('.fancybox-skin').removeClass('active');
        },
        afterClose: function() {

        }
    }).click(function() {
        if (typeof($(this).data('from')) !== 'undefined') {

        }
    });

    $('.modal-close, .close-modal').click(function() {
        $.fancybox.close();
        return false;
    });

    $('.send').on('click', function(){
        $(this).closest('form').submit();
    });

    $('form').submit(function() {
        if(enable_submit){
            $(this).isCorrectRequest();
            return false;
        }else{
            return false;
        }
    });

    if($('input[name="f-phone"]').length){
        $('input[name="f-phone"]').inputmask("+7 (999) 999 99 99");
    }
});


jQuery(window).resize(function(){
    var w_h = $(window).height();
});

jQuery(window).scroll(function(e){
    var y = jQuery(window).scrollTop();

});

jQuery(window).load(function(){
    var w_h = $(window).height();

});

(function($) {
    $.fn.isCorrectRequest = function() {
        $(this).find('input[type=text]').removeClass('correct incorrect shake');

        var nameInput = $(this).find('[name = f-name]');
        var telephoneInput = $(this).find('[name = f-phone]');
        var emailInput = $(this).find('[name = f-email]');

        nameInput.val($.trim(nameInput.val()));
        telephoneInput.val($.trim(telephoneInput.val()));

         if(nameInput.val() != undefined){
             if(nameInput.val().length === 0)
             {
                 nameInput.addClass('incorrect');
                 nameInput.focus();
                 return false;
             }
         }

        if(telephoneInput.val() != undefined){
            if(telephoneInput.val().length === 0)
            {
                telephoneInput.addClass('incorrect');
                telephoneInput.focus();
                return false;
            }
        }
        if(emailInput.hasClass('required')){
            if(emailInput.val() != undefined){
                if(emailInput.val().length === 0)
                {
                    emailInput.addClass('incorrect');
                    emailInput.focus();
                    return false;
                }else{
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if(!re.test(emailInput.val())){
                        emailInput.addClass('incorrect');
                        emailInput.focus();
                        return false;
                    }
                }
            }

        }

        var form = $(this);
        var formData = new FormData($(this)[0]);
        var url = form.attr('action');
        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            async: false,
            success: function(data)
            {
                $('input').removeClass('incorrect');
                $('input[type="text"]').val('');
                $('textarea').val('');
                $.fancybox('#thanks-modal', {
                    autoSize: true,
                    type: 'inline',
                    closeBtn: false,
                    padding: 0,
                    scrolling: 'visible',
                    fixed: false,
                    autoCenter: false,
                    afterShow: function(){
                        $('.fancybox-skin').addClass('active');
                    },
                    beforeClose: function(){
                        $('.fancybox-skin').removeClass('active');
                    }
                });

                setTimeout(function () {
                    $.fancybox.close();
                }, 3500);

            },
            error: function(answer)
            {
                alert('абаИаБаКаА аОбаПбаАаВаКаИ. ааОаПбаОаБбаЙбаЕ аЕбаЕ баАаЗ.');
            }
        });
    };
})(jQuery);