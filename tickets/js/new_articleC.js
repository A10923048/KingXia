
  //    置於$(document).ready(function () 之外的程式碼            //

            //          ArticleC警告框-關閉按鈕               //
            let closeAlertC = function () {
                $("#custom-alert-c").hide();
            
            }
            
  //    置於$(document).ready(function () 之外的程式碼 ENd              //
  
  $(document).ready(function () {
    $("#search-hx-js").click(function () {

      //                                  檢查"id"和"phone"是否為空                        //
      let hx_id = $("#hx-id").val();
      let hx_phone = $("#hx-phone").val();
      let T = true;
      let text_show = "";


      // 判断总字数
      // let hx_id_length = hx_id.length;
      // let hx_phone_length = hx_phone.length;

      // 轉換 hx_id 的英文字母為大寫
      // hx_id = hx_id.toUpperCase();


      // 確認第1個字是否為英文字母
        // if (/^[A-Z]/.test(hx_id)) {
        //   console.log("第1個字為英文字母");
        //   if (hx_id_length >= 10) {
        //     console.log("台湾");
            
        // } else {
        //   console.log("大陸");
        // }
        // } else {
        //   console.log("第1個字不為英文字母");
        // }

    
      

     //檢查"article表格內的值"是否為空
     if (!hx-id) {
      T = false;
      text_show = text_show + "身分證/護照:未填寫<br>"
     
    }

    if (!hx-phone) {
      T = false;
      text_show = text_show + "電話:未填寫<br>"
    }


    if (!T) {
      $("#alert-text-c").html(text_show);
      $("#custom-alert-c").show();

    }
    else {

    }


    
  })
})