function ajaxIndexTravels(thiz) {
    var bbsT = $("#story").offset().top - 32;
    function scrollbbs() {
        $("#storyul").fadeOut(500,
        function() {
            $("#storyul").show();
            $('html, body').animate({
                scrollTop: bbsT
            });
        });
    }
    scrollbbs();
    var page = $(thiz).attr('page');
    $.ajax({
        type: 'post',
        dataType: 'jsonp',
        url: "http://manlv.com/ajax.php?action=indextravels&page=" + page + "&callback=?"
    })
}

 function selectValue(obj1,obj2,obj3){ 
		obj1.click(function(){
		$(this).blur();
		obj2.show();
		return false;
	});
	obj2.find('li').click(function(){
		$(this).blur();
		var txt=$(this).text();
		obj1.html('<span class="arrow"></span>'+txt);
		$(this).addClass('selected').siblings().removeClass('selected');
		obj2.hide();
		return false;
	});
	obj2.find('li').mouseover(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		return false;
	});
	/*点击任何地方关闭层*/
	$(document).click(function(event){
		if($(event.target).attr("class")!= obj3)
		{
			obj2.hide();
		}
	});
}
function tip(obj1,obj2,obj3){ //tip提示框
		t=0;
		$(obj1).click(function(){
			window.clearTimeout(t);
			t = window.setTimeout(function(){
				$(obj2).show();
			},200);
		});
		$(obj2).hover(function(){
			window.clearTimeout(t);
		},function(){
			window.clearTimeout(t);
			t = window.setTimeout(function(){
				$(obj2).hide();
			},500);
		});
		/*点击任何地方关闭层*/
	 $(document).bind("click", function(e) {
        var target = $(e.target);
        if (target.closest(obj3).length == 0) {
           $(obj2).hide();
        }
    });
	}
$(function() {
	  selectValue($('.hot-blogs-value'), $('.hot-blogs-list'),'hot-blogs'); //下拉框
	  tip($('.login-top'), $('.login-box'),'.login-top'); //下拉框
      //幻灯片
      $('#slides').slides({
      preload: true,
      preloadImage: 'img/loading.gif',
      play: 5000,
      pause: 2500,
      hoverPause: true,
      animationStart: function(){
          $('.caption').animate({
              bottom:-35
          },100);
      },
      animationComplete: function(current){
          $('.caption').animate({
              bottom:0
          },200);
          if (window.console && console.log) {
              // example return of current slide number
            
          };
      }
    });
    $('#gl').slides({
      preload: true,
      preloadImage: 'img/loading.gif',
      play: 5000,
      pause: 2500,
      hoverPause: true
     });
      $('.fast-nav-item').hover(function() {
          $(this).addClass('item-active');
      },
      function() {
          $(this).removeClass('item-active');
      });
	  $('.destine-tab li').live('click',function(){
		  var index=$(this).index();
		  if(index==2){
			    $('.destine-tab li').eq(index-1).addClass('cur0');
			   }
		  if(index==3){
			   $('.destine-tab li').eq(index-1).addClass('cur1');
			   $('.destine-tab li').eq(index-2).addClass('cur0');
			  }
		  $(this).removeClass('cur1');
		  $(this).removeClass('cur0');
		  $(this).addClass('cur').siblings().removeClass('cur');
		  $('.destine-box').hide();
		  $('.destine-box').eq(index).show();
		});
})