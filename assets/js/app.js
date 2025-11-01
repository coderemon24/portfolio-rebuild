$(function () {
    
    // hero section hover effect
    let self_shape = $('.self_shape');
    let self_details = $('.self_details');
    let self_name = $('.self_name');
    
    self_shape.mouseenter(function () {
        self_details.removeClass('invisible opacity-0');
        self_name.addClass('invisible opacity-0');
    });
    
    self_shape.mouseleave(function () {
        
        self_details.mouseenter(function () {
            self_details.removeClass('invisible opacity-0');
            self_name.addClass('invisible opacity-0');
        });
        
        self_details.mouseleave(function () {
            self_details.addClass('invisible opacity-0');
            self_name.removeClass('invisible opacity-0');
        });
        
        self_details.addClass('invisible opacity-0');
        self_name.removeClass('invisible opacity-0');
    });
    
    
    
});