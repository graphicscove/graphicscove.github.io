var viewportHeight = $(window).height() - 36;
$('section').height(viewportHeight);

$(window).resize(function() {
	$('section').height(viewportHeight);
});
