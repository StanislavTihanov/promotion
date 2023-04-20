
//------------------------------------------------------------------------Слайдер
$('.projects__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-arrows slick-arrows__left"><img src="images/arrow-left.svg" alt="arrow left"></button>',
  nextArrow: '<button type="button" class="slick-arrows slick-arrows__right"><img src="images/arrow-right.svg" alt="arrow right"></button>',
  
});

$('.niches__line1').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 8000,
  autoplaySpeed: 0,
  cssEase: 'linear',
  arrows: false
});
$('.niches__line2').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 7000,
  autoplaySpeed: 0,
  cssEase: 'linear',
  arrows: false
});
$('.niches__line3').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 6000,
  autoplaySpeed: 0,
  cssEase: 'linear',
  arrows: false
});

$('.team__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrows slick-arrows__left"><img src="images/arrow-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="slick-arrows slick-arrows__right"><img src="images/arrow-right.svg" alt="arrow right"></button>',
      }
    },
  ]
});
//------------------------------------------------------------------------Слайдер
