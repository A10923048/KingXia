
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

//       轉換Article時    -    關閉預設hide的Article                   //
let articleBtn = function (tabId) {
  $("#articleAA").hide();
  $("#articleCC").hide();

  // 檢查是否需要關閉 #articleAA
  if ($("#articleAA").hasClass("show")) {
    // 關閉 #articleAA
    $("#articleAA").removeClass("show active");
  }


  // 檢查是否需要關閉 #articleCC
  if ($("#articleCC").hasClass("show")) {
    // 关闭 #articleCC
    $("#articleCC").removeClass("show active");
  }


  // 關閉當前已打開的頁面
  $(".tab-pane").removeClass("show active");

  // 打開新的頁面
  $(`#${tabId}`).addClass("show active");

  // 如果需要手動跳轉到新的頁面
  window.location.href = `#${tabId}`;
}



//          ArticleC警告框-關閉按鈕               //
/*
let closeAlertC = function () {
  $("#custom-alert-c").hide();

}
*/

//    置於$(document).ready(function () 之外的程式碼 ENd              //







// 網頁的主程式寫在這裡
$(document).ready(function () {



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
      $(target).collapse('hide');
    } else {
      // 如果未展開，執行展開操作
      console.log('Navbar is not expanded. Opening...');
      $(target).collapse('show');
    }
    // 切換展開狀態
    isNavbarExpanded = !isNavbarExpanded;
  } else if (target === '#collapsibleNavId2') {
    if (isArticleAExpanded) {
      // 如果已展開，執行關閉操作
      console.log('ArticleA Navbar is expanded. Closing...');
      $(target).collapse('hide');
    } else {
      // 如果未展開，執行展開操作
      console.log('ArticleA Navbar is not expanded. Opening...');
      $(target).collapse('show');
    }
    // 切換展開狀態
    isArticleAExpanded = !isArticleAExpanded;
  }
});









  //           Article A- 立即訂票轉換頁面按鈕               //
  //let openArticleB = function () {
    // 關閉當前已打開的頁面
   // $(".tab-pane").removeClass("show active");

    // 打開新的頁面
  //  $("#articleB").addClass("show active");

    // 如果需要手動跳轉到 #articleB 頁面
 //   window.location.href = "#articleB";
  //}




  // <!-- 使用 jQuery 初始化 flatpickr -->

  // $(document).ready(function () {
  //   $("#datePicker").flatpickr({
  //     mode: "range",
  //     dateFormat: "Y-m-d",
  //     onClose: function (selectedDates, dateStr, instance) {
  //       console.log("Selected Dates:", selectedDates);
  //     },
  //     locale: "zh"

  //   });


  //           訂票表單articleAA                   //




  //          ArticleB警告框-關閉按鈕               //
 /* let closeAlert = function () {
    $("#custom-alert").hide();

  }
  */



  //            獲取article B 顯示於 article AA              //

/*
  let listNum = 0;
  let currentDate = "";
  // 對"查詢"按鈕添加事件監聽器
  $("#search-js").click(function () {
    // 檢查"出發日期"或"票數"是否為空
    let searchingdate = $("#datePicker").val();
    let ticketQuantity = $("#ticketQuantity").val();
    // 获取当前日期
    currentDate = searchingdate;




    if (!searchingdate && !ticketQuantity) {
      // 如果出發日期和票數都未選擇，顯示相應的警告消息
      $("#alert-result").text("出發日期和票數都未選擇");
      $("#custom-alert").show();
      return; // 阻止進一步執行
    } else if (!searchingdate) {
      // 如果出發日期未選擇，顯示相應的警告消息
      $("#alert-result").text("出發日期未選擇");
      $("#custom-alert").show();
      return; // 阻止進一步執行
    } else if (!ticketQuantity) {
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
    searchingdate_next(send); //調用出發日期，之後datas改RES




    // 顯示#articleCC
    $("#articleCC").show();

    listNum = 0;


  });

*/





  // 格式化期为 "YYYY-MM-DD" 形式
  //let formatDate =function(date) { 
  //  let year = date.getFullYear();
  // let month = String(date.getMonth() + 1).padStart(2, '0');
  //let day = String(date.getDate()).padStart(2, '0');
  //return `${year}-${month}-${day}`;
  //}





  // $("#searchingdate-result").text("10號");
  // console.log("最一開始: " + $("#searchingdate-result").text());
  // console.log("用.text() 來抓取資料")
  // console.log("我會拿到: " + $("#searchingdate-result").text());
  // $('#searchingdate-result').text('11號');
  // console.log("用.text('11號') 來指定資料   例:$('#searchingdate-result').text('11號')");
  // console.log("再用.text() 來抓取資料")
  // console.log("我會拿到: " + $("#searchingdate-result").text());



/*
  let searchingdate_next = function (datas) {

    let Z = {};
    //取符合條件的資料
    //datas=要回圈的範圍，之後=res
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
        "<th scope='row' class='text-start'>" + key + "</th>" +
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


        "<a class='article-button' href='./order.html?shipid=" + key + "&ticket=" + $("#ticketQuantity-result").text().split("：")[1] + "&time=" + $("#searchingdate-result").text().split("：")[1] + "'>" +



        " <i class='fa-solid fa-ticket fa-3x' aria-hidden='true'></i>" +
        " <span class='sr-only'>訂票</span>" +
        " </a>" +
        "</td>" +
        "</tr>"
      )
    })
     } 

*/







    //            獲取article C 顯示於 article CC              //







    
    // let listNum =0;
    // let currentDate="";
    // 對"查詢"按鈕添加事件監聽器






    //     // // 创建一个包含数据的对象
    //     // let data = {
    //     //   planpicker: planpicker,
    //     //   account: account,
    //     //   searchingdate: searchingdate,
    //     // };

    //     // // 发送 AJAX 请求到后台
    //     // $.ajax({
    //     //   url: "your_backend_url_here", // 后台处理数据的 URL
    //     //   method: "POST", // 使用 POST 请求发送数据
    //     //   data: data, // 发送数据对象
    //     //   success: function (response) {
    //     //     // 请求成功后的处理
    //     //     console.log("数据已发送到后台并成功处理。");

    //     //     // 自动重定向到 articleB
    //     //     window.location.href = "#articleB";
    //     //   },
    //     //   error: function (error) {
    //     //     // 请求失败时的处理
    //     //     console.error("数据发送失败：", error);
    //     //   },
    //     // });
    //   });
    // });








    //未來取資料用//
    // $(document).ready(function(){
    //     data = {name:"John"}


    //     $.ajax({
    //         url:"https://xn--sesp80g/info",
    //         type:"GET",
    //         data:data,
    //         success:function(response){

    //         }
    //     })
    // })
    //

    // $(document).ready(function (){
    //   $("#articleAbtn").click(function(){
    //     $("#articleApage").focus();
    // }) 
    // })

    // 按下按鈕後滑到指定位置用
    // $(document).ready(function(){
    //   $("#btn-articleA").click(function(){
    //     $("#articleA").focus();
    //   })
    // })

    // $(document).ready(function(){
    //   $("#articleAbtn").click(function(){
    //     window.location.href = "#articleA";
    //   })
    // })

    // $(document).ready(function(){
    //   $("#search-js").click(function(event){
    //       event.preventDefault();//阻止預設的提交post行為，目的是它做額外的事情

    //       // 获取表单数据
    //       let planpicker = $("#planpicker input[type='radio']:checked").val();
    //       console.log(planpicker);

    //       let searchingdate = $("#searching-date").val();
    //       console.log(searchingdate); 



    //用 console.log 顯示
    // let password = $("#password").val();
    //val用來接收input/form裡面的值 ， 
    //text用來接收不是input/form裡面的值
    //html抓取所有東西(包括標籤)

    // <html>     
    //     <head>

    //     </head>
    //     <body>
    //         <div>
    //             <p>hi  im admin </p>
    //             <a></a>
    //         </div>

    //         <p1> 456 </p1>
    //     </body>
    // </html>

    // let a = $("div").html(789)
    // a = "<p>hi im admin</p><a></a>"

    // let b = $("p1").html()
    // b = "456"

    // let c = $("p").text()

    // c = "hi im admin"

    // 创建一个包含数据的对象
    // let data = {
    //   planpicker: planpicker,
    //   account: account,
    //   searchingdate: searchingdate,
    // };




    // data = {
    //     account:account,  
    //     從上面抓去的account會變成右邊的account，
    //     左邊的account要跟光瑞定義好一樣的名字用
    //     password:password
    // }




    // 发送 AJAX 请求到后台
    // $.ajax({
    //   url: "your_backend_url_here", // 后台处理数据的 URL
    //   method: "POST", // 使用 POST 请求发送数据
    //   data: data, // 发送数据对象
    //   success: function (response) {
    //     // 请求成功后的处理
    //     console.log("数据已发送到后台并成功处理。");

    //     // 自动重定向到 articleB
    //     window.location.href = "#articleB";
    //   },
    //   error: function (error) {
    //     // 请求失败时的处理
    //     console.error("数据发送失败：", error);
    //   },
    // });






    //   });
    // });






    // $.ajax({
    //     // url:"/line_bot/botlink",等光瑞的網址
    //     type:"POST",
    //     data: JSON.stringify(data),
    //     contentType: "application/json",
    //     success:function(res){   成功提交後要執行的東西 
    //         if (res!="NO"){
    //             $("#articleC-js").click(); //要更改的頁面
    //             window.location.href=""
    //             window.location.replace("https://access.line.me/dialog/bot/accountLink?linkToken=" + token + "&nonce=" + nonce )
    //         }
    //         else{
    //             alert("用戶編號或是電話號碼錯誤");
    //         }
    //     }
    // })

    //   })
    // })

    // 以上是光瑞提供


    // // 訂票表單articleAA
    // $(document).ready(function () {
    //   $("#submit-js").click(function (event) {
    //     event.preventDefault(); // 阻止默认的提交行为

    //       // 获取表单数据
    //       let planpicker = $("#planpicker input[type='radio']:checked").val();
    //       console.log(planpicker);
    //       let ticketQuantity = $("#ticketQuantity").val();
    //       console.log(ticketQuantity);
    //       let searchingdate = $("#searching-date").val();
    //       console.log(searchingdate);

    //     // // 创建一个包含数据的对象
    //     // let data = {
    //     //   planpicker: planpicker,
    //     //   account: account,
    //     //   searchingdate: searchingdate,
    //     // };

    //     // // 发送 AJAX 请求到后台
    //     // $.ajax({
    //     //   url: "your_backend_url_here", // 后台处理数据的 URL
    //     //   method: "POST", // 使用 POST 请求发送数据
    //     //   data: data, // 发送数据对象
    //     //   success: function (response) {
    //     //     // 请求成功后的处理
    //     //     console.log("数据已发送到后台并成功处理。");

    //     //     // 自动重定向到 articleB
    //     //     window.location.href = "#articleB";
    //     //   },
    //     //   error: function (error) {
    //     //     // 请求失败时的处理
    //     //     console.error("数据发送失败：", error);
    //     //   },
    //     // });
    //   });
    // });


    // $(document).ready(function () {
    //   $("#submit-js").click(function (event) {
    //     event.preventDefault(); // 阻止默认的提交行为

    //     // 获取表单数据
    //       let planpicker = $("#planpicker input[type='radio']:checked").val();
    //       console.log(planpicker);
    //       let ticketQuantity = $("#ticketQuantity").val();
    //       console.log(ticketQuantity);
    //       let searchingdate = $("#searching-date").val();
    //       console.log(searchingdate);

    //     // 使用JavaScript重定向到articleAA页面
    //     // window.location.href = "#articleAA";
    //     // console.log(searchingdate);

    //   });
    // });













  });