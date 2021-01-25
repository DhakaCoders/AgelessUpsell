(function($){
	$('.agus-pro-item-desc-check-btn button').on('click',function(){
		$(this).parents('.agus-pro-item').toggleClass('thisActive');

		var dataid = $(this).data('id');
		$(dataid).trigger('click');
	});

})(jQuery);