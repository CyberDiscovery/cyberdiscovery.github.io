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
function loadDarkTheme() {
  console.log("Loading dark theme.");
  var cssId = 'DarkCSS';
  if (!document.getElementById(cssId))
  {
      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.id   = cssId;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = './Site_Code/dark_theme.css';
      link.media = 'all';
      head.appendChild(link);
      document.getElementsByName("theme-color")[0].content = "#000000";
      setCookie("ThemePreference", "dark", 30);
  }
}
function switchTheme(){
  var currentTheme = getCookie("ThemePreference");
  if (currentTheme == "dark"){
    var cssElement = document.getElementById("DarkCSS");
    cssElement.parentNode.removeChild(cssElement);
    document.getElementsByName("theme-color")[0].content = "#3f51b5";
    setCookie("ThemePreference", "light", 30);
  } else if (currentTheme == "light"){
    loadDarkTheme();
  }
}

function checkCookie() {
  var theme=getCookie("ThemePreference");
  if (theme == "") {
    displayMDCSnackbar("This site uses cookies to store your theme preferences.", "ok", function() {}, 4000);
    setCookie("ThemePreference", "light", 30);
  } else if (theme == "dark"){
    loadDarkTheme();
  }
  /* else {
     theme = prompt("Please enter your name:","");
     if (theme != "" && theme != null) {
       setCookie("ThemePreference", theme, 30);
     }
  }
  */
}
