var url = new URL(window.location);
if(url.toString().indexOf('theme=dark') == -1){
	url.searchParams.append('theme', 'dark');
	window.location.replace(url);
}