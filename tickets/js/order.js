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
  var ticket = url.searchParams.get("ticket");
  var timeid = url.searchParams.get("time");


  // 将参数值插入到相应的元素中
  $("#shipID-show").text(shipid);
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

    } else {
      if (other_tickets == 0) {
        $("#tickets_unchoosed").css("background-color", "green");

      } else {
        $("#tickets_unchoosed").css("background-color", "red");

      }
      // $("#tickets_choosed").text( other_tickets+"張票");
      $("#tickets_unchoosed").text(other_tickets);

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

  $("#alert-result_i").click(function () {
    $("#custom-alert").hide();
  })

  //          票種選擇_警告框-關閉按鈕               //

  $("#alert-result_i_2").click(function () {
    $("#custom-alert_2").hide();
  })


  let traveler_list = function (i, ii, ticket_title) {

    //let return_list ="";暫存用

    let color = [
      "green",
      "blue",
      "yellow",
      "red",
      "pink"
    ]

    let add_text = '<table>' +
      '<div id="planpickered" class="mt-4 pt-3 pb-1" style="background-color: red;">' +
      '<h2 id="contact" class=" section-title mb-3 text-center text-white">博愛票</h2>' +
      '</table>' +
      '<div class="row mt-5 justify-content-between" style="padding-left: 2%; padding-right: 2%;">' +
      '<div class="col-lg-6" style="padding-right: 5%; padding-left: 3%;">' +
      '<div class="row" style="padding-left: 10%;">' +
      '<input type="text" class="form-control col" class="orderName" placeholder="姓名" value="" required>' +
      '<h2 id="contact" class="col section-title mb-3 text-center ">旅客資料</h2>' +
      '</div>' +
      '<input type="text" class="form-control" class="orderPhone" placeholder="電話" value="" required>' +
      '<input type="text" class="form-control" class="orderId" placeholder="身分證" value="" required readonly>' +
      '<input type="text" class="form-control email" placeholder="email" value="" required>' +
      '</div>' +

      '<div class="col-lg-6 col-md-12 col-sm-12 mt-3" style="padding-left: 5%; padding-right: 5%;">' +
      '<div class="row justify-content-start" style="padding-left: 30%; padding-right: 10%;">' +
      '<div style="display:flexbox; border-radius: 5%;  background-color: rgba(218, 218, 218, 0.616);">' +
      '<input type="checkbox" class="orderer_check" style="width: 20px; height: 20px; margin-top: 20%;">' +
      '<h4 id="contact" class=" section-title mb-3 pt-3 text-center">&nbsp;&nbsp;&nbsp;旅客=訂票負責人<br>(請打勾)</h4>' +
      '</div>' +
      '</div>' +
      '<div class="table-responsive justify-content-center">' +
      '<table class=" text-center text-primary ">' +
      '<thead>' +
      '<tr>' +
      '<th style=" width: 35%;">' +
      '<i class="fa-solid fa-earth-americas fa-4x"></i>' +
      '<h6>國籍</h6>' +
      '<select class="form-select country" required>' +
      '<option value="">台灣</option>' +
      '<option>香港</option>' +
      '<option>大陸</option>' +
      '<option>其他</option>' +
      '</select>' +
      '</th>' +
      '<th style="width: 40%;margin-right: 10%;">' +
      '<i class="fa-solid fa-venus-mars fa-4x"></i>' +
      '<h6>性別</h6>' +
      '<select class="form-select gender" required>' +
      '<option value="">女</option>' +
      '<option>男</option>' +
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
      '</div>'
      ;




    let htmlString = '<li class="my-2">' +
      '<button class="btn d-inline-flex align-items-center collapsed border-0 mb-3" ' +
      'data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse' + i + ii + '"' +
      'aria-controls="contents-collapse">' + ticket_title + '旅客(' + (parseInt(i) + parseInt(1)) + ')表單</button>' +
      '<ul class="list-unstyled ps-3 collapse" id="contents-collapse' + i + ii + '">' +
      '<div class="table-responsive id="contact" class="get_form" text-green">' +
      '<form  id="contact" class="get_form" action="" method="get" style="background-image: url(/tickets/img/contact-form-bg.png);">' +
      '<table>' +
      '<div id="planpickered" class="mt-4 pt-3 pb-1" style="background-color:' + color[ii] + ';">' +
      '<h2 id="contact" class=" section-title mb-3 text-center text-white">' + ticket_title + '票種</h2>' +
      '</table>' +
      '<div class="row mt-5 justify-content-between" style="padding-left: 2%; padding-right: 2%;">' +


      '<div class="col-lg-6" style="padding-right: 5%; padding-left: 3%;">' +
      '<div class="row" style="padding-left: 10%;">' +
      '<input type="text" class="form-control col orderName"  placeholder="姓名" value="" required>' +
      '<h2 id="contact" class="col section-title mb-3 text-center ">旅客資料</h2>' +
      '</div>' +
      '<input type="text" class="form-control orderPhone" placeholder="電話" value="" required>' +
      '<input type="text" class="form-control orderId" placeholder="身分證" value="" required>' +
      '<input type="text" class="form-control email" placeholder="email" value="" required>' +
      '</div>' +
      '<div class="col-lg-6 col-md-12 col-sm-12 mt-3" style="padding-left: 5%; padding-right: 5%;">' +
      '<div class="row justify-content-start" style="padding-left: 30%; padding-right: 10%;">' +
      '<div style="display:flexbox; border-radius: 5%;  background-color: rgba(218, 218, 218, 0.616);">' +
      '<input type="checkbox" class="orderer_check" style="width: 20px; height: 20px; margin-top: 20%;">' +
      '<h4 id="contact" class=" section-title mb-3 pt-3 text-center">&nbsp;&nbsp;&nbsp;旅客=訂票負責人<br>(請打勾)</h4>' +
      '</div>' +
      '</div>' +


      '<div class="table-responsive justify-content-center">' +
      '<table class=" text-center text-primary ">' +
      '<thead>' +
      '<tr>' +
      '<th style=" width: 35%;">' +
      '<i class="fa-solid fa-earth-americas fa-4x"></i>' +
      '<h6>國籍</h6>' +
      '<select class="form-select country" required>' +
      '<option value="">台灣</option>' +
      '<option>香港</option>' +
      '<option>大陸</option>' +
      '<option>其他</option>' +
      '</select>' +
      '</th>' +
      '<th style="width: 40%;margin-right: 10%;">' +
      '<i class="fa-solid fa-venus-mars fa-4x"></i>' +
      '<h6>性別</h6>' +
      '<select class="form-select gender" required>' +
      '<option value="">女</option>' +
      '<option>男</option>' +
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
      '</div>'

      ;

     let add_ending = '</form>' +
     '</div>' +
     '</ul>' +
     '</li>';




      
    if (ii <= 3) {

      return htmlString + add_ending;
    } else {
      return htmlString + add_text + add_ending;
    }

  }

  //定義: 聯絡人-表單 方法 
  let buyer_form = function () {
    var htmlString = '<li class="my-2">' +
      '<button class="btn d-inline-flex align-items-center collapsed border-0 mb-3" ' +
      'data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse-order" ' +
      'aria-controls="contents-collapse">聯絡人-表單</button>' +
      '<ul class="list-unstyled ps-3 collapse" id="contents-collapse-order">' +
      '<div class="table-responsive">' +
      '<form id="contact" class="get_form" action="" method="get" style="background-image: url(/tickets/img/contact-form-bg.png);">' +
      '<table>' +
      '<div id="planpickered" class="mt-4 pt-3 pb-1 bg-primary ">' +
      '<h2 id="contact" class=" section-title mb-3 text-center text-white">聯絡人-資料填寫</h2>' +
      '</div>' +
      '</table>' +
      '<div class="row mt-5">' +
      '<div class="col-lg-6">' +
      '<div class="row" style="padding-left: 5%;">' +
      '<h4  class="col section-title text-center text-primary">聯絡人</h4>' +
      '<input type="text" class="form-control col" "id= orderName" placeholder="姓名" value="" required>' +
      '</div>' +
      '<input type="text" class="form-control" "id= orderPhone" placeholder="電話" value="" required>' +
      '<input type="text" class="form-control" "id= orderId" placeholder="身分證" value="" required>' +
      '</div>' +
      '<div class="col-lg-6 col-md-12 col-sm-12 text-primary mt-3 mb-5">' +
      '<div class="list-group-item d-flex justify-content-between lh-sm" colspan="2">' +
      '<div class="table-responsive">' +
      '<table class="table text-center">' +
      '<thead>' +
      '<tr>' +
      '<h4>訂單開立方式</h4>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr>' +
      '<th style="width: 50%;">' +
      '<div class="col">' +
      '<input type="radio" name="orderMethods" value="統一開立購票證名" required>統一開立購票證名' +
      '</div>' +
      '</th>' +
      '<th style="width: 50%;">' +
      '<div class="col">' +
      '<input type="radio" name="orderMethods" value="分別開立購票證名" required>分別開立購票證名' +
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
      '</li>';

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
    let ii = 0;
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

      console.log("123");


      $('.ticketQuantity').each(function () {

        let ticket_val = $(this).val();

        let find_title = $(this).parent().find(".find_title").text();

        console.log("find_title:" + find_title);


        if (ticket_val > 0) {
          console.log("ticket:" + ticket_val);


          if (ii < 3) {
            for (var i = 0; i < ticket_val; i++) {
              // show_list = traveler_list(i,ii,find_title);            
              //$("#buyers_list").append(traveler_list(i,ii,find_title));
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

        show_list.push(traveler_list(i, 4, "陪同者"));//暫存用

      }
      ////產生:博愛票
      for (var i = 0; i < print_traveler_Universal_list; i++) {

        show_list.push(traveler_list(i, 3, "愛心"));//暫存用

      }




      $("#buyers_list").append(show_list);

      let buyer_form_show = buyer_form();
      $("#buyers_list").append(buyer_form_show);


    }





    //$("#buyers_list").empty();
    //let buyers_list = 0;

    // // 獲取"articleA表格內的值
    // let orderName = $("#orderName").val();
    // let orderPhone = $("#orderPhone").val();
    // let orderId = $("#orderId").val();
    // let ticketQuantity = $("#ticketQuantity_A").val();
    // let tickets_unchoosed = $("#tickets_unchoosed").text();

    // let A = function (i, name, Uid) {
    //   let htmlString = '<li class="my-2">' +
    //     '<button class="btn d-inline-flex align-items-center collapsed border-0 mb-3" ' +
    //     'data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse' + i + '" ' +
    //     'aria-controls="contents-collapse">乘客(' + (parseInt(i) + parseInt(1)) + ')資料填寫(請下拉)</button>' +
    //     '<ul class="list-unstyled ps-3 collapse" id="contents-collapse' + i + '">' +
    //     '<div class="table-responsive">' +
    //     '<table>' +
    //     '<div id="planpickered" class="pt-5 pb-1" style="background: rgb(102, 235, 226)">' +
    //     '<label for="plan">' +
    //     '<h2 class="section-title mb-3 text-center text-white">乘客(' + (parseInt(i) + parseInt(1)) + ')資料</h2>' +
    //     '</div>' +
    //     '</table>' +
    //     '<main>' +
    //     '<div class="table-responsive pt-4" style="background-color: rgb(245, 240, 220);">' +
    //     '<table class="table text-center">' +
    //     '<thead>' +
    //     '<tr>' +
    //     '<th style="width: 30%;" id="gender" class="intro-box">' +
    //     '<span class="my-0" id="time-show">' +
    //     '<i class="fa-solid fa-ticket fa-4x"></i>' +
    //     '<h6>票種</h6>' +
    //     '<div id="Quantity">' +
    //     '<div>' +
    //     '<select id="ticketQuantity">' +
    //     '<option value="" selected>請選擇票種</option>' +
    //     '<option value="全票">全票</option>' +
    //     '<option value="敬老">敬老 </option>' +
    //     '<option value="兒童">兒童</option>' +
    //     '<option value="博愛">博愛</option>' +
    //     '<option value="博愛(陪同者)">博愛(陪同者)</option>' +
    //     '</select>' +
    //     '</div>' +
    //     '</div>' +
    //     '</span>' +
    //     '</th>' +
    //     '<th style="width: 30%;" id="gender" class="intro-box">' +
    //     '<span class="my-0" id="time-show">' +
    //     '<i class="fa-solid fa-venus-mars fa-4x"></i>' +
    //     '<h6>性別</h6>' +
    //     '<select class="form-select" id="gender" required>' +
    //     '<option value="">女</option>' +
    //     '<option>男</option>' +
    //     '</select>' +
    //     '</span>' +
    //     '</th>' +
    //     '<th style="width: 40%;" id="country" class="intro-box">' +
    //     '<span class="my-0" id="time-show">' +
    //     '<i class="fa-solid fa-cake-candles fa-4x"></i>' +
    //     '<h6>出生日期</h6>' +
    //     '<div>' +
    //     '<input type="date" id="birthdayPicker" placeholder="選擇日期範圍" value="">' +
    //     '</div>' +
    //     '</span>' +
    //     '</th>' +
    //     '</tr>' +
    //     '</thead>' +
    //     '<thead>' +
    //     '<tr>' +
    //     '<th class="intro-box">' +
    //     '<span class="my-0" id="time-show">' +
    //     '<i class="fa-solid fa-earth-americas fa-4x"></i>' +
    //     '<h6>國籍</h6>' +
    //     '<select class="form-select" id="traveler_country" required>' +
    //     '<option value="">台灣</option>' +
    //     '<option>香港</option>' +
    //     '<option>大陸</option>' +
    //     '<option>其他</option>' +
    //     '</select>' +
    //     '</span>' +
    //     '</th>' +
    //     '<th class="intro-box" colspan="2">' +
    //     '<svg class="bi" width="24" height="24">' +
    //     '<use xlink:href="#check" />' +
    //     '</svg>' +
    //     '<h6>身分證/護照號碼</h6>' +
    //     '<input type="text" class="form-control" id="traveler_Id" placeholder="" value="' + Uid + '" required>' +
    //     '</th>' +
    //     '</tr>' +
    //     '</thead>' +
    //     '<thead id="tickets-result2">' +
    //     '<tr>' +
    //     '<th scope="row" class="text-start" class="intro-box">' +
    //     '<h6>姓名</h6>' +
    //     '<input type="text" class="form-control" id="traveler_Name" placeholder="" value="' + name + '" required>' +
    //     '</th>' +
    //     '<th class="intro-box" colspan="2">' +
    //     '<svg class="bi" width="24" height="24">' +
    //     '<use xlink:href="#check" />' +
    //     '</svg>' +
    //     '<h6>email</h6>' +
    //     '<input type="text" class="form-control" id="traveler_email" placeholder="" value="" required>' +
    //     '</th>' +
    //     '</tr>' +
    //     '</thead>' +
    //     '</table>' +
    //     '</div>' +
    //     '</main>' +
    //     '</div>' +
    //     '</ul>' +
    //     '</li>';

    //   return htmlString;
    // }


    //let orderName = $("#orderName").val();
    // let orderPhone = $("#orderPhone").val();
    // let orderId = $("#orderId").val();
    // let ticketQuantity = $("#ticketQuantity_A").val();
    // let tickets_unchoosed = $("#tickets_unchoosed").text();


    // 獲取form-check 是否購票人為乘客的值
    // var isPassenger = $("input[name='isPassenger']:checked").val();
    // // 獲取form-check 訂單開立方式的值
    // var orderMethod = $("input[name='orderMethods']:checked").val();

    // console.log("orderName: " + orderName);
    // console.log("orderPhone: " + orderPhone);
    // console.log("orderId: " + orderId);
    // console.log("ticketQuantity: " + ticketQuantity);

    // console.log("tickets_unchoosed: " + tickets_unchoosed);

    // console.log("input[name='orderMethods']:checked" + '訂單開立方式的值');

    // console.log("input[name='isPassenger']:checked" + '是否購票人為乘客的值');

    // 檢查是否購票人為乘客


    // let T = true;
    // let text_show = "";

    // 檢查"articleA表格內的值"是否為空
    // if (!orderName) {
    //   T = false;
    //   text_show = text_show + "姓名:未填寫<br>"
    //  "姓名:未填寫"=""+"姓名:未填寫"
    //}

    // if (!orderPhone) {
    //   T = false;
    //   text_show = text_show + "電話:未填寫<br>"
    //   // "姓名:未填寫電話:未填寫" ="姓名:未填寫"+"電話:未填寫"
    // }

    // if (!ticketQuantity){
    //   T=false;
    //   text_show=text_show+"票種:未選擇<br>"
    //  // "姓名:未填寫電話:未填寫" ="姓名:未填寫"+"電話:未填寫"
    // }

    // if (!orderId) {
    //   T = false;
    //   text_show = text_show + "身分證/護照號碼:未填寫<br>"
    // }

    // if (!isPassenger) {
    //   //如果 後面這個條件是  false
    //   T = false;
    //   text_show = text_show + "購票人是否為乘客(未選擇)<br>"

    // }

    // if (!orderMethod) {
    //   T = false;
    //   text_show = text_show + "訂單開立方式(未選擇)"
    // }


    // if (!T) {
    //   $("#alert-result").html(text_show);
    //   $("#custom-alert").show();

    // }
    // else {

    //   let get_A_inedex = 0;
    //   // if (isPassenger === '是') {
    //   //   let get_A = A(get_A_inedex, orderName, orderId);
    //   //   $("#buyers_list").append(get_A);
    //   //   get_A_inedex = 1;
    //   //   console.log("購票人為乘客");
    //   // } else if (isPassenger === '否') {
    //   //   console.log("購票人不是乘客");
    //   // }

    //   // 檢查訂單開立方式
    //   // if (orderMethod === '統一開立購票證名') {
    //   //   console.log("統一開立購票證名");
    //   // } else if (orderMethod === '分別開立購票證名') {
    //   //   console.log("分別開立購票證名");
    //   // }

    //   //產生:購票人資料填寫(下拉選單)
    //   // for (var i = get_A_inedex; i < ticket; i++) {
    //   //   let no_get = A(i, "", "");
    //   //   $("#buyers_list").append(no_get);

    //   // }
    // }


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


// 監聽主checkbox，如果有變化觸發功能如下:
$(document).on("change",".orderer_check",function () {


  $(".orderer_check").not(this).prop("checked", false);
  // 将所有拥有 "orderer_check" 类的复选框的状态设置为与当前复选框相反

let orderName = $(this).find(".orderName").val();
 let orderPhone = $(this).find(".orderPhone").val();
 let orderId = $(this).find(".orderId").val();
 //input 要用 val 接收值 不能用 .text

    console.log($(this).find(".orderName"));
      console.log("orderPhone: " + orderPhone);
      console.log("orderId: " + orderId);

       // 将值设置到对应的输入框
  $("#orderName").val(orderName);
  $("#orderPhone").val(orderPhone);
  $("#orderId").val(orderId);
  
  console.log("orderName: " + orderName);
  console.log("orderPhone: " + orderPhone);
  console.log("orderId: " + orderId);


});




  //            資料填寫完送出-格式檢查                       //

  $("#form_send").click(function () {

    $('.get_form').each(function () {


      let orderName = $(this).find("#orderName").text();
      let orderPhone = $(this).find("#orderPhone").text();
      let orderId = $(this).find("#orderId").text();
      let email = $(this).find("#email").text();
      let country = $('#country').val();
      let gender = $('#gender').val();
      var birthdayPicker = $('#birthdayPicker').val();
      var isChecked = $('#Orderer_check').is(':checked');


      // //獲取form-check 是否購票人為乘客的值
      // var isPassenger = $("input[name='isPassenger']:checked").val();
      // 獲取form-check 訂單開立方式的值
      var orderMethod = $("input[name='orderMethods']:checked").val();

      console.log("orderName: " + orderName);
      console.log("orderPhone: " + orderPhone);
      console.log("orderId: " + orderId);
      console.log("ticketQuantity: " + ticketQuantity);

      console.log("tickets_unchoosed: " + tickets_unchoosed);

      console.log("input[name='orderMethods']:checked" + '訂單開立方式的值');

      console.log("input[name='isPassenger']:checked" + '是否購票人為乘客的值');

      //檢查是否購票人為乘客


      let T = true;
      let text_show = "";

      //檢查"articleA表格內的值"是否為空
      if (!orderName) {
        T = false;
        text_show = text_show + "姓名:未填寫<br>"
        //"姓名:未填寫"=""+"姓名:未填寫"
      }

      if (!orderPhone) {
        T = false;
        text_show = text_show + "電話:未填寫<br>"
        // "姓名:未填寫電話:未填寫" ="姓名:未填寫"+"電話:未填寫"
      }


      if (!orderId) {
        T = false;
        text_show = text_show + "身分證/護照號碼:未填寫<br>"
      }

      if (!email) {
        T = false;
        text_show = text_show + "email:未填寫<br>"
        // "姓名:未填寫電話:未填寫" ="姓名:未填寫"+"電話:未填寫"
      }

      if (!country) {
        T = false;
        text_show = text_show + "國籍:未填寫<br>"
        // "姓名:未填寫電話:未填寫" ="姓名:未填寫"+"電話:未填寫"
      }

      if (!gender) {
        T = false;
        text_show = text_show + "性別:未填寫<br>"
        // "姓名:未填寫電話:未填寫" ="姓名:未填寫"+"電話:未填寫"
      }

      if (!birthdayPicker) {
        T = false;
        text_show = text_show + "性別:未填寫<br>"
        // "姓名:未填寫電話:未填寫" ="姓名:未填寫"+"電話:未填寫"
      }


      if (!isPassenger) {
        //如果 後面這個條件是  false
        T = false;
        text_show = text_show + "購票人是否為乘客(未選擇)<br>"

      }

      if (!orderMethod) {
        T = false;
        text_show = text_show + "訂單開立方式(未選擇)"
      }


      if (!T) {
        $("#alert-result").html(text_show);
        $("#custom-alert").show();

      }
      else {

        let get_A_inedex = 0;
        // if (isPassenger === '是') {
        //   let get_A = A(get_A_inedex, orderName, orderId);
        //   $("#buyers_list").append(get_A);
        //   get_A_inedex = 1;
        //   console.log("購票人為乘客");
        // } else if (isPassenger === '否') {
        //   console.log("購票人不是乘客");
        // }

        // 檢查訂單開立方式
        // if (orderMethod === '統一開立購票證名') {
        //   console.log("統一開立購票證名");
        // } else if (orderMethod === '分別開立購票證名') {
        //   console.log("分別開立購票證名");
        // }

        //產生:購票人資料填寫(下拉選單)
        // for (var i = get_A_inedex; i < ticket; i++) {
        //   let no_get = A(i, "", "");
        //   $("#buyers_list").append(no_get);

        // }
      }





      let this_ticketQuantity = $(this);

      // 根據票數動態產生選項
      for (var i = 0; i <= ticket; i++) {
        var option = $('<option></option>').attr('value', (i)).text(i);
        this_ticketQuantity.append(option);
      }

    })

    //                                  檢查"id"和"phone"是否為空                        //
    let hx_id = $("#hx-id").val();
    let hx_phone = $("#hx-phone").val();
    let T = true;
    let text_show = "";


    // 判断总字数
    // let hx_id_length = hx_id.length;
    // let hx_phone_length = hx_phone.length;

    // 轉換 hx_id 的英文字母為大寫
    // hx_id = hx_id.toUpperCase();


    // 確認第1個字是否為英文字母
    // if (/^[A-Z]/.test(hx_id)) {
    //   console.log("第1個字為英文字母");
    //   if (hx_id_length >= 10) {
    //     console.log("台湾");

    // } else {
    //   console.log("大陸");
    // }
    // } else {
    //   console.log("第1個字不為英文字母");
    // }




    //檢查"article表格內的值"是否為空
    if (!hx - id) {
      T = false;
      text_show = text_show + "身分證/護照:未填寫<br>"

    }

    if (!hx - phone) {
      T = false;
      text_show = text_show + "電話:未填寫<br>"
    }


    if (!T) {
      $("#alert-text-c").html(text_show);
      $("#custom-alert-c").show();

    }
    else {

    }



  })

})








