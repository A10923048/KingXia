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




});
