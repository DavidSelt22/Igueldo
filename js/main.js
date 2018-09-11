 $(document).ready(function(){


   	var flag = false;
   var scroll;

   
   $(window).scroll(function() {
   	     
      scroll = $(window).scrollTop();

       if(scroll > 200){

           if(!flag){
                $('.header-top').css({"padding-top":"1%"});
                flag=true;
                $('.fl,.fr,.lc').css({ "height": " 70px"});
                flag=true;
                $('.fr').css({ "background-position-x": "120%"});
                flag=true;
                $('.fl').css({ "background-position-x": "-20%"});
                flag=true;
                $('header').css({ "top": "90px"});
			        	flag=true;
			        	$('.intmenu a').css({ "padding": "5px 5px"});
			        	flag=true;
			        	$('header label').css({ "margin-top": "0px"});
			        	flag=true;
			         	$('.menu-despleg').css({ "top": "127px"});
				        flag=true;
				
               

           }


       }else{
           
           if(flag){
                $('.header-top').css({"padding-top":"0%"});
                flag=false;
                $('.fl,.fr,.lc').css({ "height": " 150px"});
                flag=false;
                $('.fr').css({ "background-position-x": "0%"});
                flag=false;
                $('.fl').css({ "background-position-x": "0%"});
                flag=false;
                $(' header').css({ "top": "150px"});
				        flag=false;
			        	$('.intmenu a').css({ "padding": "15px 5px"});
                flag=false;
		        		$('header label').css({ "margin-top": "0px"});
			        	flag=false;
		        		$('.menu-despleg').css({ "top": "200px"});
			        	flag=false;
        		
               



           }







       }/*/else*/


   });




     
           $('.icon').click(function(){
               $('.icon').toggleClass('active');
           });
  
           $('.icon').on('click',function(){

	          $('.menu-despleg').toggleClass('menu-despleg2');
	         
           });

           $("#button-menu").click(function(){ $(".menu-despleg").toggleClass('menu-visible') });


          $("#i").click(function () {
   
            $('html,body').animate({
            scrollTop: $(".hotel").offset().top
             }, 2000);
          });
          $("#t").click(function () {
   
            $('html,body').animate({
            scrollTop: $(".h3").offset().top
             }, 2000);
          });
          $("#e").click(function () {
   
            $('html,body').animate({
            scrollTop: $(".h3").offset().top
             }, 2000);
          });
          $("#h").click(function () {
   
            $('html,body').animate({
            scrollTop: $(".h3").offset().top
             }, 2000);
          });
          $("#ha").click(function () {
   
            $('html,body').animate({
            scrollTop: $(".adornocentral").offset().top
             }, 2000);
          });
          $("#u").click(function () {
   
            $('html,body').animate({
            scrollTop: $(".contacto").offset().top
             }, 2000);
          });
          $("#c").click(function () {
   
            $('html,body').animate({
            scrollTop: $(".contacto").offset().top
             }, 2000);
          });









 });