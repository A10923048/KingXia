$(document).ready(function () {

		//jQuery time
		var current_fs, next_fs, previous_fs; //fieldsets
		var left, opacity, scale; //fieldset properties which we will animate
		var animating; //flag to prevent quick multi-click glitches

		$(".next").click(function(){

			console.log(".next");
			console.log("animating:"+animating);

			if(animating == false) {
				animating == true;
			}
			
			// 得到當前步驟的 fieldset 元素。

			//let current_fs = $(this).closest('fieldset');
			
			let  current_fs = $(this).parent().parent();
			  console.log("current_fs"+current_fs);
			
			//console.log(JSON.stringify(current_fs, null, 2));
			
			// 得到下一個步驟的 fieldset 元素。
			//next_fs = current_fs.next('fieldset');

			//next_fs = $(this).parent().parent().next('fieldset');
			let next_fs = current_fs.next('fieldset');
			
			
			//activate next step on contact using the index of next_fs
			//$("#contact li").eq($("fieldset").index(next_fs)).addClass("active");
			// 找到对应的 li 元素
			let corresponding_li = $("#progressbar li").eq(next_fs.index());
			
			console.log("next_fs.index"+$("#progressbar li").eq(next_fs.index()));

			// 在添加 active 类之前，先移除其他兄弟元素的 active 类
			corresponding_li.addClass("active");
	
			// 显示下一个 fieldset
			next_fs.show();
	
			// 隐藏当前 fieldset
			current_fs.hide();

			//console.log("index:"+$("#contact li").eq($("fieldset").index(next_fs)));
			
			

			//更新進度條上的步驟狀態，將下一個步驟的 li 元素添加 active 類別，以便標記為當前步驟。


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
				'position': 'absolute'
			});
					next_fs.css({'left': left, 'opacity': opacity});
				}, 
				duration: 800, 
				complete: function(){
					current_fs.hide();

					animating = false;
					//將 animating 變數設置為 false，表示動畫執行完畢。
				}, 
				//this comes from the custom easing plugin
				easing: 'easeInOutBack'
			});
		});

		$(".previous").click(function(){

			if(animating == false) {
				animating == true;
			}

			
			// 得到當前步驟的 fieldset 元素。
			current_fs = $(this).closest('fieldset');

			// 得到下一個步驟的 fieldset 元素。
			previous_fs = current_fs.prev('fieldset');

			
			//de-activate current step on contact
			$("#contact li").eq($("fieldset").index(current_fs)).removeClass("active");
			
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
		
})


