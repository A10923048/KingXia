$(document).ready(function () {
	//Only needed for the filename of export files.
	//Normally set in the title tag of your page.
	//document.title = "Card View DataTable";
	// DataTable initialisation

	// $("#example").DataTable({
	// 	dom: '<"dt-buttons"Bf><"clear">lirtp',
	// 	paging: true,
	// 	autoWidth: true,
	// 	buttons: [
	// 		"colvis",
	// 		"copyHtml5",
	// 		"csvHtml5",
	// 		"excelHtml5",
	// 		"pdfHtml5",
	// 		"print"
	// 	],
	// 	initComplete: function (settings, json) {
	// 		$(".dt-buttons .btn-group").append(
	// 			'<a id="cv" class="btn btn-primary" href="#">CARD VIEW</a>'
	// 		);
	// 		$("#cv").on("click", function () {
	// 			if ($("#example").hasClass("card")) {
	// 				$(".colHeader").remove();
	// 			} else {
	// 				var labels = [];
	// 				$("#example thead th").each(function () {
	// 					labels.push($(this).text());
	// 				});
	// 				$("#example tbody tr").each(function () {
	// 					$(this)
	// 						.find("td")
	// 						.each(function (column) {
	// 							$("<span class='colHeader'>" + labels[column] + ":</span>").prependTo(
	// 								$(this)
	// 							);
	// 						});
	// 				});
	// 			}
	// 			$("#example").toggleClass("card");
	// 		});
	// 	}
	// });

	// new DataTable('table.table');





	//~~~~~~~~~~~~~~~~~~~~~articleCC~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
     //            獲取 detail_其他買票人資料 顯示於modal           //
   


	 let detail = {
  
		//詳細訂票紀錄 
	
		//買票人資料
		"orderNum": "123456789",
		"ticCount": 3,//(總票數)
	
		"travelers": [
		  {   //其他買票人資料資料
			"ticnum": "123456",
			"tictype": "全票",
			"tname": "王A明",
			"gender": "男",
			"birthday":"2020/01/01",
			"id": "111111",
			"email": "123@gmail.com",
			"mobile": "0912345678",
	
		  },
		  {   //其他搭船人資料
			"id": "222222",
			"tname": "王B明",
			"gender": "1030",
			"sbr": "2020/01/01",
			"email": "456@gmail.com",
			"mobile": "0912-345-678",
			"ticnum": "123456",
			"tictype": "全票",
		  },
		  {   //其他搭船人資料
			"id": "333333",
			"tname": "王B明",
			"gender": "1030",
			"sbr": "2020/01/01",
			"email": "789@gmail.com",
			"mobile": "0912-345-678",
			"ticnum": "123456",
			"tictype": "全票",
		  }
	
		]
	  }



});
