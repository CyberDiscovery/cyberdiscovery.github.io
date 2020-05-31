import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";
import {MDCSnackbar} from '@material/snackbar';
import {MDCRipple} from '@material/ripple';
import {MDCMenu} from '@material/menu';
import {MDCMenuSurface} from '@material/menu-surface';
import {MDCDataTable} from '@material/data-table';
import {MDCLinearProgress} from '@material/linear-progress';

const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
const topAppBarMenu = new MDCMenu(document.querySelector('#additional-menu'));
const discordURL = "https://discord.cyberdiscoverycommunity.uk";
const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
const selector = '.mdc-button, .mdc-list-item, .mdc-fab';
const copyLinkBtn = document.querySelector('#copy-site-link');
const discordInvBtn = document.querySelector('#join-server-btn');
const additionalMenuBtn = document.querySelector('#additional-menu-btn');
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const listEl = document.querySelector('.mdc-drawer .mdc-list');
const drawerElement = document.querySelector('.mdc-drawer');
const mainContentEl = document.querySelector('.main-content');
const additionalMenuSurface = new MDCMenuSurface(document.querySelector('#additional-menu'));
const pgTopBtn = document.querySelector("#scrollPgTop");
const siteMainTitle = "CD Discord Community | ";
const hideTab = "site-tab-hidden";
const soundboardUrl = "https://cyber-discovery.firebaseio.com/Soundboard/Sounds.json";
const mainSiteContainer = document.querySelector(".main-content");
var currentAudioSource = null;
const dataTableUK = new MDCDataTable(document.querySelector('#event-dates-table-uk'));
const dataTableUS = new MDCDataTable(document.querySelector('#event-dates-table-us'));
const siteCOCRoles = new MDCDataTable(document.querySelector('#site-coc-roles'));
const siteContribList = new MDCList(document.querySelector('#site-contrib-list'));
const siteProgressBar = `<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone" id="progressbar-section">
  <div role="progressbar" class="mdc-linear-progress mdc-linear-progress--indeterminate" aria-label="Soundboard Load Bar" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0">
    <div class="mdc-linear-progress__buffer">
      <div class="mdc-linear-progress__buffer-bar"></div>
      <div class="mdc-linear-progress__buffer-dots"></div>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
  </div>
</div>`;
const initModalDrawer = () => {
  drawerElement.classList.add("mdc-drawer--modal");
  const drawer = MDCDrawer.attachTo(drawerElement);
  drawer.open = false;

  const topAppBar = MDCTopAppBar.attachTo(topAppBarElement);
  topAppBar.setScrollTarget(mainContentEl);
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });

  listEl.addEventListener('click', (event) => {
    drawer.open = false;
  });

  return drawer;
}

const initPermanentDrawer = () => {
  drawerElement.classList.remove("mdc-drawer--modal");
  const list = new MDCList(listEl);
  list.wrapFocus = true;
  return list;
}

let drawer = window.matchMedia("(max-width: 1200px)").matches ?
    initModalDrawer() : initPermanentDrawer();

const resizeHandler = () => {
  if (window.matchMedia("(max-width: 1200px)").matches && drawer instanceof MDCList) {
    drawer.destroy();
    drawer = initModalDrawer();
  } else if (window.matchMedia("(min-width: 1200px)").matches && drawer instanceof MDCDrawer) {
    drawer.destroy();
    drawer = initPermanentDrawer();
  }
}
window.addEventListener('resize', resizeHandler);
topAppBar.setScrollTarget(document.getElementById('main-content'));

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {}

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
  }, function(err) {});
}

function copySiteLinkToClipboard(){
  copyTextToClipboard(window.location.href);
  snackbar.timeoutMs = 4000;
  snackbar.labelText = "Site link copied for sharing!";
  snackbar.open();
}

function openLinkHandler(siteLink){
  const newWindow = window.open(siteLink, '_blank');
  newWindow.opener = null;
  newWindow.location = siteLink;
  newWindow.focus();
}

copyLinkBtn.addEventListener('click', function(event) {
  copySiteLinkToClipboard();
});

function displayNotYetImplemented(){
  snackbar.timeoutMs = 4000;
  snackbar.labelText = "Feature hasn't been implmented yet!";
  snackbar.open();
}

function guidGenerator() {
  var S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
}

function audioHandler(audioUrl){
  if (currentAudioSource != null) {
    currentAudioSource.pause();
  }
  currentAudioSource = new Audio(audioUrl);
  currentAudioSource.play();
}

function doLiterallyNothing(){}

function snowSnackbar(snackbarText, dismissText, dismissFunction, timeoutValue) {
  snackbar.timeoutMs = timeoutValue;
  snackbar.labelText = snackbarText;
  snackbar.actionButtonText = dismissText;
  var btn = document.getElementById("site-snackbar-btn");
  btn.onclick = dismissFunction;
  snackbar.open();
}

function loadSoundboard(){
  loadSoundboard = doLiterallyNothing;
  let placementGrid = document.querySelector("#soundboard-cell-inner");
  placementGrid.innerHTML = siteProgressBar;
  const progressbar = new MDCLinearProgress(document.querySelector('.mdc-linear-progress'));
  fetch(soundboardUrl)
 .then((resp) => resp.json())
 .then(function(data) {
   placementGrid.innerHTML = "";
   delete data["Shenanigans from VC"];
   for (var categoryName in data) {
     placementGrid.innerHTML += `
     <div class="mdc-layout-grid__cell site-top-section-subheader mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
      <h3 class="mdc-list-group__subheader site-category-subheader">${categoryName}</h3>
     </div>`;
     let trackCount = data[categoryName].count;
     for (var i=0; i < trackCount; i++){
       var currentObj = data[categoryName][i];
       var cardID = "track" + guidGenerator();
       var gridCard = `
       <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-2-phone soundboard-card-cell">
         <div class="mdc-card smol-mdc-card mdc-card--outlined">
           <div class="mdc-card__primary-action mdc-typography--subtitle1 unselectable-text soundboard-card-surface" id="${cardID}">
             ${currentObj.name}
           </div>
         </div>
       </div>`;
       placementGrid.innerHTML += gridCard;
       (function(){
         var id = cardID;
         var lnk = currentObj.link;
         setTimeout(function(){
            document.querySelector("#" + id).addEventListener('click', function(evt) {
              audioHandler(lnk);
            });
        },10);
       })();
     }
   }
   const primarySelector = '.mdc-card__primary-action';
   const primaryRipples = [].map.call(document.querySelectorAll(primarySelector), function(el) {
     return new MDCRipple(el);
   });
   //
   let siteExtension = document.createElement('script');
   siteExtension.src = "static/extensions.js";
   document.head.appendChild(siteExtension);
   //
 });
}

const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

const btnRipple = [].map.call(document.querySelectorAll(".mdc-icon-button"), function(el) {
  const ripple = new MDCRipple(el);
  ripple.unbounded = true;
  return ripple;
});

function detectPageBottom(){
  if (mainSiteContainer.scrollHeight - mainSiteContainer.scrollTop - mainSiteContainer.clientHeight < 1) {
    pgTopBtn.classList.remove("mdc-fab--exited");
  } else {
    pgTopBtn.classList.add("mdc-fab--exited");
  }
}

let previousTab = document.querySelector("#site-home-tab");

function changeTab(tabID) {
  switch (tabID) {
    case "opt0":
      document.title = siteMainTitle + "Home";
      previousTab.classList.add(hideTab);
      previousTab = document.querySelector("#site-home-tab");
      previousTab.classList.remove(hideTab);
      break;

    case "opt1":
      document.title = siteMainTitle + "Soundboard";
      previousTab.classList.add(hideTab);
      previousTab = document.querySelector("#site-soundboard-tab");
      previousTab.classList.remove(hideTab);
      loadSoundboard();
      break;

    case "opt2":
      document.title = siteMainTitle + "Notable Events";
      previousTab.classList.add(hideTab);
      previousTab = document.querySelector("#site-dates-tab");
      previousTab.classList.remove(hideTab);
      break;

    case "opt3":
      document.title = siteMainTitle + "Readme";
      previousTab.classList.add(hideTab);
      previousTab = document.querySelector("#site-coc-tab");
      previousTab.classList.remove(hideTab);
      break;

    case "opt4":
      document.title = siteMainTitle + "Resources";
      previousTab.classList.add(hideTab);
      previousTab = document.querySelector("#site-resources-tab");
      previousTab.classList.remove(hideTab);
      break;

    case "opt5":
      document.title = siteMainTitle + "Contributing";
      previousTab.classList.add(hideTab);
      previousTab = document.querySelector("#site-Contributing-tab");
      previousTab.classList.remove(hideTab);
      break;

    case "opt6":
      document.title = siteMainTitle + "Activity Nights";
      previousTab.classList.add(hideTab);
      previousTab = document.querySelector("#site-activity-nights-tab");
      previousTab.classList.remove(hideTab);
      break;

    case "opt7":
      document.title = siteMainTitle + "Server Roles";
      previousTab.classList.add(hideTab);
      previousTab = document.querySelector("#site-roles-tab");
      previousTab.classList.remove(hideTab);
      break;

    case "opt8":
      document.title = siteMainTitle + "Frequently Asked Questions";
      previousTab.classList.add(hideTab);
      previousTab = document.querySelector("#site-faq-tab");
      previousTab.classList.remove(hideTab);
      break;

    case "opt9":
      document.title = siteMainTitle + "Disclaimer";
      previousTab.classList.add(hideTab);
      previousTab = document.querySelector("#site-disclaimer-tab");
      previousTab.classList.remove(hideTab);
      break;

    case "opt10":
      document.title = siteMainTitle + "Site Contributors";
      previousTab.classList.add(hideTab);
      previousTab = document.querySelector("#site-whois-tab");
      previousTab.classList.remove(hideTab);
      break;

    default:
      break;
  }
}

discordInvBtn.addEventListener('click', function(event) {
  openLinkHandler(discordURL);
});
additionalMenuBtn.addEventListener('click', function(event) {topAppBarMenu.open = !topAppBarMenu.open;});
document.querySelector("#switchThemeMenu").addEventListener('click', function(event) {displayNotYetImplemented();});
document.querySelector("#copySiteLnkMenu").addEventListener('click', function(event) {copySiteLinkToClipboard();});
document.querySelector("#discordInvMenu").addEventListener('click', function(event) {openLinkHandler(discordURL);});

document.querySelector("#bot-repo-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/cyberdisc-bot");});
document.querySelector("#bot-star-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/cyberdisc-bot/stargazers");});
document.querySelector("#bot-fork-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/login?return_to=%2FCyberDiscovery%2Fcyberdisc-bot");});
document.querySelector("#bot-issue-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/cyberdisc-bot/issues");});

document.querySelector("#site-repo-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/cyberdiscovery.github.io");});
document.querySelector("#site-star-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/cyberdiscovery.github.io/stargazers");});
document.querySelector("#site-fork-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/login?return_to=%2FCyberDiscovery%2Fcyberdiscovery.github.io");});
document.querySelector("#site-issue-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/cyberdiscovery.github.io/issues");});

document.querySelector("#app-repo-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/Cyber-Discovery-App");});
document.querySelector("#app-star-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/Cyber-Discovery-App/stargazers");});
document.querySelector("#app-fork-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/login?return_to=%2FCyberDiscovery%2FCyber-Discovery-App");});
document.querySelector("#app-issue-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/Cyber-Discovery-App/issues");});

document.querySelector("#math-repo-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/Discord-Maths-Bot");});
document.querySelector("#math-star-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/discord-maths-bot/stargazers");});
document.querySelector("#math-fork-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/login?return_to=%2FCyberDiscovery%2Fdiscord-maths-bot");});
document.querySelector("#math-issue-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/Discord-Maths-Bot/issues");});

document.querySelector("#elect-repo-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/elections-bot");});
document.querySelector("#elect-star-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/elections-bot/stargazers");});
document.querySelector("#elect-fork-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/login?return_to=%2FCyberDiscovery%2Felections-bot");});
document.querySelector("#elect-issue-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/elections-bot/issues");});

document.querySelector("#rich-repo-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/cd-rich-presence");});
document.querySelector("#rich-star-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/cd-rich-presence/stargazers");});
document.querySelector("#rich-fork-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/login?return_to=%2FCyberDiscovery%2Fcd-rich-presence");});
document.querySelector("#rich-issue-btn").addEventListener('click', function(event) {openLinkHandler("https://github.com/CyberDiscovery/cd-rich-presence/issues");});

document.querySelector("#aboutPageMenu").addEventListener('click', function(event) {changeTab("opt10");});
document.querySelector("#eo-gh-page").addEventListener('click', function(event) {openLinkHandler("https://github.com/eohomegrownapps");});
document.querySelector("#ana-gh-page").addEventListener('click', function(event) {openLinkHandler("https://github.com/lightspeedana/");});
document.querySelector("#pica-gh-page").addEventListener('click', function(event) {openLinkHandler("https://github.com/picapi");});
document.querySelector("#butters-gh-page").addEventListener('click', function(event) {openLinkHandler("https://github.com/bottersnike");});
document.querySelector("#beano-gh-page").addEventListener('click', function(event) {openLinkHandler("https://github.com/thebeanogamer");});
document.querySelector("#segway-gh-page").addEventListener('click', function(event) {openLinkHandler("https://github.com/fractalpenguin");});
document.querySelector("#bac-gh-page").addEventListener('click', function(event) {openLinkHandler("https://github.com/ZomBMage");});
document.querySelector("#linucks-gh-page").addEventListener('click', function(event) {openLinkHandler("https://github.com/sh3llcod3");});

pgTopBtn.addEventListener('click', function(event) {mainSiteContainer.scrollTo({top: 0, behavior: 'smooth'});});
mainSiteContainer.addEventListener("scroll", detectPageBottom);

drawer.listen('click', function(event) {changeTab(event.target.id)}, false);
