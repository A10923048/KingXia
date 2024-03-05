$(document).ready(function () {

      
    $('.tab a').on('click', function (e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        target = $(this).attr('href');

        $('.tab-content > tr').not(target).hide();

        $(target).fadeIn(600);

    });


    // 預設 隱藏除了第一個 以外的 tab-content
    $('.tab-content > tr:not(:first-child)').hide();


})
