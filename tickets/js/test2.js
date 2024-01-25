$(document).ready(function () {


//test2-myCarousel

//当图像被点击时，执行指定的函数。
// $('#myCarousel .carousel-item img').on('click', function(e) {
//   var src = $(e.target).attr('data-remote');
//   //这行代码获取了被点击的图像元素上的 data-remote 属性的值，通常这个属性用来存储大图的路径。
//   if (src) $(this).ekkoLightbox();
// });

//当图像被点击时，执行指定的函数。
//  $('#myCarousel .carousel-item img').on('click', function() {
//   // 開啟模態框
//   $('#myCarouselModal').modal('show');
// });

//   //1.將大圖的自動滑動設置為 false，禁用自動切換。
//   $('#myCarousel').carousel({
//       interval: false
//     });

//   //1.將縮圖的自動滑動設置為 false，禁用自動切換。
//   $('#carousel-thumbs').carousel({
//     interval: false
//   });
  
  // handles the carousel thumbnails
  // https://stackoverflow.com/questions/25752187/bootstrap-carousel-with-thumbnails-multiple-carousel
  
  //
  //2.獲取被點擊縮略圖的 ID，並使用它導航到大圖相應的幻燈片
  $('[id^=carousel-selector-]').click(function() {
    var id_selector = $(this).attr('id');
    var id = parseInt( id_selector.substr(id_selector.lastIndexOf('-') + 1) );
     $('#myCarousel').carousel(id);

    // 開啟模態框
    $('#myCarouselModal').modal('show');
    
  });

  $(document).on("show", "#myCarouselModal", function () {

      //1.將大圖的自動滑動設置為 false，禁用自動切換。
        // $('#myCarousel').carousel({
        //     interval: false
        //   });

      //   //1.將縮圖的自動滑動設置為 false，禁用自動切換。
        $('#carousel-thumbs').carousel({
          interval: false
        });

  })


  
  
  // when the carousel slides, auto update
  $('#myCarousel').on('slide.bs.carousel', function(e) {
    var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-'+id+']').addClass('selected');

    // 移除所有carousel-item 中的 'active' 類
    //$('#carousel-thumbs .carousel-item').removeClass('active');

    // 獲取 $('#carousel-thumbs [data-slide-to=' + id + ']') 的最近的 .carousel-item 元素，並加上 'active' 類
    //$('#carousel-thumbs [data-slide-to=' + id + ']').closest('.carousel-item').addClass('active');

  });

//   $('#carousel-thumbs').on('slide.bs.carousel', function(e) {
//     // 當用戶點擊 thumbs 時，獲取相應的 data-slide-to 值

//     var id = parseInt($(this).attr('data-slide-to'));

//     // 移除所有 thumbs 中的 'selected' 類
//     $('[id^=carousel-selector-]').removeClass('selected');

//     // 將相應的 myCarousel 中的幻燈片標記為 'active'
//     $('#myCarousel').carousel(id);
    
//     // 將相應的 thumbs 標記為 'selected'
//     $(this).addClass('selected');
// });



  // $('#carousel-thumbs').on('slide.bs.carousel', function(e) {
   
  //   var id =  $('[id^=carousel-selector-]')

  //   var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
  //   $('[id^=carousel-selector-]').removeClass('selected');
  //   $('[id=carousel-selector-'+id+']').addClass('selected');

  // });


  //when user swipes, go next or previous
  $('#myCarousel').swipe({
    fallbackToMouseEvents: true,
    swipeLeft: function(e) {
      let this_carousel= $('#myCarousel').carousel('next');
      let number = $(this_carousel).attr('data-slide-number');
      
      // 將獲取到的數字轉換為整數
      let index = parseInt(number);


     // 切換至 carousel-thumbs 中的指定索引（假設 index 是有效的）
      $('#carousel-thumbs').carousel('to', index);
      
    },
    swipeRight: function(e) {
      let this_carousel= $('#myCarousel').carousel('prev');
      let number = $(this_carousel).attr('data-slide-number');
      
      // 將獲取到的數字轉換為整數
      let index = parseInt(number);

      // 切換至 carousel-thumbs 中的指定索引（假設 index 是有效的）
      $('#carousel-thumbs').carousel('to', index);
      

    },
    allowPageScroll: 'vertical',
    preventDefaultEvents: false,
    threshold: 75
  });



  // Only display 3 items in nav on mobile.
  //3
  // if ($(window).width() < 575) {
  //   $('#carousel-thumbs .row div:nth-child(4)').each(function() {
  //     var rowBoundary = $(this);
  //     $('<div class="row mx-0">').insertAfter(rowBoundary.parent()).append(rowBoundary.nextAll().addBack());
  //   });
  //   $('#carousel-thumbs .carousel-item .row:nth-child(even)').each(function() {
  //     var boundary = $(this);
  //     $('<div class="carousel-item">').insertAfter(boundary.parent()).append(boundary.nextAll().addBack());
  //   });
  // }

  // Hide slide arrows if too few items.
  // if ($('#carousel-thumbs .carousel-item').length < 2) {
  //   $('#carousel-thumbs [class^=carousel-control-]').remove();
  //   $('.machine-carousel-container #carousel-thumbs').css('padding','0 5px');
  // }


})