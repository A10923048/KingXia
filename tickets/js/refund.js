$(document).ready(function () {




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
        "email": "456@gmail.com",
        "mobile": "0912-345-678",
        "ticnum": "123456",
        "tictype": "全票",
      },
      {   //其他搭船人資料
        "id": "333333",
        "tname": "王B明",//航班代碼
        "gender": "1030",
        "sbr": "2020/01/01",//(訂票最後時間)
        "email": "789@gmail.com",
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





  //////////////////            測試資料                 ///////////////////////////////////////////////////////////

  //                獲取 detail_其他買票人資料 顯示於 "退票"articleA         //
  let get_detail_refund = function (detail) {

    let travelers = detail.travelers;

    $("#RefundModal-col").empty();//不累加清空

    $.each(travelers, function (index, value) {

      $("#RefundModal-col").append(



        "<div class='refund_col col-md-6 col-lg-6 order-md-last '>" +
        "<h5 class='d-flex justify-content-between align-items-center mb-3'>買票人" +

        "<span class='badge rounded-pill text-primary' style='color: #f7cf02; '>" + (parseInt(index) + parseInt(1)) + "</span>" +

        "資料</h5>" +



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
        "<div>" +
        "<h6 class='my-0'>票種:</h6>" +
        "</div>" +
        "<div>" +
        "<h6 class='my-0' id='tmobile'>" + value.tictype + "</h6>" +
        "</div>" +
        "</li>" +

        "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
        "<div class='form-check'>" +
        "<input type='checkbox' class='Refund_checkbox-input'>" +
        "<label class='form-check-label' for='same-address'>退票請打勾</label>" +
        "</div>" +
        "<a id='RefundCheck-button' class='article-button' href='#' data-toggle='modal' data-target='#RefundCheckModal'>" +
        " <i class='fa-solid fa-ticket fa-3x' aria-hidden='true' style='color: #2b02f7;'></i>" +
        " </a>" +
        "</li>" +

        "</ul>" +

        "</div>"
      )
    })
  }
  get_detail_refund(detail);


  $("#RefundModal-ticCount").text("票數：" + detail.ticCount);
  //取得票數


  //          退票modal_功能_全部選取後退票           //

  // 監聽主checkbox，如果有變化觸發功能如下:
  $("#AllRefund_check").change(function () {


    $(".Refund_checkbox-input").prop("checked", $(this).prop("checked"));
    //如何知道 checkbox 的屬性叫 checked? google:checkbox 的屬性，就會知道即使html沒給它屬性，依舊有它自帶的屬性
    //this在這裡等於"#AllRefund_check"
    //$("#AllRefund_check").prop : 搜尋 子checkbox 的 屬性(key,value)
    //屬性就是一組(key,value)，這裡的 key="checked" , value= $(this).prop("checked")
    //this="#AllRefund_check";this會隨著每次抓取到的東西不同而有所改變
    //value= 尋找$("#AllRefund_check")屬性 的key 的值
    // $(".Refund_checkbox-input")屬性的("這˙KEY對應的值"，指定為"這個屬性對應的"checked"KEY的值")
    //


  });




  //               獲取被勾選的退票資料                //

  $("#Refund_Send").click(function () {
    // console.log($(".Refund_checkbox-input"));

    $("#RefundModal-col_2").empty();//不累加清空



    //選取 有checkbox 的物件
    //chat GPT整合成下列:
    let cont = 0;
    $(".Refund_checkbox-input").each(function () {
      // 在這裡使用 $(this) 可以正確取得當前的 checkbox 元素

      console.log($(this).prop("checked"));

      
      if ($(this).prop("checked")) {
        //如果".Refund_checkbox-input"的"checked"屬性值 = ture

        // //其他要顯示的資料//
        // let Refund_pno = $(this).parent().parent().parent().find("#ticnum").text();
        // //往上一層td  //再往上一層tr       //取得買票人票號
        // let Refund_tdate = $(this).parent().parent().parent().find("#tname").text();
        // //往上一層td  //再往上一層tr       //取得買票人姓名
        // let Refund_btime = $(this).parent().parent().parent().find("#tid").text();
        // //往上一層td  //再往上一層tr       //取得買票人姓身分證/護照號碼


        // 抓取整個表單的HTML
        
        cont+=1;


        var formHTML = $(this).parent().parent().parent().parent().html();
        //var formHTML = $(".refund_col").html();
        // console.log("--------");
        // console.log("formHTML");
        // console.log(formHTML);

        // 使用 jQuery 創建一個臨時的 <div> 元素，並將抓到的 HTML 放入其中
        var tempDiv = $("<table>").html(formHTML);

        // 保留您想要顯示的元素
        var desiredElements = tempDiv.find(" li:contains('姓名'), li:contains('票號'), li:contains('身分證/護照號碼'), li:contains('票種'), .Refund_checkbox-input:checked");

        // 在 desiredElements 中加入額外的 Bootstrap 類別
        desiredElements.addClass("justify-content-center");

        // 將 desiredElements 作為子元素包裝在一個 row 中
        //var row = $("<div class='row'></div>").append(desiredElements);

        // 移除不需要的元素
        //tempDiv.find(":not(#ticnum, #tname, li:contains('身分證/護照號碼'), li:contains('票種'), .Refund_checkbox-input:checked)").remove();

        //  $("#RefundModal-col_2").html(row);
        $("#RefundModal-col_2").append(desiredElements);
        $("#RefundModal-col_2").append("<p></p>");
        // 將HTML顯示在 Modal 中
        // $("#RefundModal-col_2").html(formHTML);







        // // 獲取相應訂單的資訊
        // var orderDiv = $(this).closest(".col-md-5");
        // var ticketNumber = orderDiv.find("#ticnum").text();
        // var name = orderDiv.find("#tname").text();
        // var idNumber = orderDiv.find("li:contains(': 身分證/護照號碼') h6").text();
        // var email = orderDiv.find("li:contains(':email') h6").text();
        // var mobile = orderDiv.find("li:contains('mobile:') h6").text();

        // // 在這裡使用獲取到的訂單資訊進行操作
        // console.log(orderDiv);
        // console.log("Ticket Number:", ticketNumber);
        // console.log("Name:", name);
        // console.log("ID Number:", idNumber);
        // console.log("Email:", email);
        // console.log("Mobile:", mobile);



      }


    })
    console.log($(this).parent().parent().parent().parent().parent().parent().find("#RefundModal-orderNum").text());
    $("#RefundModal_orderNum").text($(this).parent().parent().parent().parent().parent().parent().find("#RefundModal-orderNum").text());
    
    $("#RefundModal_ticCount").text("退票數：" + cont);

    $("#RefundModal-col_2").append(
      
      '<button type="button" id="RefundModal_Send" class="btn btn-primary" data-dismiss="modal">' +
    '<i class="fa-solid fa-paper-plane fa-2x">退票確認</i>' +
'</button>')
    
    //console.log(cont);
  })



})