console.log('js online');

//define a links in navbar
$('#HomeContent,#Students,#Courses').click(function(e) {
    var container = $('#container').css('height', 0);
    var content;
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