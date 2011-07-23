$(function() {
    $("a#first").click(function() {
        alert("Hello world!");
    });
//	$("#orderedlist").addClass("red");
	$("#orderedlist > li").addClass("blue");
	$("#orderedlist").hover(function(){
		$(this).addClass("green");
		}, function(){
			$(this).removeClass("green");
		});
     
	   $("#orderedlist").find("li").each(function(i) {
	     $(this).append( " BAM! " + i );
	   });	

	 // use this to reset a single form
	   $("#reset").click(function() {
	     $("form")[0].reset();
	   });
	//use this to reset a single form 
	$("#reset").click(function(){
		$("form").each(function(){
			this.reset();
		});
	});

	$("li li").css("border", "1px solid black"); 
	$("li").not(":has(ul)").css("border", "1px solid black"); 
	
	$('#faq').find('dd').hide();
	$('#faq').find('dt').click(function() {
    	$(this).next().slideToggle();
   	});
	$("a").hover(function(){
		$(this).parents("p").addClass("highlight");
	}, function(){
		$(this).parents("p").removeClass("highlight");
	});		
//Annimation! yea! Need to start this...
   // work on things. 
});
