// 網頁的主程式寫在這裡
$(document).ready(function () {


    // 票價表-按鈕 open/close
    $("#Tprice").hide();

    $("#openTprice").click(function () {
        console.log("123");
        $("#Tprice").toggle("fold", 500);
    });

    // 注意事項-按鈕 open/close
    $("#Tattention").hide();

    $("#openTattention").click(function () {
        console.log("123");
        $("#Tattention").toggle("fold", 500);
    });



    
  // 定義格式化獲取的 訂票時間 選項
  let formatDateTime = function (dateTime) {

    let year = dateTime.getFullYear();
    let month = String(dateTime.getMonth() + 1).padStart(2, '0');
    let day = String(dateTime.getDate()).padStart(2, '0');
    let hours = String(dateTime.getHours()).padStart(2, '0');
    let minutes = String(dateTime.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}, ${hours}${minutes}`;
  };

  //設置日期選擇範圍:+3個月
  $("#datePicker").on("focus", function () {
    // 在日期輸入框被打開時執行的操作
    console.log("日期輸入框被打開了！");

    // 當"查詢"按鈕被點擊時，取得當下時間
    let currentDateTime = new Date();

    // 格式化 當下時間
    let formattedTime = formatDateTime(currentDateTime);

    // // 使用split切割formattedTime
    let [datePart, timePart] = formattedTime.split(', ');

    // // 顯示切割後的結果
    // console.log("抓取的日期部分：" + datePart);
    // console.log("抓取的時間部分：" + timePart);


    //       因為datePart 是一個字串而不是日期物件，因此您無法直接使用setDate方法。
    //      相反，將其轉換為日期物件，這樣您就可以使用setDate方法了。
    //      讓當下時間形成一個物件，判斷當下月份+3後 有沒有> 12
    let currentDate = new Date();
    if (currentDate.getMonth() + 3 > 12) {
      currentDate.setMonth((currentDate.getMonth() + 3) % 12)
      //將+ 3% 12後的餘數設給:currentDate的月份
      currentDate.setFullYear(currentDate.getFullYear() + 1);
      //(先取得currentDate.年後再+1)然後丟回給currentDate的年份設定結果
    } else {
      currentDate.setMonth(currentDate.getMonth() + 3);
      //直接+3
    }


    // 設定 min 和 max 屬性
    let maxDate = currentDate.toISOString().split("T")[0];
    let minDate = datePart;

    $("#datePicker").attr("max", maxDate);
    $("#datePicker").attr("min", "2023/10/01");

    console.log("maxDate:" + maxDate);
    console.log("minDate:" + minDate);

  });


    $("#ship_result_null,#ship_result").hide();

    //選擇出發日期
    $("#datePicker").change(function() {

        // 获取日期输入框的值
        let selectedDate = $(this).val();
        // 输出所选择的日期
        console.log("所选择的日期是：" + selectedDate);

        let send_item = {
            tdate: selectedDate
        }
        console.log(JSON.stringify(send_item, null, 2));


        //ajax啟用後註解掉
        if (datas != null) {

            console.log("datas != null");
            
            $("#ship-result").empty();//不累加清空

            //方法:抓取買票人所有訂票紀錄 
            show_datas(datas, selectedDate);

            // // 顯示船班資料
            // $("#ship-result").show();
        }
        else { //接收到null時
            $("#ship_result").hide()
            $("#ship_unchoose").hide();
            $("#ship_result_null").show();
            return; // 阻止進一步執行
        }

        //傳給後台
        // $.ajax({
        //   url: "/kingxia/sea/searchorm", // 后台处理数据的 URL
        //   type: "POST", // 使用 POST 请求发送数据
        //   //contentType:"application/json",//指定格式(這次不用)
        //   data:send_item,//塞入整理好的資料
        //   success: function (datas) {    // 後台回傳
        // if (datas != null) {

        //     console.log("datas != null");
        //     $("#ship-result").empty();//不累加清空

        //     // 使用捕獲的數據更新表單內容
        //     $("#date").text("出發日期：" + formattedDate);

        //     //方法:抓取買票人所有訂票紀錄 
        //     show_datas(datas, formattedDate);

        //     // // 顯示船班資料
        //     // $("#ship-result").show();
        // }
        // else { //接收到null時
        //     $("#ship_unchoose").hide();
        //     $("#ship_result_null").show();
        //     return; // 阻止進一步執行
        // }                      

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


      });



    //日期格式轉換
    function formatDate(date) {
        var year = date.getFullYear();
        var month = (date.getMonth() + 1).toString().padStart(2, '0');
        var day = date.getDate().toString().padStart(2, '0');
        return year + '-' + month + '-' + day;
    }

    //呈現查詢結果
    let show_datas = function (datas, formattedDate) {

        
        console.log("進入show_datas: " + formattedDate);

       //用來測試自己的datas用 與後台連接後要註解
       //let Z = {};
        // let unmatchFound = 0; 
        //let d_length = Object.keys(datas).length;
        // console.log("datas.length: " + d_length);

        $("#ship-result").empty

        $.each(datas, function (key, value) {

            console.log("value.tdate: " + value.tdate);
         
            // 找到匹配的日期
            console.log("value.tdate: " + value.tdate);
            console.log("formattedDate: " + formattedDate);
            
                $("#ship-result").append(
                    '<tr class="ship-result-row">' +
                    '<td>' + key + '</td>' +
                    '<td>' + value.btime + '</td>' +
                    '<td>' + value.etime + '</td>' +
                    '<td class=""><input type="checkbox" class="checked" name="myCheckbox" value="checkbox_value"></td>' +
                    '</tr>'
                );
            

            //用來測試自己的datas用 與後台連接後要註解
            // if (value.tdate == formattedDate) {

            //     // 找到匹配的日期
            //     console.log("value.tdate: " + value.tdate);
            //     console.log("formattedDate: " + formattedDate);
            //     console.log("value.tdate == formattedDate: " + (value.tdate == formattedDate));

            //     Z[key] = value;

            //     // 添加到表格
            //     $.each(Z, function (key, value2) {
            //         // 清空現有的表格內容

            //         $("#ship-result").append(
            //             '<tr class="ship-result-row">' +
            //             '<td>' + key + '</td>' +
            //             '<td>' + value2.btime + '</td>' +
            //             '<td>' + value2.etime + '</td>' +
            //             '</tr>'
            //         );
            //          unmatchFound = false;
            //     })
            // }else {
            //     unmatchFound += 1;
            // }
            //     console.log("unmatchFound : " + unmatchFound );

            //     if (unmatchFound == d_length) {
            //         console.log("unmatchFound 的值 == datas 的量");
            //         $("#ship-result").append(
            //             '<tr>' +
            //             '<td colspan="3">' + "當日無船班" + '</td>' +
            //             '</tr>'
            //         );
            //     }

              

        });
    };



    //訂票checkbox:打勾
    $(document).on('change', 'input[type="checkbox"].checked', function() {

        if ($(this).is(':checked')) {

        let checkedCheckboxes = $('input[type="checkbox"].checked:checked');

        if (checkedCheckboxes.length > 3) {
            // 超过3个选中的复选框，显示警告模态框
            $('#myModal').modal('show');

            $(this).prop('checked', false);// 取消勾選新的核取方塊來防止它被勾選

        }else{

            console.log("checkedCheckboxes.length:"+checkedCheckboxes.length);

            if (checkedCheckboxes.length == 1) {
                $(this).attr('id', '1');
                
            }else  if (checkedCheckboxes.length == 2) {
                
                $(this).attr('id', '2');
            }else  if (checkedCheckboxes.length ==3) {
                
                $(this).attr('id', '3');
            }

            console.log("'id': " + $(this).attr('id'));
            $(".CRhide").hide();
            
            
            
            //獲取:被選中的航班資訊
            

                //被選中的航班:產生表格列
            let madeTr=function(date,shipID ,btime,etime,boxID){
                
                let htmlString = '<tr id="' + boxID +'" class="checkResult">' +
                                    '<td class="">' +
                                    '<select id="' + shipID + "-" + date+'" class="selectR" onchange="updateDate()">' +
                                    '<option value="1">最優先</option>' +
                                    '<option value="2">次優先</option>' +
                                    '<option value="3">第三優先</option>' +
                                    '</select>' +
                                    '</td>' +
                                    '<td class="">'+date+'</td>' +
                                    '<td class="">'+shipID+'</td>' +
                                    '<td class="">'+btime+"~"+etime+'</td>' +
                                    '<td class="">' + '<i class="fa-solid fa-trash-can fa-lg" style="color: #ee174c;"></i>' + '</td>' +
                                '</tr>';
    
                // 将 HTML 字符串添加到 DOM 中
                $("#checkResult").append(htmlString);

                                        };
    
                $(".checkResult_none").hide();
    
                var date = $("#datePicker").val();
                var shipID = $(this).closest('tr').find('td:eq(0)').text(); // 获取第一列的值
                var btime = $(this).closest('tr').find('td:eq(1)').text(); // 获取第二列的值
                var etime = $(this).closest('tr').find('td:eq(2)').text(); // 获取第三列的值
                var boxID = $(this).attr('id'); // 獲取第四列的ID屬性值

                console.log("日期: " + date);
                console.log('船次：', shipID);
                console.log('出發時間：', btime);
                console.log('結束時間：', etime);
                console.log('boxID：'+boxID);
                
                madeTr(date,shipID ,btime,etime,boxID);
                
          
                
                
                SRorder();
                
            }


        }

        //訂票checkbox:打勾(取消)
        if (!$(this).is(':checked')) {

            //刪除具有相同ID的"已選擇票種"列
            var boxID = $(this).attr('id');
            console.log('取消boxID：'+boxID);

            $(this).closest('.table-responsive').next().find('tr').each(function() {
                console.log(' $("#checkResult").find：'+ $("#checkResult").find('tr').each);
                if ($(this).attr('id') === boxID) {
                    $(this).remove(); // 刪除該 <tr>
                }
            });
            
        }
        


        });

    

    //删除:被選中航班的表格列
    $(document).on('click', '.fa-trash-can', function() {

        var boxID =$(this).closest("tr").attr("id");
        console.log('取消boxID：'+boxID);

        // 找到删除图标所在的行，并删除
        $(this).closest("tr").remove();
        
        $(this).closest('.table-responsive').prev().find('tr').filter(function() {
            return $(this).attr('id') === boxID;
        }).remove();

        // 检查是否需要隐藏 checkResult_none 行
        if ($(".checkResult_none").length > 0 && $("#checkResult").children(":not(.checkResult_none)").length === 0) {
            $(".checkResult_none").show();
        }

    });


    //次序變動
    let SRorder = function() { 
        $('#checkResult tr.checkResult select').each(function() {
            let value = $(this).val();
            //console.log(value); // 在這裡可以使用獲取到的值
    
            // 先移除目前的行
            let currentRow = $(this).closest('tr');

            console.log($(this).closest('tr'));
            
            if (value === "1") {
                // 將行移動到最上方
                currentRow.prependTo('#checkResult');
            } else if (value === "2") {
                // 將行移動到 select 值為 1 的行之後
                let targetRow = $('#checkResult tr.checkResult_none select[value="1"]:last').closest('tr');
                currentRow.insertAfter(targetRow);
            } else {
                // 將行移動到最下方
                currentRow.appendTo('#checkResult');
            }
        });
    };
    

   

   




    //顯示datepicker
    //$( "#datepicker2" ).datepicker();



    //////////////////////測試資料如下///////////////////////////

    
    //let datas =null;

    let datas = {
        "54031": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1030",
            "etime": "1200",
            "stime": "0900",
            "tdate": "2024-03-04"
        },
        "54032": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1030",
            "etime": "1200",
            "stime": "1900",
            "tdate": "2024-03-05"
        }
        ,
        "54033": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1030",
            "etime": "1200",
            "stime": "1000",
            "tdate": "2024-03-06"
        },
        "54034": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1600",
            "etime": "1730",
            "stime": "1530",
            "tdate": "2024-03-07"
        },
        "54035": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1600",
            "etime": "1730",
            "stime": "1530",
            "tdate": "2024-03-08"
        },
        "54036": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1030",
            "etime": "1200",
            "stime": "1000",
            "tdate": "2024-03-09"
        },
        "54037": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1030",
            "etime": "1200",
            "stime": "1000",
            "tdate": "2024-03-10"
        },
        "54038": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1600",
            "etime": "1730",
            "stime": "1530",
            "tdate": "2024-03-11"
        },
        "54039": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1600",
            "etime": "1730",
            "stime": "1530",
            "tdate": "2024-03-12"
        },
        "54040": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1600",
            "etime": "1730",
            "stime": "1530",
            "tdate": "2024-03-13"
        }
    }


})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        