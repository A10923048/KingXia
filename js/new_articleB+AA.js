$(document).ready(function () {

         //            獲取article B 顯示於 article AA              //


  let listNum = 0;
  let currentDate = "";
// 格式化期为 "YYYY-MM-DD" 形式
 
  // 初始化日期選擇器
  //$("#datepicker").datepicker();

  // 設置日期選擇器的值為今天日期
  //$("#datepicker").datepicker("setDate", new Date());
  

  let formatDate = function (date) {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }







  // 對"查詢"按鈕添加事件監聽器
  $("#search-js").click(function () {
    // 檢查"出發日期"或"票數"是否為空
    let searchingdate = $("#datePicker").val();
    let ticketQuantity = $("#ticketQuantity").val();
    console.log($("#ticketQuantity").val());
    // 获取当前日期
    currentDate = searchingdate;


    //如果 (日期=ture 以外的結果 以及 票數<1)執行...
    //沒驚嘆號:判斷結果=ture時會觸發
    //有驚嘆號:判斷結果=false(在這裡用來指稱searchingdate沒有值的時候)時會觸發
    if (!searchingdate && ticketQuantity< 1) {
      // 如果出發日期和票數都未選擇，顯示相應的警告消息
      $("#alert-result").text("出發日期和票數都未選擇");
      $("#custom-alert").show();
      return; // 阻止進一步執行
    } else if (!searchingdate) {
      // 如果出發日期未選擇，顯示相應的警告消息
      $("#alert-result").text("出發日期未選擇");
      $("#custom-alert").show();
      return; // 阻止進一步執行
    } else if (ticketQuantity<1) {
      // 如果票數未選擇，顯示相應的警告消息
      $("#alert-result").text("票數未選擇");
      $("#custom-alert").show();
      return; // 阻止進一步執行
    } else {
      // 如果兩個字段都有值，隱藏警告消息
      $("#custom-alert").hide();
    }


    // 捕獲表單數據
    let planpicker = $("#planpicker input[type='radio']:checked").val();
    console.log(planpicker);

    // 使用捕獲的數據更新#articleAA
    $("#planpicker-result").text("行程：" + planpicker);

    $("#ticketQuantity-result").text("票數：" + ticketQuantity);
    console.log(ticketQuantity);
    $("#searchingdate-result").text("出發日期：" + searchingdate);



    // 重定向到#articleAA
    window.location.href = "#articleAA";
    searchingdate_next(datas); //調用出發日期，之後datas改RES




    // 顯示#articleAA
    $("#articleAA").show();

    listNum = 0;


  });



  // 假设 Carousel 控制按钮的 ID 分别为 carousel-control-prev 和 carousel-control-next
  $(document).on("click", "#carousel-control-prev, #carousel-control-next", function () {

    // 当"Previous" 或 "Next" 按钮被点击时执行以下代码


    // 将当前日期转换为 JavaScript Date 对象
    let dateObject = new Date(currentDate);

    // 判断是 "Previous" 还是 "Next" 按钮，并进行相应的日期操作
    if ($(this).attr("id") === "carousel-control-prev") {
      if (listNum <= -2) {
        listNum = -2;
      } else {
        listNum -= 1;
      }
    } else if ($(this).attr("id") === "carousel-control-next") {
      if (listNum >= 2) {
        listNum = 2;
      } else {
        listNum += 1;
      }
    }
    dateObject.setDate(dateObject.getDate() + listNum);





    // 将新日期显示在#searchingdate-result
    $("#searchingdate-result").text("出發日期：" + formatDate(dateObject));

    // 调用 searchingdate_next(datas)，传入 datas 参数
    searchingdate_next(datas);
  });
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

    // 使用捕獲的數據更新#articleAA
    $("#hx-phone-result").text("主要訂票人電話：" + search_hx_phone);
    $("#hx-id-result").text("主要訂票人身分證/護照號碼：" + search_hx_id);
    // $("#searchingdate-result").text("出發日期：" + searchingdate);



    // 重定向到#articleCC
    window.location.href = "#articleCC";
    searchingdate_next(datas); //調用出發日期，之後datas改RES




    // 顯示#articleCC
    $("#articleCC").show();

    listNum = 0;


  });

  let searchingdate_next = function (datas) {

    let Z = {};
    //取符合條件的資料
    //datas=要回圈的範圍，之後=res

    //因為不知道KEY是甚麼所以 用$.each找KEY
    $.each(datas, function (key, value) {
      if (value.tdate == $("#searchingdate-result").text().split("：")[1]) {
        //符合條件後要握甚麼
        // Z.push({key:value})
        Z[key] = value;
      }
    })
    $("#tickets-result").empty();//不累加清空



    //將資料顯示於articleAA
    $.each(Z, function (key, value) {
      $("#tickets-result").append(
        "<tr>" +
        "<td scope='row' class='text-start'>" + key + "</td>" +
        " <td><svg class='bi' width='24' height='24'>" +
        "<use xlink:href='#check' />" +
        " </svg>" + value.btime + "</td>" +
        " <td><svg class='bi' width='24' height='24'>" +
        " <use xlink:href='#check' />" +
        "  </svg>" + value.etime + "</td>" +
        "  <td><svg class='bi' width='24' height='24'>" +
        "<use xlink:href='#check' />" +
        "</svg>" + value.qty + "</td>" +
        " <td><svg class='bi' width='24' height='24'>" +
        "<use xlink:href='#check' />" +
        "</svg>" +


        "<a class='article-button' href='./order.html?shipid=" + key + "&ticket=" + $("#ticketQuantity-result").text().split("：")[1] + "&time=" + $("#searchingdate-result").text().split("：")[1] + "&'>" +



        " <i class='fa-solid fa-ticket fa-3x' aria-hidden='true'></i>" +
        " <span class='sr-only'>訂票</span>" +
        " </a>" +
        "</td>" +
        "</tr>"
      )
    })
     } 









     
let datas = {
    "54035": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1030",
      "etime": "1200",
      "stime": "1000",
      "tdate": "2023-11-22"
    },
    "54034": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1030",
      "etime": "1200",
      "stime": "1000",
      "tdate": "2023-11-21"
    },
    "54033": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1030",
      "etime": "1200",
      "stime": "1000",
      "tdate": "2023-11-20"
    },
    "54066": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1600",
      "etime": "1730",
      "stime": "1530",
      "tdate": "2023-11-24"
    },
    "54065": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1600",
      "etime": "1730",
      "stime": "1530",
      "tdate": "2023-11-23"
    },
    "54037": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1030",
      "etime": "1200",
      "stime": "1000",
      "tdate": "2023-11-24"
    },
    "54036": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1030",
      "etime": "1200",
      "stime": "1000",
      "tdate": "2023-11-23"
    },
    "54064": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1600",
      "etime": "1730",
      "stime": "1530",
      "tdate": "2023-11-22"
    },
    "54063": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1600",
      "etime": "1730",
      "stime": "1530",
      "tdate": "2023-11-21"
    },
    "54062": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1600",
      "etime": "1730",
      "stime": "1530",
      "tdate": "2023-11-20"
    }
  }
    
})





