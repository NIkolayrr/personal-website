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

    $('img.svg').each(function(){
        let $img = $(this);
        let imgID = $img.attr('id');
        let imgClass = $img.attr('class');
        let imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            let $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

})();