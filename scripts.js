/* jshint unused: false */
/* global window, document */
function selectLanguage() {
	var lang = document.getElementById("lang").value;
	var url = window.location.href;
	if (lang === "en") {
		url = url.replace(/\/(\w+\.html)/, "/en/$1");
	}
	if (lang === "ja") {
		url = url.replace(/\/en\/(\w+\.html)/, "/$1");
	}
//	window.alert(url);
	window.location.href = url;
}
