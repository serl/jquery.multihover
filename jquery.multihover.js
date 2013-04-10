jQuery(document).ready(function($) {
	function mouseevent(e) {
		var id = $(this).attr('data-multihover-id');
		switch (e.type) {
			case 'mouseenter':
				$('[data-multihover-id="'+id+'"]').addClass('multihover-highlight');
				break;
			case 'mouseleave':
				$('[data-multihover-id="'+id+'"]').removeClass('multihover-highlight');
				break;
		}
	}

	function refreshHandlers() {
		$('[data-multihover-id]').off('mouseenter mouseleave', mouseevent).on('mouseenter mouseleave', mouseevent);
	}
	refreshHandlers();
	$.multihover = function(params) {
		if (params == 'refresh')
			refreshHandlers();
	}
});

