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

  //            Article NAVBAR- 轉換按鈕功能                    //
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
  $("#showtickets").text("訂票數:"+ ticket);
  $("#time-show").text(timeid);


    //          ArticleB警告框-關閉按鈕               //

    $("#alert-result_i").click(function (){
      $("#custom-alert").hide();
    })
  
  
  
    //            獲取article A 顯示於 modal             //
    let listNum = 0;
    let currentDate = "";



  $("#articleA_send").click(function () {

      let buyers_list = 0;
        
      // 獲取"articleA表格內的值
      let orderName = $("#orderName").val();
      let orderPhone = $("#orderPhone").val();
      let orderId = $("#orderId").val();
      let ticketQuantity =$("#ticketQuantity").val();
      
      let A=function(i,name,Uid){
        let htmlString ='<li class="my-2">' +
        '<button class="btn d-inline-flex align-items-center collapsed border-0"' +
          ' data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse'+i+'"' +
          ' aria-controls="contents-collapse">其他旅客資料('+(parseInt(i) + parseInt(1))+')</button>' +
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
                        '<input type="text" class="form-control" id="orderName" placeholder="" value="'+Uid+'" required>' +
                      '</th>' +
                      '<th scope="row" class="text-start">' +
                        '<h6>姓名</h6>' +
                        '<input type="text" class="form-control" id="orderName" placeholder="" value="'+name+'" required>' +
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
      return htmlString;
    }

      // 獲取form-check 是否購票人為乘客的值
      var isPassenger = $("input[name='isPassenger']:checked").val();
      // 獲取form-check 訂單開立方式的值
      var orderMethod = $("input[name='orderMethods']:checked").val();

      console.log("orderName: " + orderName);
      console.log("orderPhone: " + orderPhone);
      console.log("orderId: " + orderId);
      console.log("ticketQuantity: " + orderId);
      
      // 檢查是否購票人為乘客
      

      let T=true;
      let text_show="";

      // 檢查"articleA表格內的值"是否為空
      if (!orderName ){
        T=false;
        text_show=text_show+"姓名:未填寫<br>"
       //  "姓名:未填寫"=""+"姓名:未填寫"
      }

      if (!orderPhone ){
        T=false;
        text_show=text_show+"電話:未填寫<br>"
       // "姓名:未填寫電話:未填寫" ="姓名:未填寫"+"電話:未填寫"
      }
      if (!ticketQuantity){
        T=false;
        text_show=text_show+"票種:未選擇<br>"
       // "姓名:未填寫電話:未填寫" ="姓名:未填寫"+"電話:未填寫"
      }

      if (!orderId ){
        T=false;
        text_show=text_show+"身分證/護照號碼:未填寫<br>"
      }

      if (!isPassenger ){
        //如果 後面這個條件是  false
        T=false;
        text_show=text_show+"購票人是否為乘客(未選擇)<br>"

      }

      if (!orderMethod){
        T=false;
        text_show=text_show+"訂單開立方式(未選擇)"
      }

      if (!T){
        $("#alert-result").html(text_show);
        $("#custom-alert").show();

      }else {
        let get_A_inedex=0;
        if (isPassenger === '是') {
          let get_A =A(get_A_inedex,orderName,orderId);
          $("#buyers_list").append(get_A);
          get_A_inedex =1;
            console.log("購票人為乘客");
        }  else if (isPassenger === '否'){
            console.log("購票人不是乘客");
        }
  
        // 檢查訂單開立方式
        if (orderMethod === '統一開立購票證名') {
            console.log("統一開立購票證名");
        } else if(orderMethod === '分別開立購票證名') {
            console.log("分別開立購票證名");
        }
        
        //產生:購票人資料填寫(下拉選單)
        for (var i = get_A_inedex; i < ticket; i++) {
          let no_get =A(i,"","");
          $("#buyers_list").append(no_get);

        }
      }






    
    })

    
  //呼叫名為 articleBtn 的函數，並將字串參數 "articleA" 傳遞給該函數
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












