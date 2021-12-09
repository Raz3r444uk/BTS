const prodSwiper = new Swiper('.prod__swiper', {
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


  const teamSwiper = new Swiper('.team__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerColumnFill: "row",
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    }  
  }); 