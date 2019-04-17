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
