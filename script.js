$(document).ready(function(){
    var rome = ["Colloseum", "Roman Forum", "Trevi Fountain", "Piazza Navona", "Vatican City", "Pantheon", "Spanish Steps"]
    for(var i = 0; i<rome.length;i++)
    $("body").append("<div class='card'><img class='card-img-top' src='...' alt='Card image cap'><div class='card-block'><h4 class='"rome[i]"'>Card title</h4><p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p></div></div>")
})