//  置於$(document).ready(function () 之外的 定義function //
// function A(){
// }
// 
$(document).ready(function () {

    let A=function(i,name,Uid){
        let htmlString ='<li class="my-2">' +
        '<button class="btn d-inline-flex align-items-center collapsed border-0"' +
          ' data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse'+i+'"' +
          ' aria-controls="contents-collapse">其他旅客資料('+(parseInt(i) + parseInt(1))+')</button>' +
        '<ul class="list-unstyled ps-3 collapse" id="contents-collapse'+i+'">' +
          '<div class="table-responsive">' +
            '<table>' +
              '<div id="planpickered" class="pt-5 pb-1" style="background: rgb(102, 235, 226)">' +
                '<label for="plan">' +
                  '<h2 class="section-title mb-3 text-center text-white">其他旅客資料</h2>' +
                '</label>' +
              '</div>' +
            '</table>' +
            '<main>' +
              '<div class="table-responsive pt-4" style="background-color: rgb(245, 240, 220);">' +
                '<table class="table text-center">' +
                  '<thead>' +
                    '<tr>' +
                      '<th style="width: 30%;">' +
                        '<i class="fa-solid fa-earth-americas fa-4x"></i>' +
                        '<h6>國籍</h6>' +
                        '<select class="form-select" id="country" required>' +
                          '<option value="">台灣</option>' +
                          '<option>香港</option>' +
                          '<option>大陸</option>' +
                          '<option>其他</option>' +
                        '</select>' +
                      '</th>' +
                      '<th style="width: 20%;" id="gender">' +
                        '<i class="fa-solid fa-venus-mars fa-4x"></i>' +
                        '<h6>性別</h6>' +
                        '<select class="form-select" id="gender" required>' +
                          '<option value="">女</option>' +
                          '<option>男</option>' +
                        '</select>' +
                      '</th>' +
                      '<th style="width: 40%;" id="country">' +
                        '<i class="fa-solid fa-cake-candles fa-4x"></i>' +
                        '<h6>出生日期</h6>' +
                        '<div>' +
                          '<input type="date" id="birthdayPicker" placeholder="選擇日期範圍" value="">' +
                        '</div>' +
                      '</th>' +
                    '</tr>' +
                  '</thead>' +
                  '<thead id="tickets-result2">' +
                    '<tr>' +
                      '<th style="width: 40%;">' +
                        '<svg class="bi" width="24" height="24">' +
                          '<use xlink:href="#check" />' +
                        '</svg>' +
                        '<h6>身分證/護照號碼</h6>' +
                        '<input type="text" class="form-control" id="orderName" placeholder="" value="'+Uid+'" required>' +
                      '</th>' +
                      '<th scope="row" class="text-start">' +
                        '<h6>姓名</h6>' +
                        '<input type="text" class="form-control" id="orderName" placeholder="" value="'+name+'" required>' +
                      '</th>' +
                      '<th style="width: 50%;">' +
                        '<svg class="bi" width="24" height="24">' +
                          '<use xlink:href="#check" />' +
                        '</svg>' +
                        '<h6>電子郵件</h6>' +
                        '<input type="text" class="form-control" id="orderName" placeholder="" value="" required>' +
                      '</th>' +
                    '</tr>' +
                  '</thead>' +
                '</table>' +
              '</div>' +
            '</main>' +
          '</div>' +
        '</ul>' +
      '</li>';
      return htmlString:
    }

})
