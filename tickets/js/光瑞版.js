
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

//NEW NAV END 

// //當導覽列裡的(.navbar)
// $(".navbar .nav-link, #goBackBtn").click(function () {
//   console.log("導覽按鈕被點了")
//   // 取得當下被點擊到的按鈕 (.nav-link)
//   console.log("被點到的按鈕:", this);
//   // 取得移動目標
//   // 取得當下點擊按鈕href屬性的值
//   var target = $(this).attr("href");
//   console.log("移動目標：", target);
//   // 取得移動目標的所在Ｙ軸座標
//   var position = $(target).offset().top;
//   console.log("移動座標:", position);
//   // 設定動畫時間
//   var duration = 500;
//   // 取得導覽列高度
//   var navbarHeight = $(".navbar").outerHeight();
//   // 先停止再執行動畫執行滑動動畫
//   // animate(物件{},毫秒數)
//   $("html,body").stop().animate({
//     scrollTop: position - navbarHeight
//   }, duration);

// });


// NAVBAR 展開功能

$(document).ready(function() {
    // 綁定 Bootstrap 導覽列摺疊功能
    $('[data-toggle="collapse"]').on('click', function () {
        var target = $(this).data('target');
        $(target).toggleClass('show');
    });
});

//articleNAVBAR 
function closeAndOpen(tabId) {
  // 关闭当前已打开的页面
  $(".tab-pane").removeClass("show active");

  // 打开新的页面
  $(`#${tabId}`).addClass("show active");
}



//articleAA 關閉按鈕
$(document).ready(function () {
  // 使用 jQuery 選擇器獲取 articleAA 元素
  var articleAA = $("#articleAA");

  // 確保 articleAA 存在
  if (articleAA.length > 0) {
      // 獲取 articleAA 的位置
      var articleAAPosition = articleAA.position();

      // 設定 closeButton 的位置
      $("#closeButton").css({
          top: articleAAPosition.top + 10,    // 可以根據需要進行微調
          left: articleAAPosition.left + articleAA.width() - $("#closeButton").width() - 10  // 可以根據需要進行微調
      });

      // 添加點擊事件監聽器
      $("#closeButton").click(function () {
          // 隱藏 articleAA
          articleAA.hide();
      });
  }
});


//只有被點擊的article内容可见

    $(document).ready(function () {
        // 初始時隱藏所有文章
        $(".tab-pane").hide();

        // 顯示預設文章
        var defaultArticle = "#content1"; // 將此值更改為你想要預設顯示的文章ID
        $(defaultArticle).show();

        // 當點擊導覽欄連結時
        $(".nav-link").click(function () {
            // 隱藏所有文章
            $(".tab-pane").hide();
            
            // 獲取被點擊連結的目標文章ID
            var targetArticle = $(this).attr("href");
            
            // 顯示目標文章
            $(targetArticle).show();
        });
    });



// 訂票表單articleAA
// 按下<訂票紀錄> 時隱藏 <articleAA"> 
$(document).ready(function() {
  $('#articleB-link').click(function() {
    $('#articleAA').hide();
  });
});




// 訂票表單articleA
  //訂票日期小於今天的日期
  document.addEventListener('DOMContentLoaded', function () {
    var datePicker = document.getElementById('datePicker');
    
    // 獲取今天的日期
    var today = new Date();
    
    // 設置最小日期為明天
    today.setDate(today.getDate() + 1);
    var minDate = today.toISOString().split('T')[0];
    
    // 設置 input 的屬性
    datePicker.setAttribute('min', minDate);
  });

  // $(document).ready(function () {
  //   $("#search-js").click(function (event) {
  //     event.preventDefault(); // 阻止默认的提交行为

  //     // 获取表单数据
  //     let planpicker = $("#planpicker input[type='radio']:checked").val();
  //     console.log(planpicker);
  //     let ticketQuantity = $("#ticketQuantity").val();
  //     console.log(ticketQuantity);
  //     let searchingdate = $("#searching-date").val();
  //     console.log(searchingdate);
  //     });
  //       });

        $(document).ready(function () {
          $("#search-js").click(function (event) {
            event.preventDefault(); // 阻止默认的跳转行为
        
            // 获取表单数据
            let planpicker = $("#planpicker input[type='radio']:checked").val();
            console.log(planpicker);
            let ticketQuantity = $("#ticketQuantity option:selected").text();
            console.log(ticketQuantity);
            let searchingdate = $("#searching-date").val();
            console.log(searchingdate);



        
            // 更新 #articleAA 中的数据
            $("#planpicker-result").text("行程：" + planpicker);
            $("#ticketQuantity-result").text("票數：" + ticketQuantity);
            $("#searchingdate-result").text("出發日期：" + searchingdate);

        
            // 如果需要手动跳转到 #articleAA 页面
            window.location.href = "#articleAA";

            // 显示 #articleAA
            $("#articleAA").show();

          
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
        });
      });
      

     


      


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


// 提交東西
let data = {
 date:$(2023-01-01T00:00:00).split("T")[0],
 wqty:$(幾張票)
}

// 訂票查詢
  $.ajax({
      url:"/kingxia/sea/getshit", //等光瑞的網址
      type:"POST", // 提交"POST" "get"不會有資料
      data: JSON.stringify(data),
      contentType: "application/json",
      success:function(res){   //成功提交後 光瑞回傳 res 範例格式 的東西 

      },
    //   beforeSend: function(xhr) {
    //     const token = $("meta[name='_csrf']").attr("content");
    //     const header = $("meta[name='_csrf_header']").attr("content");
    //     if(header && token) {
    //         xhr.setRequestHeader(header, token);
    //     }
    // }
  })


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
  //     //   success: function (response返回的資料) {
  //     //     // 请求成功后的处理
  //     //     console.log("数据已发送到后台并成功处理。");

  //     //     // 自动重定向到 articleB
  //     //     window.location.href = "#articleB";
  //     //   },
  //     //   error: function (error返回資料有問題) {
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


// <!-- 使用 jQuery 初始化 flatpickr -->

$(document).ready(function() {
  $("#datePicker").flatpickr({
      mode: "range",
      dateFormat: "Y-m-d",
      onClose: function(selectedDates, dateStr, instance) {
          console.log("Selected Dates:", selectedDates);
      },
      locale: "zh"
  });
});


// session
// let data = {抓旅客資料
//   orderName:$("#datePicker").val(),

//   tickets:data2(data2放到tickets)

// }

// let data2={抓到的資料

// }
// session end

datas.orderNum = value

//訂票紀錄查詢:如果要循環取list的資料
let x = datas.orderNum 

let y = datas.travelers//y(value) = datas.travelers
$.each(y,function(A,value))



y.forEach(function(value, index) {
  let e = value.email
});


------------------------------------------
var colors = ['red', 'blue', 'green'];

colors.forEach(function(color, index) {
  console.log(index, color);
});

// 输出:
// 0 red
// 1 blue
// 2 green




datas.orderNum = value
//餘詢:如果要循環取list的資料
// let x = datas.orderNum 
// let y = datas.travelers

datas.key = value
//取value用








// 訂票查詢
$.ajax({
  url:"/kingxia/sea/getshit", //等光瑞的網址
  type:"POST", // 提交"POST" "get"不會有資料
  data: JSON.stringify(data),
  contentType: "application/json",
  success:function(res){   //成功提交後 光瑞回傳 res 範例格式 的東西 
    let Z =[];
    //取符合條件的資料
    $.each(res,function(key,value){
      if ( value.tdate = $("#searchingdate-result").html().split(":")[1]){
        //符合條件後要握甚麼
        Z.push({key:value})
      }
    })
    //將資料顯示
    $.each(Z,function(key,value){
      $("#tickets-result").append(
        "<tr>"+
        "<th scope='row' class='text-start'>"+key+"</th>"+
        " <td><svg class='bi' width='24' height='24'>"+
        "<use xlink:href='#check' />"+
        " </svg>"+value.btime+"</td>"+
        " <td><svg class='bi' width='24' height='24'>"+
        " <use xlink:href='#check' />"+
        "  </svg>"+value.etime+"</td>"+
        "  <td><svg class='bi' width='24' height='24'>"+
        "<use xlink:href='#check' />"  + 
        "</svg>"+value.qty+"</td>"+
        " <td><svg class='bi' width='24' height='24'>"+
        "<use xlink:href='#check' />"+
        "</svg>"+
        "<a class='article-button' href='./Payment Page.html'>"+
        " <i class='fa-solid fa-ticket fa-3x' aria-hidden='true'></i>"+
        " <span class='sr-only'>訂票</span>"+
        " </a>"+
        "</td>"+
        "</tr>"
       
      )

    })

  },
//   beforeSend: function(xhr) {
//     const token = $("meta[name='_csrf']").attr("content");
//     const header = $("meta[name='_csrf_header']").attr("content");
//     if(header && token) {
//         xhr.setRequestHeader(header, token);
//     }
// }
})



y.forEach(function(value, index) {
  let e = value.email
});


------------------------------------------
var colors = ['red', 'blue', 'green'];

colors.forEach(function(color, index) {
  console.log(index, color);
});

// 输出:
// 0 red
// 1 blue
// 2 green








let Z ={};
//取符合條件的資料
//y=要回圈的範圍，之後=res
$.each(datas,function(key,value){
  if ( value.tdate = $("#searchingdate-result").html().split(":")[1]){
    //符合條件後要握甚麼
    // Z.push({key:value})
    Z.key=value;
  }
})
//將資料顯示
$.each(Z,function(key,value){
  $("#tickets-result").append(
    "<tr>"+
    "<th scope='row' class='text-start'>"+key+"</th>"+
    " <td><svg class='bi' width='24' height='24'>"+
    "<use xlink:href='#check' />"+
    " </svg>"+value.btime+"</td>"+
    " <td><svg class='bi' width='24' height='24'>"+
    " <use xlink:href='#check' />"+
    "  </svg>"+value.etime+"</td>"+
    "  <td><svg class='bi' width='24' height='24'>"+
    "<use xlink:href='#check' />"  + 
    "</svg>"+value.qty+"</td>"+
    " <td><svg class='bi' width='24' height='24'>"+
    "<use xlink:href='#check' />"+
    "</svg>"+
    "<a class='article-button' href='./Payment Page.html'>"+
    " <i class='fa-solid fa-ticket fa-3x' aria-hidden='true'></i>"+
    " <span class='sr-only'>訂票</span>"+
    " </a>"+
    "</td>"+
    "</tr>"
   
  )

 

})









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

let tickets_list = [];


//傳給光瑞的資料格式
//循環每一個tr 把 tr 內的資料做成一組資料 (同18-27)然後塞到list裡面(同17[])
$("#tr_class").each(function(get_tr){
  let get_tr_list = {
    name:$("#html id").val(),
    uid:$("#html id").val(),
    //打字用val
     
  }
  tickets_list.push(get_tr_list);
})

let tickets_list_all ={
  orderName:$("#html id").val(),
   .
   .
   .
   .


    tickets: tickets_list
};

用ajax 傳tickets_list_all給光瑞

