$( document ).ready(function() {

// MENU SYSTEM
	var noOfCats = $(".categories").children('a').length;
	for ( var i = 0; i <= noOfCats; i++ ) {
			$( ".category" + [i] ).click(function() {
				 $ (this).next().slideToggle( "250" );
				 $ (this).toggleClass( "active" );
				 $ (this).next().toggleClass( "active" );
		});     
	}
});

// BUTTON SYSTEM
$(".categories nav a").click(function() {
	// Strip product count and brackets from text to generate unique ID 
	var filterText = $(this).text();
	var n=filterText.indexOf("(");
	var filterText=filterText.substring(0,n);
	var uniqueID = filterText.toLowerCase().replace(/[\*\^\'\!\&\£\-]/g, '').split(' ').join('');
	var isItselected = $(this).attr('class');
	if (isItselected != "selected") {
		// Add class of 'selected' to clicked refinements
		$(this).addClass("selected");
		// Add tick icon HTML to selected refinements
		$(this).append( "<svg viewBox='5.0 -8.048 100.0 108.648'><use xlink:href='#tick' /></svg>" );
		// Add new filter button with unique ID to the header
		var newFilterBut = "<a href='#' id='label-" + (uniqueID) + "'><span>" + (filterText) + "</span><svg viewBox='0 0 512 512'><use xlink:href='#close' /></svg></a>";
		$(newFilterBut).appendTo(".filters");
		// Add unique ID to refinement element
		$(this).attr("id",("label-" + uniqueID));
		// Make filters element visible if it has anchor children
		var totalAnchors = $(".filters a").length;
		if (totalAnchors === 1) {
			$(".categories").css('margin-top',0);
			$(".filters").css('margin-top',55);
		}	}
	else {
		// Remove active state for refinement selections and also remove related filter button
		$(this).removeClass("selected");
		$(".categories #label-" + uniqueID + " svg").remove();
		$(".filters #label-" + uniqueID).remove();
	}
});

// Remove filter button and associated active state on refinment button
$(".filters").on("click", "a", function() {
	$(this).remove();
	var idTag = $(this).attr("id");
	$(".categories nav a#" + idTag).removeClass("selected");
	$(".categories nav a#" + idTag + " svg").remove();
});

// SCROLL REFINEMENT HEADER BUTTON TO TOP WHEN CLICKED
$(".categories > a").click(function() {
    $('html, body').animate({
       scrollTop: (($(this).offset().top) - (60))
    }, 500);
});

// CLOSE RIGHT SIDE OFF CANVAS
$(".site-refinements header a").click(function() {
	$(".site-wrapper").toggleClass('show-right') 
});

// SHOW RIGHT SIDE OFF CANVAS
$(".filter").click(function() {
	$(".site-wrapper").toggleClass('show-right') 
});


