/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Design - Sara Mazal Web;
Fonts - Google Fonts
*/




//    置於$(document).ready(function () 之外的程式碼               //


//            Article NAVBAR- 轉換按鈕功能                    //
// let articleBtn = function (tabId) {
//     $("#articleAA").hide();

//     // 檢查是否需要關閉 #articleAA
//     if ($("#articleAA").hasClass("show")) {
//       // 關閉 #articleAA
//       $("#articleAA").removeClass("show active");
//     }

//     // 關閉當前已打開的頁面
//     $(".tab-pane").removeClass("show active");

//     // 打開新的頁面
//     $(`#${tabId}`).addClass("show active");

//     // 如果需要手動跳轉到新的頁面
//     window.location.href = `#${tabId}`;
//    }


//  ↑↑ ↑↑ 置於$(document).ready(function () 之外的程式碼 ENd    ↑↑ ↑↑       //

// 資料處理
$(document).ready(function () {


      //1.先跟後台確認有沒有之前未完成的訂票紀錄

      //傳給後台
      // $.ajax({
      //   url: "/kingxia/sea/searchorm", // 后台处理数据的 URL
      //   type: "GET", // 使用 POST 请求发送数据
      //   //contentType:"application/json",//指定格式(這次不用)
      //   data:send_item,//塞入整理好的資料
      //   success: function (datas) {    // 後台回傳
      // if (datas) {

      //     $('#orderSend').modal('show'); // 显示模态框
      // }else{

      //    }             
      //           },
      //   error: function (error) {
      //   // 请求失败时的处理
      //   console.error("数据发送失败：", error);    
      // },
      //   beforeSend: function (xhr) {
      //     // 添加CSRF令牌到请求头部
      //     xhr.setRequestHeader(csrfHeader, csrfToken);
      //   }
      // });


      //抓取網址中GET參數//
      var getUrlString = location.href;
      var url = new URL(getUrlString);
      //url.searchParams.get("shipid")

      // 获取 URL 中的参数值
      var shipid = url.searchParams.get("shipid");
      var btime = url.searchParams.get("btime");
      var ticket = url.searchParams.get("ticket");
      var timeid = url.searchParams.get("time");


      //           步驟條                           //
      var current_fs, next_fs, previous_fs; //fieldsets
      var left, opacity, scale; //fieldset properties which we will animate
      var animating; //flag to prevent quick multi-click glitches

      
      //下一步驟:轉頁功能
      let pagenext= function (TF,element) {

      console.log(element);
      

      if(TF){
        if (animating) return false;
        animating = true;

        current_fs = $(element).parent();
        next_fs = $(element).parent().next();

        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
          step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50) + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
              'transform': 'scale(' + scale + ')',
              // 破解"previous"按鈕 沒有恢復到原本位置的原因
              // 'position': 'absolute'
            });
            next_fs.css({ 'left': left, 'opacity': opacity });
          },
          duration: 800,
          complete: function () {
            current_fs.hide();
            animating = false;
          },
          //element comes from the custom easing plugin
          easing: 'easeInOutBack'
        });
            }

      }; 

      //上一步驟:轉頁功能
      $(".page-previous").click(function () {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
          step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 50) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ 'left': left });
            previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
          },
          duration: 800,
          complete: function () {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
          easing: 'easeInOutBack'
        });


      });



 //////////////<!-------------------------- 第一頁:票種選擇 ------------------------->////////////// 

      // 将参数值插入到相应的元素中
      $("#shipID-show").text(shipid);
      $("#clock-show").text(btime);
      $("#showtickets").text("訂票數:" + ticket);
      $("#time-show").text(timeid);


      // 製作票種 下拉票數
      $('.ticketQuantity').each(function () {

        let this_ticketQuantity = $(this);

        // 清空選擇框
        this_ticketQuantity.empty();

        // 根據票數動態產生選項
        for (var i = 0; i <= ticket; i++) {
          var option = $('<option></option>').attr('value', (i)).text(i);
          this_ticketQuantity.append(option);
        }

      })

      //預設初始畫面的未選擇票數為紅色
      $("#tickets_unchoosed").text(ticket);
      $("#tickets_unchoosed").css("background-color", "red");

      // 綁定所有擁有 class="ticketQuantity" 的 select 元素的 change 事件
      $('.ticketQuantity').on('change', function () {

        $("#custom-alert_2").hide();
        // 獲取被改變的 select 元素

        //用 console.log("yes"); 測試有沒有進入這個功能

        let this_select = $(this);
        //讓正在被點擊的select = this_select



        let y = 0;
        $('.ticketQuantity').each(function () {
          if ($(this) != this_select) {
            //排除正在被點擊的select，
            y += parseInt($(this).val());
            //累加其他select的票數，用來計算餘票
            //這裡用 parseInt 才不會被當字串累加
            // y=y+
            // y+=
          }
        })

        // 計算還剩多少餘票用
        console.log(y);
        let other_tickets = ticket - y;

        // 除非餘票=0不然都用紅色顯示

        if (other_tickets < 0) {
          //$("#alert-result").html(text_show);
          $("#custom-alert_2").show();

          this_select.empty();
          // 根據票數動態產生選項
          for (var i = 0; i <= ticket; i++) {
            var option = $('<option></option>').attr('value', (i)).text(i);
            this_select.append(option);

          }
          y = 0;
          $('.ticketQuantity').each(function () {
            if ($(this) != this_select) {
              //排除正在被點擊的select，
              y += parseInt($(this).val());

            }
          })
          other_tickets = ticket - y
          $("#tickets_unchoosed").text(other_tickets);


        } else {

          // $("#tickets_choosed").text( other_tickets+"張票");
          $("#tickets_unchoosed").text(other_tickets);

        }
        if (other_tickets == 0) {
          $("#tickets_unchoosed").css("background-color", "green");


        } else {
          $("#tickets_unchoosed").css("background-color", "red");
        }
        //有餘票才改變顏色(所以放在判斷餘票的下面)
        icon_color_cange(this_select);
        //呼叫 icon_color_cange的方法，
        //將正在被點擊的select當參數帶入

      });

      //票種顏色變更
      let icon_color_cange = function (this_select) {
        
       
        let icon_find = this_select.parent().find(".find_title").text();

        //讓正在被點擊的select = this_select
        let this_select_val = this_select.val();

        if (this_select_val > 0) {

          if (icon_find == "全票") {
            this_select.parent().find(".icon_color_cange").addClass("text-green");;

          } else if (icon_find == "嬰兒票") {
            this_select.parent().find(".icon_color_cange").addClass("text-pink");;

          }

        } else {
          this_select.parent().find(".icon_color_cange").css("color", "black");
        }
      }

      // 監聽主alert-result_i，如果有變化觸發功能如下:
      $(document).on("click", ".alert-result_i", function () {

        console.log("点击事件");
        $(this).parent().hide();
        // 隐藏当前的 custom-alert 元素
        // $("#custom-alert_2").hide();
        focus_custom_alert();
      })


 ////////////// <!-------------------------- 第二頁:旅客資料輸入 ------------------------->////////////// 


      //              產生_旅客+聯絡人tab格式               //   
      let traveler_tab = function (i, ii, ticket_title) {

        let color = [
          "green",
          "pink",
          "brown"
        ]

        let add_tab_content =
            '<div class="nav nav-pills nav-justified">' +
            '<a class="nav-item nav-link" href="#content' + i + '">' +
            '<i class="fa-solid fa-ticket fa-4x text-' + color[ii] + '" style="color: #ffffff;"></i>' +
            '<a class="text-' + color[ii] + '" href="#content' + i + '">' + ticket_title + '</a>' +
            '</a>' +
            '</div>';

        return add_tab_content;

      }

      //                 產生_旅客form格式                //   
      let traveler_list = function (i, ii, ticket_title) {
        
        let traveler_form_content = '';

        let color = [
          "green",
          "pink"
        ];

        traveler_form_content +=
          '<div class="content" id="content' + i + '">' +
          '<!-- 用JS產生 旅客資料 -->' +
          '<div class=" text-' + color[ii] + '">' +
          '<!-- 表頭 -->' +
          '<form  class="get_form" action="" method="get" style="background-image: url(/tickets/img/contact-form-bg-2.png);">' +
          '<h2 class="form_title text-white bg-' + color[ii] + '">' + ticket_title + '</h2>' +
          '<!-- 填寫格 -->' +
          '<div class="row mt-5 contact_row">' +
          '<!-- 左半部 -->' +
          '<div class="col-lg-6 mt-3" style="padding-right: 5%; padding-left: 3%;">' +
          '<div class="row" style="padding-left: 10%;">' +
          '<label>姓名<span class="req">*</span></label>' +
          '<input type="text" class="form-control col" id="orderName" minlength="2" required>' +
          '<h2  class="col section-title mb-3 text-center ">旅客資料</h2>' +
          '</div>' +
          '<label>電話<span class="req">*</span></label>' +
          '<input type="tel" class="form-control" id="orderPhone" required>' +
          '<label>身分證<span class="req">*</span></label>' +
          '<input type="text" class="form-control" id="orderId" pattern="[a-zA-Z0-9]{9}" required>' +
          '<label>Email<span class="req">*</span></label>' +
          '<input type="email" class="form-control" id="email" required>' +
          '</div>' +
          '<!-- 右半部 -->' +
          '<div class="col-lg-6 col-md-12 col-sm-12" style="padding-left: 5%; padding-right: 5%;">' +
          '<!-- checkbox -->' +
          '<div class="input tooltip-container check">' +
          '<label for="Orderer_check" class="col checkbox_label text-' + color[ii] + '">主要訂購人<br>(請打勾)</label>' +
          '<input id="tooltip-toggle" class"orderer_check" type="checkbox">' +
          '<div class="tooltip-content">' +
          '<p>訂票負責人只能有1位! 勾選後會將資料自動帶入"訂購人"表單</p>' +
          '</div>' +
          '</div>' +
          '<!-- select們 -->' +
          '<div class="mt-4 row">' +
          '<div class="col">' +
          '<i class="fa-solid fa-earth-americas fa-2x"></i>' +
          '<h6>國籍</h6>' +
          '<select class="form-select form-control" id="country" required>' +
          '<option value=""></option>' +
          '<option value="TWN">台灣</option>' +
          '<option value="CHN">大陸</option>' +
          '<option value="HKG">香港</option>' +
          '<option value="MAC">澳門</option>' +
          '<option value="NN">其他</option>' +
          '</select>' +
          '</div>' +
          '<div class="">' +
          '<i class="fa-solid fa-venus-mars fa-2x"></i>' +
          '<h6>性別</h6>' +
          '<select class="form-select form-control" id="gender" required>' +
          '<option value=""></option>' +
          '<option value="女">女</option>' +
          '<option value="男">男</option>' +
          '</select>' +
          '</div>' +
          '<div class="col">' +
          '<i class="fa-solid fa-cake-candles fa-2x"></i>' +
          '<h6>出生日期</h6>' +
          '<div>' +
          '<input type="date" class="form-select form-control birth_' + color[ii] + '" id="birthdayPicker" placeholder="選擇日期範圍" value="" required>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '<!-- 用JS產生 上/下一位按鈕 -->' +
          '<div class="top-row col-lg-12 col-md-12 col-sm-12">' +
          '<div class="field-wrap">' +
          '<button type="submit" class=" bg-' + color[ii] + ' col-lg-6 col-md-12 col-sm-12 mt-3 prev button "/>前一位</button>' +
          '</div>' +
          '<div class="field-wrap">' +
          '<button id="next2" class=" bg-' + color[ii] + ' col-lg-6 col-md-12 col-sm-12 mt-3 next button "/>下一位</button>' +
          '</div>' +
          '</div>' +
          '</form>' +
          '</div>' +
          '</div>';

        return traveler_form_content;
      }

      //                 產生_聯絡人form格式                //   
      let buyer_form = function (BuyerId) {

        let htmlString =

          '<div class="content"  id="content' + BuyerId + '">' +

          '<!-- 用JS產生 旅客資料 -->' +
          '<div class=" text-brown">' +

          '<!-- 表頭 -->' +
          '<form id="contact" class="get_form" action="" method="get" style="background-image: url(/tickets/img/contact-form-bg-2.png);">' +
          '<h2 class="form_title text-white bg-brown">訂購人資料</h2>' +

          '<!-- 填寫格 -->' +
          '<div class="row mt-5 contact_row">' +

          '<!-- 左半部 -->' +
          '<div class="col-lg-6 mt-3" style="padding-right: 5%; padding-left: 3%;">' +
          '<div class="row" style="padding-left: 10%;">' +
          '<label>姓名<span class="req">*</span></label>' +
          '<input type="text" class="form-control col" id="orderName" minlength="2" required>' +
          '<h2  class="col section-title mb-3 text-center ">訂購人</h2>' +
          '</div>' +
          '<label>電話<span class="req">*</span></label>' +
          '<input type="tel" class="form-control" id="orderPhone" required>' +
          '<label>身分證<span class="req">*</span></label>' +
          '<input type="text" class="form-control" id="orderId" pattern="[a-zA-Z0-9]{9}" required>' +
          '</div>' +

          '<!-- 右半部 -->' +
          '<div class="col-lg-6 col-md-12 col-sm-12" style="padding-left: 5%; padding-right: 5%;">' +
          '<!-- select們 -->' +
          '<div class="radio_div mt-4 row">' +
          '<label for="orderMethods" class="col checkbox_label text-brown">訂單開立方式</label>' +
          '<div class="col">' +
          '<input type="radio" name="orderMethods" value="統一開立購票證名" required>統一開立購票證名' +
          '</div>' +
          '<div class="col">' +
          '<input type="radio" name="orderMethods" value="分別開立購票證名" required>分別開立購票證名' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>' +

          '<!-- 用JS產生 上/下一位按鈕 -->' +
          '<div class="top-row col-lg-12 col-md-12 col-sm-12">' +
          '<div class="field-wrap">' +
          '<button type="submit" class="bg-brown col-lg-6 col-md-12 col-sm-12 mt-3 prev button "/>前一位</button>' +
          '</div>' +
          '<div class="field-wrap">' +
          '<button id="next2" class="bg-brown col-lg-6 col-md-12 col-sm-12 mt-3 next button "/>下一位</button>' +
          '</div>' +
          '</div>' +

          '</form>' +
          '</div>' +
          '</div>';

        return htmlString;
      }

      
      //                 第一頁"送出"按鈕功能                //  
      $("#P1_send").click(function (event) {


        $("#carousel_container, #tab-content").empty();
        let ii = 0; //區別票種用
        let traveler_list_show = [];//暫存form用
        let traveler_tab_show = [];//暫存tab用

        let tickets_unchoosed = $("#tickets_unchoosed").text();

        // 判斷 能夠送出的條件
        let T = true;
        let text_show = "";
        let total = 0;
        let BuyerId = 0;

        //判斷 已選擇票種數=預定票數
        if (parseInt(tickets_unchoosed) != 0) {
          T = false;
          text_show = text_show + "票種選擇(未完成)"

          console.log("已選擇票種數:"+parseInt(tickets_unchoosed));
        }

        //票種數=/=預定票數:警示
        //票種數==預定票數 :
        if (!T) {
          
          $("#alert-result").html(text_show);

          $("#custom-alert").show();

        } else {

          //隱藏警示窗
          $(this).parent().find(".custom-alert").hide();

          // //觸發下一步換頁功能

          pagenext(true, $(this));

          //根據獲取的票種數量產生該種類表單
          $('.ticketQuantity').each(function () {

            let ticket_val = parseInt($(this).val());

            //加總所有值
            if (!isNaN(ticket_val)) {

                total += ticket_val;
            }

            console.log('Total: ', total);

            //嬰兒Id
            let ticket_m = total - ticket_val;
            console.log('ticket_m: ', ticket_m);

            //購票人Id
            BuyerId = total;

            let find_title = $(this).parent().find(".find_title").text();
            

            if (ticket_val > 0) {

              //票種=全票
              if (ii == 0) {

                console.log("全票:" + ii);

                console.log(find_title + "ticket:" + ticket_val);

                for (var i = 0; i < ticket_val; i++) {

                  //製作:全票form放入list
                  traveler_list_show.push(traveler_list(i, ii, find_title));//暫存用

                  //製作:全票tab放入list
                  traveler_tab_show.push(traveler_tab(i, ii, find_title));//暫存用                    
                }

                //票種=嬰兒票票
              } else {

                console.log("find_title+ii:" + find_title + ii);
                console.log(find_title + "ticket:" + ticket_val);

                for (var i = 0; i < ticket_val; i++) {

                  //製作:嬰兒form放入list
                  traveler_list_show.push(traveler_list(parseInt(ticket_m + i), ii, find_title));

                  //製作:嬰兒票tab放入list
                  traveler_tab_show.push(traveler_tab(parseInt(ticket_m + i), ii, find_title));

                }
              }

            }

            //讓不同票種有不同id
            ii += parseInt(1)
          })

          //製作:購票人form放入list
          traveler_list_show.push(buyer_form(BuyerId));

          //製作:購票人tab放入list
          traveler_tab_show.push(traveler_tab(BuyerId, "2", "訂購人"));

          //包裹:已放入list的tab
          var wrapped_traveler_tab_show = $('<div class="owl-carousel owl-loaded"></div>').append(traveler_tab_show);

          //畫面顯示:tab
          $("#carousel_container").append(wrapped_traveler_tab_show);

          //畫面顯示:form
          $("#tab-content").append(traveler_list_show);

          //.owl-carousel 初始化 設定播放樣式
          $('.owl-carousel').owlCarousel({
            loop: false,
            autoplay: false,
            clone: false,
            margin: 0,
            autoplayTimeout: 4000,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                nav: true,
              },

              376: {
                items: 2,
                nav: true,
              },
              500: {
                items: 2,
                nav: true,
              },
              700: {
                items: 3,
                nav: true,
              },
              950: {
                items: 3,
                nav: true,
              },
              1200: {
                items: 5,
                nav: true
              },
            }
          })

        }
      });


      ///           owl-carousel 初始化"之後"的操作          //  
      $(document).on("initialized.owl.carousel", ".owl-carousel", function () {

        //隱藏未被選中的表單
        $('.tab-content > div:not(:first-child)').hide();

        //隱藏未被選中的表單 a class="nav-item nav-link
        // $('.owl-stage > div:(:first-child)>a:()').addClass("active");
        $('.owl-stage > div:first-child a:first-child').addClass("active");

        //限制日期选择范围为小于2岁
        $('.birth_pink').on('focus', function () {

            // 计算最小日期
            var today = new Date();
            var minDate = new Date(today);
            minDate.setFullYear(today.getFullYear() - 2);

            
            var maxDate = new Date(today);
            maxDate.setFullYear(today.getMonth() + 2);


            // 设置最小日期
            $(this).attr('min', minDate.toISOString().split('T')[0]);

            // 设置最大日期
            $(this).attr('max', maxDate.toISOString().split('T')[0]);
            
        });
        


        //檢查输入元素
         let inputValid =function(href){

          console.log( "傳入href:"+href);

          let form = $(href).find('.get_form');
          
          console.log( "formlength:"+ form.length);

            // let form =$('.get_form').attr('data-target', href);

            console.log( "傳入href:"+form);

            let allFieldsValid = true;

            console.log( "length:"+ form.find("input,select").length);

            // 对于每个输入元素
            form.find("input,select").each(function () {

                var inputName = $(this).attr("id");
                var inputValue = $(this).val();
                var form_title = $(this).find('.form_title');

                  console.log("Input Name: " + inputName + ", Input Value: " + inputValue);

                //使用 checkValidity() 方法检查输入的有效性
                if (!this.checkValidity()) {

                    console.log("this.validity.valid:"+ this.validity.valid);

                    // 标记为不通过验证
                    allFieldsValid = false;
                    // 显示警告或其他提示
                    // 这里可以根据需要进行相应的提示操作，比如添加一个警告样式、显示一个提示信息等
                    // $(this).addClass("invalid-field").focus();
                    console.log("input " + inputName + " is not valid");

                    this.reportValidity();
                    return false;

                }else if(form_title=="嬰兒票"){

                }

                console.log( "最後:"+allFieldsValid);

            });

            console.log( "回傳:"+allFieldsValid);
            // 返回 true 或 false，表示所有输入是否有效
            return allFieldsValid; 


         }


        //(舊)選擇Bar tab轉換功能 
        $('.nav-link').on('click', function (e) {
          e.preventDefault();

          // // 移除所有活動的鏈接
          $('.nav-link').removeClass('active');

          // 將當前鏈接設置為活動狀態
          $(this).addClass('active');

          // 獲取目標 ID
          var target = $(this).attr('href');

          $('.tab-content > div').hide();
          $(target).fadeIn(600);
        });


        //(新)選擇Bar tab轉換功能 
        // $('.nav-link').on('click', function (e) {

        //   e.preventDefault();

        //   console.log("点击了下一位按钮");

        //   let href = $('a.nav-link.active').attr('href');

         
          
        //   // 如果所有字段都通过了验证
        //   if (inputValid(href)) {

        //       console.log("true");

        //       // // 移除所有活動的鏈接
        //       $('.nav-link').removeClass('active');

        //       // 將當前鏈接設置為活動狀態
        //       $(this).addClass('active');

        //       // 獲取目標 ID
        //       var target = $(this).attr('href');

        //       $('.tab-content > div').hide();
        //       $(target).fadeIn(600);

        //   } 

        // });


        // 表格 特效
        $('.form').find('input, textarea , select').on('change keyup blur focus', function (e) {

          let $this = $(this),
            label = $this.prev('label');

          if (e.type === 'keyup') {
            if ($this.val() === '') {
              label.removeClass('active highlight');
            } else {
              label.addClass('active highlight');
            }
          } else if (e.type === 'blur') {
            if ($this.val() === '') {
              label.removeClass('active highlight');
            } else {
              label.removeClass('highlight');
            }
          } else if (e.type === 'focus') {

            if ($this.val() === '') {
              label.removeClass('highlight');
            }
            else if ($this.val() !== '') {
              label.addClass('highlight');
            }
          } else if (e.type === 'change') {
            if ($this.val() === '' || $this.val() == "NULL") {
              console.log("$this.val() === 'NULL'");
              label.removeClass('active highlight');
              $('input[name="cusAdd"]').val('');

            } else {
              label.addClass('active highlight');

              if ($this.attr('name') === 'city') {

                // 获取选中的选项的文本值
                var selectedOption = $(this).children("option:selected").text();

                // 将选项的文本值设置为输入框的值
                $('input[name="cusAdd"]').val(selectedOption);

                $('input[name="cusAdd"]').prev('label').addClass('active');


              }
            }
          }

        });


        //             旅客=聯絡人:checkbox連動                //
        $("#tab-content :checkbox").on('change', function () {

          console.log("进入 checkbox 连动");

          let this_check = this;

          //這個checkbox 打勾
          if($(this_check).prop("checked")){

            // 其他checkbox 取消打勾
            $(".get_form").each(function () {

              console.log( $(".get_form").length)
                $(':checkbox', this).not(this_check).prop("checked", false);

            });
            
          //這個checkbox 取消打勾 
          }else{
          
            $("#contact").find('#orderName,#orderPhone,#orderId').val("");

          }
          })


         //下一位的功能
        $('.next').on('click', function (event) {

          // 阻止默认提交行为
          event.preventDefault();

          console.log("点击了下一位按钮");

          // let allFieldsValid = true;
          // let form = $(this).closest("form");


          let href = $(".content").attr('id');
          console.log("href:"+href); // 输出 "content0"

          // 对于每个输入元素
          // form.find("input,select").each(function () {

          //       var inputName = $(this).attr("id");
          //         var inputValue = $(this).val();
          //         console.log("Input Name: " + inputName + ", Input Value: " + inputValue);

          //     if (this.validity.valid == false) {

          //         console.log("this.validity.valid:"+ this.validity.valid);
          //         console.log("this.validity.valid:"+ this.validity.valid);

          //         // 标记为不通过验证
          //         allFieldsValid = false;
          //         // 显示警告或其他提示
          //         // 这里可以根据需要进行相应的提示操作，比如添加一个警告样式、显示一个提示信息等
          //         // $(this).addClass("invalid-field").focus();
          //         console.log("input " + inputName + " is not valid");

          //         this.reportValidity();
          //         return false;

          //     } 
          //     console.log( allFieldsValid);

          // });
          

          // 如果所有字段都通过了验证
          if (inputValid("#" + href)) {

            console.log("回傳:"+inputValid(href)); // 输出 "content0"
                
                var activeContentId = $(this).closest('.content').attr('id');

                console.log("activeContentId:" + activeContentId);


                // 提取数字部分并加上 1，构建下一个内容区域的 ID
                var nextIndex = parseInt(activeContentId.replace('content', '')) + 1;

                console.log("Id+1:" + nextIndex);

                var nextContentId = 'content' + nextIndex;

                // 构建下一个内容区域的 href 值
                var nextHref = '#' + nextContentId;


                // 检查是否存在下一个内容
                console.log("length:" + $('#' + nextContentId).length);
                if ($('#' + nextContentId).length !== 0) {

                  // 移除 nav-link 类具有 active 的类
                  $('.nav-link').removeClass('active');

                  // 查找具有相同 href 值的链接，并为其添加 active 类
                  $('a[href="' + nextHref + '"]').addClass('active');

                  $('.tab-content > div').hide();

                  // 显示下一个内容
                  $(nextHref).fadeIn(600);

                  console.log("当前内容不是最后一个。");

                }

          } else {
              // 如果有字段未通过验证，你可以在这里执行相应的操作，比如显示一条总体提示信息
              console.log("有字段未通过验证，请填写所有必填字段！");
          }


        });

        //上一位的功能
        $('.prev').on('click', function (event) {
          // 阻止默认提交行为
          event.preventDefault();

          console.log("点击了上一个按钮");

          // 获取当前活动的内容的 ID
          var activeContentId = $(this).closest('.content').attr('id');
          console.log("activeContentId" + activeContentId);



          // 提取数字部分并减去 1，构建上一个内容区域的 ID
          var prevIndex = parseInt(activeContentId.replace('content', '')) - 1;
          var prevContentId = 'content' + prevIndex;

          // 构建上一个内容区域的 href 值
          var prevHref = '#' + prevContentId;


          // 检查是否存在上一个内容
          if ($('#' + prevContentId).length !== 0) {

            // 移除 nav-link 类具有 active 的类
            $('.nav-link').removeClass('active');

            // 查找具有相同 href 值的链接，并为其添加 active 类
            $('a[href="' + prevHref + '"]').addClass('active');

            $('.tab-content > div').hide();

            // 显示上一个内容
            $(prevHref).fadeIn(600);

          } else {
            console.log("当前内容是第一个。");
            // 在这里执行您的第一个内容的特殊处理
          }
        });

      





      })

      //             旅客=聯絡人:checkbox連動                //
      // $(document).on("change", "#tab-content :checkbox", function () {

      //   console.log("进入 checkbox 连动");

      //   let this_check = this;

      //   //這個checkbox 打勾
      //   if($(this_check).prop("checked")){

      //     // 其他checkbox 取消打勾
      //     $(document).find('.get_form')(function () {

      //         $(':checkbox', this).not(this_check).prop("checked", false);

      //     });
          
      //   //這個checkbox 取消打勾 
      //   }else{
          
      //     //清除聯絡人input的帶入值
      //     $(document).find('#contact').each(function () {

      //         $('#orderName,#orderPhone,#orderId', this).val("");

      //     });
          
      //   }
        
      // });
    
      




//////////////<!-------------------------- 第三頁:資料核對 ------------------------->////////////// 
      


      //將檢查過後的資料顯示於 modal

      let send_all = function (package) {

        console.log("又進入");

        $("#carousel-inner").empty();//不累加清空


        // // 顯示於 Modal 訂票資訊欄位 //
        $("#m_shipid").text(package.shipId0);
        $("#m_date").text(timeid);
        $("#m_time").text(btime);
        $("#m_tCount").text(package.qty);



        // // 顯示於 Modal 訂票人欄位 //
        $("#order_name").text(package.orderName);
        $("#order_id").text(package.orderUid);
        $("#order_pno").text(package.orderPhone);




        $.each(package.tickets, function (index, value) {

          let active = "";
          if (index == 0) {
            active = " active";
          }

          let Tcode = value.ticketCode;
          // "01" = value.ticketCode
          console.log("Tcode=" + Tcode);

          let ticket = {
            "01": "全票",
            "03": "敬老",
            "04": "兒童",
            "05": "博愛"
          }

          let tT = ticket[Tcode];
          console.log("tT=" + tT);
          // 
          // value.ticketCode=01;
          // ticket.01= "全票"

          // 01=value.ticketCode

          //+ticket.Tcode+
          //ticket.01 = 全票

          $("#carousel-inner").append(

            '<div class="carousel-item' + active + '" data-slide-number="' + index + '">' +
            '<h2>' + tT + '</h2>' +

            '<div class="col">' +
            '<div class="gallery-text">' +
            '<h4>' +
            '<strong><br>' +
            value.name +
            '</strong>' +
            '</h4>' +
            '</div>' +
            '<div class="table-responsive">' +
            '<form id="contact" class="get_form bg-light ">' +
            '<h2 id="contact" class="section-title mb-3 text-center text-primary "></h2>' +
            '<div class="table-responsive ">' +
            '<table class="table text-center text-black">' +
            '<thead>' +
            '<tr>' +
            '<th style="width: 10%;" id="shipID0">電話</th>' +
            '<td>' + value.phone + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th style="width: 20%;" id="btime">身分證</th>' +
            '<td>' + value.uid + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th style="width: 10%;" id="etime">Email</th>' +
            '<td>' + value.email + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th style="width: 20%;" id="qty">國籍</th>' +
            '<td>' + value.country + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th style="width: 10%;" id="etime">性別</th>' +
            '<td>' + value.gender + '</td>' +
            '</tr>' +
            '<tr>' +
            '<th style="width: 10%;" id="etime">生日</th>' +
            '<td>' + value.birthday + '</td>' +
            '</tr>' +
            '</thead>' +
            '</table>' +
            '</div>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '</div>'

          )


        })
        console.log("結束");
      }

  })



  //            資料填寫完送出-格式檢查                       //
  $(document).on("click", "#form_send", function () {


    //隱藏警示窗
    $(this).parent().parent().find(".custom-alert").hide();

    //獲取通過檢查的搭船人資料
    let send_list = [];
    //判斷能否進入:彙整買票人資料的動作
    let T = true;


    //獲取:搭船人資料
    $('.get_form').each(function () {
      let ticket_title = $(this).find(".ticket_title").text();
      let orderName = $(this).find(".orderName").val();
      console.log("orderName: " + orderName);
      let orderPhone = $(this).find(".orderPhone").val();
      let orderId = $(this).find(".orderId").val();
      let email = $(this).find(".email").val();
      let country = $(this).find('.country').val();
      let gender = $(this).find('.gender').val();
      let date = $(this).find('.birthdayPicker').val();


      console.log("ticket_title: " + ticket_title);
      // console.log("orderName: " + orderName);
      // console.log("orderPhone: " + orderPhone);
      // console.log("orderId: " + orderId);
      // console.log("country: " + country);
      // console.log("email: " + email);
      // console.log("gender: " + gender);
      //console.log("birthdayPicker: " + date);
      // console.log("email: " + email);



      let text_show = "";
      let Ta = true;

      //第一步:檢查送出表格內的值是否為空 //
      if (!orderName) {
        //   Ta = false;
        //   text_show = text_show + "姓名:未填寫<br>"
        //   //   //"姓名:未填寫"=""+"姓名:未填寫"
      }
      if (!orderPhone) {
        //   Ta = false;
        //   text_show = text_show + "手機/行動電話:未填寫<br>"
      }
      if (!orderId) {
        //   Ta = false;
        //   text_show = text_show + "身分證/護照號碼:未填寫<br>"
      }
      if (!email) {
        //   Ta = false;
        //   text_show = text_show + "email:未填寫<br>"
      }
      if (!country) {
        //   Ta = false;
        //   text_show = text_show + "國籍:未填寫<br>"
      }
      if (!gender) {
        //   Ta = false;
        //   text_show = text_show + "性別:未填寫<br>"
      }
      if (!date) {
        Ta = false;
        text_show = text_show + "出生日期:未填寫<br>"
      }

      //第二步:內容檢查 //
      if (!Ta) {
        $(this).find(".alert-text").html(text_show);
        $(this).find(".custom-alert").show();
      }

      //(確認都有值)進行...
      else {

        //確認票種
        let ticketcode = turn_ticketcode(ticket_title)

        //確認票種符合資格:敬老票+兒童票判斷
        if (ticketcode == "03") {
          console.log("進入敬老票判斷");

          //   let age = calculate_Age(date);
          //   console.log("回傳Age:" + age);

          //   if (age < 65) {

          //     console.log("進入:回傳Age< 65判斷式");

          //     text_show = text_show + "年齡條件不符，請重新選擇票種<br>"

          //     Ta = false;
          //     $(this).find(".alert-text").html(text_show);
          //     $(this).find(".custom-alert").show();
          //  }


          //兒童票判斷
        } else if (ticketcode == "04") {
          console.log("進入兒童票判斷");

          //   let age = calculate_Age(date);

          //   console.log("回傳年齡值:" + age);

          //   if (age < 2) {
          //     console.log("回傳年齡值不足2歲");

          //     text_show = text_show + "年齡不足2歲，不需購票<br>，請重新選擇票種<br>"

          //     Ta = false;
          //     $(this).find(".alert-text").html(text_show);
          //     $(this).find(".custom-alert").show();

          //     console.log("回傳年齡值不足2歲: " + $(this));

          //   } else if (age > 11) {

          //     console.log("回傳年齡值 > 11 : " + $(this));
          //     Ta = false;
          //     text_show = text_show + "年齡已超過兒童票適用年齡，<br>請重新選擇票種<br>"
          //     $(this).find(".alert-text").html(text_show);
          //     $(this).find(".custom-alert").show();
          //   }

        }

        // 檢查'非'陪同者的資料
        if (!ticket_title.includes("陪同者")) {
          console.log(ticket_title + "進入:檢查除陪同者以外的資料");

          //判斷:國內 ID格式
          if (country == "TWN") {
            // verifyId(orderId);
            if (!verifyId(orderId)) {
              //   //console.log("regex.test(orderId):"+regex.test(orderId));
              //   //console.log得出的結果為T/F
              //   //因此判斷式 (當結果=F)的寫法有兩種
              //   //方法一:(!regex.test(orderId))
              //   //方法二:(regex.test(orderId)==false)

              Ta = false;
              text_show = text_show + "身分證/護照欄位格式不正確，請重新輸入後再送出！<br>"


              $(this).find(".alert-text").html(text_show);
              $(this).find(".custom-alert").show();
            }

            if (!verifyPhone(orderPhone)) {

              Ta = false;
              console.log("无效的电话号码");

              text_show = text_show + "手機號碼欄位格式不正確，請重新輸入後再送出！<br>"


              $(this).find(".alert-text").html(text_show);
              $(this).find(".custom-alert").show();
            }


          }

          //判斷:國外 ID格式
          else {
            if (orderId.length != 9) {

              console.log("進入長度判斷式");

              text_show = text_show + "身分證/護照欄位格式不正確，請重新輸入後再送出！<br>"
              Ta = false;

              $(this).find(".alert-text").html(text_show);
              $(this).find(".custom-alert").show();
            }
          }

          //判斷:email格式
          if (email != "") {
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
              Ta = false;
              text_show = text_show + "email格式不正確，請重新輸入後再送出！<br>"

              $(this).find(".alert-text").html(text_show);
              $(this).find(".custom-alert").show();
              console.log("Ta = email格式不正確" + T);
            }
          }

        }
        //檢查陪同者的資料
        else {
          console.log(ticket_title + "進入:檢查陪同者的資料");
          //因為(陪同者)的ID 由 博愛票帶入所以 只要驗證博愛票就好，避免被 陪同者不同國籍產生錯誤結果

          //判斷:email格式
          if (email != "") {
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
              Ta = false;
              text_show = text_show + "email格式不正確，請重新輸入後再送出！<br>"

              $(this).find(".alert-text").html(text_show);
              $(this).find(".custom-alert").show();
              console.log("Ta = email格式不正確" + T);
            }
          }

          //判斷:國內 手機格式
          if (country == "TWN") {
            if (!verifyPhone(orderPhone)) {

              Ta = false;
              console.log("无效的电话号码");

              text_show = text_show + "手機號碼欄位格式不正確，請重新輸入後再送出！<br>"

              $(this).find(".alert-text").html(text_show);
              $(this).find(".custom-alert").show();
            }
          }

          //以上都無誤再去掉orderId"提示字"
          if (Ta) {
            // //     //切割orderId 避免輸出 "此欄位會自動帶入，毋需填寫"
            orderId = orderId.split("(")[0];
            console.log("切割後的陪同者orderId:" + orderId);
          }

        }

        //(以上檢查無誤後)整理:搭船人的資料
        if (Ta) {
          console.log("搭船人的資料格式:" + Ta);
          let send_item = {
            name: orderName,
            uid: orderId,
            phone: orderPhone,
            gender: gender,
            birthday: date,
            email: email,
            country: country,
            ticketCode: ticketcode
          };


          send_list.push(send_item);

        }
        //(以上檢查有誤)不進入下一步:彙整買票人資料的動作
        else {
          T = false
        }
      }
    })


    //獲取:買票人資料
    $('.get_orderform').each(function () {
      let ticket_title = $(this).find(".ticket_title").text();
      let orderName = $(this).find("#orderName").val();
      let orderPhone = $(this).find("#orderPhone").val();
      let orderId = $(this).find("#orderId").val();

      // 獲取form-check 訂單開立方式的值
      let orderMethod = $(this).find("input[name='orderMethods']:checked").val();

      console.log("ticket_title: " + ticket_title);
      // console.log("買票人Name: " + orderName);
      // console.log("買票人Phone: " + orderPhone);
      // console.log("買票人Id: " + orderId);
      //console.log("訂單開立方式: " + orderMethod);


      let Tb = true;
      let text_show = "";

      //檢查送出表格內的值是否為空 //
      if (!orderName) {
        Tb = false;
        text_show = text_show + "姓名:未填寫<br>"
      }
      if (!orderPhone) {
        Tb = false;
        text_show = text_show + "手機/行動電話號碼:未填寫<br>"
      }
      if (!orderId) {
        Tb = false;
        text_show = text_show + "身分證/護照號碼:未填寫<br>"
      }
      if (!orderMethod) {
        Tb = false;
        text_show = text_show + "訂單開立方式(未選擇)"
      }

      if (!Tb) {
        $(this).find(".alert-text").html(text_show);
        $(this).find(".custom-alert").show();
        T = Tb
      }
      else {
        if (orderId.length != 9 && orderId.length != 10) {
          T = false;
          text_show = text_show + "身分證/護照欄位格式不正確，<br>請重新輸入後再送出！<br>"


          //$(this).find(".alert-text").text(text_show);
          //用.text(text_show)的話<br>會顯示不出功能
          $(this).find(".alert-text").html(text_show);
          $(this).find(".custom-alert").show();
        }
        //整理:買票人的資料
        if (T) {
          console.log("買票人 沒有格式不正確" + T);

          let package = {
            orderName: orderName,
            orderPhone: orderPhone,
            orderUid: orderId,
            qty: ticket,
            shipId0: shipid,
            sp: true,
            remType: orderMethod,
            tickets: send_list
          };


          send_all(package);

          $("#DetailModal").modal('show');


          console.log(JSON.stringify(package, null, 2));


        }
      }
    })

    console.log("頭");
    //移動到位上方的警示窗
    focus_custom_alert();
    console.log("尾");

  
  })

  // 按鈕控制
  $(document).ready(function () {

    // //           步驟條 按鈕                          //
    // var current_fs, next_fs, previous_fs; //fieldsets
    // var left, opacity, scale; //fieldset properties which we will animate
    // var animating; //flag to prevent quick multi-click glitches

    // // 
    // $(".page-next").click(function (TF) {

    //   if (TF) {
    //     if (animating) return false;
    //     animating = true;

    //     current_fs = $(this).parent();
    //     next_fs = $(this).parent().next();

    //     //activate next step on progressbar using the index of next_fs
    //     $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //     //show the next fieldset
    //     next_fs.show();
    //     //hide the current fieldset with style
    //     current_fs.animate({ opacity: 0 }, {
    //       step: function (now, mx) {
    //         //as the opacity of current_fs reduces to 0 - stored in "now"
    //         //1. scale current_fs down to 80%
    //         scale = 1 - (1 - now) * 0.2;
    //         //2. bring next_fs from the right(50%)
    //         left = (now * 50) + "%";
    //         //3. increase opacity of next_fs to 1 as it moves in
    //         opacity = 1 - now;
    //         current_fs.css({
    //           'transform': 'scale(' + scale + ')',
    //           // 破解"previous"按鈕 沒有恢復到原本位置的原因
    //           // 'position': 'absolute'
    //         });
    //         next_fs.css({ 'left': left, 'opacity': opacity });
    //       },
    //       duration: 800,
    //       complete: function () {
    //         current_fs.hide();
    //         animating = false;
    //       },
    //       //this comes from the custom easing plugin
    //       easing: 'easeInOutBack'
    //     });

    //   }else{
    //     return;
    //   }

    // });

    // $(".page-previous").click(function () {
    //   if (animating) return false;
    //   animating = true;

    //   current_fs = $(this).parent();
    //   previous_fs = $(this).parent().prev();

    //   //de-activate current step on progressbar
    //   $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //   //show the previous fieldset
    //   previous_fs.show();
    //   //hide the current fieldset with style
    //   current_fs.animate({ opacity: 0 }, {
    //     step: function (now, mx) {
    //       //as the opacity of current_fs reduces to 0 - stored in "now"
    //       //1. scale previous_fs from 80% to 100%
    //       scale = 0.8 + (1 - now) * 0.2;
    //       //2. take current_fs to the right(50%) - from 0%
    //       left = ((1 - now) * 50) + "%";
    //       //3. increase opacity of previous_fs to 1 as it moves in
    //       opacity = 1 - now;
    //       current_fs.css({ 'left': left });
    //       previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
    //     },
    //     duration: 800,
    //     complete: function () {
    //       current_fs.hide();
    //       animating = false;
    //     },
    //     //this comes from the custom easing plugin
    //     easing: 'easeInOutBack'
    //   });


    // });



    //<旅客資料>按鈕
    //$(document).on("click", ".next", function(event) {


    //tab 轉換
    // $('.nav-link').on('click', function (e) {
    //   e.preventDefault();

    //   // // 移除所有活動的鏈接
    //   $('.nav-link').removeClass('active');

    //   // 將當前鏈接設置為活動狀態
    //   $(this).addClass('active');

    //   // 獲取目標 ID
    //   var target = $(this).attr('href');

    //   $('.tab-content > div').hide();
    //   $(target).fadeIn(600);
    // });


    // //下一位的功能
    // $('.next').on('click', function (event) {
    //   // 阻止默认提交行为
    //   event.preventDefault();

    //   console.log("点击了下一位按钮");

    //   var activeContentId = $(this).closest('.content').attr('id');

    //   console.log("activeContentId:" + activeContentId);


    //   // 提取数字部分并加上 1，构建下一个内容区域的 ID
    //   var nextIndex = parseInt(activeContentId.replace('content', '')) + 1;

    //   console.log("Id+1:" + nextIndex);


    //   var nextContentId = 'content' + nextIndex;

    //   // 构建下一个内容区域的 href 值
    //   var nextHref = '#' + nextContentId;


    //   // 检查是否存在下一个内容
    //   console.log("length:" + $('#' + nextContentId).length);
    //   if ($('#' + nextContentId).length !== 0) {

    //     // 移除 nav-link 类具有 active 的类
    //     $('.nav-link').removeClass('active');

    //     // 查找具有相同 href 值的链接，并为其添加 active 类
    //     $('a[href="' + nextHref + '"]').addClass('active');

    //     $('.tab-content > div').hide();

    //     // 显示下一个内容
    //     $(nextHref).fadeIn(600);

    //     console.log("当前内容不是最后一个。");

    //   }

    // });


    // //上一位的功能
    // $('.prev').on('click', function (event) {
    //   // 阻止默认提交行为
    //   event.preventDefault();

    //   console.log("点击了上一个按钮");

    //   // 获取当前活动的内容的 ID
    //   var activeContentId = $(this).closest('.content').attr('id');
    //   console.log("activeContentId" + activeContentId);



    //   // 提取数字部分并减去 1，构建上一个内容区域的 ID
    //   var prevIndex = parseInt(activeContentId.replace('content', '')) - 1;
    //   var prevContentId = 'content' + prevIndex;

    //   // 构建上一个内容区域的 href 值
    //   var prevHref = '#' + prevContentId;


    //   // 检查是否存在上一个内容
    //   if ($('#' + prevContentId).length !== 0) {

    //     // 移除 nav-link 类具有 active 的类
    //     $('.nav-link').removeClass('active');

    //     // 查找具有相同 href 值的链接，并为其添加 active 类
    //     $('a[href="' + prevHref + '"]').addClass('active');

    //     $('.tab-content > div').hide();

    //     // 显示上一个内容
    //     $(prevHref).fadeIn(600);

    //   } else {
    //     console.log("当前内容是第一个。");
    //     // 在这里执行您的第一个内容的特殊处理
    //   }
    // });


    // $('.next').on('click', function(event) {s
    //     // 阻止默认提交行为
    //     event.preventDefault();

    //     console.log("点击了下一位按钮");

    //     var nav_link_active = $(this).closest('.form').find('.nav-link.active').attr('href');
    //     console.log("获取当前活动的 nav-link_active：" + nav_link_active);    

    //     // 提取数字部分并加上 1
    //     var nextIndex = parseInt(nav_link_active.replace('#content', '')) + 1;

    //     // 构建下一个链接的 href
    //     var nextHref = '#content' + nextIndex;
    //     console.log("nextHref ：" + nextHref);

    //     // 移除当前活动的 nav-link 的 active 类
    //     $(nav_link_active).removeClass('active');

    //     // 获取下一个 nav-link，并添加 active 类
    //     var next_nav_link = $(nextHref + '.nav-link');
    //     next_nav_link.addClass('active');

    //     $('.tab-content > div').hide();

    //     // 显示下一个内容
    //     $(nextHref).fadeIn(600);
    // });





    //表單中的下一步





    //下一位按鈕提交
    // $('#next2').on('click', function(event) {

    //     // 阻止默认提交行为
    //     event.preventDefault(); 

    //      // 檢查所有表單的有效性
    //     var allFormsValid = true;
    //     $('.form-control').each(function() {
    //         if (!this.checkValidity()) {

    //             // 显示警告或其他提示
    //             this.reportValidity();
    //             allFormsValid = false;
    //             return false; // 中斷 each() 迴圈
    //         }
    //     });

    //     // 如果所有表單都有效，執行相應的操作
    //     if (allFormsValid) {

    //         //觸發
    //         $('.next').click();

    //     }


    // });



    //Page2:隱藏未被選中的表單
    // $('.tab-content > div:not(:first-child)').hide();


  })


  // $(document).ready(function () {

  //   // 表格 特效
  //   $('.form').find('input, textarea , select').on('change keyup blur focus', function (e) {

  //     let $this = $(this),
  //       label = $this.prev('label');

  //     if (e.type === 'keyup') {
  //       if ($this.val() === '') {
  //         label.removeClass('active highlight');
  //       } else {
  //         label.addClass('active highlight');
  //       }
  //     } else if (e.type === 'blur') {
  //       if ($this.val() === '') {
  //         label.removeClass('active highlight');
  //       } else {
  //         label.removeClass('highlight');
  //       }
  //     } else if (e.type === 'focus') {

  //       if ($this.val() === '') {
  //         label.removeClass('highlight');
  //       }
  //       else if ($this.val() !== '') {
  //         label.addClass('highlight');
  //       }
  //     } else if (e.type === 'change') {
  //       if ($this.val() === '' || $this.val() == "NULL") {
  //         console.log("$this.val() === 'NULL'");
  //         label.removeClass('active highlight');
  //         $('input[name="cusAdd"]').val('');

  //       } else {
  //         label.addClass('active highlight');

  //         if ($this.attr('name') === 'city') {

  //           // 获取选中的选项的文本值
  //           var selectedOption = $(this).children("option:selected").text();

  //           // 将选项的文本值设置为输入框的值
  //           $('input[name="cusAdd"]').val(selectedOption);

  //           $('input[name="cusAdd"]').prev('label').addClass('active');


  //         }
  //       }
  //     }

  //   });

  //   //     // checkbox message 特效
  //   //    $('#tooltip-toggle').on('change', function () {
  //   //     console.log("$('#tooltip-toggle'):" + $('#tooltip-toggle').prop('checked'));
  //   //     if ($(this).prop('checked')) {
  //   //         console.log("this:.is(':checked')");
  //   //         $('.tooltip-content').removeClass('hidden').delay(1000).queue(function (next) {
  //   //             $(this).addClass('hidden');
  //   //             next();
  //   //         });
  //   //     } else {
  //   //         $('.tooltip-content').addClass('hidden');
  //   //     }
  //   // });


  // });












