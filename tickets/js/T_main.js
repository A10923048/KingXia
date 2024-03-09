
/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Design - Sara Mazal Web;
Fonts - Google Fonts
*/



//    置於$(document).ready(function () 之外的程式碼               //



  //隱藏 使用者登入帳號
  $("#cusCode").hide();
  

  //       轉換Article時                    // 
  function articleBtn(tabId) {

    //在使用者資料編輯OFF的情形下才能執行換頁
    let editBtnClicked = $('#editBtn').prop('checked'); 
    
    
    if (editBtnClicked === true) {

      //產生警示
      $('#eSpan').text('編輯完成後\n請將按鈕切換成OFF');
      // $('#addloader').addClass('loader');

      var target = $('#eSpan').attr('href');
      $("html, body").animate({
        scrollTop: $(target).offset().top 50
        }, 500);
    

      //不執行換頁
      return;

    
    }else {

      //執行換頁
      $(".tab-pane").each(function() {
        if ($(this).hasClass("show")) {
            $(this).removeClass("show active");
        }
      });
      $(`#${tabId}`).addClass("show active");
    
      // 如果需要手動跳轉到新的頁面
      window.location.href = `#${tabId}`;
    }


  }

 
//            網頁的主程式寫在這裡                                //
  $(document).ready(function () {
  
  var isNavbarExpanded = false;
  var isArticleAExpanded = false;
  
  // 綁定 Bootstrap 導覽列摺疊功能
  $('[data-toggle="collapse"]').on('click', function () {
    var target = $(this).data('target');
  
    // 根據展開狀態執行相應操作
    if (target === '#collapsibleNavId') {
      if (isNavbarExpanded) {
        // 如果已展開，執行關閉操作
        console.log('Navbar is expanded. Closing...');
        $(target).collapse('hide');
      } else {
        // 如果未展開，執行展開操作
        console.log('Navbar is not expanded. Opening...');
        $(target).collapse('show');
      }
      // 切換展開狀態
      isNavbarExpanded = !isNavbarExpanded;
    } else if (target === '#collapsibleNavId2') {
      if (isArticleAExpanded) {
        // 如果已展開，執行關閉操作
        console.log('ArticleA Navbar is expanded. Closing...');
        $(target).collapse('hide');
      } else {
        // 如果未展開，執行展開操作
        console.log('ArticleA Navbar is not expanded. Opening...');
        $(target).collapse('show');
      }
      // 切換展開狀態
      isArticleAExpanded = !isArticleAExpanded;
    }
  });
  
    });