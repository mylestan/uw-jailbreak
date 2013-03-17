// JQUERY BASED

//slides the three steps up and down to reveal more text.
$(document).ready(function()
	{
	$("#details p.accordian-head").click(function()
	{
		$(this).next("div.accordian-body").slideToggle(300);
	});
});