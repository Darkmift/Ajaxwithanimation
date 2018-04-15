console.log('js online');
btns = $('#HomeContent,#Students,#Courses');
// btns.parent().addClass("active");
// btns.parent().toggleClass("active");
//define a links in navbar
btns.click(function(e) {
    var container = $('#container').css('height', 0);
    var content;
    //set active class to proper tab
    $('[data-toggle=tab]').click(function() {
        if ($(this).parent().hasClass('active')) {
            $($(this).attr("href")).toggleClass('active');
        }
    });
    //prevent click behaviour or redirect
    e.preventDefault();
    console.log('Link disabled');
    //assign id of clicked
    var thisId = $(this).attr('id');
    console.log(thisId);
    //stop previous anaimation if in progress
    if (container.is(':animated')) {
        console.log('animation in progress');
        container.stop();
    }
    container.animate({ height: "600px" }, 1500, "linear");

    $.get(thisId + '.html', function(data) {
        container.html(data);
    });

});

// $(this).show("slide", { direction: "left" }, 1000);