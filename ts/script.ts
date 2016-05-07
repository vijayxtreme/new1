(function($){
	//control for sidebar
	(function sidebar(){
		var sidebar = true;

		$("#hamburger-desktop, #hamburger-tablet").one('click', showSideBar);

		function showSideBar() {
			$("aside.sidebar").show(600)
			$("#hamburger-desktop, #hamburger-tablet").unbind().one('click', hideSideBar)
			// $(".container").addClass('sidebar-active')
			sidebar = true;
		}

		function hideSideBar() {
			// $(".container").removeClass('sidebar-active')
			$("aside.sidebar").hide(600)
			$("#hamburger-desktop, #hamburger-tablet").unbind().one('click', showSideBar)
			sidebar = false;
		}

		$("aside .close-btn").click(hideSideBar)

		$(window).resize(function(){
			if($(this).width() < 600){
				if(sidebar){
					$("aside.sidebar").hide(0)
					$("#hamburger-desktop, #hamburger-tablet").unbind().one('click', showSideBar)
					sidebar = false;
				}
			}
		})
	})();

	//control for search
	(function search(){
		
		$("#search").click(function(){
			$("#searchbar").toggle();
		})

		$(window).resize(function(){
			if($(this).width() > 992){
				$("#searchbar").hide(0)
			}
		})

	})();

	//control for nav
	(function menu(){
		$(".review-menu ul li").click(function(e){
			$(this).children("ul").show(300).addClass("active")
		});
		$(document).mouseup(function (e)
		{
		    var container = $(".review-menu ul li ul");

		    if (!container.is(e.target) // if the target of the click isn't the container...
		        && container.has(e.target).length === 0) // ... nor a descendant of the container
		    {
		        container.hide();
		    }
		});

	})();	



})(jQuery);