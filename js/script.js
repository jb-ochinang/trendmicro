$(document).ready(function () {
	$('.open').click(function (e) {
		e.preventDefault();
		$('.modal').fadeIn();
		$('.img-responsive').hide();
		$.fn.fullpage.setMouseWheelScrolling(false);
		$.fn.fullpage.setAllowScrolling(false);
		$.fn.fullpage.setKeyboardScrolling(false);
	});
	$('.close-modal img').click(function (e) {
		e.preventDefault();
		$('.modal').fadeOut();
		$('.img-responsive').show();
		$.fn.fullpage.setMouseWheelScrolling(true);
		$.fn.fullpage.setAllowScrolling(true);
		$.fn.fullpage.setKeyboardScrolling(true);
	});
})