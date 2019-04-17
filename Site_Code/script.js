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
/*
createBannerImageWideCard("Grid-Tab-1", "home_tab_welcome_banner_image");
createMainIntroTextCard();
createTitlelessInfoCard();
createHomeWideLinkCard("Grid-Tab-1", "Survival Guide", "A website where we host tips, tricks, and guidance for those who are attempting the Cyber Discovery programme. All these articles have been written by past participants, most of whom have progressed to the Elite stage themselves.", "cdsurvivalguide_home_card", "https://cdsurvivalguide.netlify.com/", "View");
createHomeWideLinkCard("Grid-Tab-1", "Discord Server", "Join the largest Cyber Discovery Discord server with over 1200+ like-minded people and students who are going through the programme as well as a few SANS Institute staff members who are involved in running the programme!", "home_discord_invite_card", "https://discord.gg/Kf8n5rT", "Join");
createHomeWideLinkCard("Grid-Tab-1", "CyberStart Essentials", "The third stage of year 2 is now open! Jump back into Essentials and its vast theory modules! Alongside Essentials, CyberStart Game will stay open till the 18 of March 2019 and Essentials will be open until the 29th of April 2019.", "home_assess_card_reminder", "https://essentials.joincyberdiscovery.com/", "Go");
createHomeWideLinkCard("Grid-Tab-1", "Medium Blog", "View the official Cyber Discovery Medium blog. This is where they post different announcements, challenges, student spotlights, answers, writeups, and much more. You can also download our app which has the Medium blog embedded within it!", "medium_blog_main_card_image", "https://medium.com/cyber-discovery", "Read");
createLinkCard("Grid-Tab-5", "OverTheWire", "Wargames offered by the OverTheWire community, which can help you to learn and practice security concepts in the form of fun-filled games.", "otw-card-background", "https://overthewire.org/wargames/");
createLinkCard("Grid-Tab-5", "Replit", "A free, powerful, and simple online compiler, IDE, interpreter, and REPL. Allows you to Code, compile, and run code in 30+ programming languages.", "replit-card-background", "https://repl.it/languages");
createLinkCard("Grid-Tab-5", "SmashTheStack", "An ethical hacking environment that supports the simulation of real world software vulnerabilities and allows the use of exploitation techniques.", "smashthestack-card-background", "http://smashthestack.org/wargames.html");
createLinkCard("Grid-Tab-5", "Cybrary", "Online cyber security training which you can learn anytime, anywhere with open-source, high quality training from top professionals and companies.", "cybrary-card-background", "https://www.cybrary.it/");
createLinkCard("Grid-Tab-5", "Udacity", "A vast, comprehensive list of free online courses and Nanodegree programmes which range from mastering web design to business tech.", "udacity-card-background", "https://eu.udacity.com/");
createLinkCard("Grid-Tab-5", "Codewars", "Where programmers achieve code mastery through solving different challenges in different programming languages, with an active community.", "codewars-card-background", "https://www.codewars.com/");
createLinkCard("Grid-Tab-5", "Codecademy", "An online platform that offers free interactive programming lessons in various different programming languages. Great place for Python.", "codecademy-card-background", "https://www.codecademy.com/catalog/subject/all");
createLinkCard("Grid-Tab-5", "Learn RE", "Learn the basics of x86 and get hands-on experience with reverse engineering from scratch. Extremely useful for binary reversing CTFs.", "reeeeeee-card-background", "https://www.begin.re/");
createLinkCard("Grid-Tab-5", "CSC UK", "A series of national competitions & programmes, designed to enable more people to become cyber security professionals.", "cyberchallenge-card-background", "https://www.cybersecuritychallenge.org.uk/");
createLinkCard("Grid-Tab-5", "PicoCTF", "PicoCTF is a high-school CTF where participants must reverse engineer, break, hack and decrypt different challenges.", "picoctf-card-background", "https://picoctf.com/");
createLinkCard("Grid-Tab-5", "Hak5", "Thousands of videos on various infosec topics and news, hosted by the famous members of Hak5: Darren, Shannon and Mubix.", "hak5-card-background", "https://www.youtube.com/user/Hak5Darren/videos");
createLinkCard("Grid-Tab-5", "FutureLearn", "Online courses from top universities and specialist organisations on cyber security and many other topics at no cost.", "futurelearn-card-background", "https://www.futurelearn.com/courses/categories/tech-and-coding-courses/cyber-security");
createProjectMainCard("Grid-Tab-2", "Cyber Discovery Bot", "The bot for the Cyber Discovery Community Discord Server. It has a variety of important and fun features. For example, it can get the briefing for a CyberStart Game Level or fetch an XKCD. Relax, take a load off and join our Discord. Invite link in card menu.", "cdbotmain_card_image", "https://github.com/CyberDiscovery/cyberdisc-bot", "https://github.com/login?return_to=%2FCyberDiscovery%2Fcyberdisc-bot", "https://github.com/CyberDiscovery/cyberdisc-bot/issues", "Server Invite", "http://discord.gg/Kf8n5rT", "exit_to_app");
createImageCardMain("Grid-Tab-2", "discord_bot_assess_card_image", "Discuss Game challenges!");
createProjectTextFieldCards("Grid-Tab-2", "Search HIBP", "Our bot can check if you have an account that has been compromised in a data breach, courtesy of Microsoft MVP Troy Hunt's HaveIBeenPwned service. You can try it out here!", "hibp_search_card_image", "Email", checkPwnState);
createProjectTextFieldCards("Grid-Tab-2", "Fetch XKCD", "Our bot can fetch an XKCD by number or a random one. You can try out the same functionality here, leaving the number-field blank for a random one.", "xkcd_card_fetch_image", "Number", fetchXkcd);
createProjectMainCard("Grid-Tab-2", "Maths Bot", "A Discord Maths Bot written in Python, designed to give problems from the Kings Maths School Seven Day Maths website. This includes the current weekly challenge, as well as a random problem from their archive.", "cdmathsbot_card_image", "https://github.com/CyberDiscovery/Discord-Maths-Bot", "https://github.com/login?return_to=%2FCyberDiscovery%2FDiscord-Maths-Bot", "https://github.com/CyberDiscovery/Discord-Maths-Bot/issues", "Math Challenge", "https://www.kcl.ac.uk/mathsschool/weekly-maths-challenge/weekly-maths-challenge.aspx", "question_answer");
createImageCardMain("Grid-Tab-2", "discord_dwouca_owo_gang_lmao", "Weekly maths challenge!");
createLinkCard("Grid-Tab-2", "API Documentation", "Are you good at Python? Want to program your own bot? Want to help us improve ours, but don't know much of Discord's API? In that case, the discord.py library documentation is a great place to start!", "discord_api_docs_card_image", "https://discordpy.readthedocs.io/en/rewrite/");
createGitHubContribCard("Grid-Tab-2", "cyberdisc-bot");
createProjectMainCard("Grid-Tab-3", "Android & IOS App", "Never miss a deadline again with the unofficial Cyber Discovery App for Android and iOS. You can build it from source, get from the Play Store or sideload a prebuilt release.", "cdapp_main_card_image", "https://github.com/CyberDiscovery/Cyber-Discovery-App", "https://github.com/login?return_to=%2FCyberDiscovery%2FCyber-Discovery-App", "https://github.com/CyberDiscovery/Cyber-Discovery-App/issues", "Latest Release", "https://play.google.com/store/apps/details?id=com.danielmilnes.cyberdiscovery", "arrow_downward");
createImageCardMain("Grid-Tab-3", "App_Screenshot_Card_One", "Event Reminders");
createImageCardMain("Grid-Tab-3", "App_Screenshot_Card_Two", "Menu");
createImageCardMain("Grid-Tab-3", "App_Screenshot_Card_Three", "Timetables");
createImageCardMain("Grid-Tab-3", "App_Screenshot_Card_Four", "Soundboard!");
createImageCardMain("Grid-Tab-3", "App_Screenshot_Card_Five", "Medium Blog");
createLinkCard("Grid-Tab-3", "Flutter Docs", "Looking to get the Community Developer role? Programmed an Android App before? Want to help us create an awesome app for future students? Consider contributing to this project! Start with the Flutter Documentation!", "App_Contrib_Flutter_Docs", "https://flutter.io/docs");
createGitHubContribCard("Grid-Tab-3", "Cyber-Discovery-App");
createProjectMainCard("Grid-Tab-4", "Survival Manual", "We've written quite a few websites relating to the programme, one of these sites is a survival manual, where new students entering the programme can read blog posts and tips on how to prepare for the challenges before a new stage opens.", "cdsurvivalguide_site_card_image", "https://github.com/CyberDiscovery/cdsurvivalguide", "https://github.com/login?return_to=%2FCyberDiscovery%2Fcdsurvivalguide", "https://github.com/CyberDiscovery/cdsurvivalguide/issues", "Visit Guide", "https://cdsurvivalguide.netlify.com/", "chevron_right");
createImageCardMain("Grid-Tab-4", "cd_site_guide_card_image", "Hints and tips!");
createProjectMainCard("Grid-Tab-4", "Challenge Master", "Challenge Master is a website that hosts cyber security-based challenges for the Unofficial Cyber Discovery Discord Server. You can create and solve challenges by our community, create wager matches, even gain points for finding security vulnerabilities!", "challenge_master_site_card_image", "https://github.com/CyberDiscovery/Challenge-Master", "https://github.com/login?return_to=%2FCyberDiscovery%2FChallenge-Master", "https://github.com/CyberDiscovery/Challenge-Master/issues", "Solve Challenges", "https://challenge-master.firebaseapp.com/", "list_alt");
createProjectMainCard("Grid-Tab-4", "App Website", "Companion Website for the unofficial Cyber Discovery App. Essentially all the features of the App (Link in menu), but in a web-based form. No downloading required. Cross-platform too (Link in menu as well). Quite cool if you ask me.", "app_website_site_card_image", "https://github.com/CyberDiscovery/Cyber-Discovery-App-Website", "https://github.com/login?return_to=%2FCyberDiscovery%2FCyber-Discovery-App-Website", "https://github.com/CyberDiscovery/Cyber-Discovery-App-Website/issues", "Visit Site", "https://cyber-discovery-app.firebaseapp.com/", "web");
createImageCardMain("Grid-Tab-4", "app_site_alt_card_image", "Event Countdown!");
createLinkCard("Grid-Tab-4", "Alexa Skill", "Do you have an Alexa supported device? We made an Alexa skill which you can try out on your device today! The unofficial Cyber Discovery Buddy helps by giving you start and end dates for stages and by giving you tips for challenges!", "alexa_skill_card_image", "https://amzn.to/2FZ9wSc");
createLinkCard("Grid-Tab-4", "Help us!", "Have you made a responsive and interactive website before? Want to get the Community Developer role or interested in writing a site? Consider helping us improve our sites! Start by viewing the MDC Web documentation today!", "website_tab_help_us_card_image", "https://material.io/develop/web/");
createGitHubContribCard("Grid-Tab-4", "cdsurvivalguide");
*/
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
