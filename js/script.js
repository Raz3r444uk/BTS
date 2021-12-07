const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerColumnFill: "row",
    slidesPerView: 3.2,
    slidesPerColumn: 1,
    autoplay: {
      delay: 5000,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },  
  }); 