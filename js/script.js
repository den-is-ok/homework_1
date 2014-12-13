// JavaScript Document
$(document).ready(function() {

    $("#addProject").click(function(event){
        event.preventDefault();
        $("#overlay").fadeIn(400,
            function(){
                $("#modalWindow").css("display", "block").animate({opacity: 1, top: "50%"}, 200);
            });
    });
    $("#modalClose, #overlay").click(function(){
        $("#modalWindow").animate({opacity: 0, top: "45%"}, 200,
            function(){
                $(this).css("display","none");
                $("#overlay").fadeOut(400);
            });
    });

    $(".file_input").change('document.getElementById("fileName").value=this.value;');

});

