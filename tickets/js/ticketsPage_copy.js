$(document).ready(function () {

    // 白天夜晚模式
    $('.mode-switch').click(function () {
        $('html').toggleClass('dark');
        $(this).toggleClass('active');
    });

    // list or grid 模式
    $('.list-view').click(function () {
        $('.grid-view').removeClass('active');
        $(this).addClass('active');
        $('.project-boxes').removeClass('jsGridView').addClass('jsListView');
    });

    $('.grid-view').click(function () {
        $(this).addClass('active');
        $('.list-view').removeClass('active');
        $('.project-boxes').removeClass('jsListView').addClass('jsGridView');
    });

    //
    $('.messages-btn').click(function () {
        $('.messages-section').addClass('show');
    });

    $('.messages-close').click(function () {
        $('.messages-section').removeClass('show');
    });

    // 放置"signup"屬性表open哪個頁面
    $('#login').click(function () {
        let parent = $(this).parent().parent();
        if (!parent.hasClass('slide-up')) {
            parent.addClass('slide-up');
        } else {
            $('#signup').parent().addClass('slide-up');
            parent.removeClass('slide-up');
        }
    });

    $('#signup').click(function () {
        let parent = $(this).parent();
        if (!parent.hasClass('slide-up')) {
            parent.addClass('slide-up');
        } else {
            $('#login').parent().parent().addClass('slide-up');
            parent.removeClass('slide-up');
        }
    });


    
    
    

    // ↓↓↓↓↓↓↓↓↓ 登入+註冊頁面 ↓↓↓↓↓↓↓↓↓ //

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
            $("#sendRegistered").click(function () { // 當送出按鈕被點擊時

                $('.tab-content form').submit(function (event) {

                    // 阻止表單的提交行為
                    event.preventDefault();

                    let inputValues = []; // 用於存儲 input 值的列表

                    // 對於每個 input 元素
                    $(".tab-content input").each(function () {
                        var value = $(this).val(); // 獲取 input 的值

                        console.log("value:" + value);

                        if (value.trim() !== "") { // 如果值不為空（去除頭尾空格後）

                            console.log("value:" + value);
                            inputValues.push(value); // 添加到列表中

                        }

                    });

                    console.log(JSON.stringify(inputValues, null, 2));

                });

            });

            // $("#sendRegistered1").click(function () { // 當送出按鈕被點擊時

            //     $('#content1 form').submit(function (event) {

            //         console.log("進入#content1 form");

            //         // 阻止表單的提交行為
            //         event.preventDefault();

            //         let send_item=[];

            //         // 對於每個 input 元素
            //         $("#content1").find("input , select").each(function () {

            //             console.log("進入#content1 ");

            //             let  value = $(this).val(); // 獲取 input 的值

            //             //   console.log("進入#content1:");

            //             if (value.trim() !== "" || value.validity.valid) { // 如果值不為空（去除頭尾空格後）
                      

            //                 let inputValues = {
            //                     cusName: $("input[name='cusName']").val(),
            //                     ctCode: $('select[name="city"]').val(),
            //                     tel: $("input[name='tel']").val(),
            //                     fax: $(" input[name='fax']").val(),
            //                     cusAdd: $("input[name='cusAdd']").val(),
            //                     gun: $("input[name='gun']").val()
            //                 };

            //                 console.log("cusName:" + $("input[name='cusName']").val());
            //                 console.log("ctCode:" + $(' select[name="city"]').val());
            //                 console.log("tel:" + $("input[name='tel']").val());
            //                 console.log("fax:" + $(" input[name='fax']").val());
            //                 console.log("cusAdd:" + $("input[name='cusAdd']").val());
            //                 console.log("gun:" + $("input[name='gun']").val());
                            


                           

            //                 console.log("inputValues:" + inputValues);

            //                 console.log("inputValues:" + JSON.stringify(inputValues, null, 2));

            //             }

            //             send_item.push(inputValues); // 添加到列表中
            //             //清空
            //             inputValues = {};


            //             console.log("send_item:" + JSON.stringify(send_item, null, 2));

            //         });

            //      });

            
            //     //頁面跳轉
                
            //     // 移除当前步骤的活动状态，添加下一个步骤的活动状态
            //     $('.tab.active').removeClass('active').next('.tab').addClass('active');

            //     // 获取目标内容的 ID
            //     var target = $('.tab.active').children('a').attr('href');

            //     // 隐藏除目标内容以外的所有内容
            //     $('.tab-content > div').not(target).hide();

            //     // 显示目标内容
            //     $(target).fadeIn(600);

                

            // });

            
            
            //註冊帳號"送出"按鈕1
            
            
            
        //  $(".next").click(function (event) { // 當送出按鈕被點擊時

        //                 // 阻止表單的提交行為
        //                 event.preventDefault();

        //     $('#content1 form').submit(function (event) {

        //                 console.log("進入#content1 form");
    
    
        //                 let send_item=[];
    
        //                 // 對於每個 input 元素
        //                 $("#content1").find("input , select").each(function () {
    
        //                     console.log("進入#content1 ");
    
        //                     let  value = $(this).val(); // 獲取 input 的值
    
        //                     //   console.log("進入#content1:");
    
        //                     if (value.trim() !== "" || value.validity.valid) { // 如果值不為空（去除頭尾空格後）
                          
        //                     }
    
        //                     send_item.push(inputValues); // 添加到列表中
        //                     //清空
        //                     inputValues = {};
    
    
        //                     console.log("send_item:" + JSON.stringify(send_item, null, 2));
    
        //                 });
    
        //              });
    
                
        //             //頁面跳轉
                    
        //             // 移除当前步骤的活动状态，添加下一个步骤的活动状态
        //             $('.tab.active').removeClass('active').next('.tab').addClass('active');
    
        //             // 获取目标内容的 ID
        //             var target = $('.tab.active').children('a').attr('href');
    
        //             // 隐藏除目标内容以外的所有内容
        //             $('.tab-content > div').not(target).hide();
    
        //             // 显示目标内容
        //             $(target).fadeIn(600);
    

        //     });


            // 当点击下一步按钮时
           
            //  $(document).on("click", ".next", function() {
              $("#next1").click(function () {


                // 阻止表单的提交行为
                 //event.preventDefault();

                // 初始化一个变量来记录是否所有输入字段都通过了验证
                let allFieldsValid = true;

                // 对于每个输入元素
                $(this).parent().parent().find("input").each(function () {

                    

                     var inputName = $(this).attr("name");
                        var inputValue = $(this).val();
                        console.log("Input Name: " + inputName + ", Input Value: " + inputValue);

                    if (this.validity.valid == false ||  $(this).val().trim() == "") {

                        console.log("this.validity.valid:"+ this.validity.valid);
                        console.log("this.validity.valid:"+ this.validity.valid);

                        // 标记为不通过验证
                        allFieldsValid = false;
                        // 显示警告或其他提示
                        // 这里可以根据需要进行相应的提示操作，比如添加一个警告样式、显示一个提示信息等
                        $(this).addClass("invalid-field").focus();
                        console.log("input " + inputName + " is not valid");
                        return false;

                        console.log( allFieldsValid);
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

            // $("#next2").click(function (event) {


            //     // 阻止表单的提交行为
            //      //event.preventDefault();

            //     // 初始化一个变量来记录是否所有输入字段都通过了验证
            //     let allFieldsValid = true;

            //     // 对于每个输入元素
            //     $(this).parent().parent().parent().find("input").each(function () {

                    

            //          var inputName = $(this).attr("name");
            //             var inputValue = $(this).val();
            //             console.log("Input Name: " + inputName + ", Input Value: " + inputValue);

            //         if (this.validity.valid == false ||  $(this).val().trim() == "") {

            //             console.log("this.validity.valid:"+ this.validity.valid);
            //             console.log("this.validity.valid:"+ this.validity.valid);

            //             // 标记为不通过验证
            //             allFieldsValid = false;
            //             // 显示警告或其他提示
            //             // 这里可以根据需要进行相应的提示操作，比如添加一个警告样式、显示一个提示信息等
            //             $(this).addClass("invalid-field").focus();
                        

            //             console.log( allFieldsValid);
            //         } else {
            //             console.log("inputValue.patternMismatch==false")
            //             allFieldsValid = true;
            //             // 如果当前元素通过了验证，则移除之前可能添加的警告样式
            //             $(this).removeClass("invalid-field");
            //             console.log( allFieldsValid);
            //         }
            //         console.log( allFieldsValid);

            //     });

            //     // 如果所有字段都通过了验证
            //     if (allFieldsValid) {
            //         // 首先你可以在这里执行一些额外的操作，比如保存表单数据等

            //         // 然后进行页面跳转
            //         $('.tab.active').removeClass('active').next('.tab').addClass('active');

            //         // 获取目标内容的 ID
            //         var target = $('.tab.active').children('a').attr('href');

            //         // 隐藏除目标内容以外的所有内容
            //         $('.tab-content > div').not(target).hide();

            //         // 显示目标内容
            //         $(target).fadeIn(600);
            //     } else {
            //         // 如果有字段未通过验证，你可以在这里执行相应的操作，比如显示一条总体提示信息
            //         console.log("有字段未通过验证，请填写所有必填字段！");
            //     }
            // });



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


            //註冊帳號"送出"按鈕2
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
                $("#content3").find("input , select").each(function () {

                    let  value = $(this).val(); // 獲取 input 的值

                    //   console.log("進入#content1:");

                    if (value.trim() !== "" || value.validity.valid) { // 如果值不為空（去除頭尾空格後）
                    
                        console.log("#content3格式無誤");
                    }

                });

            
               // let send_item=[];
                //let inputValues ={} ;

                let  inputValues = {
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

                    name: $("input[name='Cname']").val(),
                    post: $('input[name="post"]').val(),
                    tel: $("input[name='tel']").val(),
                    ext: $(" input[name='ext']").val(),
                    mobile: $("input[name='mobile']").val(),
                    email: $("input[name='email']").val()

                };

                
                console.log("inputValues:" + JSON.stringify(inputValues, null, 2));
    

                //send_item.push(inputValues); // 添加到列表中

                
                console.log(inputValues);

                //清空
                inputValues = {};
                

                        
                   // send_item.push(inputValues); // 添加到列表中

                        // console.log("cusName:" + $("input[name='cusName']").val());
                        // console.log("ctCode:" + $(' select[name="city"]').val());
                        // console.log("tel:" + $("input[name='tel']").val());
                        // console.log("fax:" + $(" input[name='fax']").val());
                        // console.log("cusAdd:" + $("input[name='cusAdd']").val());
                        // console.log("gun:" + $("input[name='gun']").val());

                // });

                //  console.log("inputValues:" + inputValues);

                //  console.log("inputValues:" + JSON.stringify(inputValues, null, 2));


                 
                //  inputValues = {};//清空
                

                //  console.log(send_item);


                //獲取#content2表單內容

                // 對於每個 input 元素
                // $("#content2").find("input , select").each(function () {

                //     let  value = $(this).val(); 

                //     if (value.trim() !== "" || value.validity.valid) { // 如果值不為空（去除頭尾空格後）
                

                //       inputValues = {

                //             bank:   $("input[name='bankCount']").val()+ 
                //                     $('select[name="bankName"]').val()+
                //                     $("input[name='branchName']").val()+
                //                     $(" input[name='bankCName']").val()
                //         };

                //         console.log("bankCount:" + $("input[name='bankCount']").val());
                        
                //         console.log("bankName:" + $("input[name='bankName']").val());
                        
                //         console.log("branchName:" + $("input[name='branchName']").val());
                        
                //         console.log("bankCName:" + $("input[name='bankCName']").val());
                        


                //         console.log("inputValues:" + inputValues);

                //         console.log("inputValues:" + JSON.stringify(inputValues, null, 2));

                //     }
                    
                
                // send_item.push(inputValues); // 添加到列表中

                // });

                // //清空
                // inputValues = {};
                // console.log("send_item:" + JSON.stringify(send_item, null, 2));

                
                //獲取#content3表單內容

                // 對於每個 input 元素
                // $("#content3").find("input , select").each(function () {

                //         inputValues = {
                //             name: $("input[name='Name']").val(),
                //             post: $('select[name="post"]').val(),
                //             tel: $("input[name='tel']").val(),
                //             ext: $(" input[name='ext']").val(),
                //             mobile: $("input[name='mobile']").val(),
                //             email: $("input[name='email']").val()
                //         };

                        
                // console.log("inputValues:" + inputValues);
                //         // console.log("cusName:" + $("input[name='cusName']").val());
                //         // console.log("ctCode:" + $(' select[name="city"]').val());
                //         // console.log("tel:" + $("input[name='tel']").val());
                //         // console.log("fax:" + $(" input[name='fax']").val());
                //         // console.log("cusAdd:" + $("input[name='cusAdd']").val());
                //         // console.log("gun:" + $("input[name='gun']").val());
                        
                // });
                
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
            });





});


/**旅行社註冊時傳回後端 */

// let S_CUS_RIS {

//     cusName;
    
//     /** 縣市 */
//     ctCode;
    
//     /** 旅行社電話 */
//    tel;
    
//     /** 傳真 */
//     fax;
    
//     /** 旅行社地址 */
//    cusAdd;
    
//     /** 統編 */
//     gun;
    
//     /** 付款資訊 */
//      bank;

//      att {
//         /** 聯絡人姓名 */
//          name;
        
//         /** 職稱 */
//         post;
        
//         /** 電話 */
//          tel;
        
//         /** 分機 */
//          ext;
        
//         /** 手機 */
//          mobile;
        
//         /** email */
//          email;
//      }
    

// }