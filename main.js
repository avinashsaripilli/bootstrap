
$(function () {
   //click event to display side-2
    $(".heading-compose").click(function () {
        $(".side-two").css({
            "left": "0"
        });
    });
    //on-click event to hide side 2
    $(".newMessage-back").click(function () {
        $(".side-two").css({
            "left": "-100%"
        });
    });
     //on-click event to hide side 3
    $(".newMessage-back2").click(function () {
        $(".side-three").css({
            "left": "-100%"
        });
        setTimeout(() => {
        $(".side-one").show();
            
        }, 150);
    });
     //on click event to display side 3
    $("#profile").click(function(){
        $(".side-three").css({
            "left":"0"
        });
        $(".side-one").hide();
    });
    //function to toggle edit functionality of about and namme
    function edit() {
        $(this).parents().find('input.input').prop('disabled',false);
        $(this).removeClass('fa-pencil-alt');
        $(this).off('click');
        $(this).addClass('fa-check').on('click',function(event) {
            $(this).parents().find('input.input').prop('disabled',true);
            $(this).removeClass('fa-check');
            $(this).addClass('fa-pencil-alt');
            $(this).on('click',a);
        });
    }
    //on-click event to support edit function of name and about
    $('.fa-check').on('click',function(event) {
        $(this).addClass('edit');
        $($this).parents().find('input.input').prop('disabled',true);
        $($this).removeClass('fa-check');
        $($this).addClass('fa-pencil-alt');
    });
    $(".edit").on('click',edit);

    //event to display ony conversation and hide the rest at width less than or equal to 770
    $(window).on('resize', function(){
        var win = $(this); 
        if (win.width() <= 770) { 
	        $('.sideBar-body').click(function(){
                $(".side").hide();
                $(".heading-avatar").removeClass("col-1");
                $(".heading-avatar").addClass("col-2");
                $(".heading-dot").removeClass("col-1");
                $(".heading-dot").addClass("col-2");
                $(".heading-name").removeClass("col-9");
                $(".heading-name").addClass("col-6");
            });
	        $(".heading-avatar").click(function(){
                $(".conversation").hide();
            });
            $(".fa-times").click(function(){
                $(".conversation").show();
            });
            $(".fa-arrow-alt-circle-left").click(function(){
                $(".side").show();
            });
         }
  });  
});
