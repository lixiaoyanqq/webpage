(function(){
    $(function (window) {
        var cover = document.createElement('div');
        cover.className = 'cover';
        var navbar = document.querySelector('.navbar-header');
        navbar.appendChild(cover);
        var cover = document.querySelector('.cover');
        var btn = document.querySelector('#navbar_toggle');
        var nav = document.querySelector(".nav");
        var body = document.querySelector('body');
        btn.addEventListener('click', function() {
            var isDisplay = getCSSValue(cover, 'display')
            if (isDisplay == 'none') {
                cover.style.display = 'block';
                nav.style.display = 'block';
                body.style["overflow-y"]="hidden";
            } else {
                cover.style.display = 'none';
                nav.style.display = 'none';
                body.style["overflow-y"]="auto";
            }
        });
        cover.addEventListener('click', function() {
            cover.style.display = "none"
            nav.style.display = 'none';
        });

        function getCSSValue(obj, key) { //获取元素CSS值
            if (obj.currentStyle) { //IE
                return obj.currentStyle[key];
            } else { //!IE
                return document.defaultView.getComputedStyle(obj, null)[key];
            }
        }

        // nav hover
        $('#dropdown').on("mouseover", function () {
            $('#dropdown-menu').show();
            $('.solution-menu').hide();
            $('nav').addClass("nav-scroll")
        });
        $('#dropdown-menu').bind("mouseleave", null, function () {
        		$('#dropdown-menu').hide();
            if($(document).scrollTop() <= 0){
                $('nav').removeClass("nav-scroll")
            }
        });
         $('#solution').on("mouseover", function () {
            $('.solution-menu').show();
            $('#dropdown-menu').hide();
            $('nav').addClass("nav-scroll")
        });
		
        $('#solution-menu').bind("mouseleave", null, function () {
        		$('.solution-menu').hide();
            if($(document).scrollTop() <= 0){
                $('nav').removeClass("nav-scroll")
            }
        });

        $('.nav > li').not(".dropdown-solution").bind("mouseover", null, function () {
            $('.solution-menu').hide();
            if($(document).scrollTop() <= 0){
                $('nav').removeClass("nav-scroll")
            }
        });

        // nav scroll
        $(document).on("scroll", function () {
            if ($(document).scrollTop() <= 0) {
                $("#nav").removeClass("nav-scroll");
            } else {
                $("#nav").addClass("nav-scroll");
            }
        });
        
        // footer
        $(function () {
            var image = '<img src="pics/qr-winxin.png">';
            $('.wechat-qrcode')
                .popover({placement: 'top', content: image, html: true});
        });

    })
})(window);
function bindEvent(){
	var w=window.innerWidth;
	var flag=false; 
	$('#dropdown-click').on('click',function(){
		if(w<769 && flag==false){
			$('#dropdown').css({
				'height':'300px'
			})
			$('#program').show()
			flag=true;
		}else if(w<769 && flag==true){
			$('#dropdown').css({
				'height':'38px'
			})
			$('#program').hide()
			flag=false;
		}
	})
	$('.dropdown-about').on('click',function(){
		if(w<769 && flag==false){
			$('#solution').css({
				'height':'300px'
			})
			$('.nav-about').show()
			flag=true;
		}else if(w<769 && flag==true){
			$('#solution').css({
				'height':'38px'
			})
			$('.nav-about').hide()
			flag=false;
		}
	})
	
}

bindEvent();
$(window).resize(function() {
 	bindEvent();
});
