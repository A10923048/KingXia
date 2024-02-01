// 網頁的主程式寫在這裡
$(document).ready(function() {

    $(".datepicker").datepicker({
      prevText: '<i class="fa fa-fw fa-angle-left"></i>',
      nextText: '<i class="fa fa-fw fa-angle-right"></i>',
      firstDay:0,
      onSelect:function(d){
        console.log(d);
      }

    });

    
    // 票價表-按鈕 open/close
    $("#Tprice").hide();

    $("#openTprice").click(function(){
        console.log("123");
        $("#Tprice").toggle("fold",500);
    });

      // 注意事項-按鈕 open/close
    $("#Tattention").hide();

    $("#openTattention").click(function(){
        console.log("123");
        $("#Tattention").toggle("fold",500);
    });


  })
  
  