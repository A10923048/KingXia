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



    // 設定中文語言(未成功)
    //$.datepicker.setDefaults($.datepicker.regional['zh-TW']);

    $("#ship_result_null").hide();

    //日曆-獲取選擇日期
    $(".datepicker").datepicker({
        prevText: '<i class="fa fa-fw fa-angle-left"></i>',
        nextText: '<i class="fa fa-fw fa-angle-right"></i>',
        firstDay: 0,
        onSelect: function (dateText) {
            console.log("選擇的日期是：" + dateText);

            let selectedDate = new Date(dateText);
            let formattedDate = formatDate(selectedDate);
            console.log("選擇的日期是：" + formattedDate);

            let send_item = {
                tdate: formattedDate,
            };
            console.log(JSON.stringify(send_item, null, 2));


            //ajax啟用後註解掉
            if (datas != null) {

                console.log("123");
                //$("#ship-result").empty();//不累加清空

                // 使用捕獲的數據更新表單內容
                $("#date").text("出發日期：" + formattedDate);

                //方法:抓取買票人所有訂票紀錄 
                show_datas(datas, formattedDate);

                // // 顯示船班資料
                // $("#ship-result").show();
            }
            else { //接收到null時
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
            // if(datas!=null){
            // 使用捕獲的數據更新表單內容
            // $("#ship_result_null").hide();
            // $("#date").text("出發日期：" + formattedDate);

            //       //方法:抓取買票人所有訂票紀錄 
            //       get_send(send);

            //       // 顯示船班資料
            //       $("#ship-result").show();
        }
        // else{ //接收到null時
        //         $("#ship_result_null").show();
        //         return; // 阻止進一步執行
        //       }                         

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


    let show_datas = function (datas, formattedDate) {

        let Z = {};

        $.each(datas, function (key, value) {
            console.log("value.tdate: " + value.tdate);

            if (value.tdate == formattedDate) {

                // 找到匹配的日期
                console.log("value.tdate: " + value.tdate);
                console.log("formattedDate: " + formattedDate);
                console.log("value.tdate == formattedDate: " + (value.tdate == formattedDate));

                Z[key] = value;


                $("#ship-result").empty();
                // 添加到表格
                $.each(Z, function (key, value2) {
                    // 清空現有的表格內容

                    $("#ship-result").append(
                        '<tr class="ship-result-row">' +
                        '<td>' + key + '</td>' +
                        '<td>' + value2.btime + '</td>' +
                        '<td>' + value2.etime + '</td>' +
                        '</tr>'
                    );
                })
            } else {
                console.log("ship-result");
                $("#ship-result").append($("#ship_result_null").html());
                $("#ship_unchoose").hide();
                $("#ship_result_null").show();

                //return; // 阻止進一步執行
            }

        });
    };







    //顯示datepicker
    //$( "#datepicker2" ).datepicker();



    //////////////////////測試資料如下///////////////////////////

    let datas = {
        "54035": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1030",
            "etime": "1200",
            "stime": "0900",
            "tdate": "2024-02-04"
        },
        "54034": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1030",
            "etime": "1200",
            "stime": "1900",
            "tdate": "2024-02-05"
        },
        "54033": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1030",
            "etime": "1200",
            "stime": "1000",
            "tdate": "2024-02-06"
        },
        "54066": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1600",
            "etime": "1730",
            "stime": "1530",
            "tdate": "2024-02-07"
        },
        "54065": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1600",
            "etime": "1730",
            "stime": "1530",
            "tdate": "2024-02-08"
        },
        "54037": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1030",
            "etime": "1200",
            "stime": "1000",
            "tdate": "2024-02-09"
        },
        "54036": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1030",
            "etime": "1200",
            "stime": "1000",
            "tdate": "2024-02-10"
        },
        "54064": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1600",
            "etime": "1730",
            "stime": "1530",
            "tdate": "2024-02-11"
        },
        "54063": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1600",
            "etime": "1730",
            "stime": "1530",
            "tdate": "2024-02-12"
        },
        "54062": {
            "port0": "水頭",
            "port1": "水頭",
            "qty": 70,
            "status": "正常",
            "btime": "1600",
            "etime": "1730",
            "stime": "1530",
            "tdate": "2024-02-13"
        }
    }

    //let datas =null;

})