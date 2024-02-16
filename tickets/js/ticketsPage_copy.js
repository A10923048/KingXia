$(document).ready(function() {

    // 白天夜晚模式
    $('.mode-switch').click(function() {
        $('html').toggleClass('dark');
        $(this).toggleClass('active');
    });

    // list or grid 模式
    $('.list-view').click(function() {
        $('.grid-view').removeClass('active');
        $(this).addClass('active');
        $('.project-boxes').removeClass('jsGridView').addClass('jsListView');
    });

    $('.grid-view').click(function() {
        $(this).addClass('active');
        $('.list-view').removeClass('active');
        $('.project-boxes').removeClass('jsListView').addClass('jsGridView');
    });

    //
    $('.messages-btn').click(function() {
        $('.messages-section').addClass('show');
    });

    $('.messages-close').click(function() {
        $('.messages-section').removeClass('show');
    });

    // login
    $('#login').click(function() {
        let parent = $(this).parent().parent();
        if (!parent.hasClass('slide-up')) {
            parent.addClass('slide-up');
        } else {
            $('#signup').parent().addClass('slide-up');
            parent.removeClass('slide-up');
        }
    });

    $('#signup').click(function() {
        let parent = $(this).parent();
        if (!parent.hasClass('slide-up')) {
            parent.addClass('slide-up');
        } else {
            $('#login').parent().parent().addClass('slide-up');
            parent.removeClass('slide-up');
        }
    });


    //form

    // 預設 隱藏除了第一個 以外的 tab-content
    $('.tab-content > div:not(:first-child)').hide();

    $('.form').find('input, textarea').on('keyup blur focus', function (e) {
    
        let $this = $(this),
            label = $this.prev('label');
    
            if (e.type === 'keyup') {
                if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if( $this.val() === '' ) {
                label.removeClass('active highlight'); 
                } else {
                label.removeClass('highlight');   
                }   
        } else if (e.type === 'focus') {
            
            if( $this.val() === '' ) {
                label.removeClass('highlight'); 
                } 
            else if( $this.val() !== '' ) {
                label.addClass('highlight');
                }
        }
    
    });
    
    $('.tab a').on('click', function (e) {
        
        e.preventDefault();
        
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
        target = $(this).attr('href');
    
        $('.tab-content > div').not(target).hide();
        
        $(target).fadeIn(600);
        
    });


});
