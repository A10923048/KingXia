$(document).ready(function () {


  let orderUid = $("#orderId").text();
  let orderPhone = $("#orderPhone").text();
  let orderNum = $("#RefundModal-orderNum").text();

  $("#orderId").remove();
  $("#orderPhone").remove();

  console.log("orderUid:"+orderUid);
  console.log("orderPhone:"+orderPhone);

  //傳給後台前格是整理
  let send_item = {
    orderUid: orderUid,
    orderPhone:orderPhone,
    orderNum: orderNum,
    }
  //console.log(JSON.stringify(send_item, null, 2));

  
  //傳給後台後獲得的資料
          // $.ajax({
          //   url: "/kingxia/sea/searchorm", // 后台处理数据的 URL
          //   type: "POST", // 使用 POST 请求发送数据
          //   //contentType:"application/json",//指定格式(這次不用)
          //   data:send_item,//塞入整理好的資料
          //   success: function (detail) {    // 後台回傳
                      
          //     get_detail_refund(detail);
      //                              },
      //   error: function (error) {
      //   // 请求失败时的处理
      //   console.error("数据发送失败：", error);    
      // },
      //   beforeSend: function (xhr) {
      //     // 添加CSRF令牌到请求头部
      //     xhr.setRequestHeader(csrfHeader, csrfToken);
      //   }
      // });




  //            獲取 detail_其他買票人資料 顯示於modal           //

  



  //////////////////            測試資料                 ///////////////////////////////////////////////////////////
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
        "birthday": "" ,
        "sbr": "2020/01/01",//(訂票最後時間)
        "email": "123@gmail.com",
        "mobile": "0912345678",
        "ticnum": "01",
        "tictype": "全票",

      },
      {   //其他搭船人資料
        "id": "222222",
        "tname": "王B明",//航班代碼
        "gender": "1030",
        "birthday": "" ,
        "sbr": "2020/01/01",//(訂票最後時間)
        "email": "456@gmail.com",
        "mobile": "0912-345-678",
        "ticnum": "02",
        "tictype": "全票",
      },
      {   //其他搭船人資料
        "id": "333333",
        "tname": "王B明",//航班代碼
        "gender": "1030",
        "birthday": "" ,
        "sbr": "2020/01/01",//(訂票最後時間)
        "email": "789@gmail.com",
        "mobile": "0912-345-678",
        "ticnum": "03",
        "tictype": "全票",
      }

    ]
  }
  ////////////////////////////////////               測試資料                        ///////////////////////////



  //                獲取 detail_其他買票人資料 顯示於 "退票"articleA         //



  //帶入後台資料後 製作旅客表單
  let get_detail_refund = function (detail) {

    //取得票數
    $("#RefundModal-ticCount").text("票數：" + detail.ticCount);
  
    //製作旅客表單
    let travelers = detail.travelers;
    
    $("#RefundModal-col").empty();//不累加清空

    $.each(travelers, function (index, value) {

      $("#RefundModal-col").append(

        "<div class='refund_col col-md-6 col-lg-6 order-md-last '>" +
        "<h5 class='d-flex justify-content-between align-items-center mb-3'>旅客" +

        "<span class='badge rounded-pill text-primary' style='color: #f7cf02; '>" + (parseInt(index) + parseInt(1)) + "</span>" +

        "資料</h5>" +

        "<ul class='list-group mb-3'>" +

        "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
        "<div>" +
        "<h6 class='my-0'>票號:</h6>" +
        "</div>" +
        "<div>" +
        "<h6 class='ticnum my-0'>" + value.ticnum + "</h6>" +
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
        "<h6 class='my-0' id='ttictype'>" + value.tictype + "</h6>" +
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

  //後台呼叫成功後刪除
  get_detail_refund(detail);
  

 
  // checkbox:全部退票打勾
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


  //             <退票>按鈕功能               //
  $("#Refund_Send").click(function () {
    // console.log($(".Refund_checkbox-input"));

    $("#RefundModal-col_2").empty();//不累加清空
    //選取 有checkbox 的物件
    let cont = 0;
    $(".Refund_checkbox-input").each(function ()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         {

      if ($(this).prop("checked")) {
        cont+=1;
        console.log("cont:"+cont);
      }
    });

    if(cont==0){
      console.log("cont==0");
      $("#RefundModal-col_2").empty(); // 清空之前的内容
      $("#RefundModal2").modal("hide"); // 隐藏 #RefundModal2 模态框
      $("#Refund_null").modal("show"); // 显示 #Refund_null 模态框
    }else{
      $(".Refund_checkbox-input").each(function ()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         {

          if ($(this).prop("checked")) {
            
            // 抓取整個表單的HTML
            var formHTML = $(this).parent().parent().parent().parent().html();
            //var formHTML = $(".refund_col").html();
            // console.log("--------");
            //console.log("formHTML:"+formHTML);

            // 使用 jQuery 創建一個臨時的 <div> 元素，並將抓到的 HTML 放入其中
            
            var tempDiv = $("<table>").html(formHTML);

            console.log("<table>:"+tempDiv);

            // 保留您想要顯示的元素
            var desiredElements = tempDiv.find(" li:contains('姓名'), li:contains('票號'), li:contains('身分證/護照號碼'), li:contains('票種'), .Refund_checkbox-input:checked");

          // console.log("保留您想要顯示的元素:"+desiredElements);

            // 在 desiredElements 中加入額外的 Bootstrap 類別
            // desiredElements.addClass("justify-content-center");

            // 將 desiredElements 作為子元素包裝在一個 row 中
            var ul = $("<ul class='ulclass mb-5 justify-content-center'></ul>").html(desiredElements);;
            $("#RefundModal-col_2").append(ul);
          }

        });
      $("#RefundModal_orderNum").text($(this).parent().parent().parent().parent().parent().parent().find("#RefundModal-orderNum").text());
      $("#RefundModal_ticCount").text("退票數：" + cont);
      $("#RefundModal2").modal("show"); // 隐藏 #RefundModal2 模态框
      console.log("cont!==0");     
    }
    
  })

  //           <退票確認>按鈕功能            //
  $("#RefundModal_Send").click(function () {

    let send_list = [];

    $(".ulclass").each(function () {


      let ticNum = $(this).find(".ticnum").text();

      console.log("ticNum:"+ticNum);

      let send_p = {
        ticNum: ticNum
        };
       
       send_list.push(send_p);
       console.log(JSON.stringify(send_p, null, 2)); 
       
      });
       
       console.log(JSON.stringify(send_list, null, 2));  


        let send_item = {
          orderNum:orderNum,
          orderUid:orderUid,
          orderPhone:orderPhone,
          sp:true,
          tickets: send_list
          }
          console.log(JSON.stringify(send_item, null, 2));

         //傳給後台
            // $.ajax({
            //   url: "/kingxia/sea/searchorm", // 后台处理数据的 URL
            //   type: "SEND", // 使用 POST 请求发送数据
            //   //contentType:"application/json",//指定格式(這次不用)
            //   data:send_item,//塞入整理好的資料
            //   success: function (detail) {    // 後台回傳
                        
            //     window.location.href="refund.html";
        //                              },
        //   error: function (error) {
        //   // 请求失败时的处理
        //   console.error("数据发送失败：", error);    
        // },
        //   beforeSend: function (xhr) {
        //     // 添加CSRF令牌到请求头部
        //     xhr.setRequestHeader(csrfHeader, csrfToken);
        //   }
        // });
    

  })

  //     未選擇退票的 <返回>按鈕功能      //
  $("#Refund_null_btn").click(function(){
    $("#Refund_null").hide();
  })

})





  
    
      
