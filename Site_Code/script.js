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
  "aHR0cHM6Ly95b3V0dS5iZS9VYlFnWGVZX3ppNA=="
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
initElement("mdc-button",mdc.ripple.MDCRipple.attachTo);
if(cdSiteTopAppBar !== null) {
  cdSiteTopAppBar.listen('MDCTopAppBar:nav', () => {
    cdSiteDrawer.open = !cdSiteDrawer.open;
  });
}
window.mdc.autoInit();
