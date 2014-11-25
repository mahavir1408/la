jQuery(function($){

	$('.el .head').click(function(){
		var $header = $(this);
		var $el = $header.parent();
		var $opt = $el.find('.options');
		if($el.hasClass('open')){
			$opt.slideUp(400);
			$el.removeClass('open');
		}else{
			$opt.slideDown(400);
			$el.addClass('open');
		}
	});


	$('.pred1 a').live('click', function(e){
		
			e.preventDefault();
			e.stopPropagation();
			var url = $(this).attr('href');
			$.removeCookie('themeple_layout',{ path: '/' });
			$.removeCookie('themeple_header', { path: '/' });
			$.removeCookie('themeple_skin', { path: '/' });
			$.removeCookie('themeple_background', { path: '/' });
			$.removeCookie('themeple_pattern', { path: '/' });
			setTimeout(function(){
				window.open(url);
			}, 200);

	});

	$('.pred2 a').live('click', function(e){
		
			e.preventDefault();
			e.stopPropagation();
			var url = $(this).attr('href');
			$.removeCookie('themeple_layout', { path: '/' });
			$.removeCookie('themeple_header', { path: '/' });
			$.removeCookie('themeple_skin', { path: '/' });
			$.removeCookie('themeple_background', { path: '/' });
			$.removeCookie('themeple_pattern', { path: '/' });
			$.cookie('themeple_skin', 'base', { expires: 7, path: '/' });
			$.cookie('themeple_header', '6', { expires: 7, path: '/' });
			setTimeout(function(){
				window.open(url);
			}, 200);
		
	});

	$('.pred3 a').live('click', function(e){

			e.preventDefault();
			e.stopPropagation();
			var url = $(this).attr('href');
			$.removeCookie('themeple_layout', { path: '/' });
			$.removeCookie('themeple_header', { path: '/' });
			$.removeCookie('themeple_skin', { path: '/' });
			$.removeCookie('themeple_background', { path: '/' });
			$.removeCookie('themeple_pattern', { path: '/' });
			setTimeout(function(){
				window.open(url);
			}, 200);
		
	});

	$('.pred4 a').live('click', function(e){

			e.preventDefault();
			e.stopPropagation();
			var url = $(this).attr('href');
			$.removeCookie('themeple_layout', { path: '/' });
			$.removeCookie('themeple_header', { path: '/' });
			$.removeCookie('themeple_skin', { path: '/' });
			$.removeCookie('themeple_background', { path: '/' });
			$.removeCookie('themeple_pattern', { path: '/' });
			$.cookie('themeple_skin', 'base', { expires: 7, path: '/' });
			$.cookie('themeple_header', '5', { expires: 7, path: '/' });

			setTimeout(function(){
				window.open(url);
			}, 200);
		
	});

	$('.pred5 a').live('click', function(e){

			e.preventDefault();
			e.stopPropagation();
			var url = $(this).attr('href');
			$.removeCookie('themeple_layout', { path: '/' });
			$.removeCookie('themeple_header', { path: '/' });
			$.removeCookie('themeple_skin', { path: '/' });
			$.removeCookie('themeple_background', { path: '/' });
			$.removeCookie('themeple_pattern', { path: '/' });
			$.cookie('themeple_skin', 'five', { expires: 7, path: '/' });
			$.cookie('themeple_header', '6', { expires: 7, path: '/' });

			setTimeout(function(){
				window.open(url);
			}, 200);
		
	});

	$('.pred6 a').live('click', function(e){

			e.preventDefault();
			e.stopPropagation();
			var url = $(this).attr('href');
			$.removeCookie('themeple_layout', { path: '/' });
			$.removeCookie('themeple_header', { path: '/' });
			$.removeCookie('themeple_skin', { path: '/' });
			$.removeCookie('themeple_background', { path: '/' });
			$.removeCookie('themeple_pattern', { path: '/' });
			$.cookie('themeple_skin', 'four', { expires: 7, path: '/' });
			$.cookie('themeple_header', '3', { expires: 7, path: '/' });

			setTimeout(function(){
				window.open(url);
			}, 200);
		
	});


	checkCookie();

	$("#reset").live('click', function(e){
			e.preventDefault();
			$.removeCookie('themeple_layout', { path: '/' });
			$.removeCookie('themeple_header', { path: '/' });
			$.removeCookie('themeple_skin', { path: '/' });
			$.removeCookie('themeple_background', { path: '/' });
			$.removeCookie('themeple_pattern', { path: '/' });
			setTimeout(function(){
									    window.location.hash = "#wpwrap";
							 			window.location.reload(true);
									
	        }, 500);
	}); 

	$('.el .options a').live('click', function(){
		var value = $(this).data('value');
		var $el = $(this).parents('.el').first();
		var name = $el.data('name');
		
		if($(this).hasClass('default')){
			$.removeCookie('themeple_'+name, { path: '/' });
			if(name == 'layout' && value == 'fullwidth'){
				$.removeCookie('themeple_background', { path: '/' });
				$.removeCookie('themeple_pattern', { path: '/' });
			}
		}else{
			if(name == 'background'){
				var type = $(this).data('type');
				name = type;
				$.cookie('themeple_layout', 'boxed', { expires: 7, path: '/' });
				if(type == 'pattern')
					$.removeCookie('themeple_background', { path: '/' });
				if(type == 'background')
					$.removeCookie('themeple_pattern', { path: '/' });
			}
			if(name == 'layout' && value == 'boxed'){
				var test = $.cookie("themeple_pattern");
				var test2 = $.cookie('themeple_background');

		  		
		  		$.cookie('themeple_pattern', 'pattern6', { expires: 7, path: '/' });
		  		
			}else{
				$.removeCookie('themeple_background', { path: '/' });
				$.removeCookie('themeple_pattern', { path: '/' });
			}
			$.cookie('themeple_'+name, value, { expires: 7, path: '/' });
		}
		setTimeout(function(){
			
			window.location.hash = "#wpwrap";
			window.location.reload(true);
									
	    }, 1000);
	});

	function getCookie(c_name)
	{
		var i,x,y,ARRcookies=document.cookie.split(";");
		for (i=0;i<ARRcookies.length;i++)
		{
		  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		  x=x.replace(/^\s+|\s+$/g,"");
		  if (x==c_name)
		    {
		    return unescape(y);
		    }
		  }
	}

	function checkCookie()
	{
		
		var layout=$.cookie("themeple_layout");
		
		  if (layout!=null && layout=="boxed")
		  {
			  $("#layout a.switch_button").each(function(){
		        	var sel = $(this).data('value');
		        	if(sel == layout){
		        		$(this).addClass('active');
		        	}else{
		        		$(this).removeClass('active')
		        	}
	    	   });
		  }

		  var color_scheme=$.cookie("themeple_skin");
		
		  if (color_scheme!=null && color_scheme != '')
		  {
			  $("#color_scheme a.button_img").each(function(){
		        	var sel = $(this).data('value');
		        	if(sel == color_scheme){
		        		$(this).addClass('active');
		        	}else{
		        		$(this).removeClass('active')
		        	}
	    	   });
		  }



		  var background=$.cookie("themeple_background");
		  var pattern = $.cookie('themeple_pattern');
		  if (background!=null && background != '')
		  {
			  $("#background a.button_img").each(function(){
		        	var sel = $(this).data('value');
		        	if(sel == background){
		        		$(this).addClass('active');
		        	}else{
		        		$(this).removeClass('active')
		        	}
	    	   });
		  }

		  if (pattern!=null && pattern != '')
		  {
			  $("#background a.button_img").each(function(){
		        	var sel = $(this).data('value');
		        	if(sel == pattern){
		        		$(this).addClass('active');
		        	}else{
		        		$(this).removeClass('active')
		        	}
	    	   });
		  }

	}


});