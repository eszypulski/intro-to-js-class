// alert('My project is going to be awesome!');
$("#noShow").hide()
$("h1").html("The Best Jokes Ever");
$("#joke").append("<p>Q. What do you call a fake noodle? <br /> A. An impasta</p>");
$("button").addClass("test")
$("#toggleJokes").click(function(){
    $("#joke").toggle();

})