let hotelBtn = document.querySelector('.form-toggler-hotel');
let toursBtn = document.querySelector('.form-toggler-tours');
let packageBtn = document.querySelector('.form-toggler-package');
let hotelForm = document.querySelector('.hotel');
let toursForm = document.querySelector('.tours');
let packageForm = document.querySelector('.package');


hotelBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    hotelBtn.classList.add('active-btn');
    toursBtn.classList.remove('active-btn');
    packageBtn.classList.remove('active-btn');
    hotelForm.classList.add('active-form');
    toursForm.classList.remove('active-form');
    packageForm.classList.remove('active-form');
    console.log('luck');
    }
);

toursBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    toursBtn.classList.add('active-btn');
    hotelBtn.classList.remove('active-btn');
    packageBtn.classList.remove('active-btn');
    toursForm.classList.add('active-form');
    hotelForm.classList.remove('active-form');
    packageForm.classList.remove('active-form');
    }
);
packageBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    packageBtn.classList.add('active-btn');
    hotelBtn.classList.remove('active-btn');
    toursBtn.classList.remove('active-btn');
    packageForm.classList.add('active-form');
    toursForm.classList.remove('active-form');
    hotelForm.classList.remove('active-form');
    }

);


//slick slider


$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
