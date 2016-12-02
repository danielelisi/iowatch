$(document).ready(function(){
	$("#top").load("top_content.html");
});

$(document).ready(function(){
    $("#footer").load("footer.html");
});

$(function(){
    $("#home_screen").hide();
});

$(function(){
    $("#thumb").draggable();
    $("#drop_area").droppable({
        drop:function(event){
            $("#thumb").fadeOut(600, function(){
                $(this).remove();
            });
            
            $("#drop_area").fadeOut(600, function(){
                $(this).remove();
            });
            
            $("#screen").fadeOut(600, function(){
                $(this).remove();
            });
            
            $("#home_screen").fadeIn(800, function(){
                $(this).show();
            });
        }
    });
});

/* $(function(){
    $("#notification_bar").resizable({
        animate:true,
        maxHeight:585,
        maxWidth:0,
        minHeight:33,
        minWidth:0,
        grid:550,
        handles:'n, s',
        stop:function(event, ui){
            $("#test").show();
            
            $("#notification").fadeOut(600, function(){
                $(this).hide();
            });
            
            $("#connections").fadeOut(600, function(){
                $(this).hide();
            });
        }
    });
}); */