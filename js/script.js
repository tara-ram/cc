$(document).ready(function () {
    $('#form-btn_contact').on('click', function () {
        $('.hidden').show();
        })

    $('#contact-send-btn, .close-form').on('click', function () {
        $('.hidden').hide();

    })
    $('#form-btn_join').on('click',function () {
        $('.hidden_join').show();
    })
    $('#join-send-btn, .close-form').on('click', function () {
        $('.hidden_join').hide();

    })

})