$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

         /*smooth scroll*/ 

    $("[data-scroll]").on("click",function(event){
        event.preventDefault();
        var $this=$(this),
        blockId = $this.data('scroll'),
        blockOffset=$(blockId).offset().top;
        $("html,body").animate({
        scrollTop:blockOffset
        },500);

    });

        /*Menu nav toggle*/ 

        $("#nav_toggle").on("click",function(event){
            event.preventDefault();

            $(this).toggleClass("active");
            $("#nav").toggleClass("active");
        });

            /*Collapse*/ 
            $("[data-collapse]").on("click", function(event){
                event.preventDefault();
                var $this=$(this),
                blockId = $this.data('collapse');
                $this.toggleClass("active");
                
            });

            /*slider*/ 
            $("[data-slider]").slick({
                Infinity:true,
                fade:false,
                 slidesToshow:1,
                 slidesToscroll:1 
            });
          

});
