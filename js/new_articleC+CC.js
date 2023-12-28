$(document).ready(function () {

  //                獲取 detail_其他買票人資料 "顯示" 於modal           //
  let get_detail_show = function (detail) {
    let travelers = detail.travelers;

    $("#modal-col").empty();//不累加清空

    $.each(travelers, function (index, value) {

      $("#modal-col").append(
        "<div class='col-md-6 col-lg-6 order-md-last'>" +
        "<h4 class='d-flex justify-content-between align-items-center mb-3'>" +
        "<span class='text-primary'>其他買票人資料</span>" +
        "<span class='badge bg-primary rounded-pill'>" + (parseInt(index) + parseInt(1)) + "</span>" +
        "</h4>" +
        "<ul class='list-group mb-3'>" +
        "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
        "<div>" +
        "<h6 class='my-0'>票號:</h6>" +
        "</div>" +
        "<div>" +
        "<h6 class='my-0' id='ticnum'>" + value.ticnum + "</h6>" +
        "</div>" +
        "</li>" +
        "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
        "<div>" +
        "<h6 class='my-0'>姓名:</h6>" +
        "</div>" +
        "<div>" +
        "<h6 class='my-0' id='tname'>" + value.tname + "</h6>" +
        "</div>" +
        "</li>" +
        "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
        "<div>" +
        "<h6 class='my-0'>身分證/護照號碼:</h6>" +
        "</div>" +
        "<div>" +
        "<h6 class='my-0' id='tid'>" + value.id + "</h6>" +
        "</div>" +
        "</li>" +
        "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
        "<div>" +
        "<h6 class='my-0'>Email:</h6>" +
        "</div>" +
        "<div>" +
        "<h6 class='my-0' id='temail'>" + value.email + "</h6>" +
        "</div>" +
        "</li>" +
        "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
        "<div>" +
        "<h6 class='my-0'>手機號碼:</h6>" +
        "</div>" +
        "<div>" +
        "<h6 class='my-0' id='tmobile'>" + value.mobile + "</h6>" +
        "</div>" +
        "</li>" +
        "</ul>" +
        "</div>"
      )
    })
  }


    //                獲取 detail_其他買票人資料 顯示於 "退票"modal           //
    let get_detail_refund = function (detail) {
      let travelers = detail.travelers;
  
      $("#RefundModal-col").empty();//不累加清空
  
      $.each(travelers, function (index, value) {
  
        $("#RefundModal-col").append(
          "<div class='col-md-6 col-lg-6 order-md-last'>" +
          "<h4 class='d-flex justify-content-between align-items-center mb-3'>" +
          "<span class='text-primary'>其他買票人資料</span>" +
          "<span class='badge bg-primary rounded-pill'>" + (parseInt(index) + parseInt(1)) + "</span>" +
          "</h4>" +

          "<ul class='list-group mb-3'>" +

          "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
          "<div>" +
          "<h6 class='my-0'>票號:</h6>" +
          "</div>" +
          "<div>" +
          "<h6 class='my-0' id='ticnum'>" + value.ticnum + "</h6>" +
          "</div>" +
          "</li>" +

          "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
          "<div>" +
          "<h6 class='my-0'>姓名:</h6>" +
          "</div>" +
          "<div>" +
          "<h6 class='my-0' id='tname'>" + value.tname + "</h6>" +
          "</div>" +
          "</li>" +

          "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
          "<div>" +
          "<h6 class='my-0'>身分證/護照號碼:</h6>" +
          "</div>" +
          "<div>" +
          "<h6 class='my-0' id='tid'>" + value.id + "</h6>" +
          "</div>" +
          "</li>" +

          "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
          "<div>" +
          "<h6 class='my-0'>Email:</h6>" +
          "</div>" +
          "<div>" +
          "<h6 class='my-0' id='temail'>" + value.email + "</h6>" +
          "</div>" +
          "</li>" +

          "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
          "<div>" +
          "<h6 class='my-0'>手機號碼:</h6>" +
          "</div>" +
          "<div>" +
          "<h6 class='my-0' id='tmobile'>" + value.mobile + "</h6>" +
          "</div>" +
          "</li>" +

          "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
          "<div class='form-check'>" +
            "<input type='checkbox' class='form-check-input' id='same-address'>" +
            "<label class='form-check-label' for='same-address'>退票請打勾</label>" +
          "</div>"+
          "<a id='RefundCheck-button' class='article-button' href='#' data-toggle='modal' data-target='#RefundCheckModal'>" +
          " <i class='fa-solid fa-ticket fa-3x' aria-hidden='true' style='color: #2b02f7;'></i>" +
          " </a>" +
          "</li>" +

          "</ul>" +

          "</div>"
        )
      })
    }


  // let listNum =0;
  // let currentDate="";
  //              對ArticleC"訂票紀錄查詢"按鈕添加事件監聽器        //
  $("#search-hx-js").click(function () {
    // 檢查"出發日期"或"票數"是否為空
    let search_hx_phone = $("#hx-phone").val();
    let search_hx_id = $("#hx-id").val();

    // 获取当前日期
    // currentDate = searchingdate;

    if (!search_hx_phone && !search_hx_id) {
      // 如果電話和id都未選擇，顯示相應的警告消息
      $("#alert-text-c").text("欄位未填寫");
      $("#custom-alert-c").show();
      return; // 阻止進一步執行
    } else if (!search_hx_phone) {
      // 如果出發日期未選擇，顯示相應的警告消息
      $("#alert-text-c").text("電話欄位未填寫");
      $("#custom-alert-c").show();
      return; // 阻止進一步執行
    } else if (!search_hx_id) {
      // 如果票數未選擇，顯示相應的警告消息
      $("#alert-text-c").text("身分證欄位未填寫");
      $("#custom-alert-c").show();
      return; // 阻止進一步執行
    } else {
      // 如果兩個字段都有值，隱藏警告消息
      $("#custom-alert").hide();
    }

    // 捕獲表單數據
    //   let planpicker = $("#planpicker input[type='radio']:checked").val();
    //    console.log(planpicker);

    // 使用捕獲的數據更新#articleCC
    $("#hx-phone-result").text("主要訂票人電話：" + search_hx_phone);
    $("#hx-id-result").text("主要訂票人身分證/護照號碼：" + search_hx_id);
    // $("#searchingdate-result").text("出發日期：" + searchingdate);

    // 重定向到#articleCC
    window.location.href = "#articleCC";
    // searchingdate_next(datas); //調用出發日期，之後datas改RES
    get_send(send);//呼叫方法

    // 顯示#articleCC
    $("#articleCC").show();

  });




  //              抓取買票人訂票紀錄>_顯示於Modal            //
  let get_send = function (send) {
    $("#hx-orderName").text("主要訂票人姓名：" + send.orderName);
    let orms = send.orms;

    /*orms在巡迴一個list裡面的每組資料
    $.each在巡迴一組資料裡面的每一筆資料

    巡迴list裡面的每 [1組,2,3,4,....]
    先用orms取得list資料，
    再用$.each循環取得list裡面的每組資料的多筆(key, value)

    因為知道key(key是同一個值得情形下，以send.orderName直接取值)
    */

  //             抓取 訂票人 所有訂票紀錄                 //
    $.each(orms, function (index, value) {
      // $.each(datas, function (key, value) {
      // orms.each(function(index,value){沒有key時就用index

      $("#hx-result").append(
        "<tr>" +
        "<td scope='row' class='text-start' id='value.orderNum '>" + value.orderNum + "</td>" +
        " <td id='value_pno'>" + value.pno + "</td>" +

        " <td id='value_tdate'> " + value.tdate + "</td>" +

        " <td id='value_btime'>" + value.btime + "</td>" +

        " <td >" +
        //  "<a class='article-button' href='./order.html?shipid=" + key + "&ticket=" + $("#ticketQuantity-result").text().split("：")[1] + "&time=" + $("#searchingdate-result").text().split("：")[1] + "'>" +
        "<a id='detail-button' class='article-button' href='#' data-toggle='modal' data-target='#DetailModal'>" +
        // <i class="fa-solid fa-circle-info"></i>
        " <i class='fa-solid fa-circle-info fa-3x' aria-hidden='true' style='color: #f7cf02;'></i>" +
        " </a>" +
        "</td>" +
        " <td >" +
        "<a id='refund-button' class='article-button' href='#' data-toggle='modal' data-target='#RefundModal'>" +
        " <i class='fa-solid fa-ticket fa-3x' aria-hidden='true' style='color: #2b02f7;'></i>" +
        " </a>" +
        "</td>" +
        "</tr>"
      )


    })

  }



  //             獲取使用者於article CC選擇的訂單資訊  "顯示"於 Modal             // 
  $(document).on("click", "#detail-button", function () { 
    //  $("#detail-button").click(function (){ 
    //   一進入網頁就偵測這個東西再不再然後等待觸發function () 
    // 因為#detail-button是被典籍後才會出現的東西所以要用這個寫法
    // 搜尋整個頁面.on監測#detail-button被click後才執行接下來的function ()


    //獲取使用者於article CC選擇的訂單資訊   //
    let text_start = $(this).parent().parent().find(".text-start").text();
    //往上一層td  //再往上一層tr       //取得訂單編號
    let bi1 = $(this).parent().parent().find("#value_pno").text();
    //往上一層td  //再往上一層tr       //取得航班代碼
    let bi2 = $(this).parent().parent().find("#value_tdate").text();
    //往上一層td  //再往上一層tr       //取得出發日期
    let bi3 = $(this).parent().parent().find("#value_btime").text();
    //往上一層td  //再往上一層tr       //取得出發時間

    // 顯示於 Modal //
    $("#Modal-orderNum").text("訂單編號：" + text_start);
    $("#Modal-pno").text("航班代碼：" + bi1);
    $("#Modal-tdate").text("出發日期：" + bi2);
    $("#Modal-btime").text("出發時間：" + bi3);


    // let hx_orderName = $("#hx-orderName").text();
    // $("#Modal-orderName").text(  hx_orderName  );

    $("#Modal-orderName").text($("#hx-orderName").text());


    //呼叫get_detail方法其他買票人資料 顯示於modal//
    get_detail_show(detail); 

    //  let ticCount = detail.ticCount;
    //  $("#Modal-ticCount").text("票數：" +ticCount );
    // 改成下面的簡易寫法

    $("#Modal-ticCount").text("票數：" + detail.ticCount);

  })



    //             獲取使用者於article CC選擇的訂單資訊 顯示於 "退票"Modal             // 
  $(document).on("click", "#refund-button", function () { 
      //  $("#detail-button").click(function (){ 
      //   一進入網頁就偵測這個東西再不再然後等待觸發function () 
      // 因為#detail-button是被典籍後才會出現的東西所以要用這個寫法
      // 搜尋整個頁面.on監測#detail-button被click後才執行接下來的function ()
  
  
      //獲取使用者於article CC選擇的訂單資訊   //
      let text_start = $(this).parent().parent().find(".text-start").text();
      //往上一層td  //再往上一層tr       //取得訂單編號
      let bi1 = $(this).parent().parent().find("#value_pno").text();
      //往上一層td  //再往上一層tr       //取得航班代碼
      let bi2 = $(this).parent().parent().find("#value_tdate").text();
      //往上一層td  //再往上一層tr       //取得出發日期
      let bi3 = $(this).parent().parent().find("#value_btime").text();
      //往上一層td  //再往上一層tr       //取得出發時間
  
      // 顯示於 Modal //
      $("#RefundModal-orderNum").text("訂單編號：" + text_start);
      $("#RefundModal-pno").text("航班代碼：" + bi1);
      $("#RefundModal-tdate").text("出發日期：" + bi2);
      $("#RefundModal-btime").text("出發時間：" + bi3);
  
  
      // let hx_orderName = $("#hx-orderName").text();
      // $("#Modal-orderName").text(  hx_orderName  );
  
      $("#RefundModal-orderName").text($("#hx-orderName").text());
  
  
      //呼叫get_detail方法其他買票人資料 顯示於modal//
      get_detail_refund(detail); 
  
      //  let ticCount = detail.ticCount;
      //  $("#Modal-ticCount").text("票數：" +ticCount );
      // 改成下面的簡易寫法
  
      $("#RefundModal-ticCount").text("票數：" + detail.ticCount);
  
    })




  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  //測試資料如下//

  ////////////////////////////////////////////////////////////////////////////////////


  //            獲取 detail_其他買票人資料 顯示於modal           //
  let detail = {

    //詳細訂票紀錄 

    //買票人資料
    "orderNum": "123456789",
    "ticCount": 3,//(底下搭船人數)



    "travelers": [
      {   //其他買票人資料資料
        "id": "111111",
        "tname": "王A明",//航班代碼
        "gender": "1030",
        "sbr": "2020/01/01",//(訂票最後時間)
        "email": "123@gmail.com",
        "mobile": "0912345678",
        "ticnum": "123456",
        "tictype": "全票",

      },
      {   //其他搭船人資料
        "id": "222222",
        "tname": "王B明",//航班代碼
        "gender": "1030",
        "sbr": "2020/01/01",//(訂票最後時間)
        "email": "123@gmail.com",
        "mobile": "0912-345-678",
        "ticnum": "123456",
        "tictype": "全票",
      },
      {   //其他搭船人資料
        "id": "333333",
        "tname": "王B明",//航班代碼
        "gender": "1030",
        "sbr": "2020/01/01",//(訂票最後時間)
        "email": "123@gmail.com",
        "mobile": "0912-345-678",
        "ticnum": "123456",
        "tictype": "全票",
      }

    ]
  }



  //           抓取 訂票人 所有訂票紀錄  顯示於articleCC         //
  let send = {


    //買票人資料
    "orderName": "周小寶",
    "orderPhone": "0912345678",//(頁面輸入)
    "orderUid": "F197728291",//(頁面輸入)


    "orms": [
      {   //訂單紀錄1
        "orderNum": "112233",
        "pno": 54035,//航班代碼
        "tdate": "2023-11-22",
        "btime": "1030",
        "etime": "1200",
        "stime": "1000",//(訂票最後時間)
        "port0": "水頭",
        "port1": "水頭",
        "sp": true,
      },
      {   //訂單紀錄2
        "orderNum": "112233",
        "pno": 54035,//航班代碼
        "tdate": "2023-11-22",
        "btime": "1030",
        "etime": "1200",
        "stime": "1000",//(訂票最後時間)
        "port0": "水頭",
        "port1": "水頭",
        "sp": true,
      },
      {   //訂單紀錄3
        "orderNum": "112233",
        "pno": 54035,//航班代碼
        "tdate": "2023-11-22",
        "btime": "1030",
        "etime": "1200",
        "stime": "1000",//(訂票最後時間)
        "port0": "水頭",
        "port1": "水頭",
        "sp": true,
      }
    ]
  }


  let others = {
    //其他搭船人資料
    "orderNum": "abc",
    "ticCount": 3,
    "travelers": [
      {
        "id": 54035, //航班代碼   
        "tname": "2023-11-22",
        "gender": "1030",
        "birthday": [2011, 1, 2, 4, 16, 6],
        "sbr": "1000", //(訂票最後時間)
        "email": "456@456",
        "mobile": "水頭",
        "ticnum": true,
      },
      {
        "id": 54035, //航班代碼   
        "tname": "2023-11-22",
        "gender": "1030",
        "birthday": [2011, 1, 2, 4, 16, 6],
        "sbr": "1000", //(訂票最後時間)
        "email": "456@456",
        "mobile": "水頭",
        "ticnum": true,
      },
      {
        "id": 54035, //航班代碼   
        "tname": "2023-11-22",
        "gender": "1030",
        "birthday": [2011, 1, 2, 4, 16, 6],
        "sbr": "1000", //(訂票最後時間)
        "email": "456@456",
        "mobile": "水頭",
        "ticnum": true,
      },
      {
        "id": 54035, //航班代碼   
        "tname": "2023-11-22",
        "gender": "1030",
        "birthday": [2011, 1, 2, 4, 16, 6],
        "sbr": "1000", //(訂票最後時間)
        "email": "456@456",
        "mobile": "水頭",
        "ticnum": true,
      },
    ]
  }


})