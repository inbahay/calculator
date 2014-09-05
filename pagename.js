function modalWin(linkname) {
var pagename;
if (linkname == "about")
	pagename ="aboutus.html";
else if (linkname == "contact")
	pagename ="contactus.html";
else if (linkname == "sitemap")
	pagename ="sitemap.html";
else if (linkname == "links")
	pagename ="links.html";
else if (linkname == "privacy")
	pagename ="privacy.html";
else if (linkname == "disclaimer")
	pagename ="disclaimer.html";

if (window.showModalDialog) {
	window.showModalDialog(pagename,"name","dialogWidth:650px;dialogHeight:300px");
} 
else 
{
window.open(pagename,'name','height=300,width=650,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,modal=yes');
}
} 