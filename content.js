var url = new URL(window.location);
if(url.toString().indexOf('/pfp') != -1){
	url = new URL(url.toString().slice(0, url.toString().length-4)+"?__a=1&__d=dis");
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", url, false);
	xmlHttp.send(null);
	window.location.replace(new URL(JSON.parse(xmlHttp.responseText).graphql.user.profile_pic_url_hd));
}
else if(url.toString().indexOf('theme=dark') == -1){
	url.searchParams.append('theme', 'dark');
	window.location.replace(url);
}