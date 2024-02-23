$(document).ready(function () {

    //跟後台抓資料用
    // let csrfToken = $("meta[name='_csrf']").attr("content");
    // let csrfHeader = $("meta[name='_csrf_header']").attr("content");
    
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~articleC~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    
  
        //                          按下"查詢按鈕"後觸發的事件                 //
        $("#search-hx-js").click(function () {  
                                                //讓既有的警示窗關閉
                                                closeAlertC();
  
                                                // 檢查"出發日期"或"票數"是否為空
                                                let search_hx_phone = $("#hx-phone").val();
                                                let search_hx_id = $("#hx-id").val();
  
                                                if (!search_hx_phone && !search_hx_id) {
                                                  // 如果電話和id都未選擇，顯示相應的警告消息
                                                  $("#alert-text-c").text("電話/身分證 欄位未填寫");
                                                  $("#custom-alert-c").show();
                                                  return; // 阻止進一步執行
                                                } else if (!search_hx_phone) {
                                                  // 如果出發日期未選擇，顯示相應的警告消息
                                                  $("#alert-text-c").text("電話欄位未填寫");
                                                  $("#custom-alert-c").show();
                                                  return; // 阻止進一步執行
                                                } else if (!search_hx_id) {
                                                  // 如果票數未選擇，顯示相應的警告消息
                                                  $("#alert-text-c").text("欄位未填寫");
                                                  $("#custom-alert-c").show();
                                                  return; // 阻止進一步執行
                                                } else {
                                                            // 如果兩個字段都有值，隱藏警告消息
                                                            $("#custom-alert").hide();
                                                            
                                                            //整理要傳給後台的資料
                                                            let send_item = {
                                                                orderPhone: search_hx_phone,
                                                                orderUid: search_hx_id,
                                                                };
                                                                console.log(JSON.stringify(send_item, null, 2));
                                                                
                                                              //   let send = {
                                                              //     "orderUid": "idWrong"//(頁面輸入)
                                                              //  }
                                                            
                                                              
                                                              
  
                                                                //                ajax使用後刪除整段                 //
                                                                if(send!=null){
                                                                  console.log("有進入null");
                                                                                  if (send == "phoneWrong" ) {
                                                                                      console.log("有進入phoneWrong");
                                                                                      $("#alert-text-c").text("電話 輸入錯誤");
                                                                                      $("#custom-alert-c").show();
                                                                                      return; // 阻止進一步執行
                                                                                  }else if(send == "idWrong" ) {
                                                                                      $("#alert-text-c").text("身分證/護照號碼 輸入錯誤");
                                                                                      $("#custom-alert-c").show();
                                                                                      return; // 阻止進一步執行
                                                                                  }else{
                                                                                      // 使用捕獲的數據更新#articleCC
                                                                                      $("#hx-phone-result").text("主要訂票人電話：" + search_hx_phone);
                                                                                      $("#hx-id-result").text("主要訂票人身分證/護照號碼：" + search_hx_id);
                                                                                  
                                                                                      // 重定向到#articleCC
                                                                                      window.location.href = "#articleCC";
                                                                                  
                                                                                      //方法:抓取買票人所有訂票紀錄 
                                                                                      get_send(send);
                                                                                  
                                                                                      // 顯示#articleCC
                                                                                      $("#articleCC").show();
                                                                                    }
                                                                              }
                                                                else{ //接收到null時
                                                                        $("#alert-text-c").text("查無此訂票人");
                                                                        $("#custom-alert-c").show();
                                                                        return; // 阻止進一步執行
                                                                      }
                                                            
                                                                //傳給後台
                                                                // $.ajax({
                                                                //   url: "/kingxia/sea/searchorm", // 后台处理数据的 URL
                                                                //   type: "POST", // 使用 POST 请求发送数据
                                                                //   //contentType:"application/json",//指定格式(這次不用)
                                                                //   data:send_item,//塞入整理好的資料
                                                                //   success: function (send) {    // 後台回傳
                                                                                                // if(send!=null){
                                                                                                //                   if (send == "phoneWrong" ) {
                                                                                                //                       console.log("有進入phoneWrong");
                                                                                                //                       $("#alert-text-c").text("電話 輸入錯誤");
                                                                                                //                       $("#custom-alert-c").show();
                                                                                                //                       return; // 阻止進一步執行
                                                                                                //                   }else if(send == "idWrong" ) {
                                                                                                //                       $("#alert-text-c").text("身分證/護照號碼 輸入錯誤");
                                                                                                //                       $("#custom-alert-c").show();
                                                                                                //                       return; // 阻止進一步執行
                                                                                                //                   }else{
                                                                                                //                       // 使用捕獲的數據更新#articleCC
                                                                                                //                       $("#hx-phone-result").text("主要訂票人電話：" + search_hx_phone);
                                                                                                //                       $("#hx-id-result").text("主要訂票人身分證/護照號碼：" + search_hx_id);
                                                                                                                  
                                                                                                //                       // 重定向到#articleCC
                                                                                                //                       window.location.href = "#articleCC";
                                                                                                                  
                                                                                                //                       //方法:抓取買票人所有訂票紀錄 
                                                                                                //                       get_send(send);
                                                                                                                  
                                                                                                //                       // 顯示#articleCC
                                                                                                //                       $("#articleCC").show();
                                                                                                //                     }
                                                                                                //               }
                                                                                                // else{ //接收到null時
                                                                                                //         $("#alert-text-c").text("查無此訂票人");
                                                                                                //         $("#custom-alert-c").show();
                                                                                                //         return; // 阻止進一步執行
                                                                                                //       }                         
  
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
                                                        }
  
                                              }
                                            );
  
  
        //                         ArticleC警告框-關閉按鈕               //
        let closeAlertC = function () {
                                        $("#custom-alert-c").hide();
                                      }
  
                                      
        //              抓取買票人所有訂票紀錄           //
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
        
            //             按下 "退票" 按鈕            // 
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
        
        
            //             抓取 訂票人 所有訂票紀錄                 //
            $.each(orms, function (index, value) {
              // $.each(datas, function (key, value) {
              // orms.each(function(index,value){沒有key時就用index
  
              let orderUid = $("#hx-id-result").text().split("：")[1];
              let orderPhone = $("#hx-phone-result").text().split("：")[1];
              
              let orderName = $("#hx-orderName").text().split("：")[1];
              
  
              console.log("orderUid:"+orderUid);
              console.log("orderPhone:"+orderPhone);
              
              console.log("orderName:"+orderName);
  
              //傳給後台前格是整理
              let send_item = {
                orderUid: orderUid,
                orderPhone:orderPhone,
                }
              console.log(JSON.stringify(send_item, null, 2));
        
              $("#hx-result").append(
                "<tr>" +
                  
                //訂單編號
                "<td scope='row' class='text-start' id='value.orderNum '>" + value.orderNum + "</td>" +
                //航班代碼  
                " <td id='value_pno'>" + value.pno + "</td>" +
                //出發日期
                " <td id='value_tdate'> " + value.tdate.split("T")[0] + "</td>" +
                //出發時間
                " <td id='value_btime'>" + value.btime + "</td>" +
  
                
                //詳細資訊 icon
                " <td >" +
                "<a id='detail-button' class='article-button' href='#' data-toggle='modal' data-target='#DetailModal'>" +
                " <i class='fa-solid fa-circle-info fa-3x' aria-hidden='true' style='color: #f7cf02;'></i>" +
                " </a>" +
                "</td>" +
  
                //退票 icon
                " <td >" +
                 //超連結到退票畫面+夾帶給後台的資料                                 
                "<a id='refund-button' class='article-button' href='refund.html?orderUid=" +orderUid +"&orderPhone="+orderPhone+"&orderNum="+ value.orderNum+"&orderName="+orderName+"&pno="+value.pno+"&tdate="+value.tdate+"&btime="+value.btime+"'>"+
                " <i class='fa-solid fa-ticket fa-3x' aria-hidden='true' style='color: #2b02f7;'></i>" +
                " </a>" +
                "</td>" +
                "</tr>"
              )
        
        
            })
        
          }
  
  
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~articleCC~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
    //                獲取 detail_其他買票人資料 "顯示" 於modal           //
    let get_detail_show = function (detail) {
      let travelers = detail.travelers;
  
      $("#modal-col").empty();//不累加清空
  
      $.each(travelers, function (index, value) {
  
        $("#modal-col").append(
          "<div class=' col-md-6 col-lg-6 order-md-last'>" +
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
          "<div>" +
          "<h6 class='my-0'>票種:</h6>" +
          "</div>" +
          "<div>" +
          "<h6 class='my-0' id='tmobile'>" + value.tictype + "</h6>" +
          "</div>" +
          "</li>" +
  
          "</ul>" +
          "</div>"
        )
      })
    }
  
    //                獲取 detail_其他買票人資料 顯示於 "退票"modal           //
    // let get_detail_refund = function (detail) {
    //   let travelers = detail.travelers;
  
    //   $("#RefundModal-col").empty();//不累加清空
  
    //   $.each(travelers, function (index, value) {
  
    //     $("#RefundModal-col").append(
  
  
  
    //       "<div class='refund_col col-md-6 col-lg-6 order-md-last '>" +
    //       "<h5 class='d-flex justify-content-between align-items-center mb-3'>買票人" +
  
    //       "<span class='badge rounded-pill text-primary' style='color: #f7cf02; '>" + (parseInt(index) + parseInt(1)) + "</span>" +
  
    //       "資料</h5>" +
  
  
  
    //       "<ul class='list-group mb-3'>" +
  
    //       "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
    //       "<div>" +
    //       "<h6 class='my-0'>票號:</h6>" +
    //       "</div>" +
    //       "<div>" +
    //       "<h6 class='my-0' id='ticnum'>" + value.ticnum + "</h6>" +
    //       "</div>" +
    //       "</li>" +
  
    //       "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
    //       "<div>" +
    //       "<h6 class='my-0'>姓名:</h6>" +
    //       "</div>" +
    //       "<div>" +
    //       "<h6 class='my-0' id='tname'>" + value.tname + "</h6>" +
    //       "</div>" +
    //       "</li>" +
  
    //       "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
    //       "<div>" +
    //       "<h6 class='my-0'>身分證/護照號碼:</h6>" +
    //       "</div>" +
    //       "<div>" +
    //       "<h6 class='my-0' id='tid'>" + value.id + "</h6>" +
    //       "</div>" +
    //       "</li>" +
  
    //       "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
    //       "<div>" +
    //       "<h6 class='my-0'>Email:</h6>" +
    //       "</div>" +
    //       "<div>" +
    //       "<h6 class='my-0' id='temail'>" + value.email + "</h6>" +
    //       "</div>" +
    //       "</li>" +
  
    //       "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
    //       "<div>" +
    //       "<h6 class='my-0'>手機號碼:</h6>" +
    //       "</div>" +
    //       "<div>" +
    //       "<h6 class='my-0' id='tmobile'>" + value.mobile + "</h6>" +
    //       "</div>" +
    //       "</li>" +
  
    //       "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
    //       "<div>" +
    //       "<h6 class='my-0'>票種:</h6>" +
    //       "</div>" +
    //       "<div>" +
    //       "<h6 class='my-0' id='tmobile'>" + value.tictype + "</h6>" +
    //       "</div>" +
    //       "</li>" +
  
    //       "<li class='list-group-item d-flex justify-content-between lh-sm'>" +
    //       "<div class='form-check'>" +
    //       "<input type='checkbox' class='Refund_checkbox-input'>" +
    //       "<label class='form-check-label' for='same-address'>退票請打勾</label>" +
    //       "</div>" +
    //       "<a id='RefundCheck-button' class='article-button' href='#' data-toggle='modal' data-target='#RefundCheckModal'>" +
    //       " <i class='fa-solid fa-ticket fa-3x' aria-hidden='true' style='color: #2b02f7;'></i>" +
    //       " </a>" +
    //       "</li>" +
  
    //       "</ul>" +
  
    //       "</div>"
    //     )
    //   })
    // }
  
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
  
      let orderUid = $("#hx-id-result").text().split("：")[1];
      let orderPhone = $("#hx-phone-result").text().split("：")[1];
  
      console.log("orderUid:"+orderUid);
      console.log("orderPhone:"+orderPhone);
  
      
      // 顯示於 Modal //
      $("#Modal-orderNum").text("訂單編號：" + text_start);
      $("#Modal-pno").text("航班代碼：" + bi1);
      $("#Modal-tdate").text("出發日期：" + bi2);
      $("#Modal-btime").text("出發時間：" + bi3);
  
  
      // let hx_orderName = $("#hx-orderName").text();
      // $("#Modal-orderName").text(  hx_orderName  );
  
      $("#Modal-orderName").text($("#hx-orderName").text());
  
  
  
  
      //傳給後台前格是整理
      let send_item = {
        orderUid: orderUid,
        orderPhone:orderPhone,
        orderNum: text_start,
        }
      console.log(JSON.stringify(send_item, null, 2));
  
      //傳給後台
              // $.ajax({
              //   url: "/kingxia/sea/searchorm", // 后台处理数据的 URL
              //   type: "POST", // 使用 POST 请求发送数据
              //   //contentType:"application/json",//指定格式(這次不用)
              //   data:send_item,//塞入整理好的資料
              //   success: function (detail) {    // 後台回傳
             
                 // get_detail_show(detail);                
  
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
  
        
  
      //呼叫get_detail方法其他買票人資料 顯示於modal//
      
      
      get_detail_show(detail);
  
      //  let ticCount = detail.ticCount;
      //  $("#Modal-ticCount").text("票數：" +ticCount );
      // 改成下面的簡易寫法
  
      $("#Modal-ticCount").text("票數：" + detail.ticCount);
  
    })
  
     //             獲取使用者於article CC選擇的訂單資訊 顯示於 "Refund.html             // 
    //  $(document).on("click", "#refund-button", function () {
    //   //  $("#detail-button").click(function (){ 
    //   //   一進入網頁就偵測這個東西再不再然後等待觸發function () 
    //   // 因為#detail-button是被典籍後才會出現的東西所以要用這個寫法
    //   // 搜尋整個頁面.on監測#detail-button被click後才執行接下來的function ()
  
  
    //   //獲取使用者於article CC選擇的訂單資訊   //
  
  
    //   //傳給後端的資料//
    //   let get_order_phone = $("#hx-phone-result").text();
    //   let get_order_id = $("#hx-id-resultd").text();
    //   let Refund_orderNum = $(this).parent().parent().find(".text-start").text();
    //                             //往上一層td  //再往上一層tr       //取得訂單編號
         
    //   //其他要顯示的資料//
    //   let Refund_pno = $(this).parent().parent().find("#value_pno").text();
    //   //往上一層td  //再往上一層tr       //取得航班代碼
    //   let Refund_tdate = $(this).parent().parent().find("#value_tdate").text();
    //   //往上一層td  //再往上一層tr       //取得出發日期
    //   let Refund_btime = $(this).parent().parent().find("#value_btime").text();
    //   //往上一層td  //再往上一層tr       //取得出發時間
    //   let get_order_Name = $("#hx-orderName").text();
    //                                     //取得訂票人姓名
      
    //   let send_inform={
    //     orderPhone:get_order_phone,
    //     orderUid:get_order_id,
    //     orderNum:Refund_orderNum,
    //     pno:Refund_pno,
    //     tdate:Refund_tdate,
    //     btime:Refund_btime,
    //     orderName:get_order_Name
    //   };
  
  
    //   get_detail_refund(detail);
  
    //   $("#RefundModal-ticCount").text("票數：" + detail.ticCount);
    //   //取得票數
  
  
    // })
  
    //   (重複)          獲取使用者於article CC選擇的訂單資訊  "顯示"於 Modal             // 
    // $(document).on("click", "#detail-button", function () {
    //   //  $("#detail-button").click(function (){ 
    //   //   一進入網頁就偵測這個東西再不再然後等待觸發function () 
    //   // 因為#detail-button是被典籍後才會出現的東西所以要用這個寫法
    //   // 搜尋整個頁面.on監測#detail-button被click後才執行接下來的function ()
  
  
    //   //獲取使用者於article CC選擇的訂單資訊   //
    //   let text_start = $(this).parent().parent().find(".text-start").text();
    //   //往上一層td  //再往上一層tr       //取得訂單編號
    //   let bi1 = $(this).parent().parent().find("#value_pno").text();
    //   //往上一層td  //再往上一層tr       //取得航班代碼
    //   let bi2 = $(this).parent().parent().find("#value_tdate").text();
    //   //往上一層td  //再往上一層tr       //取得出發日期
    //   let bi3 = $(this).parent().parent().find("#value_btime").text();
    //   //往上一層td  //再往上一層tr       //取得出發時間
  
    //   // 顯示於 Modal //
    //   $("#Modal-orderNum").text("訂單編號：" + text_start);
    //   $("#Modal-pno").text("航班代碼：" + bi1);
    //   $("#Modal-tdate").text("出發日期：" + bi2);
    //   $("#Modal-btime").text("出發時間：" + bi3);
  
  
    //   // let hx_orderName = $("#hx-orderName").text();
    //   // $("#Modal-orderName").text(  hx_orderName  );
  
    //   $("#Modal-orderName").text($("#hx-orderName").text());
  
  
    //   //呼叫get_detail方法其他買票人資料 顯示於modal//
    //   get_detail_show(detail);
  
    //   //  let ticCount = detail.ticCount;
    //   //  $("#Modal-ticCount").text("票數：" +ticCount );
    //   // 改成下面的簡易寫法
  
    //   $("#Modal-ticCount").text("票數：" + detail.ticCount);
  
    // })
  
    //   (不用了)          獲取使用者於article CC選擇的訂單資訊 顯示於 "退票"Modal             // 
    // $(document).on("click", "#refund-button", function () {
    //   //  $("#detail-button").click(function (){ 
    //   //   一進入網頁就偵測這個東西再不再然後等待觸發function () 
    //   // 因為#detail-button是被典籍後才會出現的東西所以要用這個寫法
    //   // 搜尋整個頁面.on監測#detail-button被click後才執行接下來的function ()
  
  
    //   //獲取使用者於article CC選擇的訂單資訊   //
    //   let text_start = $(this).parent().parent().find(".text-start").text();
    //   //往上一層td  //再往上一層tr       //取得訂單編號
    //   let bi1 = $(this).parent().parent().find("#value_pno").text();
    //   //往上一層td  //再往上一層tr       //取得航班代碼
    //   let bi2 = $(this).parent().parent().find("#value_tdate").text();
    //   //往上一層td  //再往上一層tr       //取得出發日期
    //   let bi3 = $(this).parent().parent().find("#value_btime").text();
    //   //往上一層td  //再往上一層tr       //取得出發時間
  
    //   // 顯示於 Modal //
    //   $("#RefundModal-orderNum").text("訂單編號：" + text_start);
    //   $("#RefundModal-pno").text("航班代碼：" + bi1);
    //   $("#RefundModal-tdate").text("出發日期：" + bi2);
    //   $("#RefundModal-btime").text("出發時間：" + bi3);
  
  
    //   // let hx_orderName = $("#hx-orderName").text();
    //   // $("#Modal-orderName").text(  hx_orderName  );
  
    //   $("#RefundModal-orderName").text($("#hx-orderName").text());
  
  
    //   //呼叫get_detail方法其他買票人資料 顯示於modal//
    //   get_detail_refund(detail);
  
    //   //  let ticCount = detail.ticCount;
    //   //  $("#Modal-ticCount").text("票數：" +ticCount );
    //   // 改成下面的簡易寫法
  
    //   $("#RefundModal-ticCount").text("票數：" + detail.ticCount);
  
  
    // })
  
  
    // //               獲取被勾選的退票資料)                //
  
    // $("#RefundModal_Send").click(function () {
    //   console.log($(".Refund_checkbox-input"));
  
    //   //let get_Refund_checkbox_input = $(".Refund_checkbox-input");
    //   //選取 有checkbox 的物件
  
  
    //   //get_Refund_checkbox_input.each(function () {
    //   //循環 被選取的 checkbox物件
    //   //這裡不能用$.each(get_Refund_checkbox_input.each , function (key, value) {}
  
    //   //錯誤: console.log(get_Refund_checkbox_input, $(this).prop("checked"));
    //   //錯誤原因(1): get_Refund_checkbox_input 獲取的是
    //   // $() = [0:$(),
    //   //        1:$(),
    //   //        2:$()]
    //   //但是我並不要顯示所有資料，我只要顯示 這個value $() 的屬性
    //   //錯誤原因(2): console.log裡面區隔不能用"，"要用 "+"
  
    //   //chat GPT整合成下列:
    //   $(".Refund_checkbox-input").each(function () {
    //     // 在這裡使用 $(this) 可以正確取得當前的 checkbox 元素
  
    //     console.log($(this).prop("checked"));
  
    //     //獲取使用者於article CC選擇的訂單資訊   //
    //     if ($(this).prop("checked")) {
    //       let refundColContent = $(this).closest('.refund_col').html();
    //       //console.log(refundColContent);
    //     }
  
    //     // 顯示於 Modal //
    //     $("#RefundModal-col_2").text("refundColContent");
  
    //     //})
  
  
    //   })
    // })
  
  
  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    //測試資料如下//
  
    ////////////////////////////////////////////////////////////////////////////////////
  
  //~~~~~~~~~~~~~~~~~~~~~articleC~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    //            訂票人 訂票紀錄查詢 歷史資料 (有值)           //
    let send = {
  
      //買票人資料
      "orderName": "周小寶",
      "orderPhone": "0912345678",//(頁面輸入)
      "orderUid": "F197728291",//(頁面輸入)
  
  
      "orms": [
        {   //訂單紀錄1
          "orderNum": "111111",
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
          "orderNum": "222222",
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
          "orderNum": "333333",
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
  
  
    //             獲取使用者於article CC選擇的訂單資訊  "顯示"於 Modal             // 
    $(document).on("click", "#detail-button", function () {
  
      //獲取使用者於article CC選擇的訂單資訊   //
      let text_start = $(this).parent().parent().find(".text-start").text();
      //往上一層td  //再往上一層tr       //取得訂單編號
  
      let orderUid = $("#hx-id-result").text().split("：")[1];
      let orderPhone = $("#hx-phone-result").text().split("：")[1];
  
      console.log("orderUid:"+orderUid);
      console.log("orderPhone:"+orderPhone);
  
      //傳給後台前格是整理
      let send_item = {
        orderUid: orderUid,
        orderPhone:orderPhone,
        orderNum: text_start,
        }
      console.log(JSON.stringify(send_item, null, 2));
  
      //傳給後台
              // $.ajax({
              //   url: "/kingxia/sea/searchorm", // 后台处理数据的 URL
              //   type: "POST", // 使用 POST 请求发送数据
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
  
    //            訂票人 訂票紀錄查詢 歷史資料 (null值)           //
    //  let send = null;
  
    //            訂票人 訂票紀錄查詢 歷史資料 (idWrong值)           //
    //if(send == "idWrong") //(頁面輸入)
  
   
    //            訂票人 訂票紀錄查詢 歷史資料 (phoneWrong值)           //
    // let send =  "phoneWrong" ; //(頁面輸入) 
    
    
  
  
  //~~~~~~~~~~~~~~~~~~~~~articleCC~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
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
  
    
  
  
  })