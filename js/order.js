// 網頁的主程式寫在這裡


// NEW NAV
/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Design - Sara Mazal Web;
Fonts - Google Fonts
*/


/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Design - Sara Mazal Web;
Fonts - Google Fonts
*/

//    置於$(document).ready(function () 之外的程式碼               //

//            Article NAVBAR- 轉換按鈕                    //
let articleBtn = function (tabId) {
  $("#articleAA").hide();

  // 檢查是否需要關閉 #articleAA
  if ($("#articleAA").hasClass("show")) {
    // 關閉 #articleAA
    $("#articleAA").removeClass("show active");
  }

  // 關閉當前已打開的頁面
  $(".tab-pane").removeClass("show active");

  // 打開新的頁面
  $(`#${tabId}`).addClass("show active");

  // 如果需要手動跳轉到新的頁面
  window.location.href = `#${tabId}`;
}
//    置於$(document).ready(function () 之外的程式碼 ENd            //





$(document).ready(function () {


  //抓取網址中GET參數//
  var getUrlString = location.href;
  var url = new URL(getUrlString);
  //url.searchParams.get("shipid")

  // 获取 URL 中的参数值
  var shipid = url.searchParams.get("shipid");
  var ticket = url.searchParams.get("ticket");
  var timeid = url.searchParams.get("time");


  // 将参数值插入到相应的元素中
  $("#shipID-show").text(shipid);
  $("#tickets-show").text(ticket);
  $("#showtickets").text("訂票數:"+ ticket);
  $("#time-show").text(timeid);

 


//定義copy()方法實作
  let copy = function () {


    for (var i = 0; i < ticket; i++) {

      let htmlString = 

      '<li class="my-2">' +
      '<button class="btn d-inline-flex align-items-center collapsed border-0"' +
        ' data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse'+i+'"' +
        ' aria-controls="contents-collapse">其他旅客資料(1)</button>' +
      '<ul class="list-unstyled ps-3 collapse" id="contents-collapse'+i+'">' +
        '<div class="table-responsive">' +
          '<table>' +
            '<div id="planpickered" class="pt-5 pb-1" style="background: rgb(102, 235, 226)">' +
              '<label for="plan">' +
                '<h2 class="section-title mb-3 text-center text-white">其他旅客資料</h2>' +
              '</label>' +
            '</div>' +
          '</table>' +
          '<main>' +
            '<div class="table-responsive pt-4" style="background-color: rgb(245, 240, 220);">' +
              '<table class="table text-center">' +
                '<thead>' +
                  '<tr>' +
                    '<th style="width: 30%;">' +
                      '<i class="fa-solid fa-earth-americas fa-4x"></i>' +
                      '<h6>國籍</h6>' +
                      '<select class="form-select" id="country" required>' +
                        '<option value="">台灣</option>' +
                        '<option>香港</option>' +
                        '<option>大陸</option>' +
                        '<option>其他</option>' +
                      '</select>' +
                    '</th>' +
                    '<th style="width: 20%;" id="gender">' +
                      '<i class="fa-solid fa-venus-mars fa-4x"></i>' +
                      '<h6>性別</h6>' +
                      '<select class="form-select" id="gender" required>' +
                        '<option value="">女</option>' +
                        '<option>男</option>' +
                      '</select>' +
                    '</th>' +
                    '<th style="width: 40%;" id="country">' +
                      '<i class="fa-solid fa-cake-candles fa-4x"></i>' +
                      '<h6>出生日期</h6>' +
                      '<div>' +
                        '<input type="date" id="birthdayPicker" placeholder="選擇日期範圍" value="">' +
                      '</div>' +
                    '</th>' +
                  '</tr>' +
                '</thead>' +
                '<thead id="tickets-result2">' +
                  '<tr>' +
                    '<th style="width: 40%;">' +
                      '<svg class="bi" width="24" height="24">' +
                        '<use xlink:href="#check" />' +
                      '</svg>' +
                      '<h6>身分證/護照號碼</h6>' +
                      '<input type="text" class="form-control" id="orderName" placeholder="" value="" required>' +
                    '</th>' +
                    '<th scope="row" class="text-start">' +
                      '<h6>姓名</h6>' +
                      '<input type="text" class="form-control" id="orderName" placeholder="" value="" required>' +
                    '</th>' +
                    '<th style="width: 50%;">' +
                      '<svg class="bi" width="24" height="24">' +
                        '<use xlink:href="#check" />' +
                      '</svg>' +
                      '<h6>電子郵件</h6>' +
                      '<input type="text" class="form-control" id="orderName" placeholder="" value="" required>' +
                    '</th>' +
                  '</tr>' +
                '</thead>' +
              '</table>' +
            '</div>' +
          '</main>' +
        '</div>' +
      '</ul>' +
    '</li>';
    





      '<li class="my-2">' +
        '<button class="btn d-inline-flex align-items-center collapsed border-0" ' +
        'data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse'+i+'" aria-controls="contents-collapse">' +
        '其他旅客資料(1)</button>' +
        '<ul class="list-unstyled ps-3 collapse" id="contents-collapse'+i+'">' +
        '<div class="table-responsive">' +
        '<table class="table text-center text-white">' +
        '<thead>' +
        '<tr>' +
        '<th style="width: 25%;">姓名</th>' +
        '<td style="width: 75%;">' +
        '<input type="text" class="form-control" id="orderName" placeholder="" value="" required>' +
        '<div class="invalid-feedback">' +
        'Valid last name is required.' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '<tr>' +
        '<th scope="row" class="text-start">電話</th>' +
        '<td>' +
        '<input type="text" class="form-control" id="orderPhone" placeholder="" value="" required>' +
        '<div class="invalid-feedback">' +
        'Valid last name is required.' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<th scope="row" class="text-start">身分證/護照號碼</th>' +
        '<td>' +
        '<input type="text" class="form-control" id="orderUid" placeholder="" value="" required>' +
        '<div class="invalid-feedback">' +
        'Valid last name is required.' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<th scope="row" class="text-start">電子郵件</th>' +
        '<td>' +
        '<input type="text" class="form-control" id="lastName" placeholder="" value="" required>' +
        '<div class="invalid-feedback">' +
        'Valid last name is required.' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<th scope="row" class="text-start">出生日期</th>' +
        '<td>' +
        '<input type="text" class="form-control" id="orderPhone" placeholder="" value="" required>' +
        '<div class="invalid-feedback">' +
        'Valid last name is required.' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>' +
        '</ul>' +
        '</li>';

      $("#buyers_list").append(htmlString);

    }


  }
  copy();//呼叫copy()方法

  articleBtn("articleA");

  //               NAVBAR +  Article-A NAVBAR 開闔功能                    //
  // 初始設置展開狀態為 false
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
        $(target).hide();
      } else {
        // 如果未展開，執行展開操作
        console.log('Navbar is not expanded. Opening...');
        $(target).show();
      }
      // 切換展開狀態
      isNavbarExpanded = !isNavbarExpanded;
    } else if (target === '#collapsibleNavId2') {
      if (isArticleAExpanded) {
        // 如果已展開，執行關閉操作
        console.log('ArticleA Navbar is expanded. Closing...');
        $(target).hide();
      } else {
        // 如果未展開，執行展開操作
        console.log('ArticleA Navbar is not expanded. Opening...');
        $(target).show();
      }
      // 切換展開狀態
      isArticleAExpanded = !isArticleAExpanded;
    }

    $(target).toggleClass('show');
  });




  //           Article A- 立即訂票轉換頁面按鈕               //
  function openArticleB() {
    // 關閉當前已打開的頁面
    $(".tab-pane").removeClass("show active");

    // 打開新的頁面
    $("#articleB").addClass("show active");

    // 如果需要手動跳轉到 #articleB 頁面
    window.location.href = "#articleB";
  }





})












