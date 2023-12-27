$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                        message:"請輸入完整姓名"
                    },
                        notEmpty: {
                        message: '請輸入完整姓名'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '請輸入您的E-Mail'
                    },
                    emailAddress: {
                        message: '請確認您的E-Mail是否輸入正確'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: '請輸入您的手機號碼'
                    },
                    phone: {
                        country: 'US',
                        message: '請輸入正確的手機號碼'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 6,
                        message: '請輸入您的收貨地址'
                    },
                    notEmpty: {
                        message: '請輸入您的收貨地址'
                    }
                }
            },
            taxid: {
                validators: {
                    regexp: {
                        regexp: /^(|(\d{8}))$/,
                        message: '請空白或是填寫統一編號位數字'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your zip code'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'Please supply a vaild zip code'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please supply a description of your project'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            
            $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            let $form = $(e.target);

            // Get the BootstrapValidator instance
            /* let bv = $form.data('bootstrapValidator');*/
 
            // Use Ajax to submit form data
            $.ajax({
                type:"POST",
                url:$form.attr('action'),
                data:$form.serialize(),
                success:function(response){
                    $('.bt').hide();
                    $('#success_message').slideDown({ opacity: "show" }, "slow") 
                    setTimeout(() => {
                        window.location.replace("/home");
                    }, 1000);
                },
                error:function(xhr){
                    alert("發生錯誤: " + xhr.status + " " + xhr.statusText + "\n請重新整理頁面");
                }
            })

        });
});

