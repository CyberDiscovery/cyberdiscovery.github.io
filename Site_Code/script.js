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
var cGFnZVVybExpc3QK = [
  "aHR0cHM6Ly95b3V0dS5iZS9mS3ZOZy1fS0hYUT90PTJz",
  "aHR0cHM6Ly95b3V0dS5iZS9MR29qMlEwbklKYw==",
  "aHR0cHM6Ly95b3V0dS5iZS95NjEyMFFPbHNmVQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9kUXc0dzlXZ1hjUQ==",
  "aHR0cHM6Ly9kb2NzLmthbGkub3JnL2luc3RhbGxhdGlvbi9rYWxpLWxpbnV4LWhhcmQtZGlzay1pbnN0YWxs",
  "aHR0cDovL3d3dy5uYXRpb25hbGNyaW1lYWdlbmN5Lmdvdi51ay9hYm91dC11cy93aGF0LXdlLWRvL25hdGlvbmFsLWN5YmVyLWNyaW1lLXVuaXQ=",
  "aHR0cHM6Ly93d3cubGVnaXNsYXRpb24uZ292LnVrL3VrcGdhLzE5OTAvMTgvY3Jvc3NoZWFkaW5nL2NvbXB1dGVyLW1pc3VzZS1vZmZlbmNlcw==",
  "aHR0cHM6Ly95b3V0dS5iZS9WeHF1SGNmeGFCWQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9fWFJSU21aSDdDTQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9LRWtyV1JIQ0RRVQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9LN0huMXJQUW91VQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9jNnRRek1ocWhMYw==",
  "aHR0cHM6Ly95b3V0dS5iZS9FZ2wtZDBvOWhaYw==",
  "aHR0cHM6Ly95b3V0dS5iZS9aNjZiaEdKNE9ucw==",
  "aHR0cHM6Ly95b3V0dS5iZS9XbTlzaWtkVkUxQT90PTlz",
  "aHR0cHM6Ly95b3V0dS5iZS9EN1FSTE1SRGJ5TQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9oNzFTWjkwbHdQUQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9RTW9rTVE4QnU3WT90PTQycw==",
  "aHR0cHM6Ly95b3V0dS5iZS9iQ21TNEtRS2Y4SQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9Bei1tR1ItQ2VoWQ==",
  "aHR0cHM6Ly95b3V0dS5iZS82NDU3YnBSdEE4MA==",
  "aHR0cHM6Ly95b3V0dS5iZS9UNm9CemFYazZaaw==",
  "aHR0cHM6Ly95b3V0dS5iZS9uQ2JHTWVzRUFhMA==",
  "aHR0cHM6Ly95b3V0dS5iZS83NGd4MHY1Wkp6dw==",
  "aHR0cHM6Ly95b3V0dS5iZS96LTNmb0NVMkNuaz90PTNtMjVz",
  "aHR0cHM6Ly95b3V0dS5iZS9KS2hESFk0VVdCdz90PTFtNXM=",
  "aHR0cHM6Ly95b3V0dS5iZS9NQlJxdTBZT0gxNA==",
  "aHR0cHM6Ly95b3V0dS5iZS9XWVVPS25aa2drbw==",
  "aHR0cHM6Ly95b3V0dS5iZS9udWNrVGNvWkc0UQ==",
  "aHR0cHM6Ly95b3V0dS5iZS81bTdMOGhsQXJzVQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9OZGxvY0EtV0Z1TQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9OTFNlYUFHblBNVQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9JSDRxSy1uWmR5bw==",
  "aHR0cHM6Ly95b3V0dS5iZS9zU0lrVVJQNkZUTQ==",
  "aHR0cHM6Ly95b3V0dS5iZS96TVZJb0cxaVdBUQ==",
  "aHR0cHM6Ly95b3V0dS5iZS96SnJhZFlVQXZsTQ==",
  "aHR0cHM6Ly9iaXQubHkvMkVCRWRNUA==",
  "aHR0cHM6Ly95b3V0dS5iZS9VYlFnWGVZX3ppNA==",
  "aHR0cHM6Ly95b3V0dS5iZS9kRE04Y0dyX2pLTQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9BNS1nZWdIY0ZFOA==",
  "aHR0cHM6Ly95b3V0dS5iZS9udUNJQTMxTGZJVQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9aLTlNM1hzU1JZTQ==",
  "aHR0cHM6Ly95b3V0dS5iZS8wOW0wQjhSUmlFRQ==",
  "aHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9oZWxsb2ltb2xpdmVyYS9nb2xkZW4tcGxhdGUjdD0wOjMw",
  "aHR0cHM6Ly95b3V0dS5iZS95NXpRVG1rWTdHSQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9CSVVKc2p2UFBoWQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9HTWIwMnRBcURSTQ==",
  "aHR0cHM6Ly95b3V0dS5iZS9uT2d3OW1fbi1vNA==",
  "aHR0cHM6Ly95b3V0dS5iZS9tSXlMT0lxR1pDcw==",
  "aHR0cHM6Ly95b3V0dS5iZS9SYlk2d1RmQzhnTQ=="
];
function selectRandItem(selectionArray) {
  var chosenIndex = Math.floor(Math.random() * (selectionArray.length));
  return window.atob(selectionArray[chosenIndex]);
}
function loadNewPage(pageUrl){
  window.open(pageUrl, '_blank');
}
function setLocation(){
  loadNewPage(selectRandItem(cGFnZVVybExpc3QK));
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
      loadTheme("./Site_Code/dark_theme.css", "#000000", "dark");
      break;

    case "dark":
      loadTheme("./Site_Code/light_theme.css", "#3f51b5", "light");
      break;
  }
}
function checkCookie() {
  switch (getCookie("ThemePreference")) {
    case "dark":
      loadTheme("./Site_Code/dark_theme.css", "#000000");
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
function MTMzNyBLb25hbWkgQ29kZSAK(callback) {
  var kkeys = [];
  var MTMzNyBLb25hbWkgQ29kZSAK = '38,38,40,40,37,39,37,39,66,65,13';
  return event => {
    kkeys.push(event.keyCode);
    if (kkeys.toString().indexOf(MTMzNyBLb25hbWkgQ29kZSAK) >= 0) {
      callback();
      kkeys = [];
    }
  };
}
var handler = MTMzNyBLb25hbWkgQ29kZSAK(() => {
  var SW5zZXJ0MTMzN01lc3NhZ2UK = window.atob("RXNjYWxhdGUgeW91ciBwb3dlciBsZXZlbCBvdmVyIDkwMDA/");
  displayMDCSnackbar(SW5zZXJ0MTMzN01lc3NhZ2UK, "Yep", setLocation, 5000);
});
window.addEventListener('keydown', handler);
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
  console.log("fixAllCardsVerticalHeight called.")
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

initElement('mdc-list-item', mdc.ripple.MDCRipple.attachTo);
oneElementInit('.hibp_text_field_main', mdc.textField.MDCTextField);
/*
window.addEventListener("resize", fixAllTabsCardsVerticalHeight, false);
window.addEventListener("orientationchange", fixAllTabsCardsVerticalHeight, false);
window.onload = fixAllTabsCardsVerticalHeight;
*/
initElement("mdc-button",mdc.ripple.MDCRipple.attachTo);
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
window.mdc.autoInit();
if (screen.width > 839 && screen.width <= 1199) {
  displayMDCSnackbar("This site may not appear correctly, please consider rotating your device.", "OK", function() {}, 5000);
} else if (screen.width > 1920) {
  displayMDCSnackbar("This site may not appear correctly on large/high DPI displays. We're working on it, we promise!", "OK", function() {}, 6000);
}
checkCookie();
