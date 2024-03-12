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
  
   
     articleBtn("articleA");
  

    //           Step Form with Progress Bar                     //
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches

        $(".next").click(function(){
            if(animating) return false;
            animating = true;
            
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            
            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            
            //show the next fieldset
            next_fs.show(); 
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50)+"%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                'transform': 'scale('+scale+')',
                // 破解"previous"按鈕 沒有恢復到原本位置的原因
                // 'position': 'absolute'
            });
                    next_fs.css({'left': left, 'opacity': opacity});
                }, 
                duration: 800, 
                complete: function(){
                    current_fs.hide();
                    animating = false;
                }, 
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".previous").click(function(){
            if(animating) return false;
            animating = true;
            
            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();
            
            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
            
            //show the previous fieldset
            previous_fs.show(); 
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1-now) * 50)+"%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({'left': left});
                    previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
                }, 
                duration: 800, 
                complete: function(){
                    current_fs.hide();
                    animating = false;
                }, 
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });

            
        });


    // "付款細項" 按鈕功能
    $("#toggleButton").click(function(){

       
       
        var $button = $(this); // 保存按钮元素的引用

        var $target = $($(this).data("bs-target")); // 获取目标折叠内容的jQuery对象

            $target.collapse("toggle"); // 切换折叠内容的展开状态
            console.log("$target.collapse(toggle):"+$target.collapse("toggle"));

        //按鈕open
        if($(this).attr("aria-expanded") == "true") {

            $(this).find("ul").addClass("show active");
            
             $(this).removeClass("collapsed");

            //螢幕大小
            if($(window).width() >=1500) {
                console.log("window.width:"+$(window).width());
                //滑動動畫
                $("html, body").animate({
                    scrollTop: $button.offset().top-500
                }, 600);
            }
            //螢幕大小
            if($(window).width() <1500) {

                console.log("window.width:"+$(window).width());
                
                //滑動動畫
                $("html, body").animate({
                    scrollTop: $button.offset().top-80
                }, 600);
            }
         
        }else{ //再按一次按鈕時 

            $(this).attr("aria-expanded") 

            $(this).find("ul").removeClass("show");
            console.log("find(ul)"+$(this).find("ul").addClass("show active"));
            $(this).addClass("collapsed");

            //螢幕大小
            if($(window).width() >1500) {
                
                //滑動動畫
                $("html, body").animate({
                    scrollTop: $button.offset().top-800
                }, 700);
            }
            //螢幕大小
            if($(window).width() <1500) {
                
                //滑動動畫
                $("html, body").animate({
                    scrollTop: $button.offset().top-600
                }, 600);
            }
        }
        
    });


    //"付款細項" 表格 內容計算

    // <th id="ticCount">5 </th>
    // <td id="totalPrice">$1000</td>

    let ticCount = parseInt($("#ticCount").text().trim());
    let totalPrice = parseInt($("#totalPrice").text().trim());
    
    console.log("ticCount:" + ticCount);
    console.log("totalPrice:" + totalPrice);

    let payTcount= totalPrice / 650;

    if (payTcount==ticCount){
        $("#AduitCount").text(payTcount);
        $("#babyCount").text("0");
        //$("#AduitPrice").text("$"+totalPrice);

    }else{
        $("#AduitCount").text(payTcount);
        let babyCount=ticCount-payTcount;
        $("#babyCount").text(babyCount);
        
    }

    console.log("babyCount:" +  $("#babyCount").text());
    console.log("AduitCount:" +  $("#AduitCount").text());




  
  
  })
  
  
  
  
 
  
  
  
  
  
  
  
  