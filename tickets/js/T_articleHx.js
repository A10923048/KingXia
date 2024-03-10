
$(document).ready(function () {

    //跟後台抓資料用
    // let csrfToken = $("meta[name='_csrf']").attr("content");
    // let csrfHeader = $("meta[name='_csrf_header']").attr("content");
    
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~模擬進入頁面的畫面(連後端後直接刪除整段)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    
    //            訂票紀錄查詢 歷史資料 (有值)           //
    
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
                                 
    //              抓取買票人所有訂票紀錄           //
    let get_send = function (send) {

      let orms = send.orms;
      //             抓取 訂票人 所有訂票紀錄                 //
      $.each(orms, function (index, value) {
        // $.each(datas, function (key, value) {
        // orms.each(function(index,value){沒有key時就用index
  
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
          "<a id='detail-button' class='article-button' onclick=\"articleBtn('articleT')\"></button>"+
          " <i class='fa-solid fa-circle-info fa-3x' aria-hidden='true' style='color: #f7cf02;'></i>" +
          " </a>" +
          "</td>" +


          //退票 icon
          " <td >" +
            //超連結到退票畫面+夾帶給後台的資料                                 
          "<a id='refund-button' class='article-button' href='#' data-toggle='modal' data-target='#RefundModal'>"+
          " <i class='fa-solid fa-ticket fa-3x' aria-hidden='true' style='color: #2b02f7;'></i>" +
          " </a>" +
          "</td>" +
          "</tr>"
        )
  
  
      })
    }
    get_send(send);
  

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~articleHx(以下:連後端後"不能"刪除)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
    
    $("#refundBtn").on("click", function(event) {
        // 阻止默认行为
        event.preventDefault();

    });
    
  
    
    
    
    //                獲取 detail_其他買票人資料 "顯示" 於modal           //
    let get_detail_show = function (detail) {
      let travelers = detail.travelers;
  
      $("#hxtbodyl").empty();//不累加清空
  
      $.each(travelers, function (index, value) {
  
        $("#hxtbody").append(
          "<tr>" +
            "<td>" +(parseInt(index) + parseInt(1))+"</td>" +
            "<td>" +value.ticnum+"</td>" +
            "<td>" +value.tictype+"</td>" +
            "<td>" +value.tname+"</td>" +
            "<td>" +value.gender+"</td>" +
            "<td>" +value.birthday+"</td>" +
            "<td>" +value.id+"</td>" +
            "<td>" +value.mobile+"</td>" +
            "<td>" +value.email+"</td>" +
          "</tr>" 
        )
      })
    }

    	// //輸出成外部檔案
  function initDataTable() {
    // 設置文件標題
    document.title = "旅客清單";

    // 在表格底部創建搜索輸入框
    $("#example tfoot th").each(function() {
        var title = $(this).text();
        $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    });

    // DataTable 初始化
    var table = $("#example").DataTable({
        dom: '<"dt-buttons"Bf><"clear">lirtp',
        paging: true,
        autoWidth: true,
        buttons: [
            "excelHtml5",
            "print"
        ],
        initComplete: function(settings, json) {
            var footer = $("#example tfoot tr");
            $("#example thead").append(footer);
        }
    });
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
  
      //獲取使用者於article CC選擇的訂單資訊   //
      let text_start = $(this).parent().parent().find(".text-start").text(); //取得訂單編號
      let pno = $(this).parent().parent().find("#value_pno").text(); //取得航班代碼
      let tdate = $(this).parent().parent().find("#value_tdate").text(); //取得出發日期
      let btime = $(this).parent().parent().find("#value_btime").text(); //取得出發時間
  
      let orderUid = $("#hx-id-result").text().split("：")[1];
      let orderPhone = $("#hx-phone-result").text().split("：")[1];
  
      console.log("orderUid:"+orderUid);
      console.log("orderPhone:"+orderPhone);
  
      
      // 顯示於 Modal //
      $("#Modal-orderNum").text(text_start);
      $("#Modal-pno").text(pno);
      $("#Modal-tdate").text(tdate);
      $("#Modal-btime").text(btime);
  
  
  
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
      initDataTable();
  
      //  let ticCount = detail.ticCount;
      //  $("#Modal-ticCount").text("票數：" +ticCount );
      // 改成下面的簡易寫法
  
      $("#Modal-ticCount").text("票數：" + detail.ticCount);
  
    })
  
  
  
  
   
    
  

	

  // document.title = "旅客清單";
	// // Create search inputs in footer
	// $("#example tfoot th").each(function () {
	// 	var title = $(this).text();
	// 	$(this).html('<input type="text" placeholder="Search ' + title + '" />');
	// });
	// // DataTable initialisation
	// var table = $("#example").DataTable({
	// 	dom: '<"dt-buttons"Bf><"clear">lirtp',
	// 	paging: true,
	// 	autoWidth: true,
	// 	buttons: [
	// 		"excelHtml5",
	// 		"print"
	// 	],
	// 	initComplete: function (settings, json) {
	// 		var footer = $("#example tfoot tr");
	// 		$("#example thead").append(footer);
	// 	}
	// });

	// Apply the search
	// $("#example thead").on("keyup", "input", function () {
	// 	table.column($(this).parent().index())
	// 	.search(this.value)
	// 	.draw();
	// });
    




  //~~~~~~~~~~~~~~~~~~~~~articleCC~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
     //            獲取 detail_其他買票人資料 顯示於modal           //
   
    
	 let detail = {
  
		//詳細訂票紀錄 
	
		//買票人資料
		"orderNum": "123456789",
		"ticCount": 20,//(總票數)
	
		"travelers": [
			{
			  "ticnum": "123456",
			  "tictype": "全票",
			  "tname": "王A明",
			  "gender": "男",
			  "birthday": "2020/01/01",
			  "country": "TWN",
			  "id": "111111",
			  "email": "123@gmail.com",
			  "mobile": "0912345678"
			},
			{
			  "ticnum": "789012",
			  "tictype": "學生票",
			  "tname": "陳B華",
			  "gender": "女",
			  "birthday": "1998/05/15",
			  "country": "CHN",
			  "id": "222222",
			  "email": "456@gmail.com",
			  "mobile": "0923456789"
			},
			{
			  "ticnum": "345678",
			  "tictype": "全票",
			  "tname": "張C強",
			  "gender": "男",
			  "birthday": "1985/08/20",
			  "country": "JPN",
			  "id": "333333",
			  "email": "789@gmail.com",
			  "mobile": "0934567890"
			},
			{
			  "ticnum": "901234",
			  "tictype": "半票",
			  "tname": "林D雪",
			  "gender": "女",
			  "birthday": "1976/12/10",
			  "country": "USA",
			  "id": "444444",
			  "email": "abc@gmail.com",
			  "mobile": "0945678901"
			},
			{
			  "ticnum": "567890",
			  "tictype": "全票",
			  "tname": "李E綠",
			  "gender": "女",
			  "birthday": "1990/03/25",
			  "country": "KOR",
			  "id": "555555",
			  "email": "def@gmail.com",
			  "mobile": "0956789012"
			},
			{
			  "ticnum": "234567",
			  "tictype": "學生票",
			  "tname": "吳F玉",
			  "gender": "女",
			  "birthday": "1988/09/05",
			  "country": "TWN",
			  "id": "666666",
			  "email": "ghi@gmail.com",
			  "mobile": "0967890123"
			},
			{
			  "ticnum": "890123",
			  "tictype": "全票",
			  "tname": "劉G山",
			  "gender": "男",
			  "birthday": "1974/04/30",
			  "country": "CHN",
			  "id": "777777",
			  "email": "jkl@gmail.com",
			  "mobile": "0978901234"
			},
			{
			  "ticnum": "456789",
			  "tictype": "全票",
			  "tname": "許H華",
			  "gender": "男",
			  "birthday": "1995/11/18",
			  "country": "JPN",
			  "id": "888888",
			  "email": "mno@gmail.com",
			  "mobile": "0989012345"
			},
			{
			  "ticnum": "012345",
			  "tictype": "半票",
			  "tname": "周I樂",
			  "gender": "男",
			  "birthday": "1980/06/08",
			  "country": "TWN",
			  "id": "999999",
			  "email": "pqr@gmail.com",
			  "mobile": "0990123456"
			},
			{
			  "ticnum": "678901",
			  "tictype": "全票",
			  "tname": "黃J偉",
			  "gender": "男",
			  "birthday": "1992/02/28",
			  "country": "USA",
			  "id": "101010",
			  "email": "stu@gmail.com",
			  "mobile": "0912345678"
			},
			{
			  "ticnum": "345678",
			  "tictype": "學生票",
			  "tname": "蔡K芬",
			  "gender": "女",
			  "birthday": "1987/07/14",
			  "country": "KOR",
			  "id": "111111",
			  "email": "vwx@gmail.com",
			  "mobile": "0923456789"
			},
			{
			  "ticnum": "901234",
			  "tictype": "全票",
			  "tname": "陳L芳",
			  "gender": "女",
			  "birthday": "1983/10/01",
			  "country": "JPN",
			  "id": "121212",
			  "email": "yza@gmail.com",
			  "mobile": "0934567890"
			},
			{
			  "ticnum": "567890",
			  "tictype": "全票",
			  "tname": "林M平",
			  "gender": "男",
			  "birthday": "1971/05/22",
			  "country": "TWN",
			  "id": "131313",
			  "email": "bcd@gmail.com",
			  "mobile": "0945678901"
			},
			{
			  "ticnum": "234567",
			  "tictype": "學生票",
			  "tname": "張N軒",
			  "gender": "男",
			  "birthday": "1993/12/09",
			  "country": "CHN",
			  "id": "141414",
			  "email": "efg@gmail.com",
			  "mobile": "0956789012"
			},
			{
			  "ticnum": "890123",
			  "tictype": "全票",
			  "tname": "吳O英",
			  "gender": "女",
			  "birthday": "1986/04/17",
			  "country": "USA",
			  "id": "151515",
			  "email": "hij@gmail.com",
			  "mobile": "0967890123"
			},
			{
			  "ticnum": "456789",
			  "tictype": "全票",
			  "tname": "許P富",
			  "gender": "男",
			  "birthday": "1977/09/03",
			  "country": "TWN",
			  "id": "161616",
			  "email": "klm@gmail.com",
			  "mobile": "0978901234"
			},
			{
			  "ticnum": "012345",
			  "tictype": "半票",
			  "tname": "黃Q蓉",
			  "gender": "女",
			  "birthday": "1999/06/12",
			  "country": "KOR",
			  "id": "171717",
			  "email": "nop@gmail.com",
			  "mobile": "0989012345"
			},
			{
			  "ticnum": "678901",
			  "tictype": "全票",
			  "tname": "林R芬",
			  "gender": "女",
			  "birthday": "1982/11/07",
			  "country": "USA",
			  "id": "181818",
			  "email": "qrs@gmail.com",
			  "mobile": "0990123456"
			},
			{
			  "ticnum": "345678",
			  "tictype": "學生票",
			  "tname": "陳S宇",
			  "gender": "男",
			  "birthday": "1996/08/27",
			  "country": "TWN",
			  "id": "191919",
			  "email": "tuv@gmail.com",
			  "mobile": "0912345678"
			},
			{
			  "ticnum": "901234",
			  "tictype": "全票",
			  "tname": "蔡T豐",
			  "gender": "男",
			  "birthday": "1975/03/16",
			  "country": "JPN",
			  "id": "202020",
			  "email": "wxy@gmail.com",
			  "mobile": "0923456789"
			}
		  ]
		  
		}
  

});
