$(document).ready(function(){
    
    $("#submit").click(function(event){
        event.preventDefault();
        var userinput= $("#location").val()
        window.location.href="locationinfo.html?location=" + userinput
    })



})