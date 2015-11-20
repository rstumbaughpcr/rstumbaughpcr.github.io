var currentPage = $(".main");

$(document).ready(function() {

	$("#story").hide();

	$(".to-item").click(function() {
		var dest = $(this).attr("href");

		if(dest === "#story") {
			// set headline
			// set text
			// set any pictures

			var name = $(this).text().replace(" ", "");

			var storyUrl    = "text/stories/" + name+ ".txt";

			$("#headline").text( $(this).text() );
			setText($("#text"), storyUrl);
		}

		$("#contents-header").slideToggle(1000);


		$(dest).slideToggle(1000);
		currentPage.slideToggle(1000);

		console.log( $(window).scrollTop());
		

		currentPage = $(dest);


	});

});

function setText( target, url ) {
	target.load( url );
}



        
