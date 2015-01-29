/*
MIT-LICENSE blah blah blah
It's free to use and modify (and sell, if you want)
Made with love
Lucas Inacio de Souza, aka, Kbooz
*/
var urls = [];
$("body").prepend('<div style="background-color: blue;width: 10%;display: flex;justify-content: center;align-items: center;font-size: 5em;position: fixed;top: 50%;z-index: 1;color: white;" id="copybutton">Copy</div>');

$("#copybutton").click(function() {
	var pinsurls = showurls();
	document.write(pinsurls);
});

window.onmouseover=function(e) {
var url = $(e.target).parent().parent().attr('href');
if(typeof url != undefined)
{
	if(urls.indexOf(url)<0)
	{
		$(e.target).attr('style', "background-color:red!important;");
		urls.push(url);
	}
}
};

function showurls() {
	console.clear();
	retorno = "";
	for (var i = urls.length - 1; i >= 0; i--) {
		if(urls[i]!=undefined)
			retorno+="<p>"+urls[i]+"</p>";
	}
	return retorno;
}