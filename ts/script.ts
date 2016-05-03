(function($){
	//control for sidebar
	(function sidebar(){
		var sidebar = true;

		$("#hamburger-desktop").one('click', showSideBar);

		function showSideBar() {
			$("aside.sidebar").show(600)
			$("#hamburger-desktop").one('click', hideSideBar)
			$(".container").addClass('sidebar-active')
			sidebar = true;
		}

		function hideSideBar() {
			$(".container").removeClass('sidebar-active')
			$("aside.sidebar").hide()
			$("#hamburger-desktop").one('click', showSideBar)
			sidebar = false;
		}

		$("aside .close-btn").click(hideSideBar)

		$(window).resize(function(){
			if($(this).width() < 992){
				if(sidebar){
					hideSideBar();
				}
			}
		})
	})();

})(jQuery);