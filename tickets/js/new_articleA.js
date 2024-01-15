// 網頁的主程式寫在這裡


  
    //           Article A- 立即訂票轉換頁面按鈕               //
    let openArticleB = function () {
      // 關閉當前已打開的頁面
      $(".tab-pane").removeClass("show active");
  
      // 打開新的頁面
      $("#articleB").addClass("show active");
  
      // 如果需要手動跳轉到 #articleB 頁面
      window.location.href = "#articleB";
    }
  
$(document).ready(function () {

    
})