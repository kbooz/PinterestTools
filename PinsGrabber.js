/*
MIT-LICENSE blah blah blah
It's free to use and modify (and sell, if you want)
Made with love
Lucas Inacio de Souza, aka, Kbooz
*/
var urls = [];
$("body").prepend('<div style="background-color: blue;width: 10%;display: flex;justify-content: center;align-items: center;font-size: 5em;position: fixed;top: 50%;z-index: 1;color: white;" id="copybutton">Copy</div>');

$("#copybutton").click(function() {
	var pinsurls = showurls(2);
	//Thanks: http://www.lsauer.com/2012/05/javascript-copy-text-to-clipboard.html
	$( "#copybutton" ).after('<div style="background-color: blue;width: 10%;height:50%;display: flex;justify-content: center;align-items: center;font-size: 2em;position: fixed;top: 50%;z-index: 1;color: white;" id="copytext"><textarea id="pins" style="height: 100%;">'+pinsurls+'</textarea></div>');
	$("#copybutton").hide();
	$("#pins").select();
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

function showurls(a) {
	console.clear();
	retorno = "";
	for (var i = urls.length - 1; i >= 0; i--) {
		retorno+=urls[i]+"\n";
	}
	if(typeof(a)==='undefined')
		console.log(retorno);
	else
		return retorno;
}
