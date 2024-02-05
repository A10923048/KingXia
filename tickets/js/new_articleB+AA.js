$(document).ready(function () {
//傳給後台的網址
let send_url="https://tickets.kingxia.com.tw";

  //            獲取article B 顯示於 article AA              //


  let listNum = 0;
  let currentDate = "";
  // 格式化期为 "YYYY-MM-DD" 形式

  // 初始化日期選擇器
  //$("#datepicker").datepicker();

  // 設置日期選擇器的值為今天日期
  //$("#datepicker").datepicker("setDate", new Date());

  //格式化訂票日期
  let formatDate = function (date) {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // 定義格式化獲取的 訂票時間 選項
  let formatDateTime = function (dateTime) {
    let year = dateTime.getFullYear();
    let month = String(dateTime.getMonth() + 1).padStart(2, '0');
    let day = String(dateTime.getDate()).padStart(2, '0');
    let hours = String(dateTime.getHours()).padStart(2, '0');
    let minutes = String(dateTime.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}, ${hours}${minutes}`;
  };



  $("#datePicker").on("focus", function () {
    // 在日期輸入框被打開時執行的操作
    console.log("日期輸入框被打開了！");

    // 當"查詢"按鈕被點擊時，取得當下時間
    let currentDateTime = new Date();

    // 格式化 當下時間
    let formattedTime = formatDateTime(currentDateTime);

    // // 使用split切割formattedTime
    let [datePart, timePart] = formattedTime.split(', ');

    // // 顯示切割後的結果
    // console.log("抓取的日期部分：" + datePart);
    // console.log("抓取的時間部分：" + timePart);


    //       因為datePart 是一個字串而不是日期物件，因此您無法直接使用setDate方法。
    //      相反，將其轉換為日期物件，這樣您就可以使用setDate方法了。
    //      讓當下時間形成一個物件，判斷當下月份+3後 有沒有> 12
    let currentDate = new Date();
    if (currentDate.getMonth() + 3 > 12) {
      currentDate.setMonth((currentDate.getMonth() + 3) % 12)
      //將+ 3% 12後的餘數設給:currentDate的月份
      currentDate.setFullYear(currentDate.getFullYear() + 1);
      //(先取得currentDate.年後再+1)然後丟回給currentDate的年份設定結果
    } else {
      currentDate.setMonth(currentDate.getMonth() + 3);
      //直接+3
    }


    // 設定 min 和 max 屬性
    let maxDate = currentDate.toISOString().split("T")[0];
    let minDate = datePart;

    $("#datePicker").attr("max", maxDate);
    $("#datePicker").attr("min", "2023/10/01");

    console.log("maxDate:" + maxDate);
    console.log("minDate:" + minDate);


    // 迭代datas物件的每一組資料
    // Object.entries(datas).forEach(([key, value]) => {
    //   // 獲取每一組資料的stime和tdate
    //   let stime = value.stime;
    //   let tdate = value.tdate;
    //   // 顯示stime和tdate
    //   console.log(`Key: ${key}, stime: ${stime}, tdate: ${tdate}`);
    // })


  });



  //                          對"查詢"按鈕添加事件監聽器                       //
  $("#search-js").click(function () {

    //                                  檢查"出發日期"或"票數"是否為空                        //
    let searchingdate = $("#datePicker").val();
    let ticketQuantity = $("#ticketQuantity").val();

   
    // 获取当前日期
    currentDate = searchingdate;

    console.log("用戶選擇的票數:" + ticketQuantity);
    console.log("用戶選擇的訂票日期:" + searchingdate);

    //如果 (日期=ture 以外的結果 以及 票數<1)執行...
    //沒驚嘆號:判斷結果=ture時會觸發
    //有驚嘆號:判斷結果=false(在這裡用來指稱searchingdate沒有值的時候)時會觸發
    if (!searchingdate && ticketQuantity < 1) {
      // 如果出發日期和票數都未選擇，顯示相應的警告消息
      $("#alert-result").text("出發日期和票數都未選擇");
      $("#custom-alert").show();
      return; // 阻止進一步執行
    } else if (!searchingdate) {
      // 如果出發日期未選擇，顯示相應的警告消息
      $("#alert-result").text("出發日期未選擇");
      $("#custom-alert").show();
      return; // 阻止進一步執行
    } else if (ticketQuantity < 1) {
      // 如果票數未選擇，顯示相應的警告消息
      $("#alert-result").text("票數未選擇");
      $("#custom-alert").show();
      return; // 阻止進一步執行
    } else {
      // 如果兩個字段都有值，隱藏警告消息
      $("#custom-alert").hide();
    }




    // 格式化 當下時間
    //  let formattedTime = formatDateTime(currentDateTime);

    //   console.log("抓取的當前時間：" + formattedTime);
    // // 使用split切割formattedTime
    //   let [datePart, timePart] = formattedTime.split(', ');

    // // 顯示切割後的結果
    //    console.log("抓取的日期部分：" + datePart);
    //     console.log("抓取的時間部分：" + timePart);


   







    //                        捕獲表單數據更新#articleAA                          //
    let planpicker = $("#planpicker input[type='radio']:checked").val();
    console.log(planpicker);

    // 使用捕獲的數據更新#articleAA
    $("#planpicker-result").text("行程：" + planpicker);
    $("#ticketQuantity-result").text("票數：" + ticketQuantity);
    console.log(ticketQuantity);
    $("#searchingdate-result").text("出發日期：" + searchingdate);

    //傳給 AJAX 请求到后台
    // $.ajax({
    //   url: send_url+"/csrf", // 后台处理数据的 URL
    //   type: "get", // 使用 POST 请求发送数据
     
    //   success: function (data) {
    //     // 请求成功后的处理
    //     console.log(JSON.parse(data).token);

    //     // 自动重定向到 articleB
    //     //window.location.href = "#articleB";
    //   },
    //   error: function (error) {
    //     // 请求失败时的处理
    //     console.error("数据发送失败：", error);
    //   },
    // });


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

    // 判断this(被點擊的按鈕)的ID是 "Previous" 还是 "Next" 按钮，并进行相应的日期操作
    if ($(this).attr("id") === "carousel-control-prev") {

      //讓按鈕點選範圍在+-2天內，限制 listNum 的值，以防止過度遞增遞減。
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
    // 將dateObject(獲取的日期).setDate(設定為)(dateObject.getDate(獲取物件"日"的部分) + listNum結果)
    dateObject.setDate(dateObject.getDate() + listNum);

    // 根據計算後的 listNum 將 dateObject 的日期進行更新。
    // 這樣，dateObject 現在包含了根據按鈕點擊進行調整的新日期。



    // 将新日期显示在#searchingdate-result  (formatDate=呼叫自己定義的格式化日期的方法(帶入參數dateObject))
    $("#searchingdate-result").text("出發日期：" + formatDate(dateObject));

    // 调用 searchingdate_next(datas)，传入 datas 参数
    searchingdate_next(datas);
  });



  //定義searchingdate_next的方法
  //方法目的:
  //        (1)於 datas資料 中找出符合（日期等於 #searchingdate-result 的日期）條件 的子物件
  //        (2)顯示 符合條件的資料 於（"#tickets-result"）中。   
  let searchingdate_next = function (datas) {
    
    //判斷當下時間有沒有超過訂金入票的最後時間
    let currentDateTime = new Date();

    // 格式化 當下時間
    let formattedTime = formatDateTime(currentDateTime);

    // // 使用split切割formattedTime
    let [datePart, timePart] = formattedTime.split(', ');

    // 顯示切割後的結果
    console.log("抓取的日期部分：" + datePart);
    console.log("抓取的時間部分：" + timePart);
    // 迭代datas物件的每一組資料
     Object.entries(datas).forEach(([key, value]) => {
    //   // 獲取每一組資料的stime和tdate
       let stime = value.stime;
      let tdate = value.tdate;

    //    顯示stime和tdate
       console.log(`Key: ${key}, stime: ${stime}, tdate: ${tdate}`);
     });


    let Z = {};
    //取符合條件的資料
    //datas=要回圈的範圍，之後=res


    $.each(datas, function (key, value) {
      //循環datas裡的每組資料
      //因為不知道KEY是甚麼所以 用$.each找KEY

      if (value.tdate == $("#searchingdate-result").text().split("：")[1]) {
        //如果符合用戶選擇的日期資料
        // Z.push({key:value})

          if (datePart == $("#searchingdate-result").text().split("：")[1]) {
              //  如果選擇日期是今天進入下面的判斷式
                if (value.stime > timePart) {
                  //進一步判斷 有沒有超過 
                  Z[key] = value;
                }
          }else{
            Z[key] = value;
          }
      }


    })
 
    $("#tickets-result").empty();//不累加清空

    //將資料顯示於articleAA
    $.each(Z, function (key, value) {
      $("#tickets-result").append(
        "<tr>" +
        " <td><svg class='bi' width='24' height='24'>" +
        "<use xlink:href='#check' />" +
        " </svg>" + key  + "</td>" +
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


        "<a class='article-button' href='./order.html?shipid=" + key + "&btime=" + value.btime + "&ticket=" + $("#ticketQuantity-result").text().split("：")[1] + "&time=" + $("#searchingdate-result").text().split("：")[1] + "&'>" +

        " <i class='fa-solid fa-ticket fa-3x' aria-hidden='true'></i>" +
        " <span class='sr-only'>訂票</span>" +
        " </a>" +
        "</td>" +
        "</tr>"
      )
    })
  }





  //////////////////////測試資料如下///////////////////////////

  let datas = {
    "54035": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1030",
      "etime": "1200",
      "stime": "0900",
      "tdate": "2024-01-04"
    },
    "54034": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1030",
      "etime": "1200",
      "stime": "1900",
      "tdate": "2024-01-04"
    },
    "54033": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1030",
      "etime": "1200",
      "stime": "1000",
      "tdate": "2024-01-22"
    },
    "54066": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1600",
      "etime": "1730",
      "stime": "1530",
      "tdate": "2024-01-23"
    },
    "54065": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1600",
      "etime": "1730",
      "stime": "1530",
      "tdate": "2024-01-24"
    },
    "54037": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1030",
      "etime": "1200",
      "stime": "1000",
      "tdate": "2024-01-24"
    },
    "54036": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1030",
      "etime": "1200",
      "stime": "1000",
      "tdate": "2024-01-24"
    },
    "54064": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1600",
      "etime": "1730",
      "stime": "1530",
      "tdate": "2024-01-24"
    },
    "54063": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1600",
      "etime": "1730",
      "stime": "1530",
      "tdate": "2024-01-24"
    },
    "54062": {
      "port0": "水頭",
      "port1": "水頭",
      "qty": 70,
      "status": "正常",
      "btime": "1600",
      "etime": "1730",
      "stime": "1530",
      "tdate": "2024-01-24"
    }
  }

})

//"<a class='article-button' href='./order.html? shipid=" + key + "&btime=" + value.btime + "&ticket=" + $("#ticketQuantity-result").text().split("：")[1] + "&time=" + $("#searchingdate-result").text().split("：")[1] + "&'>" +



// "<a class='article-button' href='./order.html?
// "shipid=" + key + 
// "&btime=" + key + 
// "&ticket=" + $("#ticketQuantity-result").text().split("：")[1] + 
// "&time=" + $("#searchingdate-result").text().split("：")[1] + "'>" 


