$(document).ready(function () {



    
    //let datas =null;

    let datas = {

        "cusName": "旅行社名稱",
        "ctCode": "TAIPEI",
        "tel": "02-111-222-333",
        "fax": "02-123-456-789",
        "cusAdd": "台北市信義區大安路一段123號",
        "gun": "A123456789",
        "bank": "銀行帳號:1233414\n銀行名稱:上海\n台北分行\n戶名:某某旅行社",
        "att":  {
            "attname": "王曉明",
            "attpost": "經理",
            "atttel": "02-123-456-789",
            "attext": "1234",
            "attmobile": "0912345678",
            "attemail": "A@yahoo.com.tw",
        }
    };
//////////////////////////////////////測試資料如///////////////////////////////////////////

    
    let get_send = function (datas) {

                    //             抓取 旅行社人 資料                //
                    $("input[name='cusName']").val(datas.cusName);    
                    $("input[name='Ctel']").val(datas.tel);
                    $(" input[name='fax']").val(datas.fax);
                    $("input[name='cusAdd']").val(datas.cusAdd);
                    $('select[name="city"]').val(datas.ctCode);
                    $("input[name='input_gun']").val(datas.gun);

                    let guns=datas.gun;
                    // 身分證 或 統編判斷
                    if(guns.length>8){
                        console.log("字符串长度大于 8 个字符");
                        $('input[name="noGun"]').prop("checked",true).trigger("change");
                    }else{
                        console.log("字符串长度不大于 8 个字符");
                        $('input[name="noGun"]').prop("checked",false).trigger("change");
                    }

                    //             抓取 匯款資料 資料                //
                    let bankInfo = datas.bank.split("\n");

                    // 分别为每个表单元素设置值
                    $("input[name='bankCount']").val(bankInfo[0].split(":")[1]);
                    $("input[name='bankName1']").val(bankInfo[1].split(":")[1]);
                    $("input[name='branchName2']").val(bankInfo[2].split("分行")[0]); // 如果第三行不存在，则设置为空字符串
                    $("input[name='bankCName3']").val(bankInfo[3].split(":")[1]);


                    //             抓取 聯絡人 資料                //
                    let atts = datas.att;
                    $.each(atts, function (key, value) {
                        // console.log("属性名称:", key);
                        // console.log("属性值:", value);
                        if (key === "attname") {
                            $("input[name='Cname']").val(value);
                        } else if (key === "attpost") {
                            $("input[name='post']").val(value);
                        } else if (key === "atttel") {
                            $("input[name='tel']").val(value);
                        } else if (key === "attext") {
                            $("input[name='ext']").val(value);
                        } else if (key === "attmobile") {
                            $("input[name='mobile']").val(value);
                        } else if (key === "attemail") {
                            $("input[name='email']").val(value);
                        }
                    });


    };

     //沒有統一編號checkbox
     $('input[name="noGun"]').on("change",function() {

                    if(this.checked) {

                        console.log("复选框被选中");
                        $('#gun').text('身分證');
                        $('#gunlab').text('身分證');


                    } else {
                        // 复选框取消选中时执行的操作
                        console.log("复选框未被选中");
                        $('#gun').text('統一編號');
                        $('#gunlab').text('統編');
                    }
    });
    


    let inputs = function(x){

        let inputs = $(".settings").find('.form-control');

        if(!x){
            //讓inputs無法輸入
            inputs.each(function() {

                $(this).prop('disabled', true).addClass('off');
            });
                
        }else{

            inputs.each(function() {
                $(this).prop('disabled', false).removeClass('off');
            });
        }



    };

    // 編輯按鈕ON_OFF功能
    $('#editBtn').on('click', function(event) {

        let value = $(this).prop('checked');
        let allFieldsValid = true;

        console.log(value);

        let inputs = $(".settings").find('.form-control');

        // 當編輯按鈕OFF
        if (!value) {

            $('#formC').on('submit', function(event) {

                // 阻止默认提交行为
                event.preventDefault(); 
               
            });

            //讓inputs無法輸入
            inputs.each(function() {

                if (this.validity.valid == false) {

                    console.log("this.validity.valid:"+ this.validity.valid);

                    // 标记为不通过验证
                    allFieldsValid = false;

                    // 显示警告或其他提示
                    this.reportValidity();

                    //讓編輯按鈕ON 才能繼續編輯
                    $('#editBtn').prop('checked',true); 
                    
                    console.log(value);

                    allFieldsValid = false;
                    return false;

                } 

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
                        gun: $("input[name='input_gun']").val(),


                        bank: "銀行帳號:" + $("input[name='bankCount']").val() +
                        "\n銀行名稱:" + $('input[name="bankName1"]').val() +
                        $("input[name='branchName2']").val() + "分行" +
                        "\n戶名:" + $("input[name='bankCName3']").val(),

                        att:att
                    };

                    console.log("S_CUS_RIS:" + JSON.stringify(S_CUS_RIS, null, 2));
                    //清空
                    inputValues = {};
                    
                }
                
                $('#eSpan').text('編輯完成');
                
                //設定所有 input 關閉輸入
                $(this).prop('disabled', true).addClass('off');

            });
        } 
        // 當編輯按鈕ON
        else {

            //警示
            $('#eSpan').text('編輯完成後\n請將按鈕切換成OFF');

            //讓inputs可輸入
            inputs.each(function() {
                $(this).prop('disabled', false).removeClass('off');
            });
            
        } 

    });
 
    // 使用者資料傳入
    get_send(datas);  

    $('#editBtn').prop('checked', false);
     inputs (false);

});
