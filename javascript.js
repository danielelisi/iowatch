$(document).ready(function(){
	var topDiv = document.getElementById = 'top';
    
    $.ajax({
        url:'top_content.html',
        dataType:'html',
        success:function(resp){
            console.log(resp);
            topDiv.innerhtml = resp;
        }
    });
});