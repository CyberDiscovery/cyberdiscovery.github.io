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
  "aHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9oZWxsb2ltb2xpdmVyYS9nb2xkZW4tcGxhdGUjdD0wOjMw"
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
  var dataObj = {
    message: snackbarText,
    actionText: dismissText,
    timeout: timeoutValue,
    actionHandler: dismissFunction
  };
  mdcSnackBar.show(dataObj);
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
  var SW5zZXJ0MTMzN01lc3NhZ2UK = window.atob("VHVybiB1cCB0aGUgamFtcyBhbmQgaGF2ZSBhIGdvb2QgdGltZT8=");
  displayMDCSnackbar(SW5zZXJ0MTMzN01lc3NhZ2UK, "Sure", setLocation, 3000);
});
window.addEventListener('keydown', handler);
var cdSiteTopAppBar = oneElementInit(".mdc-top-app-bar", mdc.topAppBar.MDCTopAppBar);
var cdSiteTabBar = oneElementInit(".mdc-tab-bar", mdc.tabBar.MDCTabBar);
var cdSiteDrawer = oneElementInit(".mdc-drawer", mdc.drawer.MDCDrawer.attachTo);
var cdSourceMenu = oneElementInit(".mdc-menu", mdc.menu.MDCMenu);
var availableSiteTabs = document.getElementsByClassName("generic-tab-item");
function openSourceMenu() {
  cdSourceMenu.open = true;
}
function viewPageSourceStackOverFlow(){
  var source = "<html>";
  source += document.getElementsByTagName('html')[0].innerHTML;
  source += "</html>";
  source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  source = "<pre>"+source+"</pre>";
  var sourceWindow = window.open('','Source of page','height=800,width=800,scrollbars=1,resizable=1');
  sourceWindow.document.write(source);
  sourceWindow.document.close();
  if(window.focus) sourceWindow.focus();
}
function createLinkCard(gridLocation, cardTitle, cardDescription, backgroundClass, cardButtonHref) {
  currentTab = document.getElementById(gridLocation);
  currentTemplateCard = document.getElementsByTagName("template")[0];
  currentTemplateCard.content.getElementById('cd-card-title--headline').innerHTML = cardTitle;
  currentTemplateCard.content.getElementById('cd-card-background--image').classList.add(backgroundClass);
  currentTemplateCard.content.getElementById('cd-card-body--text').innerHTML = cardDescription;
  var cdRippleLinkSection = currentTemplateCard.content.getElementById('cd-card-float-body--click');
  var cdFabButtonSection = currentTemplateCard.content.getElementById('cd-card-action-button--click');
  cdRippleLinkSection.id = guidGenerator();
  cdFabButtonSection.id = guidGenerator();
  cardToAppend = currentTemplateCard.content.cloneNode(true);
  currentTab.appendChild(cardToAppend);
  if (screen.width > 839) {
    document.getElementById(cdRippleLinkSection.id).addEventListener('click', function (evt) {
      window.open(cardButtonHref, '_blank');
    });
  }
  document.getElementById(cdFabButtonSection.id).addEventListener('click', function (evt) {
    window.open(cardButtonHref, '_blank');
  });
  cdRippleLinkSection.id = "cd-card-float-body--click";
  cdFabButtonSection.id = "cd-card-action-button--click";
  currentTemplateCard.content.getElementById('cd-card-background--image').classList.remove(backgroundClass);
}
createLinkCard("Grid-Tab-5", "OverTheWire", "Wargames offered by the OverTheWire community, which can help you to learn and practice security concepts in the form of fun-filled games.", "otw-card-background", "https://overthewire.org/wargames/");
createLinkCard("Grid-Tab-5", "Replit", "A free, powerful and simple online compiler, IDE, interpreter, and REPL. Allows you to Code, compile, and run code in 30+ programming languages.", "replit-card-background", "https://repl.it/languages");
createLinkCard("Grid-Tab-5", "SmashTheStack", "An ethical hacking environment that supports the simulation of real world software vulnerabilities and allows the use of exploitation techniques.", "smashthestack-card-background", "http://smashthestack.org/wargames.html");
createLinkCard("Grid-Tab-5", "Cybrary", "Online cyber-security training which you can learn anytime, anywhere with open-source, high quality training from top professionals and companies.", "cybrary-card-background", "https://www.cybrary.it/");
createLinkCard("Grid-Tab-5", "Udacity", "A vast, comprehensive list of free online courses and Nanodegree programmes which range from mastering web design to business tech.", "udacity-card-background", "https://eu.udacity.com/");
createLinkCard("Grid-Tab-5", "Codewars", "Where programmers achieve code mastery through solving different challenges in different programming languages, with an active community.", "codewars-card-background", "https://www.codewars.com/");
createLinkCard("Grid-Tab-5", "Codecademy", "An online platform that offers free interactive programming lessons in various different programming languages. Great place for Python.", "codecademy-card-background", "https://www.codecademy.com/catalog/subject/all");
createLinkCard("Grid-Tab-5", "Learn RE", "Learn the basics of x86 and get hands-on experience with reverse engineering from scratch. Extremely useful for binary reversing CTFs.", "reeeeeee-card-background", "https://www.begin.re/");
createLinkCard("Grid-Tab-5", "Cyber-Challenge UK", "A series of national competitions & programmes, designed to enable more people to become cyber security professionals.", "cyberchallenge-card-background", "https://www.cybersecuritychallenge.org.uk/");
createLinkCard("Grid-Tab-5", "PicoCTF", "PicoCTF is a high-school CTF where participants must reverse engineer, break, hack and decrypt different challenges.", "picoctf-card-background", "https://picoctf.com/");
createLinkCard("Grid-Tab-5", "Hak5", "Thousands of videos on various infosec topics and news, hosted by the famous members of Hak5: Darren, Shannon and Mubix.", "hak5-card-background", "https://www.youtube.com/user/Hak5Darren/videos");
initElement("mdc-button",mdc.ripple.MDCRipple.attachTo);
if (screen.width > 839) {
  initElement("mdc-card__primary-action",mdc.ripple.MDCRipple.attachTo);
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
});
window.mdc.autoInit();
