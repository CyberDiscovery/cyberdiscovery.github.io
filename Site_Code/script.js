function initElement(elementClassName, elementInitFunction) {
  var x = document.getElementsByClassName(elementClassName);
  if (x[0] !== null){
    var y;
    for(y = 0; y < x.length; y++){
      elementInitFunction(x[y]);
    }
  }
}
function oneElementInit(queryElementName, instantiationFunction) {
  if (document.querySelector(queryElementName) !== null){
    return new instantiationFunction(document.querySelector(queryElementName));
  }
}
function selectRandItem(selectionArray) {
  var chosenIndex = Math.floor(Math.random() * (selectionArray.length));
  return window.atob(selectionArray[chosenIndex]);
}
function loadNewPage(pageUrl){
  window.open(pageUrl, '_blank');
}
function guidGenerator() {
  var S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
}
var mdcSnackBar = oneElementInit(".mdc-snackbar", mdc.snackbar.MDCSnackbar.attachTo);
function displayMDCSnackbar(snackbarText, dismissText, dismissFunction, timeoutValue) {
  mdcSnackBar.timeoutMs = timeoutValue;
  mdcSnackBar.labelText = snackbarText;
  mdcSnackBar.actionButtonText = dismissText;
  document.getElementById('snackbarActionBtnRipple').onclick = dismissFunction;
  mdcSnackBar.open();
}
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
      themeSwitcher.checked = true;
      break;

    case "light":
      loadTheme("./Site_Code/light_theme.css", "#3f51b5");
      themeSwitcher.checked = false;
      break;

    default:
      displayMDCSnackbar("This site uses cookies to store your theme preferences.", "ok", function() {}, 8000);
      loadTheme("./Site_Code/light_theme.css", "#3f51b5", "light");
      themeSwitcher.checked = false;
      break;
  }
  resetCookieCheckbox.checked = false;
}
var cdSiteTopAppBar = oneElementInit(".mdc-top-app-bar", mdc.topAppBar.MDCTopAppBar);
var cdSiteTabBar = oneElementInit(".mdc-tab-bar", mdc.tabBar.MDCTabBar);
var cdSiteDrawer = oneElementInit(".mdc-drawer", mdc.drawer.MDCDrawer.attachTo);
oneElementInit(".mdc-menu", mdc.menu.MDCMenu);
var availableSiteTabs = document.getElementsByClassName("generic-tab-item");

function checkPwnState(searchEmailAddr) {
  if (searchEmailAddr == null || searchEmailAddr == "") {
    displayMDCSnackbar("Please type a valid email address.", "OK", function(){}, 5000);
  } else {
    var checkHIBPRequest = new XMLHttpRequest();
    checkHIBPRequest.onreadystatechange = function() {
      if (checkHIBPRequest.readyState == 4 && checkHIBPRequest.status == 200) {
        var breachCount = JSON.parse(checkHIBPRequest.responseText).length;
        displayMDCSnackbar("Oh no — pwned on " + breachCount + " breached sites!", "More", function(){loadNewPage('https://haveibeenpwned.com/account/' + searchEmailAddr);}, 5000);
      } else if (checkHIBPRequest.readyState == 4 && checkHIBPRequest.status == 404) {
        displayMDCSnackbar("Good news — no pwnage found!", "Cool", function(){}, 5000);
      } else if (checkHIBPRequest.readyState == 4) {
        displayMDCSnackbar("Rate limit exceeded, please try again later.", "Oops!", function(){loadNewPage(window.atob("aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvREx6eHJ6RkN5T3M/Y29udHJvbHM9MCZzaG93aW5mbz0wJnJlbD0wJmF1dG9wbGF5PTEmbG9vcD0xJnN0YXJ0PTA="));}, 5000);
      }
    };
    checkHIBPRequest.open("GET", "https://haveibeenpwned.com/api/v2/breachedaccount/" + searchEmailAddr + "?truncateResponse=true&includeUnverified=true", true);
    checkHIBPRequest.send(null);
  }
}
function fetchXkcd(xkcdNumber){
  if (xkcdNumber == null || xkcdNumber == "") {
    loadNewPage("https://c.xkcd.com/random/comic/");
  } else {
    loadNewPage("https://xkcd.com/" + xkcdNumber);
  }
}
function getTabMaxCardHeight(elementOffsetPadding){
  var cardArray = [];
  for (var i = 0; i < document.querySelectorAll('.mdc-card').length; i++) {
      if (document.querySelectorAll('.mdc-card')[i].offsetParent !== null) {
        cardArray.push(document.querySelectorAll('.mdc-card')[i].offsetHeight);
      }
    }
  return (Math.max.apply(null, cardArray) - elementOffsetPadding);
}
function fixContribListShownOnDom() {
  for (var i = 1; i < document.querySelectorAll('.mdc-list').length; i++) {
    if (document.querySelectorAll('.mdc-list')[i].offsetParent !== null) {
      return (document.querySelectorAll('.mdc-list')[i]);
    }
  }
}

function alignContribTableSize() {
  var pageContribList = fixContribListShownOnDom();
  if (pageContribList != null){
    if (pageContribList.classList.contains('generic_contrib_card_list') == true) {
      pageContribList.style.display = "none";
      pageContribList.style.height = getTabMaxCardHeight(16).toString() + "px";
      pageContribList.style.display = "";
    }
  }
}
function fixAllTabsCardsVerticalHeight(){
  console.log("fixAllCardsVerticalHeight called.");
  /*
  switch (previousActiveTab) {
    case 1:
      alignContribTableSize();
      break;
    case 2:
      alignContribTableSize();
      break;
    case 3:
      alignContribTableSize();
      break;
  }
  */
}
function detectPageBottom() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    document.getElementById("scrollPageTop").classList.remove("mdc-fab--exited");
  } else {
    document.getElementById("scrollPageTop").classList.add("mdc-fab--exited");
  }
}
function goToPageTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

initElement('mdc-list-item', mdc.ripple.MDCRipple.attachTo);
oneElementInit('.hibp_text_field_main', mdc.textField.MDCTextField);
/*
window.addEventListener("resize", fixAllTabsCardsVerticalHeight, false);
window.addEventListener("orientationchange", fixAllTabsCardsVerticalHeight, false);
window.onload = fixAllTabsCardsVerticalHeight;
*/
initElement("mdc-button",mdc.ripple.MDCRipple.attachTo);
oneElementInit('.mdc-fab', mdc.ripple.MDCRipple.attachTo);
var themeSwitcher = oneElementInit("#theme-switcher-switch", mdc.switchControl.MDCSwitch.attachTo);
var resetCookieCheckbox = oneElementInit("#cookie-checkbox", mdc.checkbox.MDCCheckbox.attachTo);
var cookieFormfield = oneElementInit("#cookie-form-field", mdc.formField.MDCFormField.attachTo);
var siteSettingsMenu = oneElementInit("#site-settings-dialog", mdc.dialog.MDCDialog.attachTo);
var genericScrollableDialog = oneElementInit("#scrollable-text-dialog", mdc.dialog.MDCDialog.attachTo);
cookieFormfield.input = resetCookieCheckbox;
function parseSiteSettings() {
  siteSettingsMenu.open();
  siteSettingsMenu.listen('MDCDialog:closing', function () {
    if (getCookie("ThemePreference") == "light" && themeSwitcher.checked) {
      switchTheme();
    } else if (getCookie("ThemePreference") == "dark" && !themeSwitcher.checked) {
      switchTheme();
    }
    if (resetCookieCheckbox.checked) {
      setCookie("ThemePreference", "", 0);
      displayMDCSnackbar("Cleared cookies.", "OK", function() {}, 4000);
    }
  });
}
if(cdSiteTopAppBar !== null) {
  cdSiteTopAppBar.listen('MDCTopAppBar:nav', () => {
    cdSiteDrawer.open = !cdSiteDrawer.open;
  });
}
var previousActiveTab = cdSiteTabBar.foundation_.adapter_.getPreviousActiveTabIndex();
cdSiteTabBar.listen('MDCTabBar:activated', function (event) {
  document.getElementById(availableSiteTabs[event.detail.index].id).classList.remove("layout-tab-item");
  document.getElementById(availableSiteTabs[previousActiveTab].id).classList.add("layout-tab-item");
  previousActiveTab = cdSiteTabBar.foundation_.adapter_.getPreviousActiveTabIndex();
  //fixAllTabsCardsVerticalHeight();
});
window.addEventListener("scroll", detectPageBottom);
window.mdc.autoInit();
if (screen.width > 839 && screen.width <= 1199) {
  displayMDCSnackbar("This site may not appear correctly, please consider rotating your device.", "OK", function() {}, 5000);
} else if (screen.width > 1920) {
  displayMDCSnackbar("This site may not appear correctly on large/high DPI displays. We're working on it!", "OK", function() {}, 6000);
}
checkCookie();
