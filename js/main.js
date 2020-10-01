$(function () {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<button class="slider-arrows slider-arrows__left"><img src="img/arrows-left.svg" alt="To the next slide"></button>',
    nextArrow: '<button class="slider-arrows slider-arrows__right"><img src="img/arrows-right.svg" alt="To the next slide"></button>',
    asNavFor: '.slider-dots'
  });

  // Menu

  $('.menu-btn').on('click', function() {
    $('.menu').toggleClass('menu--active');
  });

  $("#header-menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    responsive: [
      {
        breakpoint: 1040,
        settings: 'unslick',
      },
    ]
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slider-arrows slider-arrows--gray slider-arrows__left"><img src="img/arrows-left.svg" alt="To the next slide"></button>',
    nextArrow: '<button class="slider-arrows slider-arrows--gray slider-arrows__right"><img src="img/arrows-right.svg" alt="To the next slide"></button>',
    asNavFor: '.slider-map',
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1041,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
    ],
  });

  $('.holder-slider, .shop-slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<button class="slider-arrows slider-arrows__left"><img src="img/arrows-left.svg" alt="To the next slide"></button>',
    nextArrow: '<button class="slider-arrows slider-arrows__right"><img src="img/arrows-right.svg" alt="To the next slide"></button>',
  });


  // Input[type=number]

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="icon plus"></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="icon minus"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });


  // Sum
  function totalPriceCalc() {
    let sum = $('#input-nights').val() * $('#sum').data('nights') + ($('#input-guests').val() - 1) * $('#sum').data('guests');

    $('#sum').html(sum);

    return sum;
  }
  
  $('.quantity-button').on('click', function() {
    totalPriceCalc();
    console.log('1');
  });


  // Shop dots

  $('.shop__dots-circle').on('click', function() {
    $(this).toggleClass('circle-active')
  });


  // Wow JS
  new WOW().init();


});

