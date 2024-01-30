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

//    置於$(document).ready(function () 之外的程式碼               //

//            Article NAVBAR- 轉換按鈕功能                    //
let articleBtn = function (tabId) {
    $("#articleAA").hide();
  
    // 檢查是否需要關閉 #articleAA
    if ($("#articleAA").hasClass("show")) {
      // 關閉 #articleAA
      $("#articleAA").removeClass("show active");
    }
  
    // 關閉當前已打開的頁面
    $(".tab-pane").removeClass("show active");
  
    // 打開新的頁面
    $(`#${tabId}`).addClass("show active");
  
    // 如果需要手動跳轉到新的頁面
    window.location.href = `#${tabId}`;
  }
  //  ↑↑ ↑↑ 置於$(document).ready(function () 之外的程式碼 ENd    ↑↑ ↑↑       //
  
  
  
  $(document).ready(function () {
  
  
    
   
  
    //呼叫名為 articleBtn 的函數，並將字串參數 "articleA" 傳遞給該函數
    articleBtn("articleA");
  
   
  
  
  })
  
  
  
  
 
  
  
  
  
  
  
  
  