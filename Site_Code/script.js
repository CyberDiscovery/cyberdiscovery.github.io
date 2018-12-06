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
  "aHR0cHM6Ly95b3V0dS5iZS95NXpRVG1rWTdHSQ=="
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
  mdcSnackBar.show({message: snackbarText, actionText: dismissText, actionHandler: dismissFunction, timeout: timeoutValue});
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
  mdcSnackBar.show({message: SW5zZXJ0MTMzN01lc3NhZ2UK, actionText: "Sure", actionHandler: setLocation, timeout: 3000});
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
  var currentCardID = guidGenerator();
  var currentTab = document.getElementById(gridLocation);
  var currentTemplateCard = document.getElementsByTagName("template")[0];
  var cdFabButtonSection = currentTemplateCard.content.getElementById('cd-card-action-button--click');
  currentTemplateCard.content.getElementById('cd-card-background--image').id = currentCardID + "-bg--image";
  currentTemplateCard.content.getElementById(currentCardID + "-bg--image").classList.add(backgroundClass);
  currentTemplateCard.content.getElementById('cd-card-title--headline').id = currentCardID + "-card--title";
  currentTemplateCard.content.getElementById(currentCardID + "-card--title").innerHTML = cardTitle;
  cdFabButtonSection.id = currentCardID + "-fab--button";
  currentTemplateCard.content.getElementById('cd-card-body--text').id = currentCardID + "-body--text";
  currentTemplateCard.content.getElementById(currentCardID + "-body--text").innerHTML = cardDescription;
  var cardToAppend = currentTemplateCard.content.cloneNode(true);
  currentTab.appendChild(cardToAppend);
  document.getElementById(currentCardID + "-fab--button").addEventListener('click', function (evt) {
    window.open(cardButtonHref, '_blank');
  });
  cdFabButtonSection.id = "cd-card-action-button--click";
  currentTemplateCard.content.getElementById(currentCardID + "-bg--image").classList.remove(backgroundClass);
  currentTemplateCard.content.getElementById(currentCardID + "-card--title").id = 'cd-card-title--headline';
  currentTemplateCard.content.getElementById(currentCardID + "-body--text").id = 'cd-card-body--text';
  currentTemplateCard.content.getElementById(currentCardID + "-bg--image").id = 'cd-card-background--image';
}
function createProjectMainCard(cardGridLocation, cardMainTitle, cardDescriptionText, cardBackgroundClass, cardRepoHref, cardRepoForks, cardRepoIssues, cardMenuText, cardMenuHref, cardMenuFinalIcon) {
  var someRandomGUID = guidGenerator();
  var currentTab = document.getElementById(cardGridLocation);
  var currentTemplateCard = document.getElementsByTagName("template")[1];
  currentTemplateCard.content.getElementById('project-card-body--text').innerHTML = cardDescriptionText;
  currentTemplateCard.content.getElementById('project-card-body--text').id = someRandomGUID + "-body--text";
  currentTemplateCard.content.getElementById('project-card-title--headline').innerHTML = cardMainTitle;
  currentTemplateCard.content.getElementById('project-card-title--headline').id = someRandomGUID + "-title--text";
  currentTemplateCard.content.getElementById('project-card-background--image').classList.add(cardBackgroundClass);
  currentTemplateCard.content.getElementById('project-card-background--image').id = someRandomGUID + "-bg--class";
  currentTemplateCard.content.getElementById('project-card-action-item--name').innerHTML = '<i class="material-icons project_card_menu_icons">' + cardMenuFinalIcon + '</i>' + cardMenuText;
  currentTemplateCard.content.getElementById('project-card-action-item--name').id = someRandomGUID + "-menu--text";
  var cardPrimaryButton = currentTemplateCard.content.getElementById('project-card-action-button--click');
  var cardForkButton = currentTemplateCard.content.getElementById('project-card-fork-item--href');
  var cardissueButton = currentTemplateCard.content.getElementById('project-card-issues-item--href');
  var cardLastItem = currentTemplateCard.content.getElementById('project-card-action-item--href');
  var cardMenuActivation = currentTemplateCard.content.getElementById('project-card-more-option--menu');
  var cardMenuButtonActivation = currentTemplateCard.content.getElementById('project-card-menu-activation--button');
  cardPrimaryButton.id = someRandomGUID + "-button--href";
  cardForkButton.id = someRandomGUID + "-fork--href";
  cardissueButton.id = someRandomGUID + "-issues--href";
  cardLastItem.id = someRandomGUID + "-menuitem--href";
  cardMenuActivation.id = someRandomGUID + "-menu--activation";
  cardMenuButtonActivation.id = someRandomGUID + "-menubtn--activation";
  var cardToAppend = currentTemplateCard.content.cloneNode(true);
  currentTab.appendChild(cardToAppend);
  var currentCardMenu = mdc.menu.MDCMenu.attachTo(document.getElementById(cardMenuActivation.id));
  document.getElementById(cardMenuButtonActivation.id).addEventListener('click', () => currentCardMenu.open = !currentCardMenu.open);
  document.getElementById(cardPrimaryButton.id).addEventListener('click', function (evt) {
    window.open(cardRepoHref, '_blank');
  });
  document.getElementById(cardForkButton.id).addEventListener('click', function (evt) {
    window.open(cardRepoForks, '_blank');
  });
  document.getElementById(cardissueButton.id).addEventListener('click', function (evt) {
    window.open(cardRepoIssues, '_blank');
  });
  document.getElementById(cardLastItem.id).addEventListener('click', function (evt) {
    window.open(cardMenuHref, '_blank');
  });
  cardPrimaryButton.id = 'project-card-action-button--click';
  cardForkButton.id = 'project-card-fork-item--href';
  cardissueButton.id = 'project-card-issues-item--href';
  cardLastItem.id = 'project-card-action-item--href';
  cardMenuActivation.id = 'project-card-more-option--menu';
  cardMenuButtonActivation.id = 'project-card-menu-activation--button';
  currentTemplateCard.content.getElementById(someRandomGUID + "-body--text").id = 'project-card-body--text';
  currentTemplateCard.content.getElementById(someRandomGUID + "-title--text").id = 'project-card-title--headline';
  currentTemplateCard.content.getElementById(someRandomGUID + "-bg--class").id = 'project-card-background--image';
  currentTemplateCard.content.getElementById(someRandomGUID + "-menu--text").id = 'project-card-action-item--name';
  currentTemplateCard.content.getElementById('project-card-background--image').classList.remove(cardBackgroundClass);
}
function checkPwnState(searchEmailAddr) {
  if (searchEmailAddr == null || searchEmailAddr == "") {
    displayMDCSnackbar("Email field is empty!", "OK", function(){}, 3000);
  } else {
    var checkHIBPRequest = new XMLHttpRequest();
    checkHIBPRequest.onreadystatechange = function() {
      if (checkHIBPRequest.readyState == 4 && checkHIBPRequest.status == 200) {
        var breachCount = JSON.parse(checkHIBPRequest.responseText).length;
        mdcSnackBar.show({message: "Oh no — pwned on " + breachCount + " breached sites!", actionText: "More", actionHandler: function(){loadNewPage('https://haveibeenpwned.com/account/' + searchEmailAddr);}, timeout: 5000});
      } else if (checkHIBPRequest.readyState == 4 && checkHIBPRequest.status == 404) {
        displayMDCSnackbar("Good news — no pwnage found!", "Cool", function(){}, 3000);
      } else if (checkHIBPRequest.readyState == 4) {
        displayMDCSnackbar("Rate limit exceeded, please try again later.", "Oops!", function(){loadNewPage(window.atob("aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvREx6eHJ6RkN5T3M/Y29udHJvbHM9MCZzaG93aW5mbz0wJnJlbD0wJmF1dG9wbGF5PTEmbG9vcD0xJnN0YXJ0PTA="));}, 3000);
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
function createProjectTextFieldCards(cardGridLocation, cardMainTitle, cardBodyText, cardImageClass, entryValueName, functionToCall) {
  var textFieldCardID = guidGenerator();
  var currentTab = document.getElementById(cardGridLocation);
  var currentTemplateCard = document.getElementsByTagName("template")[2];
  currentTemplateCard.content.getElementById('textfield-card-title--headline').innerHTML = cardMainTitle;
  currentTemplateCard.content.getElementById('textfield-card-title--headline').id = textFieldCardID + "-title--text";
  currentTemplateCard.content.getElementById('textfield-card-body--text').innerHTML = cardBodyText;
  currentTemplateCard.content.getElementById('textfield-card-body--text').id = textFieldCardID + "-body--text";
  currentTemplateCard.content.getElementById('textfield-card-background--image').classList.add(cardImageClass);
  currentTemplateCard.content.getElementById('textfield-card-background--image').id = textFieldCardID + "-background--class";
  currentTemplateCard.content.getElementById('textfield-card-form-submit--field').id = textFieldCardID + "-form-field--submit";
  currentTemplateCard.content.getElementById('textfield-card-for--attr').id = textFieldCardID + "-float-label--attr";
  currentTemplateCard.content.getElementById('textfield-card-label-field--text').innerHTML = entryValueName;
  currentTemplateCard.content.getElementById('textfield-card-label-field--text').setAttribute("for", textFieldCardID + "-float-label--attr");
  currentTemplateCard.content.getElementById('textfield-card-label-field--text').id = textFieldCardID + "-entry-name--value";
  currentTemplateCard.content.getElementById('textfield-card-input--text').classList.add("mainclass-" + textFieldCardID);
  currentTemplateCard.content.getElementById('textfield-card-input--text').id = textFieldCardID + "-main-value--class";
  var cardPrimaryIconButton = currentTemplateCard.content.getElementById('textfield-card-action--button');
  cardPrimaryIconButton.id = textFieldCardID + "-primary-btn--click";
  var cardToAppend = currentTemplateCard.content.cloneNode(true);
  currentTab.appendChild(cardToAppend);
  var currentTextFieldInputBox = oneElementInit("." + "mainclass-" + textFieldCardID, mdc.textField.MDCTextField);
  document.getElementById(cardPrimaryIconButton.id).addEventListener('click', function () {
    functionToCall(currentTextFieldInputBox.value);
  });
  document.getElementById(textFieldCardID + "-form-field--submit").addEventListener("submit", function(evt) {
    functionToCall(currentTextFieldInputBox.value);
  });
  currentTemplateCard.content.getElementById(textFieldCardID + "-title--text").id = 'textfield-card-title--headline';
  currentTemplateCard.content.getElementById(textFieldCardID + "-body--text").id = 'textfield-card-body--text';
  currentTemplateCard.content.getElementById(textFieldCardID + "-background--class").id = 'textfield-card-background--image';
  currentTemplateCard.content.getElementById(textFieldCardID + "-form-field--submit").id = 'textfield-card-form-submit--field';
  currentTemplateCard.content.getElementById(textFieldCardID + "-float-label--attr").id = 'textfield-card-for--attr';
  currentTemplateCard.content.getElementById(textFieldCardID + "-entry-name--value").id = 'textfield-card-label-field--text';
  currentTemplateCard.content.getElementById(textFieldCardID + "-primary-btn--click").id = 'textfield-card-action--button';
  currentTemplateCard.content.getElementById(textFieldCardID + "-main-value--class").id = 'textfield-card-input--text';
  currentTemplateCard.content.getElementById('textfield-card-background--image').classList.remove(cardImageClass);
  currentTemplateCard.content.getElementById('textfield-card-input--text').classList.remove("mainclass-" + textFieldCardID);
}
function createImageCardMain(cardGridLocation, uniqueImageClass, cardTooltipLikeTitle) {
  var imageCardID = guidGenerator();
  var currentTab = document.getElementById(cardGridLocation);
  var currentTemplateCard = document.getElementsByTagName("template")[3];
  currentTemplateCard.content.getElementById('generic-image-demo--class').classList.add(uniqueImageClass);
  currentTemplateCard.content.getElementById('generic-image-demo--class').title = cardTooltipLikeTitle;
  currentTemplateCard.content.getElementById('generic-image-demo--class').id = imageCardID + "-image--main";
  var cardToAppend = currentTemplateCard.content.cloneNode(true);
  currentTab.appendChild(cardToAppend);
  currentTemplateCard.content.getElementById(imageCardID + "-image--main").id = 'generic-image-demo--class';
  currentTemplateCard.content.getElementById('generic-image-demo--class').classList.remove(uniqueImageClass);
}
function createGitHubContribCard(cardGridLocation, projectRepoName) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var initialTableHeading = '<li class="mdc-list-item rounded_corner_list_item"><span class="mdc-list-item__text generic_class_center_item mdc-typography--headline5">Project Contributors</span></li>';
      var contribCardID = guidGenerator();
      var currentTab = document.getElementById(cardGridLocation);
      var currentTemplateCard = document.getElementsByTagName("template")[4];
      currentTemplateCard.content.getElementById('contrib-list-card-main--list').innerHTML += initialTableHeading;
      var repoJSONContributors = (JSON.parse(xhr.responseText));
      for (var contrib = 0; contrib < repoJSONContributors.length; contrib++) {
        currentTemplateCard.content.getElementById('contrib-list-card-main--list').innerHTML += '<li class="mdc-list-item rounded_corner_list_item"><span class="mdc-list-item__text contrib_list_item_contributor">' + '<img class="mdc-list-item__graphic contrib_list_pfp_logo"' + 'onclick="loadNewPage(\'' + repoJSONContributors[contrib].html_url + '\')"' +  'title="View Profile" src="' + repoJSONContributors[contrib].avatar_url + '">' + repoJSONContributors[contrib].login + '</span>' + '<span class="mdc-list-item__meta material-icons contrib_list_secondary_logo" title="View Commits" aria-hidden="true" ' + 'onclick="loadNewPage(\'' + 'https://github.com/CyberDiscovery/' + projectRepoName + '/commits?author=' + repoJSONContributors[contrib].login + '\')"' + '>insert_chart_outlined</span>' + '</li>';
      }
      currentTemplateCard.content.getElementById('contrib-list-card-main--list').id = contribCardID + "-card--genlist";
      var cardToAppend = currentTemplateCard.content.cloneNode(true);
      currentTab.appendChild(cardToAppend);
      currentTemplateCard.content.getElementById(contribCardID + "-card--genlist").id = 'contrib-list-card-main--list';
      currentTemplateCard.content.getElementById('contrib-list-card-main--list').innerHTML = '';
    }
  };
  xhr.open('GET', 'https://api.github.com/repos/CyberDiscovery/' + projectRepoName + '/contributors', true);
  xhr.send(null);
}
function createBannerImageWideCard(cardGridLocation, bannerImageClass) {
  var imageCardID = guidGenerator();
  var currentTab = document.getElementById(cardGridLocation);
  var currentTemplateCard = document.getElementsByTagName("template")[5];
  currentTemplateCard.content.getElementById('banner-image-wide-card--class').classList.add(bannerImageClass);
  currentTemplateCard.content.getElementById('banner-image-wide-card--class').id = imageCardID + "-banner--main";
  var cardToAppend = currentTemplateCard.content.cloneNode(true);
  currentTab.appendChild(cardToAppend);
  currentTemplateCard.content.getElementById(imageCardID + "-banner--main").id = 'banner-image-wide-card--class';
  currentTemplateCard.content.getElementById('banner-image-wide-card--class').classList.remove(bannerImageClass);
}
function createHomeWideLinkCard(gridLocation, cardTitle, cardDescription, backgroundClass, cardButtonHref, cardButtonName) {
  var currentCardID = guidGenerator();
  var currentTab = document.getElementById(gridLocation);
  var currentTemplateCard = document.getElementsByTagName("template")[6];
  var cdFabButtonSection = currentTemplateCard.content.getElementById('home-card-action-button--click');
  currentTemplateCard.content.getElementById('home-card-background--image').id = currentCardID + "-bg--image";
  currentTemplateCard.content.getElementById(currentCardID + "-bg--image").classList.add(backgroundClass);
  currentTemplateCard.content.getElementById('home-card-title--headline').id = currentCardID + "-card--title";
  currentTemplateCard.content.getElementById(currentCardID + "-card--title").innerHTML = cardTitle;
  cdFabButtonSection.id = currentCardID + "-fab--button";
  cdFabButtonSection.innerHTML = cardButtonName;
  currentTemplateCard.content.getElementById('home-card-body--text').id = currentCardID + "-body--text";
  currentTemplateCard.content.getElementById(currentCardID + "-body--text").innerHTML = cardDescription;
  var cardToAppend = currentTemplateCard.content.cloneNode(true);
  currentTab.appendChild(cardToAppend);
  document.getElementById(currentCardID + "-fab--button").addEventListener('click', function (evt) {
    window.open(cardButtonHref, '_blank');
  });
  cdFabButtonSection.id = "home-card-action-button--click";
  currentTemplateCard.content.getElementById(currentCardID + "-bg--image").classList.remove(backgroundClass);
  currentTemplateCard.content.getElementById(currentCardID + "-card--title").id = 'home-card-title--headline';
  currentTemplateCard.content.getElementById(currentCardID + "-body--text").id = 'home-card-body--text';
  currentTemplateCard.content.getElementById(currentCardID + "-bg--image").id = 'home-card-background--image';
}
function createMainIntroTextCard() {
  var currentTab = document.getElementById("Grid-Tab-1");
  var currentTemplateCard = document.getElementsByTagName("template")[7];
  var cardToAppend = currentTemplateCard.content.cloneNode(true);
  currentTab.appendChild(cardToAppend);
}
function createTitlelessInfoCard() {
  var titleCardID = guidGenerator();
  var currentTab = document.getElementById("Grid-Tab-1");
  var currentTemplateCard = document.getElementsByTagName("template")[8];
  var pageBtnPrimaryButton = currentTemplateCard.content.getElementById('small-card-main-page--btn');
  pageBtnPrimaryButton.id = titleCardID + "-mainpg--btn";
  var cardToAppend = currentTemplateCard.content.cloneNode(true);
  currentTab.appendChild(cardToAppend);
  document.getElementById(titleCardID + "-mainpg--btn").addEventListener('click', function (evt) {
    window.open("https://www.joincyberdiscovery.com/", '_blank');
  });
  currentTemplateCard.content.getElementById(titleCardID + "-mainpg--btn").id = 'small-card-main-page--btn';
}
function fixGridCardVerticalHeightAlign(classElementsName) {
  var pageElementsArray = [];
  var pageTextItemsBody = document.getElementsByClassName(classElementsName);
  for (var i = 0; i < pageTextItemsBody.length; i++){
    pageElementsArray.push(pageTextItemsBody[i].offsetHeight);
  }
  var maxPageDescBodyText = Math.max.apply(null, pageElementsArray) - 8;
  maxPageDescBodyText = maxPageDescBodyText.toString();
  for (var q = 0; q < pageTextItemsBody.length; q++) {
    if (pageTextItemsBody[q].offsetHeight <  maxPageDescBodyText) {
      pageTextItemsBody[q].style.height = maxPageDescBodyText + "px";
    }
  }
}
function alignContribTableSize() {
  var pageContribList = fixContribListShownOnDom();
  if (pageContribList.classList.contains('generic_contrib_card_list') == true) {
    pageContribList.style.display = "none";
    pageContribList.style.height = getTabMaxCardHeight(16).toString() + "px";
    pageContribList.style.display = "";
  }
}
function fixAllTabsCardsVerticalHeight(){
  switch (previousActiveTab) {
    case 0:
      break;
    case 1:
      alignContribTableSize();
      break;
    case 2:
      alignContribTableSize();
      break;
    case 3:
      alignContribTableSize();
      break;
    case 4:
      break;
    default:
      console.log("Nope", previousActiveTab);
      break;
  }
}
//FINISH THIS!!
createBannerImageWideCard("Grid-Tab-1", "home_tab_welcome_banner_image");
createMainIntroTextCard();
createTitlelessInfoCard();
createHomeWideLinkCard("Grid-Tab-1", "Survival Guide", "A website where we host tips, tricks and guidance for those who are attempting the Cyber Discovery programme. All these articles have been written by past participants, most of whom have progressed to the Elite stage themselves.", "cdsurvivalguide_home_card", "https://cdsurvivalguide.netlify.com/", "View");
createHomeWideLinkCard("Grid-Tab-1", "Discord Server", "Join the largest Cyber Discovery Discord server with nearly 750 like-minded people and students who are going through the programme as well as a few SANS Institute staff members who are involved in running the programme!", "home_discord_invite_card", "http://discord.gg/Kf8n5rT", "Join");
createHomeWideLinkCard("Grid-Tab-1", "CyberStart Assess", "The first stage of year 2 is now open! Register now, or alternatively, if you have an existing account you can simply just sign back in here using your details from last year. CyberStart Assess will remain open till the 7th of January 2019.", "home_assess_card_reminder", "https://assess.joincyberdiscovery.com/reg-login", "Go");
createHomeWideLinkCard("Grid-Tab-1", "Medium Blog", "View the official Cyber Discovery medium blog. This is where they post different announcements, challenges, student spotlights, answers, writeups, and much more. You can also download our app which has the medium blog embedded within it!", "medium_blog_main_card_image", "https://medium.com/@CyberDiscUK", "Read");
createLinkCard("Grid-Tab-5", "OverTheWire", "Wargames offered by the OverTheWire community, which can help you to learn and practice security concepts in the form of fun-filled games.", "otw-card-background", "https://overthewire.org/wargames/");
createLinkCard("Grid-Tab-5", "Replit", "A free, powerful and simple online compiler, IDE, interpreter, and REPL. Allows you to Code, compile, and run code in 30+ programming languages.", "replit-card-background", "https://repl.it/languages");
createLinkCard("Grid-Tab-5", "SmashTheStack", "An ethical hacking environment that supports the simulation of real world software vulnerabilities and allows the use of exploitation techniques.", "smashthestack-card-background", "http://smashthestack.org/wargames.html");
createLinkCard("Grid-Tab-5", "Cybrary", "Online cyber-security training which you can learn anytime, anywhere with open-source, high quality training from top professionals and companies.", "cybrary-card-background", "https://www.cybrary.it/");
createLinkCard("Grid-Tab-5", "Udacity", "A vast, comprehensive list of free online courses and Nanodegree programmes which range from mastering web design to business tech.", "udacity-card-background", "https://eu.udacity.com/");
createLinkCard("Grid-Tab-5", "Codewars", "Where programmers achieve code mastery through solving different challenges in different programming languages, with an active community.", "codewars-card-background", "https://www.codewars.com/");
createLinkCard("Grid-Tab-5", "Codecademy", "An online platform that offers free interactive programming lessons in various different programming languages. Great place for Python.", "codecademy-card-background", "https://www.codecademy.com/catalog/subject/all");
createLinkCard("Grid-Tab-5", "Learn RE", "Learn the basics of x86 and get hands-on experience with reverse engineering from scratch. Extremely useful for binary reversing CTFs.", "reeeeeee-card-background", "https://www.begin.re/");
createLinkCard("Grid-Tab-5", "CSC UK", "A series of national competitions & programmes, designed to enable more people to become cyber security professionals.", "cyberchallenge-card-background", "https://www.cybersecuritychallenge.org.uk/");
createLinkCard("Grid-Tab-5", "PicoCTF", "PicoCTF is a high-school CTF where participants must reverse engineer, break, hack and decrypt different challenges.", "picoctf-card-background", "https://picoctf.com/");
createLinkCard("Grid-Tab-5", "Hak5", "Thousands of videos on various infosec topics and news, hosted by the famous members of Hak5: Darren, Shannon and Mubix.", "hak5-card-background", "https://www.youtube.com/user/Hak5Darren/videos");
createLinkCard("Grid-Tab-5", "FutureLearn", "Online courses from top universities and specialist organisations on cyber-security and many other topics at no cost.", "futurelearn-card-background", "https://www.futurelearn.com/courses/categories/tech-and-coding-courses/cyber-security");
createProjectMainCard("Grid-Tab-2", "Cyber Discovery Bot", "The bot for the Cyber Discovery Community Discord Server. It has a variety of important and fun features. For example, it can get the briefing for a CyberStart Assess Level, or fetch an XKCD. Relax, take a load off and join our discord. Invite link in card menu.", "cdbotmain_card_image", "https://github.com/CyberDiscovery/cyberdisc-bot", "https://github.com/login?return_to=%2FCyberDiscovery%2Fcyberdisc-bot", "https://github.com/CyberDiscovery/cyberdisc-bot/issues", "Server Invite", "http://discord.gg/Kf8n5rT", "exit_to_app");
createImageCardMain("Grid-Tab-2", "discord_bot_assess_card_image", "Discuss assess challenges!");
createProjectTextFieldCards("Grid-Tab-2", "Search HIBP", "Our bot can check if you have an account that has been compromised in a data breach, courtesy of Microsoft MVP Troy Hunt's HaveIBeenPwned service. You can try it out here!", "hibp_search_card_image", "Email", checkPwnState);
createProjectTextFieldCards("Grid-Tab-2", "Fetch XKCD", "Our bot can can fetch an XKCD by number or a random one. You can try out the same functionality here, leaving the number-field blank for a random one.", "xkcd_card_fetch_image", "Number", fetchXkcd);
createProjectMainCard("Grid-Tab-2", "Maths Bot", "A Discord Maths Bot written in Python. designed to give problems from the Kings Maths School Seven Day Maths website. This includes the current weekly challenge, as well as a random problem from their archive.", "cdmathsbot_card_image", "https://github.com/CyberDiscovery/Discord-Maths-Bot", "https://github.com/login?return_to=%2FCyberDiscovery%2FDiscord-Maths-Bot", "https://github.com/CyberDiscovery/Discord-Maths-Bot/issues", "Math Challenge", "https://www.kcl.ac.uk/mathsschool/weekly-maths-challenge/weekly-maths-challenge.aspx", "question_answer");
createImageCardMain("Grid-Tab-2", "discord_dwouca_owo_gang_lmao", "Weekly maths challenge!");
createLinkCard("Grid-Tab-2", "API Documentation", "Are you good at Python? Want to program your own bot? Want to help us improve ours, but don't know much of Discord's API? In that case, the developer documentation is a great place to start!", "discord_api_docs_card_image", "https://discordapp.com/developers/docs/intro");
createGitHubContribCard("Grid-Tab-2", "cyberdisc-bot");
createProjectMainCard("Grid-Tab-3", "Android & IOS App", "Never miss a deadline again with the unofficial Cyber Discovery App for Android and iOS. You can get it build from source, get from the play store or sideload a prebuilt release.", "cdapp_main_card_image", "https://github.com/CyberDiscovery/Cyber-Discovery-App", "https://github.com/login?return_to=%2FCyberDiscovery%2FCyber-Discovery-App", "https://github.com/CyberDiscovery/Cyber-Discovery-App/issues", "Latest Release", "https://play.google.com/store/apps/details?id=com.danielmilnes.cyberdiscovery", "arrow_downward");
createImageCardMain("Grid-Tab-3", "App_Screenshot_Card_One", "Event Reminders");
createImageCardMain("Grid-Tab-3", "App_Screenshot_Card_Two", "Menu");
createImageCardMain("Grid-Tab-3", "App_Screenshot_Card_Three", "Timetables");
createImageCardMain("Grid-Tab-3", "App_Screenshot_Card_Four", "Soundboard!");
createImageCardMain("Grid-Tab-3", "App_Screenshot_Card_Five", "Medium Blog");
createLinkCard("Grid-Tab-3", "Flutter Docs", "Looking to get the Community Developer role? Programmed an Android App before? Want to help us create an awesome app for future students? Consider contributing to this project! Start with the Flutter Documentation!", "App_Contrib_Flutter_Docs", "https://flutter.io/docs");
createGitHubContribCard("Grid-Tab-3", "Cyber-Discovery-App");
createProjectMainCard("Grid-Tab-4", "Survival Manual", "We've written quite a few websites relating to the programme, one of these sites is a survival manual, where new students entering the programme can read blog posts and tips on how to prepare for the challenges before a new stage opens.", "cdsurvivalguide_site_card_image", "https://github.com/CyberDiscovery/cdsurvivalguide", "https://github.com/login?return_to=%2FCyberDiscovery%2Fcdsurvivalguide", "https://github.com/CyberDiscovery/cdsurvivalguide/issues", "Visit Guide", "https://cdsurvivalguide.netlify.com/", "chevron_right");
createImageCardMain("Grid-Tab-4", "cd_site_guide_card_image", "Hints and tips!");
createProjectMainCard("Grid-Tab-4", "Challenge Master", "Challenge Master is a website that hosts cyber security based challenges for the Unoffical Cyber Discovery Discord Server. You can create and solve challenges by our community, create wager matches, even gain points for finding security vulnerabilities!", "challenge_master_site_card_image", "https://github.com/CyberDiscovery/Challenge-Master", "https://github.com/login?return_to=%2FCyberDiscovery%2FChallenge-Master", "https://github.com/CyberDiscovery/Challenge-Master/issues", "Solve Challenges", "https://challenge-master.firebaseapp.com/", "list_alt");
createProjectMainCard("Grid-Tab-4", "App Website", "Companion Website for the unofficial Cyber Discovery App. Essentially all the features of the App (Link in menu), but in a web-based form. No downloading required. Cross-platform too (Link in menu as well). Quite cool if you ask me.", "app_website_site_card_image", "https://github.com/CyberDiscovery/Cyber-Discovery-App-Website", "https://github.com/login?return_to=%2FCyberDiscovery%2FCyber-Discovery-App-Website", "https://github.com/CyberDiscovery/Cyber-Discovery-App-Website/issues", "Visit Site", "https://cyber-discovery-app.firebaseapp.com/", "web");
createImageCardMain("Grid-Tab-4", "app_site_alt_card_image", "Event Countdown!");
createLinkCard("Grid-Tab-4", "Alexa Skill", "Do you have an Alexa supported device? We made an Alexa skill which you can try out on your device today! The unofficial Cyber Discovery Buddy helps by giving you start and end dates for stages and by giving you tips for challenges!", "alexa_skill_card_image", "https://amzn.to/2FZ9wSc");
createLinkCard("Grid-Tab-4", "Help us!", "Have you made a responsive and interactive website before? Want to get the Community Developer role or interested in writing a site? Consider helping us improve our sites! Start by viewing the MDL documentation today!", "website_tab_help_us_card_image", "https://getmdl.io/started/index.html");
createGitHubContribCard("Grid-Tab-4", "cdsurvivalguide");
initElement('mdc-list-item', mdc.ripple.MDCRipple.attachTo);
var searchHIBPTextField = oneElementInit('.hibp_text_field_main', mdc.textField.MDCTextField);
window.addEventListener("resize", fixAllTabsCardsVerticalHeight, false);
window.addEventListener("orientationchange", fixAllTabsCardsVerticalHeight, false);
window.onload = fixAllTabsCardsVerticalHeight;
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
  fixAllTabsCardsVerticalHeight();
});
window.mdc.autoInit();
if (screen.width > 839 && screen.width <= 1199) {
  mdcSnackBar.show({message: "This site may not appear correctly, please consider rotating your device.", actionText: "OK", actionHandler: function() {}, timeout: 5000, multiline: true});
} else if (screen.width >= 2560 || screen.height >= 1440) {
  mdcSnackBar.show({message: "This site may not appear correctly on large or high DPI displays. We're working on it, we promise!", actionText: "OK", actionHandler: function() {}, timeout: 5500, multiline: true});
}
