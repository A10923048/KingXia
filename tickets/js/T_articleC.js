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

    //觸發編輯按鈕OFF功能
    $('#editBtn').trigger('click').prop('checked', false);


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
    

    //編輯按鈕ON_OFF功能
    $('#editBtn').on('click', function() {
            
            let value = $(this).prop('checked');

            console.log(value);

            let inputs = $(".settings").find('.form-control');

            //當編輯按鈕OFF
            if (!value) {
                //讓inputs無法輸入
                inputs.each(function() {
                    $(this).prop('disabled', true).addClass('off');
                });
            } 
            //當編輯按鈕ON
            else {
                //讓inputs可輸入
                inputs.each(function() {
                    $(this).prop('disabled', false).removeClass('off');
                });

            } 
    
    })
    
    // 使用者資料傳入
    get_send(datas);  
  

});
