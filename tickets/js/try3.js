$(document).ready(function() {

    $('.form-control').on('click', function() {
        $(this).closest('.form-group').addClass('is-focused');
    });
    $('.form-control').on('change', function() {
        if ($(this).val() !== '') {
            $(this).closest('.form-group').removeClass('is-empty');
        } else {
            $(this).closest('.form-group').addClass('is-empty');
        }
    });

})