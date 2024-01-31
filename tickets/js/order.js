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
//  ↑↑ ↑↑ 置於$(document).ready(function () 之外的程式碼 ENd    ↑↑ ↑↑       //



$(document).ready(function () {


  //抓取網址中GET參數//
  var getUrlString = location.href;
  var url = new URL(getUrlString);
  //url.searchParams.get("shipid")

  // 获取 URL 中的参数值
  var shipid = url.searchParams.get("shipid");
  var btime = url.searchParams.get("btime");
  var ticket = url.searchParams.get("ticket");
  var timeid = url.searchParams.get("time");


  // 将参数值插入到相应的元素中
  $("#shipID-show").text(shipid);
  $("#clock-show").text(btime);
  $("#showtickets").text("訂票數:" + ticket);
  $("#time-show").text(timeid);


  // 製作票種 下拉票數
  $('.ticketQuantity').each(function () {

    let this_ticketQuantity = $(this);

    // 根據票數動態產生選項
    for (var i = 0; i <= ticket; i++) {
      var option = $('<option></option>').attr('value', (i)).text(i);
      this_ticketQuantity.append(option);
    }
  })

  //預設初始畫面的未選擇票數為紅色
  $("#tickets_unchoosed").text(ticket);
  $("#tickets_unchoosed").css("background-color", "red");

  // 綁定所有擁有 class="ticketQuantity" 的 select 元素的 change 事件
  $('.ticketQuantity').on('change', function () {

    $("#custom-alert_2").hide();
    // 獲取被改變的 select 元素

    //用 console.log("yes"); 測試有沒有進入這個功能

    let this_select = $(this);
    //讓正在被點擊的select = this_select



    let y = 0;
    $('.ticketQuantity').each(function () {
      if ($(this) != this_select) {
        //排除正在被點擊的select，
        y += parseInt($(this).val());
        //累加其他select的票數，用來計算餘票
        //這裡用 parseInt 才不會被當字串累加
        // y=y+
        // y+=
      }
    })

    // 計算還剩多少餘票用
    console.log(y);
    let other_tickets = ticket - y;

    // 除非餘票=0不然都用紅色顯示

    if (other_tickets < 0) {
      //$("#alert-result").html(text_show);
      $("#custom-alert_2").show();

      this_select.empty();
      // 根據票數動態產生選項
      for (var i = 0; i <= ticket; i++) {
        var option = $('<option></option>').attr('value', (i)).text(i);
        this_select.append(option);

      }
      y = 0;
      $('.ticketQuantity').each(function () {
        if ($(this) != this_select) {
          //排除正在被點擊的select，
          y += parseInt($(this).val());

        }
      })
      other_tickets = ticket - y
      $("#tickets_unchoosed").text(other_tickets);


    } else {

      // $("#tickets_choosed").text( other_tickets+"張票");
      $("#tickets_unchoosed").text(other_tickets);

    }
    if (other_tickets == 0) {
      $("#tickets_unchoosed").css("background-color", "green");


    } else {
      $("#tickets_unchoosed").css("background-color", "red");
    }
    //有餘票才改變顏色(所以放在判斷餘票的下面)
    icon_color_cange(this_select);
    //呼叫 icon_color_cange的方法，
    //將正在被點擊的select當參數帶入

  });


  //實作icon_color_cange方法:判斷 正在被點擊的select 屬於哪個票種 做顏色變更
  //參數this_select=$(this)
  let icon_color_cange = function (this_select) {
    console.log(this_select);

    //                     $ (".find_title")(同下面這行)
    //let icon_find = t  h  i  s(  )    .find(".find_title").text();演化成下面這行
    let icon_find = this_select.parent().find(".find_title").text();

    //讓正在被點擊的select = this_select
    let this_select_val = this_select.val();
    //   $($(this)).val()
    //   $(this_select).val()
    //   $(this)

    if (this_select_val > 0) {

      if (icon_find == "全票") {

        this_select.parent().find(".icon_color_cange").css("color", "green");
      } else if (icon_find == "敬老") {
        this_select.parent().find(".icon_color_cange").css("color", "blue");

      } else if (icon_find == "兒童") {
        this_select.parent().find(".icon_color_cange").css("color", "yellow");

      } else if (icon_find == "博愛") {
        this_select.parent().find(".icon_color_cange").css("color", "red");

      } else if (icon_find.includes("陪同者")) {
        //錯誤: $(this_select.parent().find(".icon_color_cange")).css("text-color", "pink");
        //因為:      this_select.parent().find(".icon_color_cange") 
        //       =   $                        (".icon_color_cange")(同上面這行)
        //所以:  $(this_select.parent().find(".icon_color_cange")).css("text-color", "pink");
        //    =  $(                       $ (".icon_color_cange"))
        //正確:this_select.parent().find(".icon_color_cange").css("text-color", "green");

        this_select.parent().find(".icon_color_cange").css("color", "pink");


      }

    } else {
      this_select.parent().find(".icon_color_cange").css("color", "black");
    }
  }





  //          ArticleA警告框-關閉按鈕               //

  // $("#alert-result_i").click(function () {
  //   $(this).parent().find(".custom-alert").hide();
  // });

  // 一旦 custom-alert 元素出现，添加点击事件


  //          票種選擇_警告框-關閉按鈕               //

  // 監聽主alert-result_i，如果有變化觸發功能如下:
  $(document).on("click", ".alert-result_i", function () {

    console.log("点击事件");
    $(this).parent().hide();
    // 隐藏当前的 custom-alert 元素
    // $("#custom-alert_2").hide();
    focus_custom_alert();
  })




  //                 產生_旅客標單格式                //

  let  htmlString_title =
    '<aside class="bd-aside sticky-xl-top  align-self-start mb-3 mb-xl-5 px-2">' +
  '<h3 class="mt-5 pb-3 mb-4 border-bottom">資料填寫</h3>' +
  '<h5 class="pb-3 mb-4">(請下拉選單)</h5>' +
  '<nav class="small" id="toc">' +
  '<ul class="list-unstyled " id="buyers_list"> ' ;

  
  

  let traveler_list = function (i, ii, ticket_title) {

    //let return_list ="";暫存用

    let color = [
      "green",
      "blue",
      "yellow",
      "red",
      "pink"
    ]

    // if(ii==3){
    //   ticket_title="博愛";
    // }

    let add_text =
      '<div class="get_form">' +
      '<table>' +
      '<div id="planpickered" class="mt-4 pt-3 pb-1" style="background-color: red;">' +
      '<h2 id="contact" class=" ticket_title section-title mb-3 text-center text-white">博愛</h2>' +
      '</table>' +

      '<!-- 警視窗 -->' +
      '<li  class="custom-alert justify-content-between lh-sm mb-2 mt-2" role="alert" style="position: relative; background-color: rgb(255, 100, 86);display: none;">' +
      '<p class="alert-text text-white">Your Alert Text</p>' +
      '<i class="alert-result_i fa-solid fa-circle-xmark fa-2x text-white" style="position: absolute; top: 5%; right: 0%; "></i>' +
      '</li>' +
      '<!-- 警視窗 -->' +

      '<div class="row mt-5 justify-content-between" style="padding-left: 2%; padding-right: 2%;">' +
      '<div class="col-lg-6" style="padding-right: 5%; padding-left: 3%;">' +
      '<div class="row" style="padding-left: 10%;">' +
      '<input type="text" class="form-control col orderName" placeholder="姓名" value="" required>' +
      '<h2 id="contact" class="col section-title mb-3 text-center text-red">旅客資料</h2>' +
      '</div>' +
      '<input type="text" class="form-control orderPhone" placeholder="手機/行動電話" value="" required>' +
      '<input type="text" class="form-control orderId orderIdd" placeholder="身分證" value="" required>' +
      '<input type="text" class="form-control email" placeholder="email" value="" required>' +
      '</div>' +

      '<div class="col-lg-6 col-md-12 col-sm-12 mt-3" style="padding-left: 5%; padding-right: 5%;">' +
      '<div class="row justify-content-start" style="padding-left: 30%; padding-right: 10%;">' +

      '<div style="display:flexbox; border-radius: 5%;  background-color: rgba(218, 218, 218, 0.616);">' +
      '<input type="checkbox" class="orderer_check" style="width: 20px; height: 20px; margin-top: 20%;">' +
      '<h4 id="contact" class=" section-title mb-3 pt-3 text-center text-red">&nbsp;&nbsp;&nbsp;旅客=聯絡人</h4>' +
      '<p id="contact" class="  mb-3 pt-3 text-center text-red">&nbsp;&nbsp;&nbsp;(請打勾)</p>' +
      '</div>' +
      '</div>' +

      '<div class="table-responsive justify-content-center">' +
      '<table class=" text-center text-red ">' +
      '<thead>' +
      '<tr>' +
      '<th style=" width: 35%;">' +
      '<i class="fa-solid fa-earth-americas fa-4x"></i>' +
      '<h6>地區</h6>' +
      '<select class="form-select country" required>' +
      '<option value=""></option>' +
      '<option value="TWN">台灣</option>' +
      '<option value="CHN">大陸</option>' +
      '<option value="HKG">香港</option>' +
      '<option value="MAC">澳門</option>' +
      '<option value="NN">其他</option>' +
      '</select>' +
      '</th>' +
      '<th style="width: 40%;margin-right: 10%;">' +
      '<i class="fa-solid fa-venus-mars fa-4x"></i>' +
      '<h6>性別</h6>' +
      '<select class="form-select gender" required>' +
      '<option value=""></option>' +
      '<option value="女">女</option>' +
      '<option value="男">男</option>' +
      '</select>' +
      '</th>' +
      '<th style="width: 40%; padding-top: 10%;">' +
      '<i class="fa-solid fa-cake-candles fa-4x"></i>' +
      '<h6>出生日期</h6>' +
      '<div>' +
      '<input type="date" class="birthdayPicker" placeholder="選擇日期範圍" value="">' +
      '</div>' +
      '</th>' +
      '</tr>' +
      '</thead>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>'
      ;


  


    let htmlString_mid0 =
    '<li class="my-2">' +
      '<button class="btn d-inline-flex align-items-center collapsed border-0 mb-3 text-white" ' +
      'data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse' + i + ii + '"' +
      'aria-controls="contents-collapse">' + ticket_title + '旅客(' + (parseInt(i) + parseInt(1)) + ')表單</button>' +
      '<ul class="list-unstyled ps-3 collapse" id="contents-collapse' + i + ii + '">' +
      '<div class="table-responsive id="contact"  text-green">' +
      '<form  id="contact"  action="" method="get" style="background-image: url(/tickets/img/contact-form-bg-2.png);">'
      ;

    let htmlString_mid1 =
      '<div class="get_form">' +
      '<table>' +
      '<div id="planpickered" class="mt-4 pt-3 pb-1 bg-'+ color[ii] + '" >' +
      '<h2 id="contact" class="ticket_title  section-title mb-3 text-center text-white">' + ticket_title + '</h2>' +
      '</table>' +

      '<!-- 警視窗 -->' +
      '<li  class="custom-alert justify-content-between lh-sm mb-2 mt-2" role="alert" style="position: relative; background-color: rgb(255, 100, 86);display: none;">' +
      '<p class="alert-text text-white">Your Alert Text</p>' +
      '<i class="alert-result_i fa-solid fa-circle-xmark fa-2x text-white" style="position: absolute; top: 5%; right: 0%; "></i>' +
      '</li>' +


      '<div class="row mt-5 justify-content-between" style="padding-left: 2%; padding-right: 2%;">' +
      '<div class="col-lg-6" style="padding-right: 5%; padding-left: 3%;">' +
      '<div class="row" style="padding-left: 10%;">' +
      '<input type="text" class="form-control col orderName"  placeholder="姓名" value="" required>' +
      '<h2 id="contact" class="col section-title mb-3 text-center  text-' + color[ii] + ' ">旅客資料</h2>' +
      '</div>' +
      '<input type="text" class="form-control orderPhone" placeholder="手機/行動電話" value="" required>';

    let htmlString_mid2 =
      '<input type="text" class="form-control orderId" placeholder="身分證" value="" required>';

    let htmlString_mid2_readonly =
      '<input type="text" class="form-control orderId orderIdd2" placeholder="身分證" value="" required readonly>';

    let htmlString_mid3 =
      '<input type="text" class="form-control email" placeholder="email" value="" required>' +
      '</div>' +
      '<div class="col-lg-6 col-md-12 col-sm-12 mt-3" style="padding-left: 5%; padding-right: 5%;">';

    let htmlString_mid4_checkbox =
      '<div class="row justify-content-start" style="padding-left: 30%; padding-right: 10%;">' +
      '<div style="display:flexbox; border-radius: 5%;  background-color: rgba(218, 218, 218, 0.616);">' +
      '<input type="checkbox" class="orderer_check" style="width: 20px; height: 20px; margin-top: 20%;">' +
      '<h4 id="contact" class=" section-title mb-3 pt-3 text-center text-' + color[ii] + '">&nbsp;&nbsp;&nbsp;旅客=聯絡人<br>(請打勾)</h4>' +
      '</div>' +
      '</div>';

    let htmlString_mid4 =
      '<div class="table-responsive justify-content-center">' +
      '<table class=" text-center  text-'+ color[ii] +' ">' +
      '<thead>' +
      '<tr>' +
      '<th style=" width: 35%;">' +
      '<i class="fa-solid fa-earth-americas fa-4x"></i>' +
      '<h6>地區</h6>' +
      '<select class="form-select country" required>' +
      '<option value=""></option>' +
      '<option value="TWN">台灣</option>' +
      '<option value="CHN">大陸</option>' +
      '<option value="HKG">香港</option>' +
      '<option value="MAC">澳門</option>' +
      '<option value="NN">其他</option>' +
      '</select>' +
      '</th>' +
      '<th style="width: 40%;margin-right: 10%;">' +
      '<i class="fa-solid fa-venus-mars fa-4x"></i>' +
      '<h6>性別</h6>' +
      '<select class="form-select gender" required>' +
      '<option value=""></option>' +
      '<option value="女">女</option>' +
      '<option value="男">男</option>' +
      '</select>' +
      '</th>' +
      '<th style="width: 40%; padding-top: 10%;">' +
      '<i class="fa-solid fa-cake-candles fa-4x"></i>' +
      '<h6>出生日期</h6>' +
      '<div>' +
      '<input type="date" class="birthdayPicker" placeholder="選擇日期範圍" value="">' +
      '</div>' +
      '</th>' +
      '</tr>' +
      '</thead>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</div>';


    let add_ending = '</form>' +
      '</div>' +
      '</ul>' +
      '</li>';



    // if (ii = 2) {

    //   console.log("進入ii = 2");
    //   return htmlString_title + htmlString_mid1 + htmlString_mid2 + htmlString_mid3  + htmlString_mid4 +add_ending;
    // }else if (ii = 4) {
    //   console.log("進入ii = 4");
    //   return htmlString_title + add_text + htmlString_mid1 + htmlString_mid2_readonly + htmlString_mid3 +htmlString_mid4_checkbox + htmlString_mid4+  add_ending;
    // } else {

    //   console.log("進入else");
    //   return htmlString_title + htmlString_mid1 + htmlString_mid2 + htmlString_mid3 +htmlString_mid4_checkbox + htmlString_mid4+  add_ending; 
    // }



    if (ii == 2) {
      return htmlString_mid0+ htmlString_mid1 + htmlString_mid2 + htmlString_mid3 + htmlString_mid4 + add_ending;
    } else if (ii == 4) {
      return htmlString_mid0+ add_text + htmlString_mid1 + htmlString_mid2_readonly + htmlString_mid3 + htmlString_mid4_checkbox + htmlString_mid4 + add_ending;
    } else {
      return htmlString_mid0+ htmlString_mid1 + htmlString_mid2 + htmlString_mid3 + htmlString_mid4_checkbox + htmlString_mid4 + add_ending;
    }



  }



  //定義: 聯絡人-表單 方法 
  let buyer_form = function () {
    var htmlString = '<li class="my-2">' +
      '<button class="btn d-inline-flex align-items-center collapsed border-0 mb-3 text-white" ' +
      'data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse-order" ' +
      'aria-controls="contents-collapse">聯絡人-表單</button>' +
      '<ul class="list-unstyled ps-3 collapse" id="contents-collapse-order">' +
      '<div class="table-responsive">' +
      '<form id="contact" class="get_orderform" action="" method="get" style="background-image: url(/tickets/img/contact-form-bg-2.png);">' +
      '<table>' +
      '<div id="planpickered" class="mt-4 pt-3 pb-1 bg-primary ">' +
      '<h2 id="contact" class="ticket_title section-title mb-3 text-center text-white">聯絡人-資料填寫</h2>' +
      '</div>' +
      '</table>' +

      '<!-- 警視窗 -->' +
      '<li  class="custom-alert justify-content-between lh-sm mb-2 mt-2" role="alert" style="position: relative; background-color: rgb(255, 100, 86); display: none; ">' +
      '<p class="alert-text text-white">Your Alert Text</p>' +
      '<i class="alert-result_i fa-solid fa-circle-xmark fa-2x text-white" style="position: absolute; top: 5%; right: 0%; "></i>' +
      '</li>' +

      '<div class="row mt-5">' +
      '<div class="col-lg-6">' +
      '<div class="row" style="padding-left: 5%;">' +
      '<h4  class="col section-title text-center text-primary">聯絡人</h4>' +
      '<input type="text" class="form-control col" id="orderName" placeholder="姓名" value="" required>' +
      '</div>' +
      '<input type="text" class="form-control" id="orderPhone" placeholder="手機/行動電話" value="" required>' +
      '<input type="text" class="form-control" id="orderId" placeholder="身分證" value="" required>' +
      '</div>' +
      '<div class="col-lg-6 col-md-12 col-sm-12 text-primary mt-3 mb-5">' +
      '<div class="list-group-item d-flex justify-content-between lh-sm" colspan="2">' +
      '<div class="table-responsive">' +
      '<table class="table text-center">' +
      '<thead>' +
      '<tr>' +
      '<h4>購票證名開立方式</h4>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr>' +
      '<th style="width: 50%;">' +
      '<div class="col">' +
      '<input type="radio" name="orderMethods" value="true" >統一開立' +
      '</div>' +
      '</th>' +
      '<th style="width: 50%;">' +
      '<div class="col">' +
      '<input type="radio" name="orderMethods" value="false" >分別開立' +
      '</div>' +
      '</th>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="col-lg-2 col-md-4 col-sm-2 text-primary">' +
      '</div>' +
      '</div>' +
      '</form>' +
      '</div>' +
      '</ul>' +
      '</li>'+


      '</ul>' +
      '<div class="col-lg-12">' +
      '<button class="main-button pt-3" id="form_send">' +
      '<h3>送出</h3>' +
      '</button>' +
      '</div>' +
      '</nav>'+
      '</aside>';

    return htmlString;
  }





  //            獲取article A 顯示於 modal             //
  let listNum = 0;
  let currentDate = "";
  $("#articleA_send").click(function (e) {
    e.preventDefault();
    //因為#articleA_send"包在form 裡，
    //所以這裡要阻止 input  form 會有 的預設的提交行為
    //預設的提交行為=把前端資料傳給後端，但是我們這裡只要前端的資料處理
    //所以在function (e)後 呼叫preventDefault方法;

    $("#buyers_list").empty();
    let ii = 0; //票種設定
    let show_list = [];//暫存用
    let Universal_Ticket = 0;//計算博愛票
    let UniversalLove_Ticket = 0;//計算愛心陪同票
    let tickets_unchoosed = $("#tickets_unchoosed").text();



    // 判斷 能夠送出的條件
    let T = true;
    let text_show = "";

    //判斷 陪同票數>博愛票數
    if ($("#ticketQuantity_D2").val() > $("#ticketQuantity_D1").val()) {
      T = false;
      text_show = text_show + "博愛(陪同者)票數'不能超'過博愛票數"
      console.log("判斷 陪同票數>博愛票數");
    }
    //判斷 已選擇票種數=預定票數
    if (parseInt(tickets_unchoosed) != 0) {
      T = false;
      text_show = text_show + "票種選擇(未完成)"
      console.log("已選擇票種數=預定票數");
    }
    if (!T) {
      $("#alert-result").html(text_show);
      $("#custom-alert").show();
    } else {


      $('.ticketQuantity').each(function () {

        let ticket_val = $(this).val();
        let find_title = $(this).parent().find(".find_title").text();


        if (ticket_val > 0) {
          console.log(find_title + "ticket:" + ticket_val);
          if (ii < 3) {
            for (var i = 0; i < ticket_val; i++) {
              show_list.push(traveler_list(i, ii, find_title));//暫存用
            }
          }
          else if (ii == 3) {
            Universal_Ticket = ticket_val;
          } else if (ii == 4) {
            UniversalLove_Ticket = ticket_val;
          }
        }
        //讓不同票種有不同id
        ii += parseInt(1)
      })

      
      


      let print_traveler_Universal_list = Universal_Ticket - UniversalLove_Ticket;


      
      //產生:博愛+陪同者的共同票
      for (var i = 0; i < UniversalLove_Ticket; i++) {

        show_list.push(traveler_list(i, 4, "博愛(陪同者)"));//暫存用
      }
      ////產生:博愛票
      for (var i = 0; i < print_traveler_Universal_list; i++) {
            show_list.push(traveler_list(i, 3, "博愛"));//暫存用
      }
      show_list.unshift(htmlString_title);     
      $("#buyers_list").append(show_list);
      let buyer_form_show = buyer_form();
      $("#buyers_list").append(buyer_form_show);
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


  //             旅客=聯絡人:checkbox連動                //
  $(document).on("change", ".orderer_check", function () {
      
      //隱藏警示窗
    $(this).parent().parent().find(".custom-alert").hide();

    $(".orderer_check").not(this).prop("checked", false);
    // 将所有拥有 "orderer_check" 类的复选框的状态设置为与当前复选框相反

    let get_title = $(this).parent().parent().parent().parent().parent().parent().parent().find(".ticket_title").text();

    console.log("get_title=" + get_title);


    if (get_title.includes("陪同者")) {

      console.log("進入includes(陪同者)");

      let orderName = $(this).parent().parent().parent().parent().find(".orderName").val();
      let orderPhone = $(this).parent().parent().parent().parent().find(".orderPhone").val();
      //input 要用 val 接收值 不能用 .text

      let T = true;
      let text_show = "";

      // 表格內的值是否為空 //
      if (!orderName) {
        console.log("有進入orderName ");
        T = false;
        text_show = text_show + "姓名:未填寫<br>"
        //   //"姓名:未填寫"=""+"姓名:未填寫"
      }

      if (!orderPhone) {
        console.log("有進入orderPhone");
        T = false;
        text_show = text_show + "手機/行動電話:未填寫<br>"
        // "姓名:未填寫電話:未填寫" ="姓名:未填寫"+"電話:未填寫"
      }

      if (!T) {
        console.log("有進入!T ");
        // console.log($(this).parent().parent().parent().parent().parent());

        $(this).parent().parent().parent().parent().parent().find(".alert-text").html(text_show);
        $(this).parent().parent().parent().parent().parent().find(".custom-alert").show();

        // $(".checked").prop("checked", false);
        // $(this).prop("checked") == false;//判斷左邊有沒有等於右邊
        // $(this).prop("checked") = false;//把右邊的值帶入左邊

        $(this).prop("checked", false);
      }
      else {

        console.log("進入uncludes(陪同者)");

        console.log("有進入!T else ");
        // 将值设置到对应的输入框
        $("#orderName").val(orderName);
        $("#orderPhone").val(orderPhone);
      }

      if ($(this).prop("checked") == false) {

        console.log("empty");
        $("#orderName").val("");
        $("#orderPhone").val("");
      }
      console.log($("#orderName"));
      console.log("orderPhone: " + orderPhone);


    } else {

      let orderName = $(this).parent().parent().parent().parent().find(".orderName").val();
      let orderPhone = $(this).parent().parent().parent().parent().find(".orderPhone").val();
      let orderId = $(this).parent().parent().parent().parent().find(".orderId").val();
      //input 要用 val 接收值 不能用 .text

      console.log($(this).find(".orderName"));
      console.log("orderPhone: " + orderPhone);
      console.log("orderId: " + orderId);


      let T = true;
      let text_show = "";

      // 表格內的值是否為空 //
      if (!orderName) {
        console.log("有進入orderName ");
        T = false;
        text_show = text_show + "姓名:未填寫<br>"
        //   //"姓名:未填寫"=""+"姓名:未填寫"
      }

      if (!orderPhone) {
        console.log("有進入orderPhone");
        T = false;
        text_show = text_show + "手機/行動電話:未填寫<br>"
        // "姓名:未填寫電話:未填寫" ="姓名:未填寫"+"手機/行動電話:未填寫"
      }

      if (!orderId) {
        console.log("有進入orderId ");
        T = false;
        text_show = text_show + "身分證/護照號碼:未填寫<br> "
      }

      if (!T) {
        console.log("有進入!T ");
        // console.log($(this).parent().parent().parent().parent().parent());

        $(this).parent().parent().parent().parent().parent().find(".alert-text").html(text_show);
        $(this).parent().parent().parent().parent().parent().find(".custom-alert").show();

        // $(".checked").prop("checked", false);
        // $(this).prop("checked") == false;//判斷左邊有沒有等於右邊
        // $(this).prop("checked") = false;//把右邊的值帶入左邊

        $(this).prop("checked", false);
      }
      else {
        console.log("有進入!T else ");
        // 将值设置到对应的输入框
        $("#orderName").val(orderName);
        $("#orderPhone").val(orderPhone);
        $("#orderId").val(orderId);
      }

      if ($(this).prop("checked") == false) {

        console.log("empty");
        $("#orderName").val("");
        $("#orderPhone").val("");
        $("#orderId").val("");
      }
      console.log($("#orderName"));
      console.log("orderPhone: " + orderPhone);
      console.log("orderId: " + orderId);

    }



  });


  //           連動博愛(陪同者)   的  orderId input欄位          //
  $(document).on("input", ".orderIdd", function () {

    // 获取输入框的值
    let orderIdValue = $(this).val();

    // 在这里使用 orderIdValue 进行相应的操作
    console.log("orderId的值：" + orderIdValue);

    $(this).parent().parent().parent().parent().find(".orderIdd2").val(orderIdValue + "(此欄位會自動帶入，毋需填寫)");


  })

  //             票種轉換                                      //
  let turn_ticketcode = function (ticket_title) {
    //console.log("傳入ticket_title:" + ticket_title);
    let ticketcode = {
      "全票": "01",
      "敬老": "03",
      "兒童": "04",
      "博愛": "05",
      "博愛(陪同者)": "05"
    }
    let code = ticketcode[ticket_title]
    // console.log("傳出code:" + code);
    return code;
  }

  //               計算現在的年齡                              //
  let calculate_Age = function (date) {
    // 將生日日期字串傳換為日期物件
    let birthDate = new Date(date);
    console.log("birthDate物件:" + birthDate);

    // 獲取當前日期
    let currentDate = new Date();
    console.log("currentDate物件:" + currentDate);

    // 計算年齡
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // 检查是否已过生日
    if (currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log("計算出age:" + age);
    return age;
  }



  //驗證台灣身分證                                   //
  let verifyId = function (id) {
    id = id.trim();

    if (id.length != 10) {
      console.log("Fail，長度不正確");
      return false
    }


    let countyCode = id.charCodeAt(0);
    if (countyCode < 65 | countyCode > 90) {
      console.log("Fail，字首英文代號，縣市不正確");
      return false
    }

    let genderCode = id.charCodeAt(1);
    if (genderCode != 49 && genderCode != 50) {
      console.log("Fail，性別代碼不正確");
      return false
    }

    let serialCode = id.slice(2)
    for (let i in serialCode) {
      let c = serialCode.charCodeAt(i);
      if (c < 48 | c > 57) {
        console.log("Fail，數字區出現非數字字元");
        return false
      }
    }

    let conver = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
    let weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]

    id = String(conver.indexOf(id[0]) + 10) + id.slice(1);

    checkSum = 0
    for (let i = 0; i < id.length; i++) {
      c = parseInt(id[i])
      w = weights[i]
      checkSum += c * w
    }

    verification = checkSum % 10 == 0

    if (verification) {
      console.log("Pass");
    } else {
      console.log("Fail，檢核碼錯誤");
    }

    return verification
  }
  //console.log(             verifyId(    "A123456789"       )     );


  // 驗證台灣手機/行動電話
  let verifyPhone =function(orderPhone){

      // 手機/行動電話號碼格式
    let phoneRegex = /^[0-9]{10}$/;

    // 检查
    return phoneRegex.test(orderPhone);
  }

  // 游標移動至的第一個警示div的位置
  let focus_custom_alert=function(){

        // 获取第一个显示的 .custom-alert 元素
      let visibleCustomAlert = $(".custom-alert:visible").first();
      
      // 如果有可见的 .custom-alert 元素，则将焦点设置到它
      if (visibleCustomAlert.length > 0) {
        $("html,body").animate({scrollTop:visibleCustomAlert.offset().top-200},500);
        //在可见的 .custom-alert 元素上创建自定义动画(页面滚动)，将页面滚动到该元素的顶部，持续时间为 500 毫秒
        }
  }

  //將檢查過後的資料顯示於 modal

  let send_all = function (package){

    console.log("又進入");

    $("#carousel-inner").empty();//不累加清空


    // // 顯示於 Modal 訂票資訊欄位 //
    $("#m_shipid").text(package.shipId0);
    $("#m_date").text(timeid);
    $("#m_time").text(btime);
    $("#m_tCount").text(package.qty);



    // // 顯示於 Modal 訂票人欄位 //
    $("#order_name").text(package.orderName);
    $("#order_id").text(package.orderUid);
    $("#order_pno").text(package.orderPhone);




    $.each(package.tickets, function (index, value) {

      let active ="";
      if (index==0){
         active =" active";
      }

      let Tcode= value.ticketCode;
      // "01" = value.ticketCode
      console.log("Tcode="+Tcode);

      let ticket = {
        "01":"全票",
        "03":"敬老",
        "04":"兒童",
        "05":"博愛"
      }

    let tT = ticket[Tcode];
    console.log("tT="+tT);
      // 
      // value.ticketCode=01;
      // ticket.01= "全票"

      // 01=value.ticketCode

      //+ticket.Tcode+
      //ticket.01 = 全票

      $("#carousel-inner").append(

        '<div class="carousel-item'+active+'" data-slide-number="'+index+'">' +
        '<h2>'+tT+'</h2>' +
         
        '<div class="col">' +
            '<div class="gallery-text">' +
                '<h4>' +
                    '<strong><br>' +
                        value.name +
                    '</strong>' +
                '</h4>' +
            '</div>' +
            '<div class="table-responsive">' +
                '<form id="contact" class="get_form bg-light ">' +
                    '<h2 id="contact" class="section-title mb-3 text-center text-primary "></h2>' +
                    '<div class="table-responsive ">' +
                        '<table class="table text-center text-black">' +
                            '<thead>' +
                                '<tr>' +
                                    '<th style="width: 10%;" id="shipID0">電話</th>' +
                                    '<td>'+value.phone+'</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<th style="width: 20%;" id="btime">身分證</th>' +
                                    '<td>'+value.uid+'</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<th style="width: 10%;" id="etime">Email</th>' +
                                    '<td>'+value.email+'</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<th style="width: 20%;" id="qty">國籍</th>' +
                                    '<td>'+value.country+'</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<th style="width: 10%;" id="etime">性別</th>' +
                                    '<td>'+value.gender+'</td>' +
                                '</tr>' +
                                '<tr>' +
                                    '<th style="width: 10%;" id="etime">生日</th>' +
                                    '<td>'+value.birthday+'</td>' +
                                '</tr>' +
                            '</thead>' +
                        '</table>' +
                    '</div>' +
                '</form>' +
            '</div>' +
        '</div>' +
    '</div>'

      )
     
    
    })
    console.log("結束");
  }



  //            資料填寫完送出-格式檢查                       //

  $(document).on("click", "#form_send", function () {
  

    //隱藏警示窗
    $(this).parent().parent().find(".custom-alert").hide();
    
    //獲取通過檢查的搭船人資料
    let send_list = [];
    //判斷能否進入:彙整買票人資料的動作
    let T = true;


    //獲取:搭船人資料
    $('.get_form').each(function () {
      let ticket_title = $(this).find(".ticket_title").text();
      let orderName = $(this).find(".orderName").val();
      console.log("orderName: " + orderName);
      let orderPhone = $(this).find(".orderPhone").val();
      let orderId = $(this).find(".orderId").val();
      let email = $(this).find(".email").val();
      let country = $(this).find('.country').val();
      let gender = $(this).find('.gender').val();
      let date = $(this).find('.birthdayPicker').val();


      console.log("ticket_title: " + ticket_title);
      // console.log("orderName: " + orderName);
      // console.log("orderPhone: " + orderPhone);
      // console.log("orderId: " + orderId);
      // console.log("country: " + country);
      // console.log("email: " + email);
      // console.log("gender: " + gender);
      //console.log("birthdayPicker: " + date);
      // console.log("email: " + email);



      let text_show = "";
      let Ta = true;

      //第一步:檢查送出表格內的值是否為空 //
       if (!orderName) {
      //   Ta = false;
      //   text_show = text_show + "姓名:未填寫<br>"
      //   //   //"姓名:未填寫"=""+"姓名:未填寫"
       }
       if (!orderPhone) {
      //   Ta = false;
      //   text_show = text_show + "手機/行動電話:未填寫<br>"
       }
       if (!orderId) {
      //   Ta = false;
      //   text_show = text_show + "身分證/護照號碼:未填寫<br>"
       }
       if (!email) {
      //   Ta = false;
      //   text_show = text_show + "email:未填寫<br>"
       }
       if (!country) {
      //   Ta = false;
      //   text_show = text_show + "國籍:未填寫<br>"
       }
      if (!gender) {
      //   Ta = false;
      //   text_show = text_show + "性別:未填寫<br>"
       }
       if (!date) {
         Ta = false;
         text_show = text_show + "出生日期:未填寫<br>"
       }
       
      //第二步:內容檢查 //
      if (!Ta) {
        $(this).find(".alert-text").html(text_show);
        $(this).find(".custom-alert").show();
      }

      //(確認都有值)進行...
      else {
        
        //確認票種
        let ticketcode = turn_ticketcode(ticket_title)

        //確認票種符合資格:敬老票+兒童票判斷
        if (ticketcode == "03") {
           console.log("進入敬老票判斷");

        //   let age = calculate_Age(date);
        //   console.log("回傳Age:" + age);

        //   if (age < 65) {

        //     console.log("進入:回傳Age< 65判斷式");

        //     text_show = text_show + "年齡條件不符，請重新選擇票種<br>"

        //     Ta = false;
        //     $(this).find(".alert-text").html(text_show);
        //     $(this).find(".custom-alert").show();
        //  }

          
                //兒童票判斷
       } else if (ticketcode == "04") {
          console.log("進入兒童票判斷");

        //   let age = calculate_Age(date);

        //   console.log("回傳年齡值:" + age);

        //   if (age < 2) {
        //     console.log("回傳年齡值不足2歲");

        //     text_show = text_show + "年齡不足2歲，不需購票<br>，請重新選擇票種<br>"

        //     Ta = false;
        //     $(this).find(".alert-text").html(text_show);
        //     $(this).find(".custom-alert").show();

        //     console.log("回傳年齡值不足2歲: " + $(this));

        //   } else if (age > 11) {

        //     console.log("回傳年齡值 > 11 : " + $(this));
        //     Ta = false;
        //     text_show = text_show + "年齡已超過兒童票適用年齡，<br>請重新選擇票種<br>"
        //     $(this).find(".alert-text").html(text_show);
        //     $(this).find(".custom-alert").show();
        //   }

         }

        // 檢查'非'陪同者的資料
        if (!ticket_title.includes("陪同者")) {
            console.log(ticket_title + "進入:檢查除陪同者以外的資料");

            //判斷:國內 ID格式
            if (country == "TWN") {
            // verifyId(orderId);
            if (!verifyId(orderId)) {
            //   //console.log("regex.test(orderId):"+regex.test(orderId));
            //   //console.log得出的結果為T/F
            //   //因此判斷式 (當結果=F)的寫法有兩種
            //   //方法一:(!regex.test(orderId))
            //   //方法二:(regex.test(orderId)==false)

              Ta = false;
              text_show = text_show + "身分證/護照欄位格式不正確，請重新輸入後再送出！<br>"


              $(this).find(".alert-text").html(text_show);
              $(this).find(".custom-alert").show();
            }

            if (!verifyPhone (orderPhone)) {
             
              Ta = false;
              console.log("无效的电话号码");

              text_show = text_show + "手機號碼欄位格式不正確，請重新輸入後再送出！<br>"


              $(this).find(".alert-text").html(text_show);
              $(this).find(".custom-alert").show();
            }


             }

            //判斷:國外 ID格式
            else {
                  if (orderId.length != 9) {

              console.log("進入長度判斷式");

              text_show = text_show + "身分證/護照欄位格式不正確，請重新輸入後再送出！<br>"
              Ta = false;

              $(this).find(".alert-text").html(text_show);
              $(this).find(".custom-alert").show();
                     }
            }

            //判斷:email格式
            if (email != "") {
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
              Ta = false;
              text_show = text_show + "email格式不正確，請重新輸入後再送出！<br>"

              $(this).find(".alert-text").html(text_show);
              $(this).find(".custom-alert").show();
              console.log("Ta = email格式不正確" + T);
            }
            }
       
         }  
        //檢查陪同者的資料
         else {
           console.log(ticket_title + "進入:檢查陪同者的資料");
          //因為(陪同者)的ID 由 博愛票帶入所以 只要驗證博愛票就好，避免被 陪同者不同國籍產生錯誤結果

          //判斷:email格式
            if (email != "") {
             let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
              Ta = false;
              text_show = text_show + "email格式不正確，請重新輸入後再送出！<br>"

              $(this).find(".alert-text").html(text_show);
              $(this).find(".custom-alert").show();
              console.log("Ta = email格式不正確" + T);
            }
            }
          
          //判斷:國內 手機格式
           if (country == "TWN") {         
                 if (!verifyPhone (orderPhone)) {
             
              Ta = false;
              console.log("无效的电话号码");

              text_show = text_show + "手機號碼欄位格式不正確，請重新輸入後再送出！<br>"

               $(this).find(".alert-text").html(text_show);
              $(this).find(".custom-alert").show();
               }
             }

          //以上都無誤再去掉orderId"提示字"
            if(Ta){
          // //     //切割orderId 避免輸出 "此欄位會自動帶入，毋需填寫"
              orderId = orderId.split("(")[0];
              console.log("切割後的陪同者orderId:" + orderId);
           }

         }

        //(以上檢查無誤後)整理:搭船人的資料
        if (Ta) {
          console.log("搭船人的資料格式:" + Ta);
          let send_item = {
            name: orderName,
            uid: orderId,
            phone: orderPhone,
            gender: gender,
            birthday: date,
            email: email,
            country: country,
            ticketCode: ticketcode
          };

          
          send_list.push(send_item);

        }
        //(以上檢查有誤)不進入下一步:彙整買票人資料的動作
        else {
          T = false
        }
      }
    })


    //獲取:買票人資料
    $('.get_orderform').each(function () {
      let ticket_title = $(this).find(".ticket_title").text();
      let orderName = $(this).find("#orderName").val();
      let orderPhone = $(this).find("#orderPhone").val();
      let orderId = $(this).find("#orderId").val();

      // 獲取form-check 訂單開立方式的值
      let orderMethod = $(this).find("input[name='orderMethods']:checked").val();

      console.log("ticket_title: " + ticket_title);
      // console.log("買票人Name: " + orderName);
      // console.log("買票人Phone: " + orderPhone);
      // console.log("買票人Id: " + orderId);
      //console.log("訂單開立方式: " + orderMethod);


      let Tb = true;
      let text_show = "";

      //檢查送出表格內的值是否為空 //
      if (!orderName) {
        Tb = false;
        text_show = text_show + "姓名:未填寫<br>"
      }
      if (!orderPhone) {
        Tb = false;
        text_show = text_show + "手機/行動電話號碼:未填寫<br>"
      }
      if (!orderId) {
        Tb = false;
        text_show = text_show + "身分證/護照號碼:未填寫<br>"
      }
      if (!orderMethod) {
        Tb = false;
        text_show = text_show + "訂單開立方式(未選擇)"
      }

      if (!Tb) {
        $(this).find(".alert-text").html(text_show);
        $(this).find(".custom-alert").show();
        T = Tb
      }
      else {
        if (orderId.length != 9 && orderId.length != 10) {
          T = false;
          text_show = text_show + "身分證/護照欄位格式不正確，<br>請重新輸入後再送出！<br>"


          //$(this).find(".alert-text").text(text_show);
          //用.text(text_show)的話<br>會顯示不出功能
          $(this).find(".alert-text").html(text_show);
          $(this).find(".custom-alert").show();
        }
        //整理:買票人的資料
        if (T) {
          console.log("買票人 沒有格式不正確" + T);

          let package = {
            orderName: orderName,
            orderPhone: orderPhone,
            orderUid: orderId,
            qty: ticket,
            shipId0: shipid,
            sp: true,
            remType: orderMethod,
            tickets: send_list
          };


          send_all(package);

          $("#DetailModal").modal('show');


          console.log(JSON.stringify(package, null, 2));


        }
      }
    })
    console.log("頭");
    //移動到位上方的警示窗
    focus_custom_alert();
    console.log("尾");

  })
})




$(document).on("click", "#modaltop_btn", function () {

  console.log("modaltop_btn 按鈕被觸發了");
  $("#DetailModal").modal('hide');

})

$(document).on("click", "#modalfooter_btn", function () {

  console.log("modalfooter_btn 按鈕被觸發了");
  $("#DetailModal").modal('hide');

})






// let send_all = {
//   "orderName": "13",
//   "orderPhone": "0912345678",
//   "orderUid": "A123456789",
//   "qty": "2",
//   "shipId0": "54036",
//   "sp": true,
//   "remType": "true",
//   "tickets": [
//     {
//       "name": "13",
//       "uid": "A123456789",
//       "phone": "0912345678",
//       "gender": "女",
//       "birthday": "2024-01-08",
//       "email": "A@A.c",
//       "country": "TWN",
//       "ticketCode": "01"
//     },
//     {
//       "name": "13",
//       "uid": "A123456789",
//       "phone": "0912345678",
//       "gender": "女",
//       "birthday": "2024-01-01",
//       "email": "A@A.c",
//       "country": "TWN",
//       "ticketCode": "01"
//     }
//   ]
// }




