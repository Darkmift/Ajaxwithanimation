console.log('js online');

//define a links in navbar
$('#Home,#Students,#Courses').click(function(e) {
    e.preventDefault();
    console.log('Link disabled');
    $(this).attr('id');
    if (!$('#container').empty()) {
        $('#container').empty();
    }
    $('#container').load($(this).attr('id') + '.html');
});