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


        //           步驟條                    //
        
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
         
                
            
            //<旅客資料>按鈕
            //$(document).on("click", ".next", function(event) {


            //註冊步驟按鈕 轉換
            $('.tab a').on('click', function (e) {

                e.preventDefault();

                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');

                target = $(this).attr('href');

                $('.tab-content > div').not(target).hide();

                $(target).fadeIn(600);

            });

            //form

            // 預設 隱藏除了第一個 以外的 tab-content
            $('.tab-content > div:not(:first-child)').hide();


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
                    if ($this.val() === '' || $this.val()=="NULL") {
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
            $("#next1").click(function (event) {

                // 阻止表单的提交行为
                    event.preventDefault();

                let allFieldsValid = true;
                let form = $(this).closest("form");

                // 对于每个输入元素
                    form.find("input").each(function () {

                        var inputName = $(this).attr("name");
                        var inputValue = $(this).val();
                        console.log("Input Name: " + inputName + ", Input Value: " + inputValue);

                    if (this.validity.valid == false) {

                        console.log("this.validity.valid:"+ this.validity.valid);
                        console.log("this.validity.valid:"+ this.validity.valid);

                        // 标记为不通过验证
                        allFieldsValid = false;
                        // 显示警告或其他提示
                        // 这里可以根据需要进行相应的提示操作，比如添加一个警告样式、显示一个提示信息等
                        // $(this).addClass("invalid-field").focus();
                        console.log("input " + inputName + " is not valid");

                        this.reportValidity();
                        return false;

                    } 
                    console.log( allFieldsValid);

                });

                // 如果所有字段都通过了验证
                if (allFieldsValid) {
                    // 首先你可以在这里执行一些额外的操作，比如保存表单数据等

                    // 然后进行页面跳转
                    $('.tab.active').removeClass('active').next('.tab').addClass('active');

                    // 获取目标内容的 ID
                    var target = $('.tab.active').children('a').attr('href');

                    // 隐藏除目标内容以外的所有内容
                    $('.tab-content > div').not(target).hide();

                    // 显示目标内容
                    $(target).fadeIn(600);

                } else {
                    // 如果有字段未通过验证，你可以在这里执行相应的操作，比如显示一条总体提示信息
                    console.log("有字段未通过验证，请填写所有必填字段！");
                }
            });

            $("#next2").click(function (event) {

                // 阻止表单的提交行为
                    event.preventDefault();

                // 初始化一个变量来记录是否所有输入字段都通过了验证
                let allFieldsValid = true;
                let form = $(this).parent().parent().parent().find("form");

                // 对于每个输入元素
                    form.find("input").each(function () {

                    console.log("#next2");

                        var inputName = $(this).attr("name");
                        var inputValue = $(this).val();
                        console.log("Input Name: " + inputName + ", Input Value: " + inputValue);

                    if (this.validity.valid == false ||  $(this).val().trim() == "") {

                        console.log("valid == false:");

                        // 标记为不通过验证
                        allFieldsValid = false;
                        // 显示警告或其他提示
                        // 这里可以根据需要进行相应的提示操作，比如添加一个警告样式、显示一个提示信息等
                        // $(this).addClass("invalid-field").focus();
                        console.log("input " + inputName + " is not valid");

                        this.reportValidity();
                        return false;

                        //console.log( allFieldsValid);
                    } 
                    console.log( allFieldsValid);

                });

                // 如果所有字段都通过了验证
                if (allFieldsValid) {
                    // 首先你可以在这里执行一些额外的操作，比如保存表单数据等

                    // 然后进行页面跳转
                    $('.tab.active').removeClass('active').next('.tab').addClass('active');

                    // 获取目标内容的 ID
                    var target = $('.tab.active').children('a').attr('href');

                    // 隐藏除目标内容以外的所有内容
                    $('.tab-content > div').not(target).hide();

                    // 显示目标内容
                    $(target).fadeIn(600);
                } else {
                    // 如果有字段未通过验证，你可以在这里执行相应的操作，比如显示一条总体提示信息
                    console.log("有字段未通过验证，请填写所有必填字段！");
                }
            });

            $(".prev").click(function (event) { // 當送出按鈕被點擊時

                // 阻止表單的提交行為
                event.preventDefault();

                //頁面跳轉
                        
                $('.tab.active').removeClass('active').prev('.tab').addClass('active');

                // 获取目标内容的 ID
                var target = $('.tab.active').children('a').attr('href');

                // 隐藏除目标内容以外的所有内容
                $('.tab-content > div').not(target).hide();

                // 显示目标内容
                $(target).fadeIn(600);

            });



    
    })
  
  
  
  
 
  
  
  
  
  
  
  
  