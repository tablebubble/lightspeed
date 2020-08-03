$(document).ready(function(){
	$('.nav-toggle').click(function(){
		$('.nav-toggle').toggleClass('switch');
		$('#dashboard-side-nav').toggleClass('display');
		$('#dashboard-main').toggleClass('blur');
	});
});
$(document).ready(function(){
	$('.account-drop-btn').click(function(){
		$('.account-drop').toggleClass('display');
	});
});

$(document).ready(function(){
	$('.advanced-click').click(function(){
		$('.advanced-click i').toggleClass('fa-chevron-down');
		$('.advanced-search-form').slideToggle('display');
	});
});



