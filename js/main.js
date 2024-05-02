(function ($) {
    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="cp-spinner cp-meter"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });
    
    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*[ Select ]
    ===========================================================*/
    $(".selection-1").select2({
        minimumResultsForSearch: 20,
        dropdownParent: $('#dropDownSelect1')
    });

    /*[ Daterangepicker ]
    ===========================================================*/
    $('.my-calendar').daterangepicker({
        "singleDatePicker": true,
        "showDropdowns": true,
        locale: {
            format: 'DD/MM/YYYY'
        },
    });

    var myCalendar = $('.my-calendar');
    var isClick = 0;

    $(window).on('click',function(){ 
        isClick = 0;
    });

    $(myCalendar).on('apply.daterangepicker',function(){ 
        isClick = 0;
    });

    $('.btn-calendar').on('click',function(e){ 
        e.stopPropagation();

        if(isClick == 1) isClick = 0;   
        else if(isClick == 0) isClick = 1;

        if (isClick == 1) {
            myCalendar.focus();
        }
    });

    $(myCalendar).on('click',function(e){ 
        e.stopPropagation();
        isClick = 1;
    });

    $('.daterangepicker').on('click',function(e){ 
        e.stopPropagation();
    });


    /*[ Play video 01]
    ===========================================================*/
    var srcOld = $('.video-mo-01').children('iframe').attr('src');

    $('[data-target="#modal-video-01"]').on('click',function(){
        $('.video-mo-01').children('iframe')[0].src += "&autoplay=1";

        setTimeout(function(){
            $('.video-mo-01').css('opacity','1');
        },300);      
    });

    $('[data-dismiss="modal"]').on('click',function(){
        $('.video-mo-01').children('iframe')[0].src = srcOld;
        $('.video-mo-01').css('opacity','0');
    });
    

    /*[ Fixed Header ]
    ===========================================================*/
    var header = $('header');
    var logo = $(header).find('.logo img');
    var linkLogo1 = $(logo).attr('src');
    var linkLogo2 = $(logo).data('logofixed');


    $(window).on('scroll',function(){
        if($(this).scrollTop() > 5 && $(this).width() > 992) {
            $(logo).attr('src',linkLogo2);
            $(header).addClass('header-fixed');
        }
        else {
            $(header).removeClass('header-fixed');
            $(logo).attr('src',linkLogo1);
        }
        
    });

    /*[ Show/hide sidebar ]
    ===========================================================*/
    $('body').append('<div class="overlay-sidebar trans-0-4"></div>');
    var ovlSideBar = $('.overlay-sidebar');
    var btnShowSidebar = $('.btn-show-sidebar');
    var btnHideSidebar = $('.btn-hide-sidebar');
    var sidebar = $('.sidebar');

    $(btnShowSidebar).on('click', function(){
        $(sidebar).addClass('show-sidebar');
        $(ovlSideBar).addClass('show-overlay-sidebar');
    })

    $(btnHideSidebar).on('click', function(){
        $(sidebar).removeClass('show-sidebar');
        $(ovlSideBar).removeClass('show-overlay-sidebar');
    })

    $(ovlSideBar).on('click', function(){
        $(sidebar).removeClass('show-sidebar');
        $(ovlSideBar).removeClass('show-overlay-sidebar');
    })


    /*[ Isotope ]
    ===========================================================*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({filter: filterValue});
        });
        
    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                percentPosition: true,
                animationEngine : 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });

    var labelGallerys = $('.label-gallery');

    $(labelGallerys).each(function(){
        $(this).on('click', function(){
            for(var i=0; i<labelGallerys.length; i++) {
                $(labelGallerys[i]).removeClass('is-actived');
            }

            $(this).addClass('is-actived');
        });
    });

})(jQuery);



(function ($) {
    // USE STRICT
    /*[ Slick1 ]
    ===========================================================*/
    var itemSlick1 = $('.slick1').find('.item-slick1');
    var action1 = [];
    var action2 = [];
    var action3 = [];
    var cap1Slide1 = [];
    var cap2Slide1 = [];
    var btnSlide1 = [];

    for (var i = 0; i < itemSlick1.length; i++) {
        cap1Slide1[i] = $(itemSlick1[i]).find('.caption1-slide1');
        cap2Slide1[i] = $(itemSlick1[i]).find('.caption2-slide1');
        btnSlide1[i] = $(itemSlick1[i]).find('.wrap-btn-slide1');
    }


    $('.slick1').on('init', function () {

        action1[0] = setTimeout(function () {
            $(cap1Slide1[0]).addClass($(cap1Slide1[0]).data('appear') + ' visible-true');
        }, 200);

        action2[0] = setTimeout(function () {
            $(cap2Slide1[0]).addClass($(cap2Slide1[0]).data('appear') + ' visible-true');
        }, 1000);

        action3[0] = setTimeout(function () {
            $(btnSlide1[0]).addClass($(btnSlide1)[0].data('appear') + ' visible-true');
        }, 1800);
    });


    $('.slick1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        appendDots: $('.wrap-slick1-dots'),
        dotsClass: 'slick1-dots',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick1'),
        prevArrow: '<button class="arrow-slick1 prev-slick1"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick1 next-slick1"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    });

    $('.slick1').on('afterChange', function (event, slick, currentSlide) {
        for (var i = 0; i < itemSlick1.length; i++) {

            clearTimeout(action1[i]);
            clearTimeout(action2[i]);
            clearTimeout(action3[i]);


            $(cap1Slide1[i]).removeClass($(cap1Slide1[i]).data('appear') + ' visible-true');
            $(cap2Slide1[i]).removeClass($(cap2Slide1[i]).data('appear') + ' visible-true');
            $(btnSlide1[i]).removeClass($(btnSlide1[i]).data('appear') + ' visible-true');

        }

        action1[currentSlide] = setTimeout(function () {
            $(cap1Slide1[currentSlide]).addClass($(cap1Slide1[currentSlide]).data('appear') + ' visible-true');
        }, 200);

        action2[currentSlide] = setTimeout(function () {
            $(cap2Slide1[currentSlide]).addClass($(cap2Slide1[currentSlide]).data('appear') + ' visible-true');
        }, 1000);

        action3[currentSlide] = setTimeout(function () {
            $(btnSlide1[currentSlide]).addClass($(btnSlide1[currentSlide]).data('appear') + ' visible-true');
        }, 1800);
    });


    /*[ Slick2 ]
    ===========================================================*/
    var itemSlick2 = $('.item-slick2');
    var action1s2 = [];
    var cap1Slide2 = [];

    for (var i = 0; i < itemSlick2.length; i++) {
        cap1Slide2[i] = $(itemSlick2[i]).find('.wrap-content-slide2 .blo2');
    }


    $('.slick2').on('init', function () {

        action1s2[0] = setTimeout(function () {
            $(cap1Slide2[0]).addClass($(cap1Slide2[0]).data('appear') + ' visible-true');
        }, 200);
    });


    $('.slick2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        appendDots: $('.wrap-slick2-dots'),
        dotsClass: 'slick2-dots',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick2'),
        prevArrow: '<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    });

    $('.slick2').on('afterChange', function (event, slick, currentSlide) {
        for (var i = 0; i < itemSlick2.length; i++) {

            clearTimeout(action1s2[i]);

            $(cap1Slide2[i]).removeClass($(cap1Slide2[i]).data('appear') + ' visible-true');
        }

        action1s2[currentSlide] = setTimeout(function () {
            $(cap1Slide2[currentSlide]).addClass($(cap1Slide2[currentSlide]).data('appear') + ' visible-true');
        }, 200);
    });


    /*[ Slick3 ]
    ===========================================================*/
    var itemSlick3 = $('.slick3').find('.item-slick3');
    var action1s3 = [];
    var action2s3 = [];
    var action3s3 = [];
    var cap1Slide3 = [];
    var cap2Slide3 = [];
    var btnSlide3 = [];

    for (var i = 0; i < itemSlick3.length; i++) {
        cap1Slide3[i] = $(itemSlick3[i]).find('.pic-review');
        cap2Slide3[i] = $(itemSlick3[i]).find('.content-review');
        btnSlide3[i] = $(itemSlick3[i]).find('.more-review');
    }


    $('.slick3').on('init', function () {

        action1s3[0] = setTimeout(function () {
            $(cap1Slide3[0]).addClass($(cap1Slide3[0]).data('appear') + ' visible-true');
        }, 200);

        action2s3[0] = setTimeout(function () {
            $(cap2Slide3[0]).addClass($(cap2Slide3[0]).data('appear') + ' visible-true');
        }, 1000);

        action3s3[0] = setTimeout(function () {
            $(btnSlide3[0]).addClass($(btnSlide3)[0].data('appear') + ' visible-true');
        }, 1000);
    });


    $('.slick3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        dots: true,
        appendDots: $('.wrap-slick3-dots'),
        dotsClass: 'slick3-dots',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick3'),
        prevArrow: '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    });

    $('.slick3').on('afterChange', function (event, slick, currentSlide) {
        for (var i = 0; i < itemSlick3.length; i++) {

            clearTimeout(action1s3[i]);
            clearTimeout(action2s3[i]);
            clearTimeout(action3s3[i]);


            $(cap1Slide3[i]).removeClass($(cap1Slide3[i]).data('appear') + ' visible-true');
            $(cap2Slide3[i]).removeClass($(cap2Slide3[i]).data('appear') + ' visible-true');
            $(btnSlide3[i]).removeClass($(btnSlide3[i]).data('appear') + ' visible-true');

        }

        action1s3[currentSlide] = setTimeout(function () {
            $(cap1Slide3[currentSlide]).addClass($(cap1Slide3[currentSlide]).data('appear') + ' visible-true');
        }, 200);

        action2s3[currentSlide] = setTimeout(function () {
            $(cap2Slide3[currentSlide]).addClass($(cap2Slide3[currentSlide]).data('appear') + ' visible-true');
        }, 1000);

        action3s3[currentSlide] = setTimeout(function () {
            $(btnSlide3[currentSlide]).addClass($(btnSlide3)[currentSlide].data('appear') + ' visible-true');
        }, 1000);
    });
})(jQuery);



document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.querySelector('.wrap-form-booking');

    function createGalleryAndForm(data) {
        const gallery = document.getElementById('gallery');
        const select = document.querySelector('.wrap-select select');

        data.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('item-gallery', 'isotope-item', 'bo-rad-10', 'hov-img-zoom');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = 'IMG-GALLERY';

            const overlay = document.createElement('div');
            overlay.classList.add('overlay-item-gallery', 'trans-0-4', 'flex-c-m');

            const link = document.createElement('a');
            link.classList.add('btn-show-gallery');
            link.href = item.image;
            link.setAttribute('data-lightbox', 'gallery');


            link.setAttribute('data-name', item.name);
            link.setAttribute('data-price', item.price);

            galleryItem.addEventListener('mouseenter', function () {
                link.innerHTML = `<div>${item.name}</div><div>${item.price}</div>`;
            });

            galleryItem.addEventListener('mouseleave', function () {
                link.innerHTML = '';
            });

            overlay.appendChild(link);
            galleryItem.appendChild(img);
            galleryItem.appendChild(overlay);
            gallery.appendChild(galleryItem);

            const option = document.createElement('option');
            option.value = item.image;
            option.textContent = `${item.name} - ${item.price}`;
            select.appendChild(option);
        });
    }

    fetch('gallery.json')
        .then(response => response.json())
        .then(data => {
            createGalleryAndForm(data);

            const galleryItems = document.querySelectorAll('.btn-show-gallery');
            galleryItems.forEach(item => {
                item.addEventListener('click', function () {
                    const productName = this.getAttribute('data-name');
                    const productPrice = this.getAttribute('data-price');


                    document.querySelector('[name="product-name"]').value = productName;
                    document.querySelector('[name="product-price"]').value = productPrice;
                });
            });
        })
        .catch(error => console.error('Ошибка загрузки данных:', error));
});



function changeTimezone(date, ianatz) {
    var invdate = new Date(date.toLocaleString('en-US', {
        timeZone: ianatz
    }));

    var diff = invdate.getTime() - date.getTime();

    return new Date(date.getTime() - diff);
};

document.addEventListener('DOMContentLoaded', function () {
    function updateDeadline() {
        const now = new Date();
        let deadline = new Date();
        deadline.setHours(19);
        deadline.setMinutes(30);
        deadline.setSeconds(0);


        if (now.getHours() > 19 || (now.getHours() === 19 && now.getMinutes() >= 30)) {
            deadline.setDate(deadline.getDate() + 1);
        }

        return changeTimezone(deadline, "Europe/Ulyanovsk");
    }

    let deadline = updateDeadline();


    let timerId = null;


    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }


    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            deadline = updateDeadline();
        }
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

        document.querySelector('.hours').textContent = hours < 10 ? '0' + hours : hours;
        document.querySelector('.minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.querySelector('.seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
    }


    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
});



var ticketsInput = document.getElementById('tickets');
    var productSelect = document.getElementById('product');
    var totalPriceInput = document.getElementById('total-price');
    var totalPriceWrapper = document.getElementById('total-price-wrapper');
    var submitBtn = document.getElementById('submit-btn');

    function calculateTotal() {
        var tickets = parseInt(ticketsInput.value);
        var productPrice = 0;

        if (productSelect.selectedIndex !== 0) { 
            var productPriceText = productSelect.options[productSelect.selectedIndex].text;
            productPrice = parseInt(productPriceText.split(' - ')[1].replace('₸', ''));
        }

        var totalPrice = tickets * 5 + productPrice;
        totalPriceInput.value = totalPrice;
    }

    // ticketsInput.addEventListener('change', calculateTotal);
    // productSelect.addEventListener('change', calculateTotal);

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        totalPriceWrapper.style.display = 'block';

        setTimeout(function() {
			console.log(productSelect.selectedIndex)
            if (productSelect.selectedIndex !== 0) { 
                calculateTotal();
            } else {
                var tickets = parseInt(ticketsInput.value);
                var totalPrice = tickets * 5;
                totalPriceInput.value = totalPrice;
            }
        }, 2000); 
    });

