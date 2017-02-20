(function () {
    let $li = $('#mainNav ul li'),
        mobile = 360,
        tablet = 800;

    $( window ).resize(function() {
        let screenWidth = $( window ).width();
        if(screenWidth > mobile && screenWidth < tablet){
            $li.css('display','inline-block');
        }
        else if(screenWidth < mobile){
            $li.css('display','none');
            $('#toggle').removeClass('clickedMenu');
        }else if(screenWidth > tablet){
            $li.css('display','block');
        }
    });

    $('#toggle').on('click',function () {
        let $this = $(this);
        if($li.is(':visible')){
            $this.removeClass('clickedMenu');
            $li.slideUp(500);
            $('#app').on('click',function () {
                $this.removeClass('clickedMenu');
                $li.slideUp(500);
            });
        }else{
            $li.slideDown(500);
            $this.addClass('clickedMenu');
        }
    });

})();
