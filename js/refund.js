$(document).ready(function () {



      //                獲取 detail_其他買票人資料 顯示於 "退票"modal           //
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
    
})