// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .




$(document).ready(function(){
	$("#sample").on("click", function(){
	    $(this).hide();
	    $(".alca").fadeIn(3000);
	    $("#alcas").fadeIn(12000);
	});
});

$(document).ready(function(){
$("#happy").on({
    mouseenter: function(){
        $(this).css("color", "#FDAADE");
    }, 
    mouseleave: function(){
        $(this).css("font-size", "56px");
    }, 
    click: function(){
        $(this).css("background-color", "yellow");
    } 
});
});


$(document).ready(function(){
$("nav").on({
    mouseenter: function(){
        $(this).css({"background-color": "#FDAADE", "padding": "4px", "font-size": "20px", "border-bottom": "1px solid black"});
    }, 
});
});


// $(document).ready(function(){
// 	$("#happy").on("click", function()
// 		{   alert('you clicked me!') 
// 	});
// });
