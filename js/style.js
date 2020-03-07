window.onload = function() {
	/*index.html*/
	/*-------------------轮播图------------------------------*/
	var $imglist = $('.n-imgLB li');
	var $btnlist = $('.n-btn li');
	var timer = null;
	var index = 0;
	timer = setInterval(autoplay, 3000);

	function autoplay() {
		index++;
		if(index == $imglist.size()) {
			index = 0;
		}
		$btnlist.eq(index).addClass("active").siblings().removeClass("active");
		$imglist.eq(index).fadeIn(1500).siblings().fadeOut(1500);

	};
	$('.n-imgLB li').mouseenter(function() {
		clearInterval(timer)
	}).mouseleave(function() {
		timer = setInterval(autoplay, 3000);
	});
	$btnlist.mouseenter(function() {
		clearInterval(timer);
		//获取当前从操作的标题下标
		index = $(this).index() - 1;
		autoplay();
	}).mouseleave(function() {
		timer = setInterval(autoplay, 3000);
	});
	/*---------------------侧导航----------------------------*/
	var $siderNav = $('.a-sidernav li');
	var $hideNav = $('.a-sider-hidenav');
	$siderNav.mouseenter(function() {
		$(this).css('background', '#ffffff').siblings().css('background', '#3b2c33');
		$(this).find('a').css('color', '#444444')
		$(this).find('.a-sider-hidenav').show()
	}).mouseleave(function() {
		$(this).css('background', '#3b2c33');
		$(this).find('a').css('color', '#fff')
		$(this).find('.a-sider-hidenav').hide();

	});
	/*--------------------今日热播  左右点击切换--------------*/
	//移入显示按钮
	$('.d-right').mouseenter(function() {
		$('.d-pointleft').show();
		$('.d-pointright').show();
	}).mouseleave(function() {
		$('.d-pointleft').hide();
		$('.d-pointright').hide();
	});
	//标题切换
	var $tit = $('.d-title span');
	var $uls = $('.d-right ul');
	$tit.click(function() {
		$(this).css('color', '#e91456').siblings().css('color', '#444');
		var index = $(this).index();
		$uls.eq(index).css('display', 'block').siblings().css('display', 'none');
	})
	//	今日热播  昨日热播   内容切换
	var $btnL = $('.d-pointleft');
	var $btnR = $('.d-pointright');
	var index = 0;
	$btnR.click(function() {
		if(index == $(this).parent().find('li').size() - 1) {
			index = -1;
		}
		index++;
		$(this).parent().find('li').fadeOut(100).eq(index).fadeIn(100);
	})
	$btnL.click(function() {
		if(index == 0) {
			index = $(this).parent().find('li').size();
		}
		index--;
		$(this).parent().find('li').fadeOut(100).eq(index).fadeIn(100);
	})
/*register.html*/


}