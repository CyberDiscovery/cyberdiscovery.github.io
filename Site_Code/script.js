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
      loadTheme("./Site_Code/dark_theme.min.css", "#1b1b21", "dark");
      break;

    case "dark":
      loadTheme("./Site_Code/light_theme.min.css", "#0d2332", "light");
      break;
  }
}
function checkCookie() {
  switch (getCookie("ThemePreference")) {
    case "dark":
      loadTheme("./Site_Code/dark_theme.min.css", "#1b1b21");
      themeSwitcher.checked = true;
      break;

    case "light":
      loadTheme("./Site_Code/light_theme.min.css", "#0d2332");
      themeSwitcher.checked = false;
      break;

    default:
      displayMDCSnackbar("This site uses cookies for basic functionality.", "ok", function() {}, 8000);
      loadTheme("./Site_Code/light_theme.min.css", "#0d2332", "light");
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
var currentAudioSource = null;
var linearProgressBar = `
<div role="progressbar" class="mdc-linear-progress mdc-linear-progress--indeterminate">
  <div class="mdc-linear-progress__buffering-dots"></div>
  <div class="mdc-linear-progress__buffer"></div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
  </div>
</div>
`;

function checkPwnState(searchEmailAddr) {
  if (currentAudioSource != null) {
    currentAudioSource.pause();
  }
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
function dismissResourcesCard(invokedDirectly) {
  var cardToAddress = document.getElementById("resources-intro-msg");
  var lastCard = document.getElementById("resources-last-card");

  switch (getCookie("DismissedCard")) {
    case "yes":
      if (invokedDirectly) {
        cardToAddress.style.display = "";
        lastCard.style.display = "none";
        setCookie("DismissedCard", "no", 30);
      } else {
        cardToAddress.style.display = "none";
        lastCard.style.display = "";
      }
      break;

    case "no":
      if (invokedDirectly) {
        cardToAddress.style.display = "none";
        lastCard.style.display = "";
        setCookie("DismissedCard", "yes", 30);
        if (currentAudioSource != null) {
          currentAudioSource.pause();
        }
        displayMDCSnackbar("Dismissed message", "Undo", function() {dismissResourcesCard(true);}, 4000);
      } else {
        lastCard.style.display = "none";
      }
      break;

    default:
      setCookie("DismissedCard", "no", 30);
      lastCard.style.display = "none";
      break;
  }
}
let rippleLock = 0;
function removeRippleFocus(evt) {
  if (rippleLock) return;
  let { target } = evt;
  do {
      if (target.classList && target.classList.contains('mdc-ripple-upgraded--background-focused')) {
          rippleLock++;
          target.classList.remove('mdc-ripple-upgraded--background-focused');
          rippleLock--;
          return;
      }
  } while ((target=target.parentNode));
}
function handleAudioPlayback(trackName, audioSource) {
  if (currentAudioSource != null) {
    currentAudioSource.pause();
  }
  currentAudioSource = new Audio(audioSource);
  currentAudioSource.play();
  displayMDCSnackbar("Playing: " + trackName, "Stop", function() {currentAudioSource.pause();}, 4000);
}
var soundLinks = {};
var showdownLoaded = false;
function doLiterallyNothing() {}

function loadSoundboardSources() {
  loadSoundboardSources = doLiterallyNothing;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var currentTab = document.getElementById("Grid-Tab-3");
      var sectionHeading = document.getElementsByTagName("template")[0];
      var sectionCard = sectionHeading.content.getElementById('soundboard-track-category');
      var soundboardCard = document.getElementsByTagName("template")[1];
      var soundCard = soundboardCard.content.getElementById('soundboard-track-name');
      var soundData = (JSON.parse(xhr.responseText));
      for (var sectionName in soundData) {
        var soundCardID = guidGenerator();
        sectionCard.innerHTML = sectionName;
        sectionCard.id = "sb-" + soundCardID + "-heading";
        var cardToAppend = sectionHeading.content.cloneNode(true);
        currentTab.appendChild(cardToAppend);
        var currentTrackSection = soundData[sectionName];
        for (var soundObj = 0; soundObj < currentTrackSection.count; soundObj++) {
          var currentTrackRefName = currentTrackSection[soundObj].name;
          soundCard.innerHTML = currentTrackRefName;
          soundCard.id = "sc-" + soundCardID + "-track-" + soundObj;
          soundLinks[soundCard.id] = currentTrackSection[soundObj].link;
          var cardSoundCardToAppend = soundboardCard.content.cloneNode(true);
          currentTab.appendChild(cardSoundCardToAppend);
          oneElementInit("#" + soundCard.id, mdc.ripple.MDCRipple.attachTo);
          document.getElementById(soundCard.id).addEventListener('click', function (evt) {
            handleAudioPlayback(evt.target.innerHTML, soundLinks[evt.target.id]);
          });
        }
      }
      sectionCard.id = 'soundboard-track-category';
      soundCard.id = 'soundboard-track-name';
    }
  };
  xhr.open('GET', 'https://cyber-discovery.firebaseio.com/Soundboard/Sounds.json', true);
  xhr.send(null);
}
window.addEventListener('mouseup', removeRippleFocus, { passive: true });
function detectPageBottom() {
  if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight - 64) {
    document.getElementById("scrollPageTop").classList.remove("mdc-fab--exited");
  } else {
    document.getElementById("scrollPageTop").classList.add("mdc-fab--exited");
  }
}
function goToPageTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var showdownJSConverter = null;
function loadProjectDetails(projectRepoName) {
  var projectRepo = "https://raw.githubusercontent.com/CyberDiscovery/" + projectRepoName + "/master/README.md";
  var projectBody = document.getElementById("project-dialog-body");
  projectBody.innerHTML = linearProgressBar;
  genericScrollableDialog.open();
  if (!showdownLoaded) {
    var showdownJS = document.createElement('script');
    showdownJS.onload = function () {
        showdownLoaded = true;
        showdownJSConverter = new showdown.Converter();
        showdownJSConverter.setFlavor('github');
        showdownJSConverter.setOption('openLinksInNewWindow', 'true');
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            projectBody.innerHTML = showdownJSConverter.makeHtml(xhr.responseText);
          }
        };
        xhr.open('GET', projectRepo, true);
        xhr.send(null);
    };
    showdownJS.src = "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.0/showdown.min.js";
    document.head.appendChild(showdownJS);
  } else {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        projectBody.innerHTML = showdownJSConverter.makeHtml(xhr.responseText);
      }
    };
    xhr.open('GET', projectRepo, true);
    xhr.send(null);
  }
}
function instantiateMenu(btnID, menuID) {
  var mdcMenu = oneElementInit("#" + menuID, mdc.menu.MDCMenu.attachTo);
  document.getElementById(btnID).addEventListener('click', () => mdcMenu.open = !mdcMenu.open);
}
initElement('mdc-list-item', mdc.ripple.MDCRipple.attachTo);
initElement('mdc-card__primary-action', mdc.ripple.MDCRipple.attachTo);
var searchHIBPTextField = oneElementInit('#HIBP_Textfield', mdc.textField.MDCTextField.attachTo);
var btnHIBPTextField = oneElementInit('.mdc-text-field__icon', mdc.textField.MDCTextFieldIcon.attachTo);
dismissResourcesCard(false);
initElement("mdc-button",mdc.ripple.MDCRipple.attachTo);
initElement("project-menu-btn", mdc.ripple.MDCRipple.attachTo);
oneElementInit('.mdc-fab', mdc.ripple.MDCRipple.attachTo);
for (var i = 1; i < 9; i++) {
  instantiateMenu("btn-proj-" + String(i), "menu-proj-" + String(i));
}
var themeSwitcher = oneElementInit("#theme-switcher-switch", mdc.switchControl.MDCSwitch.attachTo);
var resetCookieCheckbox = oneElementInit("#cookie-checkbox", mdc.checkbox.MDCCheckbox.attachTo);
var cookieFormfield = oneElementInit("#cookie-form-field", mdc.formField.MDCFormField.attachTo);
var siteSettingsMenu = oneElementInit("#site-settings-dialog", mdc.dialog.MDCDialog.attachTo);
var genericScrollableDialog = oneElementInit("#scrollable-text-dialog", mdc.dialog.MDCDialog.attachTo);
cookieFormfield.input = resetCookieCheckbox;
function parseSiteSettings() {
  siteSettingsMenu.open();
}
if(cdSiteTopAppBar !== null) {
  cdSiteTopAppBar.listen('MDCTopAppBar:nav', () => {
    cdSiteDrawer.open = !cdSiteDrawer.open;
  });
}
siteSettingsMenu.listen('MDCDialog:closing', function () {
  if (getCookie("ThemePreference") == "light" && themeSwitcher.checked) {
    switchTheme();
  } else if (getCookie("ThemePreference") == "dark" && !themeSwitcher.checked) {
    switchTheme();
  }
  if (resetCookieCheckbox.checked) {
    setCookie("ThemePreference", "", 0);
    setCookie("DismissedCard", "", 0);
    displayMDCSnackbar("Cleared cookies.", "Reload", function() {window.location.reload();}, 4000);
  }
});
mdcSnackBar.listen("MDCSnackbar:closing", function() {
  if (currentAudioSource != null && !currentAudioSource.paused) {
    mdcSnackBar.open();
  }
});
searchHIBPTextField.listen("keyup", function(evt) {
  if (evt.keyCode == 13) {
    checkPwnState(evt.target.value);
  }
});
btnHIBPTextField.listen("click", function() {
    checkPwnState(searchHIBPTextField.value);
});
genericScrollableDialog.listen("MDCDialog:closed", function() {
  document.getElementById("project-dialog-body").innerHTML = "Dialog Body Text";
});
var previousActiveTab = cdSiteTabBar.foundation_.adapter_.getPreviousActiveTabIndex();
cdSiteTabBar.listen('MDCTabBar:activated', function (event) {
  var nowActivatedTab = availableSiteTabs[event.detail.index].id;
  if (nowActivatedTab == "Tab-3") {
    loadSoundboardSources();
  }
  document.getElementById(nowActivatedTab).classList.remove("layout-tab-item");
  document.getElementById(availableSiteTabs[previousActiveTab].id).classList.add("layout-tab-item");
  previousActiveTab = cdSiteTabBar.foundation_.adapter_.getPreviousActiveTabIndex();
});
window.addEventListener("scroll", detectPageBottom);
window.mdc.autoInit();
checkCookie();
