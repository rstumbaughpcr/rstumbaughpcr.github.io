var currentPage = $(".main");
$( document ).ready( function() {

	$("#sectionwrap").hide();

    // LOAD ALL CONTENT FOR EACH SECTION
    $("#contents .internal").click( function() {
    	var name = $(this).find('div').first().attr('id'); // first div child's id
    	
    	var sectionsArr = window[ name.toUpperCase() ]; // get array of all sections

        $("#section #section-header").css("background", "url(\"img/covers/"+name+"_cover.png\") no-repeat");
        $("#section #section-header h1").text( name.replace(/_/g, " " ) );

		var $row = $('<div/>', { "class": "row" });
    	for( var i=0; i<sectionsArr.length; i++ ) {
    		var section = sectionsArr[i];

    		// add new story, load headline / file to header / body

            var $headCol = $('<div/>', { "class": "col-sm-12"});
            var $headline = $('<h2>'+section+'</h2>', { "id": "headline" } );

            var $story = $('<div/>', { "class": "col-sm-12", "style":"margin: 1% 0 2% 0" } );
            var $text = $('<div/>', { "id": "text" } );

            var fileName = section.replace(/ /g, "" ).replace(/'/g, "" ).replace(/:/g, "" );

            $text.load( "text/"+name+"/"+fileName+".txt");

            $headline.appendTo( $headCol );
            $headCol.appendTo( $row );

            $text.appendTo( $story );
            $story.appendTo( $row );
    	}

    	var $buttonWrap = $('<div/>', { "class": "col-sm-6 col-sm-offset-3" } );
    	var $button = $('<div/>', { "class": "return-contents" } );
    	$button.text("TABLE OF CONTENTS");

    	$button.appendTo( $buttonWrap );
    	$buttonWrap.appendTo( $row );

    	$row.appendTo( $('#section .container') );

    	$(".return-contents").click( function() {
			$('#section .row').remove();
			$('.main').slideToggle(1000);
	    	$('#sectionwrap').slideToggle(1000);
		});

    	$('.main').slideToggle(1000);
    	$('#sectionwrap').slideToggle(1000);

    	currentPage = $('#sectionwrap');
    });


})