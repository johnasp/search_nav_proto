$(document).ready(function(){var e=$(".categories").children("a").length;for(var t=0;t<=e;t++)$(".category"+[t]).click(function(){$(this).next().slideToggle("250");$(this).toggleClass("active");$(this).next().toggleClass("active")})});$(".categories nav a").click(function(){var e=$(this).text(),t=e.indexOf("("),e=e.substring(0,t),n=e.toLowerCase().replace(/[\*\^\'\!\&\£\-]/g,"").split(" ").join(""),r=$(this).attr("class");if(r!="selected"){$(this).addClass("selected");$(this).append("<svg viewBox='5.0 -8.048 100.0 108.648'><use xlink:href='#tick' /></svg>");var i="<a href='#' id='label-"+n+"'><span>"+e+"</span><svg viewBox='0 0 512 512'><use xlink:href='#close' /></svg></a>";$(i).appendTo(".filters");$(this).attr("id","label-"+n);var s=$(".filters a").length;if(s===1){$(".categories").css("margin-top",0);$(".filters").css("margin-top",55)}}else{$(this).removeClass("selected");$(".categories #label-"+n+" svg").remove();$(".filters #label-"+n).remove()}});$(".filters").on("click","a",function(){$(this).remove();var e=$(this).attr("id");$(".categories nav a#"+e).removeClass("selected");$(".categories nav a#"+e+" svg").remove()});$(".categories > a").click(function(){$("html, body").animate({scrollTop:$(this).offset().top-60},500)});$(".site-refinements header a").click(function(){$(".site-wrapper").toggleClass("show-right")});$(".clickme").click(function(){$(".site-wrapper").toggleClass("show-right")});