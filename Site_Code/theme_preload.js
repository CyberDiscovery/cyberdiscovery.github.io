function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function loadTheme(themeLocation, metaColor, cookieValue){
  var themeName = "SetTheme";
  var cssElement = document.getElementById(themeName);
  if (cssElement){
    cssElement.parentNode.removeChild(cssElement);
  }
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.id   = themeName;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = themeLocation;
  link.media = 'all';
  head.appendChild(link);
  document.getElementsByName("theme-color")[0].content = metaColor;
  if (cookieValue != null && cookieValue != ""){
    setCookie("ThemePreference", cookieValue, 30);
  }
}
function switchTheme(){
  switch (getCookie("ThemePreference")) {
    case "light":
      loadTheme("./Site_Code/dark_theme.css", "#212121", "dark");
      break;

    case "dark":
      loadTheme("./Site_Code/light_theme.css", "#3f51b5", "light");
      break;
  }
}

function checkCookie() {
  switch (getCookie("ThemePreference")) {
    case "dark":
      loadTheme("./Site_Code/dark_theme.css", "#212121");
      break;

    case "light":
      loadTheme("./Site_Code/light_theme.css", "#3f51b5");
      break;

    default:
      displayMDCSnackbar("This site uses cookies to store your theme preferences.", "ok", function() {}, 4000);
      loadTheme("./Site_Code/light_theme.css", "#3f51b5", "light");
      break;
  }
}
