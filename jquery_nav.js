$(document).ready(function()
{  
      /*
       *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
      */
      $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
          openEffect : 'none',
          closeEffect : 'none',
          prevEffect : 'none',
          nextEffect : 'none',
          padding : 0,

          arrows : false,
          helpers : {
            media : {},
            buttons : {}
          }
        });

      $(".fancybox").attr('rel', 'gallery1').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        padding : 0,
        helpers : {
          title : {
            type: 'outside'
          },
          thumbs  : {
            width : 50,
            height  : 50
          }
        }
      });

	function clearNavState() {
	    $("#filmDiv").hide();
	    $("#bioDiv").hide();
	    $("#contactDiv").hide();
	    $("#discDiv").hide();       
	    $("#awardsDiv").hide();
	    $("#filmMusicDiv").hide();
	    $("#theaterMusicDiv").hide();
	    $("#photographyDiv").hide();

	    $('body').css('background-image','url(images/bg3.jpg)');
	    $('.musicPlayer').hide();

		$(".menu").css('margin-left','0');

		$(".menu a").removeClass("active");
	}
	
	var loadAnchor = unescape(self.document.location.hash.substring(1));
	if(loadAnchor=="theaterMusicL"){clearNavState();
		$('.musicPlayer').show();
		$("#theaterMusicDiv").show();
		$("a#theaterMusic").addClass("active");
	}
	else if(loadAnchor=="filmMusicL"){clearNavState();
		$('.musicPlayer').show();
		$("#filmMusicDiv").show();
		$("a#filmMusic").addClass("active");
	}
	else if(loadAnchor=="filmAwardsL"){clearNavState();
		$("#awardsDiv").show();
		$("a#filmAwards").addClass("active");
	}
	else if(loadAnchor=="discographyL"){clearNavState();
		$('.musicPlayer').show();
		$("#discDiv").show();
		$("a#discography").addClass("active");
	}
	else if(loadAnchor=="photographyL"){clearNavState();
		$("#photographyDiv").show().css('width','920px');
		$("a#photography").addClass("active");
	}
	else if(loadAnchor=="contactL"){clearNavState();
		$("#contactDiv").show();
	}
	else if(loadAnchor=="biographyL"){clearNavState();
		$('body').css('background-image','url(images/bgAndrejS.jpg)');
		$("#bioDiv").show().css('margin-left','30%').css('width','500px');
		if(navigator.platform.indexOf("iPhone") == -1){$(".menu").css('margin-left','20%');}
		$("a#biography").addClass("active");
	}
	else if(loadAnchor=="filmL"){clearNavState();
		$("#filmDiv").show();
		$("a#film").addClass("active");
	}
	else {clearNavState();
		$("#filmDiv").show();
		$("a#film").addClass("active");
	}

	//Any css selection can go here like a.doSomething, etc
	//http://code.jquery.com/jquery-latest.js
    $("a#theaterMusic").click(function (){clearNavState();
		$("#theaterMusicDiv").show();
    	$('.musicPlayer').show();
    	$("a#theaterMusic").addClass("active");
	});

    $("a#photography").click(function (){clearNavState();
		$("#photographyDiv").show().css('width','920px');
    	$("a#photography").addClass("active");
	});

    $("a#filmMusic, a#filmMusic2").click(function (){clearNavState();
		$("#filmMusicDiv").show();
    	$('.musicPlayer').show();
    	$("a#filmMusic").addClass("active");
	});

    $("a#filmAwards, a#filmAwards2").click(function (){clearNavState();
		$("#awardsDiv").show();
    	$("a#filmAwards").addClass("active");
	});

    $("a#discography, a#discography2, a#discography3").click(function (){clearNavState();
		$("#discDiv").show();
    	$('.musicPlayer').show();
    	$("a#discography").addClass("active");
	});

    $("a#contact").click(function (){clearNavState();
		$("#contactDiv").show();
	});

    $("a#biography").click(function (){clearNavState();
		$('body').css('background-image','url(images/bgAndrejS.jpg)');
    	$("#bioDiv").show().css('margin-left','30%').css('width','500px');
		if(navigator.platform.indexOf("iPhone") == -1){$(".menu").css('margin-left','20%');}
    	$("a#biography").addClass("active");
	});

    $("a#film, a#logo").click(function (){clearNavState();
		$("#filmDiv").show();
    	$("a#film").addClass("active");
	});
});

