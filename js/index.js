$(function(){
	//主导航代码
	$('#active').click(function(){
		$('.list_show').toggle();
	})
	$('.header_bottom li').hover(function(){
		$(this).css('background','#0080FF').siblings(this).css('background','none')
		$(this).children('a').css('color','#fff')
		$(this).siblings().children('a').css('color','#000')
	})
	/*右下角回到顶部显示消失*/
	$(window).on('scroll',function(){
		if($(window).scrollTop()>=100){
			$('.third_icon').css('visibility','visible');
		}else{
			$('.third_icon').css('visibility','hidden');
		}
	})
	$('.third_icon').on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},200)
	})
	$('.agree_img').click(function(){
		$('.agree_img img').toggle()
	})
	$('.active').click(function(){
		$('#mask').toggle()
	}).on('click',function(){
		$('.login').toggle()
	})
})