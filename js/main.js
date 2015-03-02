$( document ).ready(function() {

// Refinments menu buttons system
	var noOfCats = $(".refinements").children('a').length;
	for ( var i = 0; i < noOfCats; i++ ) {
			$( ".category" + [i] ).click(function() {
				 $ (this).next().slideToggle( "250" );
				 $ (this).toggleClass( "active" );
				 $ (this).next().toggleClass( "active" );
		});     
	}
});


// Adding and removing refinment button
$(".refinements nav a").click(function(e) {
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
		console.log ("There are " + totalAnchors + " anchors");
		if (totalAnchors === 1) {
			$(".refinements").css('margin-top',0);
			$(".filters").css('margin-top',60);
		}
		//Prevent jumping back to top behaviour when clicked

	}
	else {
		// Remove active state for refinement selections and also remove related filter button
		$(this).removeClass("selected");
		$(".refinements #label-" + uniqueID + " svg").remove();
		$(".filters #label-" + uniqueID).remove();
	}
			e.preventDefault();
});

// Remove filter button and associated active state on refinment button
$(".filters").on("click", "a", function() {
	$(this).remove();
	var idTag = $(this).attr("id");
	$(".refinements nav a#" + idTag).removeClass("selected");
	$(".refinements nav a#" + idTag + " svg").remove();
});



//$(".refinements nav a").click(function() {
//	var stickyHeight = $("header").height();
//	$(".refinements").css('margin-top',stickyHeight);
//});	



