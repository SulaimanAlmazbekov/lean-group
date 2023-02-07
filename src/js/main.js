$(document).ready(function () {
  $("#home-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
  var sertSlider = $("#certificates-slider")
  sertSlider.owlCarousel({
    items: 5,
    margin: 30,
    loop: true
  });
  var prodSlider = $("#products-slider")
  prodSlider.owlCarousel({
    items: 5,
    margin: 30,
    loop: true
  });
   var productSlider = $("#prod-slider")
  productSlider.owlCarousel({
    items: 5,
    margin: 30,
    loop: true
  });


  $('.custom-next').click(function () {
    sertSlider.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.custom-prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    sertSlider.trigger('prev.owl.carousel', [300]);
  })

  //табы  на странице products
  $('ul.products-tabs__caption').on('click', 'li:not(.products-tabs__btn_active)', function () {
    $(this)
      .addClass('products-tabs__btn_active').siblings().removeClass('products-tabs__btn_active')
      .closest('div.products-tabs').find('div.products-tabs__content').removeClass('products-tabs__content_active').eq($(this).index()).addClass('products-tabs__content_active');
  });


  $('.custo-next').click(function () {
    prodSlider.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.custo-prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    prodSlider.trigger('prev.owl.carousel', [300]);
  });

  $('.cust-next').click(function () {
    productSlider.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.cust-prev').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    productSlider.trigger('prev.owl.carousel', [300]);
  })
});
