$(document).ready(function () {


    // ↓↓↓↓↓↓↓↓↓ 登入+註冊頁面 ↓↓↓↓↓↓↓↓↓ //

            $('#login').on('click', function(e) {
                let parent = $(e.target).parent().parent();
                $(parent).removeClass('slide-up');
                $(parent).siblings().addClass('slide-up');
            });

            $('#signup').on('click', function(e) {
                let parent = $(e.target).parent();
                $(parent).removeClass('slide-up');
                $(parent).siblings().addClass('slide-up');
            });


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


            //沒有統一編號checkbox
            $('input[name="noGun"]').change(function() {
                if(this.checked) {
                    // 复选框被选中时执行的操作
                    console.log("复选框被选中");
                    $('#gun').text('身分證');

                } else {
                    // 复选框取消选中时执行的操作
                    console.log("复选框未被选中");
                    $('#gun').text('統一編號');
                }
            });
            
        
            //註冊帳號"送出"按鈕
           
            //$(document).on("click", ".next", function(event) {
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


            //註冊帳號"送出"
            // $("#sendRegistered2").click(function (event) { // 當送出按鈕被點擊時

            //     // 阻止表單的提交行為
            //     event.preventDefault();

            //     // 對於每個 input 元素
            //     $("#content2").find("input , select").each(function () {

            //         console.log("進入#content2 ");

            //         let  value = $(this).val(); // 獲取 input 的值

            //         //   console.log("進入#content1:");

            //         if (value.trim() !== "" || value.validity.valid) { // 如果值不為空（去除頭尾空格後）
                    
                        
                            

            //         }

            //     });

            //     //頁面跳轉
                    
            //     $('.tab.active').removeClass('active').next('.tab').addClass('active');

            //     // 获取目标内容的 ID
            //     var target = $('.tab.active').children('a').attr('href');

            //     // 隐藏除目标内容以外的所有内容
            //     $('.tab-content > div').not(target).hide();

            //     // 显示目标内容
            //     $(target).fadeIn(600);

            // });


            
            //註冊帳號"送出"按鈕3
            $("#sendRegistered3").click(function (e) { // 當送出按鈕被點擊時

                  // 阻止表單的提交行為
                  e.preventDefault();

                // 對於每個 input 元素
                // 初始化一个变量来记录是否所有输入字段都通过了验证
                let allFieldsValid = true;
                let form = $(this).parent().parent().parent().find("form");

                // 对于每个输入元素
                 form.find("input").each(function () {

                    console.log("#next3");

                     var inputName = $(this).attr("name");
                        var inputValue = $(this).val();
                        console.log("Input Name: " + inputName + ", Input Value: " + inputValue);

                    if (this.validity.valid == false ||  $(this).val().trim() == "") {

                        console.log("valid:"+this.validity.valid);

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

                if (allFieldsValid) {
                                        let att ={

                                            name: $("input[name='Cname']").val(),
                                            post: $('input[name="post"]').val(),
                                            tel: $("input[name='tel']").val(),
                                            ext: $(" input[name='ext']").val(),
                                            mobile: $("input[name='mobile']").val(),
                                            email: $("input[name='email']").val()
                                        };

                                        let  S_CUS_RIS = {
                                            cusName: $("input[name='cusName']").val(),
                                            ctCode: $('select[name="city"]').val(),
                                            tel: $("input[name='Ctel']").val(),
                                            fax: $(" input[name='fax']").val(),
                                            cusAdd: $("input[name='cusAdd']").val(),
                                            gun: $("input[name='gun']").val(),


                                            bank: "銀行帳號:" + $("input[name='bankCount']").val() +
                                            "\n銀行名稱:" + $('input[name="bankName1"]').val() +
                                            $("input[name='branchName2']").val() + "分行" +
                                            "\n戶名:" + $("input[name='bankCName3']").val(),

                                            att:att
                                        };
            
                console.log("S_CUS_RIS:" + JSON.stringify(S_CUS_RIS, null, 2));
                //清空
                inputValues = {};

                let mesg = "OK";  
                if (mesg=="OK"){

                    $("#content4").show();
                }
                                        

                 //傳給後台
                    // $.ajax({
                    //   url: "/kingxia/sea/searchorm", // 后台处理数据的 URL
                    //   type: "POST", // 使用 POST 请求发送数据
                    //   //contentType:"application/json",//指定格式(這次不用)
                    //   data:S_CUS_RIS,//塞入整理好的資料
                    //   success: function (mesg) {    // 後台回傳
                                                        
                                                        
                                                        if (mesg=="OK"){

                                                            $('.tab.active').removeClass('active').next('.tab').addClass('active');

                                                            // 获取目标内容的 ID
                                                            var target = $('.tab.active').children('a').attr('href');
                                        
                                                            // 隐藏除目标内容以外的所有内容
                                                            $('.tab-content > div').not(target).hide();
                                        
                                                            // 显示目标内容
                                                            $(target).fadeIn(600);
                                                        }
                        //                              },
                        //   error: function (error) {
                        //   // 请求失败时的处理
                        //   console.error("数据发送失败：", error);    
                        // },
                        //   beforeSend: function (xhr) {
                        //     // 添加CSRF令牌到请求头部
                        //     xhr.setRequestHeader(csrfHeader, csrfToken);
                        //   }
                        // });

                }
            });

            //"登入"按鈕
            $("#loginBtn").click(function () {
                // 创建一个空对象，用于存储输入的值
                let send_item = {};

                // 获取帐号输入框的值，并存储在对象中
                send_item.account = $(".loginForm input[type='account']").val();

                // 获取密码输入框的值，并存储在对象中
                send_item.password = $(".loginForm input[type='password']").val();

                console.log(send_item);

                console.log(JSON.stringify(send_item, null, 2));

                // 这里可以将 send_item 对象用于发送给服务器或其他操作

               

                if (result) {
                    let userInput = customPrompt("这是一个自定义的提示消息。请输入您的姓名：", "John Doe");
                    console.log("用户输入的姓名是：" + userInput);
                }


            });

});
