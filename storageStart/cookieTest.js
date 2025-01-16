//Old (tried and true) - first write a cookie
document.cookie="danTest=test";
//then test if cookie is retrievable
(document.cookie.indexOf("danTest")!=-1)?cookieEnabled=true:cookieEnabled=false;
//alert(cookieEnabled);

//Newer, but has some issues that I've seen in React in certain browsers
if(navigator.cookieEnabled){/*yes*/}else{/*no*/}