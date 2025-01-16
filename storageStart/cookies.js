// cookies.js
// You can use this code for your projects!
// Derived from the Bill Dortch code at http://www.hidaho.com/cookies/cookie.txt

function getCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) { endstr = document.cookie.length; }
	return decodeURI(document.cookie.substring(offset, endstr));
	}

function GetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return getCookieVal (j);
			}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break; 
		}
	return null;
	}

function DeleteCookie (name,path,domain) {
	if (GetCookie(name)) {
		document.cookie = name + "=" +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
		}
	}

/////////
// use:
//		SetCookie('name', 'value', 3000);
//		SetCookie('name', 'value', 1000,false,false,false,true);
//		If set the secure (last arg) to true, you MUST be on an https connection!
/////////
function SetCookie (name,value,maxAge,path,domain,sameSite,secure) {
  document.cookie = name + "=" + encodeURI (value) +
    ((maxAge) ? ";max-age=" + maxAge  : "") +
    ((path) ? ";path=" + path  : "") +
    ((domain) ? ";domain=" + domain : "") +
    ((sameSite) ? ";samesite=" + sameSite : ";samesite=strict") +
    ((secure) ? ";secure;" : ";");
}